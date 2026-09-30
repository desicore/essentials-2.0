// Product-first flow gallery: work/module.json + raw/*.json + notes/*.json + assets/ -> one offline HTML. Contract: ../gallery-schema.md
import path from 'node:path';
import fs from 'node:fs/promises';
import { cli, string, safeId, httpUrl, existingAsset, writeAtomic, fail } from './shared.mjs';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const list = value => Array.isArray(value) ? value.map(item => string(item)).filter(Boolean) : [];
const readJson = async file => JSON.parse(await fs.readFile(file, 'utf8'));
const ANALOG = { direct: 'Close match', adjacent: 'Same task, different field', wildcard: 'Outside idea' };
const HOW_TO_READ = 'Each section below is one product. Each strip of screenshots is one flow: a real sequence of screens, in the order a user sees them. Click a screenshot to enlarge it. "Worth borrowing" lists ideas we could use, and "Avoid" lists what we should not copy. Use the task filters to see only one task, and click ☆ on a flow to add it to your own shortlist.';
const PLATFORM = { web: 'Web', ios: 'iOS', ipad: 'iPad', android: 'Android' };
const SOURCE = { mobbin: 'Mobbin', refero: 'Refero', unknown: 'Other' };
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.avif': 'image/avif' };

async function load(work) {
  const mod = await readJson(path.join(work, 'module.json'));
  const jobs = (mod.jobs ?? []).map((job, i) => ({ id: string(job?.id) || `job-${i + 1}`, title: string(job?.title) || string(job?.id), description: string(job?.description) }));
  const products = (mod.products ?? []).map((p, i) => ({
    id: string(p?.id) || `product-${i + 1}`, name: string(p?.name) || 'Unknown product',
    analog: ANALOG[p?.analog] ? p.analog : 'adjacent', why: string(p?.why), flows: list(p?.flows),
  }));
  const synthesis = { patterns: (mod.synthesis?.patterns ?? []).map(p => ({ title: string(p?.title), body: string(p?.body), flows: list(p?.flows) })), open_questions: list(mod.synthesis?.open_questions) };

  const candidates = new Map();
  const rawDir = path.join(work, 'raw');
  for (const file of (await fs.readdir(rawDir).catch(() => [])).filter(f => f.endsWith('.json')).sort()) {
    const data = await readJson(path.join(rawDir, file));
    for (const ref of data.references ?? []) {
      const id = string(ref?.id).trim();
      if (!id || candidates.has(id)) continue;
      candidates.set(id, {
        id, file, source: SOURCE[ref.source] ? ref.source : 'unknown', app: string(ref.app) || 'Unknown app', title: string(ref.title) || 'Untitled flow',
        kind: ref.kind === 'flow' ? 'flow' : 'screen', url: httpUrl(string(ref.url)), images: list(ref.images),
        platform: PLATFORM[ref.platform] ? ref.platform : 'web', jobs: list(ref.jobs), take: string(ref.take),
      });
    }
  }

  const notes = new Map();
  const notesDir = path.join(work, 'notes');
  for (const file of (await fs.readdir(notesDir).catch(() => [])).filter(f => f.endsWith('.json'))) {
    const data = await readJson(path.join(notesDir, file));
    for (const [id, n] of Object.entries(data.flows ?? {})) notes.set(id, {
      summary: string(n?.summary), steps: list(n?.steps), steal: list(n?.steal), avoid: list(n?.avoid), fit: string(n?.fit),
      jobs: Array.isArray(n?.jobs) ? list(n.jobs) : null, counter_example: n?.counter_example === true,
    });
  }
  const range = (value, fallback) => Array.isArray(value) && value.length === 2 && value.every(Number.isInteger) ? value : fallback;
  const targets = { products: range(mod.targets?.products, [8, 12]), flows: range(mod.targets?.flows, [15, 25]) };
  return { module: string(mod.module) || path.basename(path.dirname(path.resolve(work))), title: string(mod.title) || 'Flow inspiration', intro: string(mod.intro), baseline: string(mod.baseline), targets, jobs, products, synthesis, candidates, notes };
}

async function localImages(work, candidate) {
  const dir = path.join(work, 'assets', safeId(candidate.id));
  return Promise.all(candidate.images.map((_, index) => existingAsset(dir, index)));
}

