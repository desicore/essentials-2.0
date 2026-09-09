import path from 'node:path';
import fs from 'node:fs/promises';
import { cli, readReferences, httpUrl, downloadImage, writeAtomic, fail } from './shared.mjs';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const sourceName = source => ({ mobbin: 'Mobbin', refero: 'Refero', documentation: 'Official documentation', unknown: 'Unknown source' })[source];

async function main() {
  const args = cli('Usage: node inspiration/scripts/build-report.mjs <references.json> [--out report.html] [--embed]', {
    out: { type: 'string' }, embed: { type: 'boolean', default: false }, assets: { type: 'string' },
  });
  const data = await readReferences(args.input);
  const out = args.out ?? path.join(path.dirname(args.input), 'report.html');
  const sections = data.questions.map(question => ({ ...question, references: [] }));
  const questionMap = new Map(sections.map(section => [section.id, section]));
  const unassigned = { id: 'Unassigned', title: 'References needing a question', answer: '', references: [] };
  for (const ref of data.references) {
    const section = questionMap.get(ref.question);
    if (!section) console.error(`Warning: ${ref.id}: question ${JSON.stringify(ref.question)} does not exist; shown under Unassigned.`);
    (section ?? unassigned).references.push(ref);
  }
  if (unassigned.references.length) sections.push(unassigned);

  const embedded = new Map();
  if (args.embed) {
    // Optional --assets <manifest.json> (from fetch-assets.mjs): embed from local files first, download only as fallback.
    let manifest = {}; let assetsDir = '';
    if (args.assets) { manifest = JSON.parse(await fs.readFile(args.assets, 'utf8')); assetsDir = path.dirname(args.assets); }
    const mimeByExt = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif' };
    const failures = [];
    for (const ref of data.references) {
      for (const [index, url] of ref.images.entries()) {
        if (embedded.has(url)) continue;
        const local = manifest[ref.id]?.[index];
        try {
          if (local) {
            const file = path.join(assetsDir, local);
            const buffer = await fs.readFile(file);
            const mime = mimeByExt[path.extname(file).toLowerCase()] ?? 'image/png';
            embedded.set(url, `data:${mime};base64,${buffer.toString('base64')}`);
          } else {
            throw new Error('No local asset: unavailable evidence is disclosed, never silently hotlinked.');
          }
        } catch (error) {
          failures.push(`${ref.id}#${index}: ${error.message}`);
        }
      }
    }
    if (failures.length) console.error(`Embed: ${failures.length} image(s) unavailable:\n  ${failures.join('\n  ')}`);
  }

  function card(ref) {
    const images = ref.images;
    const url = httpUrl(ref.url);
    return `<article class="card" id="${escape(ref.id)}" data-source="${escape(ref.source)}" data-evidence="${escape(ref.evidenceType || ref.evidence_type || '')}" data-selected="${ref.selected}" data-search="${escape(`${ref.app} ${ref.title} ${ref.take} ${ref.observed || ref.observed_behavior || ''} ${ref.actor || ''} ${ref.limitation || ''}`.toLowerCase())}">
      <div class="card-body">
        <div class="meta"><strong>${escape(ref.app)}</strong><span class="badge">${sourceName(ref.source)}</span><span>${ref.source === 'documentation' ? (ref.images.length ? 'documentation illustrations' : 'text documentation') : ref.kind}</span>${ref.selected ? '<span class="selected">✓ Selected</span>' : ''}</div>
        <h3>${escape(ref.title)}</h3>
        ${ref.counter_example ? '<span class="badge counter">Counter-example</span>' : ''}
        <p class="take">${escape(ref.take || 'No take added yet.')}</p>
        <div class="evidence-meta"><span class="badge">${escape(ref.evidenceType || ref.evidence_type || 'Evidence type unspecified')}</span><p><strong>Actor:</strong> ${escape(Array.isArray(ref.actor) ? ref.actor.join(', ') : (ref.actor || 'Not recorded'))}</p></div>
        <dl class="reasoning">${[['Observed / documented', ref.observed || ref.observed_behavior], ['Possible adaptation', ref.adaptation || ref.learningSpaceAdaptation || ref.proposed_adaptation], ['Limitation / mismatch', ref.limitation || ref.limitations], ['Entry → decision → response → completion', ref.journey ? Object.entries(ref.journey).map(([k,v]) => k + ': ' + v).join(' · ') : '']].filter(([,v]) => v).map(([k,v]) => `<dt>${escape(k)}</dt><dd>${escape(Array.isArray(v) ? v.join(' ') : v)}</dd>`).join('')}</dl>
        <p class="muted provenance">ID ${escape(ref.id)} · Accessed ${escape(ref.accessedAt || ref.access_date || '2026-09-08')}${ref.reuseRationale || ref.deduplication ? ' · ' + escape(ref.reuseRationale || ref.deduplication) : ''}</p>
        ${url ? `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">View source ↗</a>` : '<span class="muted">No source link</span>'}
      </div>
      <div class="images ${ref.kind}" aria-label="${ref.kind === 'flow' ? 'Flow steps in order; scroll horizontally' : 'Screen preview'}">
        ${images.length ? images.map((image, index) => {
          const src = embedded.get(image) ?? (args.embed ? '' : httpUrl(image));
          const step = ref.steps?.[index];
          const label = step?.label || step?.title || (typeof step === 'string' ? step : '') || `Step ${index + 1}`;
          const alt = `${ref.app} — ${ref.title}, ${label}`;
          return `<figure>${src ? `<button type="button" class="preview" aria-label="Open full-size: ${escape(alt)}"><img src="${escape(src)}" alt="${escape(alt)}" width="320" height="240" loading="lazy"></button>` : '<p class="missing">Asset unavailable — source evidence retained; this step is not illustrated.</p>'}<figcaption>${ref.source === 'documentation' ? 'Illustration' : 'Step'} ${index + 1} of ${images.length} · ${escape(label)}${step?.id ? ' · ID ' + escape(step.id) : ''}${step?.source_step_index != null ? ' · Source illustration index ' + step.source_step_index : ''}${step?.evidence ? ' · ' + escape(step.evidence) : ''} · ${src ? 'Click to enlarge' : 'Unavailable'}</figcaption></figure>`;
        }).join('') : `<div class="missing documentation"><strong>${ref.source === 'documentation' ? 'Documentation evidence — no product screenshot' : 'No usable product screenshot collected'}</strong><p>${escape(ref.assetNote || ref.asset_gap || 'Use the source link for the full evidence. No unseen product screens or flow steps are implied.')}</p></div>`}
      </div>
    </article>`;
  }

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(data.title)}</title>
<style>
  :root{color-scheme:light dark;--bg:#f6f6f6;--surface:#fff;--text:#202020;--muted:#646464;--border:#d6d6d6;--subtle:#ededed;--red:#a91c25;--red-bg:#ffeded;--focus:#2167bb;font:15px/1.5 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
  @media(prefers-color-scheme:dark){:root{--bg:#171717;--surface:#222;--text:#efefef;--muted:#b3b3b3;--border:#494949;--subtle:#303030;--red:#ff9da5;--red-bg:#431c22;--focus:#8abcff}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text)}main{max-width:1560px;margin:auto;padding:36px 28px 64px}h1{font-size:clamp(26px,4vw,38px);line-height:1.15;margin:8px 0 16px;letter-spacing:-.025em}h2{font-size:20px;line-height:1.4;margin:0;max-width:1000px}h3{font-size:18px;line-height:1.35;margin:14px 0 10px}p{margin:12px 0}a{color:inherit;text-underline-offset:3px}button,input,select{font:inherit;color:inherit}button,select,input[type=search]{background:var(--surface);border:1px solid var(--border);border-radius:6px;min-height:40px;padding:7px 10px}button,select,label{cursor:pointer}input[type=search]{width:min(100%,320px)}input[type=checkbox]{accent-color:var(--text);width:17px;height:17px} :focus-visible{outline:3px solid var(--focus);outline-offset:3px}.eyebrow,.muted,.count,figcaption{color:var(--muted)}.eyebrow{font-size:12px;letter-spacing:.09em;text-transform:uppercase}.intro{max-width:850px}.toolbar{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:16px;margin:28px 0 12px}.controls{display:flex;align-items:end;gap:18px;flex-wrap:wrap}.controls label{display:flex;gap:8px;align-items:center;min-height:40px}.controls .field{display:grid;gap:4px;font-size:13px}.questions{margin:14px 0 0;padding:8px 0 0;border:0;border-top:1px solid var(--border)}legend{padding:0 8px 0 0;font-size:13px;color:var(--muted)}.question-options{display:flex;gap:8px 20px;flex-wrap:wrap}.question-options label{display:flex;align-items:center;gap:6px;min-height:36px}.status{font-size:13px;color:var(--muted)}.question-section{margin-top:38px}.section-heading{display:flex;gap:14px;align-items:baseline}.question-id{font-size:13px;color:var(--muted);white-space:nowrap}.answer{max-width:950px;white-space:pre-wrap}.count{font-size:13px;margin:10px 0 16px}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),360px));gap:20px;align-items:stretch}.card{min-width:0;display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:8px;overflow:hidden;overflow-wrap:anywhere}.card-body{padding:18px;flex:1 1 auto;min-height:320px}.meta{display:flex;gap:7px;align-items:center;flex-wrap:wrap;font-size:12px;color:var(--muted)}.meta strong{font-size:14px;color:var(--text);margin-right:auto}.badge{font-size:11px;border:1px solid var(--border);border-radius:4px;padding:2px 6px}.counter{display:inline-block;color:var(--red);background:var(--red-bg);border-color:var(--red)}.selected{font-size:11px}.take{white-space:pre-wrap}.card a{font-size:13px}.images{display:flex;margin-top:auto;min-height:296px;align-items:flex-start;overflow-x:auto;gap:12px;padding:0 18px 16px;scroll-snap-type:x proximity;overscroll-behavior-x:contain}.images figure{margin:0;flex:0 0 100%;min-width:0;scroll-snap-align:center}.flow figure{flex-basis:92%}.preview{display:block;width:100%;height:240px;padding:0;border-radius:4px;overflow:hidden;cursor:zoom-in;background:var(--subtle)}.preview img{display:block;width:100%;height:100%;object-fit:contain}figcaption{font-size:11px;margin-top:7px}.missing{min-height:120px;display:grid;place-items:center;color:var(--muted);padding:16px;text-align:center}.empty{color:var(--muted);font-size:14px;border-left:2px solid var(--border);padding-left:14px}[hidden]{display:none!important}dialog{max-width:96vw;max-height:94vh;width:max-content;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--text);padding:16px;overscroll-behavior:contain}dialog::backdrop{background:rgb(0 0 0 / .78)}.lightbox-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:12px}.lightbox-bar p{margin:0;max-width:70ch;font-size:13px}.full-image{overflow:auto;max-width:calc(96vw - 34px);max-height:calc(94vh - 100px)}.full-image img{display:block;max-width:none;height:auto}body:has(dialog[open]){overflow:hidden}@media(max-width:520px){main{padding:24px 16px 40px}.controls{gap:12px}.controls .field:first-child{width:100%}input[type=search]{width:100%}.section-heading{display:block}.grid{grid-template-columns:minmax(0,1fr)}}
.grid{grid-template-columns:minmax(0,1fr)}.card-body{min-height:0}.images{min-height:0;margin-top:0;padding-top:12px}.images figure,.flow figure{flex:0 0 min(520px,85vw)}.preview{height:350px}.card{border-left:4px solid #A8DAFF}.card:has(.counter){border-left-color:var(--red)}.reasoning{font-size:14px;display:grid;grid-template-columns:190px minmax(0,1fr);gap:6px 18px;max-width:1150px}.reasoning dt{font-weight:600}.reasoning dd{margin:0}.evidence-meta p{font-size:13px}.provenance{font-size:12px}.documentation{display:block;width:100%;min-height:110px;text-align:left;background:var(--subtle);border-radius:4px}.documentation p{margin-bottom:0}.synthesis{margin-top:48px;padding:24px;background:var(--surface);border:1px solid var(--border)}.open-questions{margin:12px 0;max-width:1000px}.open-questions summary{cursor:pointer}@media(max-width:700px){.reasoning{display:block}.reasoning dt{margin-top:10px}.preview{height:280px}}
</style></head>
<body><main>
  <header><div class="eyebrow">Essentials 2.0 · Design research${data.module ? ` · ${escape(data.module)}` : ''}</div><h1>${escape(data.title)}</h1><p class="intro${data.intro ? '' : ' muted'}">${escape(data.intro || 'Add an intro paragraph in the JSON’s optional “intro” field to frame this collection.')}</p></header>
  <form class="toolbar" aria-label="Filter references">
    <div class="controls">
      <label class="field">Search references<input id="search" type="search" placeholder="App, title, or take…" autocomplete="off"></label>
      <label class="field">Source<select id="source"><option value="all">All sources</option><option value="mobbin">Mobbin</option><option value="refero">Refero</option><option value="documentation">Official documentation</option>${data.references.some(ref => ref.source === 'unknown') ? '<option value="unknown">Unknown source</option>' : ''}</select></label>
      <label class="field">Evidence<select id="evidence"><option value="all">All evidence</option><option value="direct pattern">Direct pattern</option><option value="analogy">Analogy</option><option value="documentation">Documentation</option></select></label>
      <label><input id="selected" type="checkbox">Selected only</label><button type="reset">Reset filters</button>
    </div>
    <fieldset class="questions"><legend>Questions</legend><div class="question-options">${sections.map((section, index) => `<label title="${escape(section.title)}"><input type="checkbox" name="question" value="${index}" checked aria-label="${escape(`${section.id}: ${section.title}`)}">${escape(section.id)}</label>`).join('')}</div></fieldset>
  </form>
  <p id="status" class="status" role="status" aria-live="polite"></p><p id="no-results" hidden>No references match these filters. Try another search or reset the filters.</p>
  <noscript><p>Enable JavaScript for filters and full-size previews. All references appear below.</p></noscript>
  ${sections.map((section, index) => `<section class="question-section" data-question="${index}" aria-labelledby="question-${index}"><div class="section-heading"><span class="question-id">${escape(section.id)}</span><h2 id="question-${index}">${escape(section.title).replace(/\*([^*]+)\*/g, '<em>$1</em>')}</h2></div>${section.answer ? `<p class="answer"><strong>Section synthesis.</strong> ${escape(section.answer)}</p>` : ''}${section.openQuestions?.length ? `<details class="open-questions"><summary>Open questions (${section.openQuestions.length})</summary><ul>${section.openQuestions.map(q => `<li>${escape(q)}</li>`).join('')}</ul></details>` : ''}<p class="count">${section.references.length} references</p><div class="grid">${section.references.map(card).join('')}</div><p class="empty"${section.references.length ? ' hidden' : ''}>No references yet for this question.</p></section>`).join('')}
<section class="synthesis"><h2>Decisions and evidence gaps</h2><p><strong>Ownership hypothesis to validate:</strong> university identity infrastructure supplies institutional identity and sign-in; Canvas supplies relevant course memberships and roles; LearningSpace controls its local access rules, guests and product-specific information.</p><p>Authentication, provisioning, authorization and course membership are separate responsibilities. LDAP is a directory protocol. CSV is a snapshot. Neither SSO nor a directory connection alone establishes the complete account lifecycle or course access.</p><h3>Priority questions for university IT</h3><ol>${(data.priorityITQuestions || []).map(q => `<li>${escape(q)}</li>`).join('')}</ol><h3>Evidence gaps</h3><ul>${(data.gaps || []).map(g => `<li>${escape(g)}</li>`).join('')}</ul><p><a href="https://www.figma.com/board/tN2AM7RZD2InF1LYnN0zcn/Essentials-2.0---Inspiration?node-id=5-422">Open destination Page 2 ↗</a></p></section>
</main>
<dialog id="lightbox" aria-labelledby="lightbox-caption"><div class="lightbox-bar"><p id="lightbox-caption"></p><button id="close-lightbox" type="button" autofocus>Close</button></div><div class="full-image"><img id="full-image" alt=""></div></dialog>
<script>
  const form = document.querySelector('form');
  const search = document.querySelector('#search');
  const source = document.querySelector('#source');
  const selected = document.querySelector('#selected');
  const evidence = document.querySelector('#evidence');
  const sections = [...document.querySelectorAll('.question-section')];
  const total = document.querySelectorAll('.card').length;
  function filter() {
    const enabled = new Set([...form.querySelectorAll('[name=question]:checked')].map(input => input.value));
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    for (const section of sections) {
      section.hidden = !enabled.has(section.dataset.question);
      const cards = [...section.querySelectorAll('.card')];
      let count = 0;
      for (const card of cards) {
        card.hidden = section.hidden || (selected.checked && card.dataset.selected !== 'true') || (source.value !== 'all' && card.dataset.source !== source.value) || (evidence.value !== 'all' && card.dataset.evidence !== evidence.value) || !card.dataset.search.includes(query);
        if (!card.hidden) count++;
      }
      visible += count;
      section.querySelector('.count').textContent = count + ' of ' + cards.length + ' references';
      const empty = section.querySelector('.empty');
      empty.hidden = count > 0;
      empty.textContent = cards.length ? 'No references match these filters.' : 'No references yet for this question.';
    }
    document.querySelector('#status').textContent = visible + ' of ' + total + ' references shown';
    document.querySelector('#no-results').hidden = visible > 0;
  }
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('input', filter);
  form.addEventListener('change', filter);
  form.addEventListener('reset', () => setTimeout(filter, 0));
  filter();
  const lightbox = document.querySelector('#lightbox');
  const fullImage = document.querySelector('#full-image');
  document.querySelectorAll('.preview').forEach(button => {
    const image = button.querySelector('img');
    function unavailable() {
      button.disabled = true;
      button.closest('figure').querySelector('figcaption').textContent = 'Image unavailable · check its URL and rebuild';
    }
    image.addEventListener('error', unavailable);
    if (image.complete && !image.naturalWidth) unavailable();
    button.addEventListener('click', () => {
      fullImage.src = image.src;
      fullImage.alt = image.alt;
      document.querySelector('#lightbox-caption').textContent = image.alt + ' · Original size; scroll to explore';
      lightbox.showModal();
      const viewport = lightbox.querySelector('.full-image');
      viewport.scrollTo(0, 0);
    });
  });
  document.querySelector('#close-lightbox').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    const box = lightbox.getBoundingClientRect();
    if (event.target === lightbox && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) lightbox.close();
  });
  lightbox.addEventListener('close', () => fullImage.removeAttribute('src'));
</script></body></html>`;
  await writeAtomic(out, html);
  console.log(`Report: ${out} (${data.references.length} references; ${args.embed ? `${embedded.size} unique images embedded` : 'images hotlinked'})`);
}
main().catch(fail);