function flowJobs(candidate, note) { return note?.jobs ?? candidate.jobs; }

async function check(work, data) {
  const errors = [], warnings = [];
  const jobIds = new Set(data.jobs.map(j => j.id));
  const used = new Set();
  const coverage = new Map(data.jobs.map(j => [j.id, { flows: 0, products: new Set() }]));
  let flowCount = 0, stepCount = 0;
  if (!data.jobs.length) errors.push('module.json has no jobs.');
  for (const product of data.products) {
    if (!product.flows.length) errors.push(`${product.id}: no flows.`);
    for (const id of product.flows) {
      const c = data.candidates.get(id);
      if (!c) { errors.push(`${product.id}: flow ${id} is not in raw/*.json.`); continue; }
      if (used.has(id)) errors.push(`${id} appears in more than one product.`);
      used.add(id); flowCount++; stepCount += c.images.length;
      if (!c.images.length) errors.push(`${id}: no images.`);
      const missing = (await localImages(work, c)).map((f, i) => f ? null : i).filter(i => i !== null);
      if (missing.length) errors.push(`${id}: step image(s) ${missing.join(',')} not downloaded (run fetch-assets.mjs on ${c.file}).`);
      const note = data.notes.get(id);
      if (!note) errors.push(`${id} (${product.id}): no notes/<product>.json entry.`);
      else if (note.steps.length && note.steps.length !== c.images.length) warnings.push(`${id}: ${note.steps.length} step labels for ${c.images.length} images.`);
      const jobs = flowJobs(c, note);
      if (!jobs.length) warnings.push(`${id}: no jobs tagged.`);
      for (const job of jobs) {
        if (!jobIds.has(job)) { errors.push(`${id}: unknown job "${job}".`); continue; }
        coverage.get(job).flows++; coverage.get(job).products.add(product.id);
      }
    }
  }
  for (const p of data.synthesis.patterns) for (const id of p.flows) if (!used.has(id)) errors.push(`synthesis "${p.title}": flow ${id} is not in any product.`);
  const products = data.products.length, [pMin, pMax] = data.targets.products, [fMin, fMax] = data.targets.flows;
  if (products < pMin || products > pMax) warnings.push(`${products} products (target ${pMin}–${pMax}).`);
  if (flowCount < fMin || flowCount > fMax) warnings.push(`${flowCount} flows (target ${fMin}–${fMax}).`);
  for (const [job, c] of coverage) if (c.products.size < 2) warnings.push(`job "${job}": ${c.flows} flow(s) from ${c.products.size} product(s) (target ≥2 products).`);
  if (!data.synthesis.patterns.length) warnings.push('synthesis.patterns is empty.');
  console.log(`Products ${products} · flows ${flowCount} · steps ${stepCount} · candidates ${data.candidates.size} (${data.candidates.size - used.size} unused)`);
  console.log('Coverage: ' + [...coverage].map(([job, c]) => `${job}=${c.flows}/${c.products.size}p`).join('  '));
  for (const w of warnings) console.log(`warn  ${w}`);
  for (const e of errors) console.log(`ERROR ${e}`);
  return errors.length;
}

async function listCandidates(work, data) {
  const byApp = new Map();
  for (const c of data.candidates.values()) (byApp.get(c.app) ?? byApp.set(c.app, []).get(c.app)).push(c);
  for (const [app, items] of [...byApp].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`## ${app} (${items.length})`);
    for (const c of items) {
      const have = (await localImages(work, c)).filter(Boolean).length;
      console.log(`${c.id} | ${c.platform} ${c.kind} ${have}/${c.images.length} | ${c.jobs.join(',')} | ${c.title} | ${c.take.slice(0, 110)}`);
    }
  }
}

async function embedder(work, optimize) {
  let sharp = null;
  if (optimize) {
    try { sharp = (await import('sharp')).default; }
    catch { console.error('sharp not installed (npm install in userflow-patterns--user-mgmt/); embedding originals.'); }
  }
  return async (candidate, index, file) => {
    if (sharp) {
      const out = path.join(work, 'assets-opt', safeId(candidate.id), `${index}.webp`);
      const cached = await fs.stat(out).then(s => s.size > 0).catch(() => false);
      if (!cached) {
        await fs.mkdir(path.dirname(out), { recursive: true });
        await sharp(file, { animated: false }).resize({ width: 1280, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
      }
      return `data:image/webp;base64,${(await fs.readFile(out)).toString('base64')}`;
    }
    return `data:${MIME[path.extname(file).toLowerCase()] ?? 'image/png'};base64,${(await fs.readFile(file)).toString('base64')}`;
  };
}

async function build(work, data, out, optimize) {
  const embed = await embedder(work, optimize);
  const jobTitle = new Map(data.jobs.map(j => [j.id, j.title]));
  const anchor = id => `flow-${safeId(id).replace(/%/g, '_')}`;
  const flows = [];
  let images = 0;
  for (const product of data.products) {
    product.cards = [];
    for (const id of product.flows) {
      const c = data.candidates.get(id);
      if (!c) continue;
      const note = data.notes.get(id) ?? { summary: '', steps: [], steal: [], avoid: [], fit: '', jobs: null, counter_example: false };
      const files = await localImages(work, c);
      const srcs = [];
      for (const [index, file] of files.entries()) { srcs.push(file ? await embed(c, index, file) : ''); if (file) images++; }
      const flow = { ...c, note, jobs: flowJobs(c, note), srcs, product, anchor: anchor(id) };
      product.cards.push(flow); flows.push(flow);
    }
  }

  const chips = jobs => jobs.map(j => `<span class="chip">${escape(jobTitle.get(j) ?? j)}</span>`).join('');
  const bullets = (items, cls) => items.length ? `<ul class="${cls}">${items.map(i => `<li>${escape(i)}</li>`).join('')}</ul>` : '';
  const card = flow => {
    const n = flow.note, total = flow.srcs.length;
    const search = [flow.product.name, flow.app, flow.title, flow.take, n.summary, n.fit, ...n.steal, ...n.avoid, ...n.steps, ...flow.jobs.map(j => jobTitle.get(j) ?? j)].join(' ').toLowerCase();
    return `<article class="flow" id="${flow.anchor}" data-id="${escape(flow.id)}" data-jobs="${escape(flow.jobs.join(' '))}" data-platform="${flow.platform}" data-source="${flow.source}" data-kind="${flow.kind}" data-search="${escape(search)}">
      <div class="flow-text">
        <div class="meta"><span class="badge">${PLATFORM[flow.platform]}</span><span class="badge">${SOURCE[flow.source]}</span><span>${flow.kind === 'flow' ? `${total} steps` : 'Single screen'}</span>${n.counter_example ? '<span class="badge counter">Example of what not to do</span>' : ''}<button type="button" class="star" aria-pressed="false" title="Add to shortlist">☆</button></div>
        <h3>${escape(flow.title)}</h3>
        <p class="summary">${escape(n.summary || flow.take || 'No summary yet.')}</p>
        <div class="chips">${chips(flow.jobs)}</div>
        ${n.steal.length ? `<p class="label">Worth borrowing</p>${bullets(n.steal, 'steal')}` : ''}
        ${n.avoid.length ? `<p class="label">Avoid</p>${bullets(n.avoid, 'avoid')}` : ''}
        ${n.fit ? `<p class="fit"><span class="label">What it means for Essentials</span> ${escape(n.fit)}</p>` : ''}
        ${flow.url ? `<a href="${escape(flow.url)}" target="_blank" rel="noopener noreferrer">View on ${SOURCE[flow.source]} ↗</a>` : ''}
      </div>
      <div class="strip ${flow.platform === 'web' ? 'wide' : 'tall'}" aria-label="Flow steps in order; scroll horizontally">
        ${flow.srcs.map((src, i) => {
          const label = n.steps[i] || `Step ${i + 1}`;
          const alt = `${flow.product.name} — ${flow.title}, step ${i + 1} of ${total}: ${label}`;
          return `<figure>${src ? `<button type="button" class="preview" data-step="${i}" aria-label="Open full-size: ${escape(alt)}"><img src="${src}" alt="${escape(alt)}" loading="lazy"></button>` : '<p class="missing">Image missing</p>'}<figcaption><b>${i + 1}</b> ${escape(label)}</figcaption></figure>`;
        }).join('')}
      </div>
    </article>`;
  };

  const matrix = `<div class="matrix-wrap"><table class="matrix"><thead><tr><th scope="col">Product</th>${data.jobs.map(j => {
    const count = flows.filter(f => f.jobs.includes(j.id)).length;
    return `<th scope="col" class="${count ? '' : 'gap'}" title="${escape(j.description || j.title)}">${escape(j.title)}<span class="count">${count} flow${count === 1 ? '' : 's'}</span></th>`;
  }).join('')}</tr></thead><tbody>${data.products.map(p => `<tr><th scope="row"><a href="#product-${escape(p.id)}">${escape(p.name)}</a><span class="count">${ANALOG[p.analog]}</span></th>${data.jobs.map(j => {
    const hits = p.cards.filter(f => f.jobs.includes(j.id));
    return `<td>${hits.map(f => `<a class="dot" href="#${f.anchor}" title="${escape(f.title)}">●</a>`).join('')}</td>`;
  }).join('')}</tr>`).join('')}</tbody></table></div>`;

  const flowLink = id => { const f = flows.find(x => x.id === id); return f ? `<a href="#${f.anchor}">${escape(f.product.name)}: ${escape(f.title)}</a>` : ''; };
  const synthesis = data.synthesis.patterns.length || data.synthesis.open_questions.length ? `<section class="synthesis" aria-labelledby="synthesis-h"><h2 id="synthesis-h">What the best products have in common</h2>
    <ol class="patterns">${data.synthesis.patterns.map(p => `<li><strong>${escape(p.title)}</strong> ${escape(p.body)}${p.flows.length ? `<span class="refs">See: ${p.flows.map(flowLink).filter(Boolean).join(' · ')}</span>` : ''}</li>`).join('')}</ol>
    ${data.synthesis.open_questions.length ? `<h3>Questions we still need to answer</h3>${bullets(data.synthesis.open_questions, 'questions')}` : ''}</section>` : '';

  const platforms = [...new Set(flows.map(f => f.platform))];
  const sources = [...new Set(flows.map(f => f.source))];
  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(data.title)}</title>
<style>
  :root{color-scheme:light dark;--bg:#f6f6f6;--surface:#fff;--text:#202020;--muted:#646464;--border:#d6d6d6;--subtle:#ededed;--red:#a91c25;--red-bg:#ffeded;--accent:#2167bb;--flash:#fff4c2;font:15px/1.5 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
  @media(prefers-color-scheme:dark){:root{--bg:#171717;--surface:#222;--text:#efefef;--muted:#b3b3b3;--border:#494949;--subtle:#303030;--red:#ff9da5;--red-bg:#431c22;--accent:#8abcff;--flash:#4a4118}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text)}main{max-width:1680px;margin:auto;padding:36px 28px 80px}
  h1{font-size:clamp(26px,4vw,38px);line-height:1.15;margin:8px 0 16px;letter-spacing:-.025em}h2{font-size:22px;line-height:1.3;margin:0}h3{font-size:17px;line-height:1.35;margin:8px 0}p{margin:10px 0}a{color:inherit;text-underline-offset:3px}
  button,input,select{font:inherit;color:inherit}button,select,input[type=search]{background:var(--surface);border:1px solid var(--border);border-radius:6px;min-height:38px;padding:6px 10px}button,select,label{cursor:pointer}input[type=checkbox]{accent-color:var(--text);width:16px;height:16px}:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
  .eyebrow,.muted,figcaption,.count,.status{color:var(--muted)}.eyebrow{font-size:12px;letter-spacing:.09em;text-transform:uppercase}.intro,.baseline{max-width:900px;white-space:pre-wrap}.baseline{border-left:3px solid var(--border);padding-left:14px}.howto{max-width:900px;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:16px 0}.howto h2{font-size:15px}.howto p{margin:4px 0 0}
  .synthesis{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:20px 24px;margin:24px 0}.patterns li{margin:0 0 10px;max-width:1100px}.refs{display:block;font-size:13px;color:var(--muted)}
  .matrix-wrap{overflow-x:auto;margin:24px 0;border:1px solid var(--border);border-radius:8px;background:var(--surface)}.matrix{border-collapse:collapse;font-size:13px;min-width:100%}.matrix th,.matrix td{border-bottom:1px solid var(--subtle);padding:6px 10px;text-align:left;vertical-align:top}.matrix thead th{font-weight:600;min-width:110px;max-width:170px}.matrix .count{display:block;font-weight:400;font-size:11px}.matrix th.gap{color:var(--red)}.matrix tbody th{white-space:nowrap}.dot{text-decoration:none;color:var(--accent);font-size:15px;margin-right:3px}
  .toolbar{position:sticky;top:0;z-index:5;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin:24px 0 8px}.controls{display:flex;gap:12px 16px;flex-wrap:wrap;align-items:end}.field{display:grid;gap:3px;font-size:12px}.controls>label:not(.field){display:flex;gap:6px;align-items:center;min-height:38px;font-size:14px}input[type=search]{width:min(100%,300px)}
  .jobs{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;max-height:72px;overflow-y:auto}.jobs label{display:flex;gap:5px;align-items:center;border:1px solid var(--border);border-radius:999px;padding:3px 10px;font-size:13px}.jobs label:has(input:checked){border-color:var(--text);background:var(--subtle)}.jobs input{width:13px;height:13px}
  .product{margin-top:44px}.product-head{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}.why{max-width:950px;margin:6px 0 14px}
  .flow{display:grid;grid-template-columns:minmax(260px,360px) 1fr;gap:0;background:var(--surface);border:1px solid var(--border);border-radius:8px;margin:14px 0;overflow:hidden;scroll-margin-top:150px}.flow.flash{box-shadow:0 0 0 3px var(--accent);background:var(--flash)}
  .flow-text{padding:16px 18px;border-right:1px solid var(--subtle);font-size:14px}.meta{display:flex;gap:6px;align-items:center;flex-wrap:wrap;font-size:12px;color:var(--muted)}.badge{font-size:11px;border:1px solid var(--border);border-radius:4px;padding:1px 6px}.counter{color:var(--red);background:var(--red-bg);border-color:var(--red)}
  .star{margin-left:auto;min-height:30px;padding:2px 9px;font-size:16px;line-height:1}.star[aria-pressed=true]{background:var(--text);color:var(--surface)}
  .chips{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0}.chip{font-size:11px;background:var(--subtle);border-radius:999px;padding:2px 8px}.label{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:10px 0 2px}ul{margin:0;padding-left:18px}.avoid li::marker{color:var(--red)}.fit .label{display:inline}.flow-text a{font-size:13px;display:inline-block;margin-top:8px}
  .strip{display:flex;gap:12px;overflow-x:auto;padding:14px;align-items:flex-start;scroll-snap-type:x proximity;overscroll-behavior-x:contain}.strip figure{margin:0;flex:0 0 auto;scroll-snap-align:start}.strip.wide figure{width:340px}.strip.tall figure{width:170px}
  .preview{display:block;width:100%;padding:0;border-radius:4px;overflow:hidden;cursor:zoom-in;background:var(--subtle)}.wide .preview{height:230px}.tall .preview{height:340px}.preview img{display:block;width:100%;height:100%;object-fit:contain}figcaption{font-size:12px;margin-top:6px;line-height:1.35}.missing{height:120px;display:grid;place-items:center;color:var(--muted)}
  [hidden]{display:none!important}dialog{max-width:96vw;max-height:95vh;width:max-content;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--text);padding:14px}dialog::backdrop{background:rgb(0 0 0 / .8)}.lb-bar{display:flex;gap:10px;align-items:center;margin-bottom:10px}.lb-bar p{margin:0 auto 0 0;max-width:80ch;font-size:13px}.lb-img{overflow:auto;max-width:calc(96vw - 30px);max-height:calc(95vh - 90px)}.lb-img img{display:block;max-width:100%;height:auto}body:has(dialog[open]){overflow:hidden}
  @media(max-width:860px){main{padding:22px 14px 50px}.flow{grid-template-columns:1fr}.flow-text{border-right:0;border-bottom:1px solid var(--subtle)}.toolbar{position:static}}
</style></head>
<body><main>
  <header><div class="eyebrow">Essentials 2.0 · Flow inspiration · ${escape(data.module)}</div><h1>${escape(data.title)}</h1>
  ${data.intro ? `<p class="intro">${escape(data.intro)}</p>` : ''}${data.baseline ? `<p class="baseline"><strong>What we have today.</strong> ${escape(data.baseline)}</p>` : ''}
  <aside class="howto" aria-labelledby="howto-h"><h2 id="howto-h">How to read this page</h2><p>${escape(HOW_TO_READ)}</p></aside>
  <p class="muted">${data.products.length} products · ${flows.length} flows · ${images} screens · ${data.jobs.length} tasks</p></header>
  ${synthesis}
  <h2>Which products show which tasks</h2><p class="muted">Each ● is one flow; click it to jump there. A task in red has no flow yet.</p>${matrix}
  <form class="toolbar" aria-label="Filter flows">
    <div class="controls">
      <label class="field">Search<input id="q" type="search" placeholder="Product, flow, idea…" autocomplete="off"></label>
      <label class="field">How close<select id="analog"><option value="all">All</option>${Object.entries(ANALOG).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select></label>
      <label class="field">Platform<select id="platform"><option value="all">All</option>${platforms.map(p => `<option value="${p}">${PLATFORM[p]}</option>`).join('')}</select></label>
      <label class="field">Source<select id="source"><option value="all">All</option>${sources.map(s => `<option value="${s}">${SOURCE[s]}</option>`).join('')}</select></label>
      <label><input id="flows-only" type="checkbox">Multi-step flows only</label>
      <label><input id="starred" type="checkbox">★ Shortlist only</label>
      <button type="reset">Reset</button><button type="button" id="export">Export shortlist</button>
      <span id="status" class="status" role="status" aria-live="polite"></span>
    </div>
    <div class="jobs" role="group" aria-label="Tasks (none checked = all)">${data.jobs.map(j => `<label title="${escape(j.description || j.title)}"><input type="checkbox" name="job" value="${escape(j.id)}">${escape(j.title)}</label>`).join('')}</div>
  </form>
  <p id="none" hidden>No flows match. Reset the filters.</p>
  ${data.products.map(p => `<section class="product" id="product-${escape(p.id)}" data-analog="${p.analog}"><div class="product-head"><h2>${escape(p.name)}</h2><span class="badge">${ANALOG[p.analog]}</span><span class="count">${p.cards.length} flow${p.cards.length === 1 ? '' : 's'}</span></div>${p.why ? `<p class="why">${escape(p.why)}</p>` : ''}${p.cards.map(card).join('')}</section>`).join('')}
</main>
<dialog id="lb" aria-labelledby="lb-cap"><div class="lb-bar"><p id="lb-cap"></p><button type="button" id="lb-prev" aria-label="Previous step">←</button><button type="button" id="lb-next" aria-label="Next step">→</button><button type="button" id="lb-close" autofocus>Close</button></div><div class="lb-img"><img id="lb-img" alt=""></div></dialog>
<script>
  const MODULE = ${JSON.stringify(data.module)};
  const KEY = 'gallery-stars:' + MODULE;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const form = $('form'), flows = $$('.flow'), products = $$('.product');
  let stars = new Set(); try { stars = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch {}
  function saveStars() { try { localStorage.setItem(KEY, JSON.stringify([...stars])); } catch {} }
  function paintStar(flow) { const on = stars.has(flow.dataset.id); const b = flow.querySelector('.star'); b.textContent = on ? '★' : '☆'; b.setAttribute('aria-pressed', on); }
  function filter() {
    const q = $('#q').value.trim().toLowerCase(), analog = $('#analog').value, platform = $('#platform').value, source = $('#source').value;
    const jobs = $$('[name=job]:checked').map(i => i.value), multi = $('#flows-only').checked, starred = $('#starred').checked;
    let shown = 0;
    for (const p of products) {
      let n = 0;
      for (const f of p.querySelectorAll('.flow')) {
        const fj = f.dataset.jobs.split(' ');
        f.hidden = (analog !== 'all' && p.dataset.analog !== analog) || (platform !== 'all' && f.dataset.platform !== platform) || (source !== 'all' && f.dataset.source !== source)
          || (multi && f.dataset.kind !== 'flow') || (starred && !stars.has(f.dataset.id)) || (jobs.length && !jobs.some(j => fj.includes(j))) || (q && !f.dataset.search.includes(q));
        if (!f.hidden) n++;
      }
      p.hidden = n === 0; shown += n;
    }
    $('#status').textContent = shown + ' of ' + flows.length + ' flows · ' + stars.size + ' ★';
    $('#none').hidden = shown > 0;
  }
  flows.forEach(f => { paintStar(f); f.querySelector('.star').addEventListener('click', () => { stars.has(f.dataset.id) ? stars.delete(f.dataset.id) : stars.add(f.dataset.id); saveStars(); paintStar(f); filter(); }); });
  form.addEventListener('submit', e => e.preventDefault()); form.addEventListener('input', filter); form.addEventListener('change', filter); form.addEventListener('reset', () => setTimeout(filter, 0));
  $('#export').addEventListener('click', () => {
    const picked = flows.filter(f => stars.has(f.dataset.id));
    const md = ['# ' + document.title + ' — shortlist', ''].concat(picked.map(f => {
      const link = f.querySelector('.flow-text a');
      return '- **' + f.closest('.product').querySelector('h2').textContent + ' — ' + f.querySelector('h3').textContent + '** (' + f.dataset.id + ')' + (link ? ' ' + link.href : '') + '\\n  ' + f.querySelector('.summary').textContent;
    })).join('\\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([md + '\\n'], { type: 'text/markdown' })); a.download = MODULE + '-shortlist.md'; a.click(); URL.revokeObjectURL(a.href);
  });
  function flash(hash) { const el = hash && document.getElementById(hash.slice(1)); if (!el || !el.classList.contains('flow')) return; if (el.hidden || el.closest('.product').hidden) { form.reset(); filter(); } el.scrollIntoView({ block: 'start' }); el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 1600); }
  document.addEventListener('click', e => { const a = e.target.closest('a[href^="#flow-"]'); if (a) { e.preventDefault(); history.replaceState(null, '', a.getAttribute('href')); flash(a.getAttribute('href')); } });
  const lb = $('#lb'), lbImg = $('#lb-img'); let steps = [], at = 0;
  function show(i) { at = (i + steps.length) % steps.length; const img = steps[at].querySelector('img'); lbImg.src = img.src; lbImg.alt = img.alt; $('#lb-cap').textContent = img.alt; }
  $$('.preview').forEach(b => b.addEventListener('click', () => { steps = [...b.closest('.strip').querySelectorAll('.preview')]; show(steps.indexOf(b)); lb.showModal(); }));
  $('#lb-prev').addEventListener('click', () => show(at - 1)); $('#lb-next').addEventListener('click', () => show(at + 1)); $('#lb-close').addEventListener('click', () => lb.close());
  lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(at - 1); if (e.key === 'ArrowRight') show(at + 1); });
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); }); lb.addEventListener('close', () => lbImg.removeAttribute('src'));
  filter(); if (location.hash) setTimeout(() => flash(location.hash), 50);
</script></body></html>`;
  await writeAtomic(out, html);
  const size = (await fs.stat(out)).size / 1048576;
  console.log(`Gallery: ${out} (${data.products.length} products, ${flows.length} flows, ${images} images embedded, ${size.toFixed(1)} MB)`);
}

async function main() {
  const args = cli('Usage: node build-gallery.mjs <module>/work [--list | --check] [--out <file.html>] [--no-optimize]', {
    list: { type: 'boolean', default: false }, check: { type: 'boolean', default: false }, out: { type: 'string' }, 'no-optimize': { type: 'boolean', default: false },
  });
  const work = path.resolve(args.input);
  const data = await load(work);
  if (args.list) return listCandidates(work, data);
  if (args.check) { if (await check(work, data)) process.exitCode = 1; return; }
  const out = args.out ?? path.join(path.dirname(work), `${data.module}.html`);
  if (await check(work, data)) console.error('Building anyway; fix the errors above before sharing.');
  await build(work, data, out, !args['no-optimize']);
}
main().catch(fail);
