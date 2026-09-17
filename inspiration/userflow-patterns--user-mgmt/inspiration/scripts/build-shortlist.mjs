// Generates userflow-patterns/inspiration/user-manager-shortlist.html from
// .context/user-manager-shortlist/shortlist-data.json. Plain Node, no npm dependencies.
// Run with: node userflow-patterns/inspiration/scripts/build-shortlist.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '../../..');
const inspirationDir = path.resolve(scriptDir, '..');
const dataPath = path.join(repoRoot, '.context/user-manager-shortlist/shortlist-data.json');
const outPath = path.join(inspirationDir, 'user-manager-shortlist.html');

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

// Escape first, then apply inline markdown so tag characters we insert can't collide with user text.
function mdInline(text) {
  if (!text) return '';
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function main() {
  const raw = fs.readFileSync(dataPath, 'utf8');
  const data = JSON.parse(raw);
  const { meta, nodes } = data;

  function reportPath(round) { return meta.reports[round]?.path ?? '#'; }

  function card(ref, isCounter) {
    const alt = `${ref.app} — ${ref.title}`;
    const searchBlob = `${ref.app} ${ref.title} ${ref.take}`.toLowerCase();
    const media = ref.imageKind === 'none'
      ? `<div class="preview placeholder-only"><span>Documentation only — no screen</span></div>`
      : `<figure class="preview-figure">
          <button type="button" class="preview-btn" aria-label="Open full-size: ${escapeHtml(alt)}">
            <img class="preview" src="${escapeHtml(ref.image)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.closest('figure').classList.add('img-broken')">
          </button>
          <div class="placeholder img-broken-only"><span>Image unavailable</span></div>
        </figure>`;
    const tags = `${ref.notInIndex ? '<span class="tag">Not in original index</span>' : ''}${ref.docsOnly ? '<span class="tag">Docs only</span>' : ''}`;
    return `<article class="card${isCounter ? ' card-counter' : ''}" data-search="${escapeHtml(searchBlob)}">
      <div class="card-media">${media}</div>
      <div class="card-body">
        <p class="eyebrow card-eyebrow"><span class="badge round-badge">${escapeHtml(ref.round)}</span> · ${escapeHtml(ref.question)}${isCounter ? ' <span class="badge counter">Counter-example</span>' : ''}</p>
        <p class="app-name"><strong>${escapeHtml(ref.app)}</strong></p>
        <h4 class="card-title">${escapeHtml(ref.title)}</h4>
        <p class="take">${mdInline(ref.take)}</p>
        ${tags ? `<p class="tags">${tags}</p>` : ''}
      </div>
      <div class="card-footer">
        ${ref.sourceUrl ? `<a href="${escapeHtml(ref.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source ↗</a>` : '<span class="muted">No source link</span>'}
        <a class="report-link" href="${escapeHtml(reportPath(ref.round))}">Open in ${escapeHtml(ref.round)} report</a>
      </div>
    </article>`;
  }

  function group(g) {
    const heading = g.heading ? `<h3>${escapeHtml(g.heading)}</h3>` : '';
    return `${heading}<div class="grid">${g.refs.map(r => card(r, false)).join('')}</div>`;
  }

  function nodeSection(node) {
    const counterBlock = node.counterExamples.length
      ? `<div class="section-heading counter-heading"><p class="eyebrow">Don't build this</p><h3>Counter-examples</h3></div>
         <div class="grid counter-grid">${node.counterExamples.map(r => card(r, true)).join('')}</div>`
      : '';
    const callouts = [];
    if (node.uncovered) callouts.push(`<div class="callout callout-uncovered"><p class="callout-label">Still uncovered</p><p>${mdInline(node.uncovered)}</p></div>`);
    if (node.ai) callouts.push(`<div class="callout callout-ai"><p class="callout-label">AI</p><p>${mdInline(node.ai)}</p></div>`);
    if (node.dropped) callouts.push(`<div class="callout callout-dropped"><p class="callout-label">Close calls dropped</p><p class="dropped-text">${mdInline(node.dropped)}</p></div>`);
    return `<section id="${node.id}" class="node-section" aria-labelledby="${node.id}-heading">
      <div class="node-heading">
        <h2 id="${node.id}-heading"><span class="node-number">${node.number}.</span> ${escapeHtml(node.title)}</h2>
        <div class="node-badges"><span class="badge">${node.keeps} keeps</span><span class="badge">${node.counters} counters</span></div>
      </div>
      ${node.lead ? `<p class="lead">${mdInline(node.lead)}</p>` : ''}
      ${node.groups.map(group).join('')}
      ${counterBlock}
      ${callouts.length ? `<div class="callouts">${callouts.join('')}</div>` : ''}
    </section>`;
  }

  const introParas = meta.intro.split(/\n\n+/).map(p => `<p class="intro">${mdInline(p)}</p>`).join('');
  const reportsLine = `<p class="reports-line">Reports: <a href="${escapeHtml(meta.reports.R1.path)}">R1 — ${escapeHtml(meta.reports.R1.label)}</a> (${meta.reports.R1.count} refs) · <a href="${escapeHtml(meta.reports.R2.path)}">R2 — ${escapeHtml(meta.reports.R2.label)}</a> (${meta.reports.R2.count} refs)</p>`;
  const summaryTable = `<table class="summary">
    <thead><tr><th>Node</th><th>Keeps</th><th>Counters</th><th>Strongest single reference</th></tr></thead>
    <tbody>${nodes.map(n => `<tr><td><a href="#${n.id}">${escapeHtml(n.title)}</a></td><td>${n.keeps}</td><td>${n.counters}</td><td>${escapeHtml(n.strongest.round)} ${escapeHtml(n.strongest.question)} · <strong>${escapeHtml(n.strongest.app)}</strong> — ${escapeHtml(n.strongest.title)}</td></tr>`).join('')}</tbody>
  </table>`;
  const nav = `<nav class="node-nav" aria-label="Node sections"><ol>${nodes.map(n => `<li><a href="#${n.id}">${n.number}. ${escapeHtml(n.title)}</a></li>`).join('')}</ol></nav>`;

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(meta.title)}</title>
<style>
  :root{color-scheme:light dark;--bg:#f6f6f6;--surface:#fff;--text:#202020;--muted:#646464;--border:#d6d6d6;--subtle:#ededed;--red:#a91c25;--red-bg:#ffeded;--focus:#2167bb;font:15px/1.5 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
  @media(prefers-color-scheme:dark){:root{--bg:#171717;--surface:#222;--text:#efefef;--muted:#b3b3b3;--border:#494949;--subtle:#303030;--red:#ff9da5;--red-bg:#431c22;--focus:#8abcff}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text)}main{max-width:1560px;margin:auto;padding:36px 28px 64px}
  h1{font-size:clamp(26px,4vw,38px);line-height:1.15;margin:8px 0 16px;letter-spacing:-.025em}
  h2{font-size:20px;line-height:1.4;margin:0;max-width:1000px}h3{font-size:18px;line-height:1.35;margin:22px 0 10px}h4{font-size:15px;margin:10px 0 4px}
  p{margin:12px 0}a{color:inherit;text-underline-offset:3px}code{background:var(--subtle);border-radius:4px;padding:1px 5px;font-size:.92em}
  button,input{font:inherit;color:inherit}input[type=search]{background:var(--surface);border:1px solid var(--border);border-radius:6px;min-height:40px;padding:7px 10px;width:min(100%,320px)}
  :focus-visible{outline:3px solid var(--focus);outline-offset:3px}
  .eyebrow,.muted,figcaption{color:var(--muted)}.eyebrow{font-size:12px;letter-spacing:.09em;text-transform:uppercase}
  .intro,.reports-line{max-width:850px}.reports-line{font-size:14px}
  .summary{border-collapse:collapse;width:100%;max-width:1100px;margin:20px 0 8px;font-size:14px}
  .summary th,.summary td{text-align:left;padding:8px 12px;border-bottom:1px solid var(--border)}
  .summary th{color:var(--muted);font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.06em}
  .node-nav{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--border);padding:10px 0;margin-top:8px}
  .node-nav ol{list-style:none;display:flex;flex-wrap:wrap;gap:6px 16px;margin:0;padding:0;font-size:13px}
  .node-nav a{white-space:nowrap}
  .node-section{margin-top:44px;padding-top:8px}
  .node-heading{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
  .node-number{color:var(--muted)}
  .node-badges{display:flex;gap:8px}
  .lead{max-width:950px}
  .search-bar{margin:24px 0}
  #status{font-size:13px;color:var(--muted)}
  .section-heading{margin-top:22px}.section-heading .eyebrow{margin-bottom:2px}.section-heading h3{margin-top:2px}
  .badge{display:inline-block;font-size:11px;border:1px solid var(--border);border-radius:4px;padding:2px 6px}
  .counter{color:var(--red);background:var(--red-bg);border-color:var(--red)}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),360px));gap:20px;align-items:stretch;margin-top:12px}
  .card{min-width:0;display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:8px;overflow:hidden;overflow-wrap:anywhere}
  .card-counter{border-left:4px solid var(--red)}
  .card-media{min-height:240px;background:var(--subtle)}
  .preview-figure{margin:0;position:relative}
  .preview-btn{display:block;width:100%;height:240px;padding:0;border:0;background:var(--subtle);cursor:zoom-in}
  .preview-btn img{display:block;width:100%;height:100%;object-fit:contain}
  .placeholder-only{height:240px;display:grid;place-items:center;text-align:center;color:var(--muted);padding:16px;font-size:13px}
  .img-broken-only{display:none}
  .img-broken .preview-btn{display:none}.img-broken .img-broken-only{height:240px;display:grid;place-items:center;color:var(--muted);font-size:13px;background:var(--subtle)}
  .card-body{padding:16px;flex:1 1 auto}
  .card-eyebrow{margin:0 0 6px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .app-name{margin:0}.card-title{margin:2px 0 8px}
  .take{white-space:pre-wrap}
  .tags{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 0}.tags .tag{font-size:11px;border:1px solid var(--border);border-radius:4px;padding:2px 6px;color:var(--muted)}
  .card-footer{display:flex;justify-content:space-between;gap:10px;padding:12px 16px;border-top:1px solid var(--border);font-size:13px}
  .callouts{display:grid;gap:14px;margin-top:20px}
  .callout{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 16px}
  .callout-label{margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted)}
  .callout-dropped{opacity:.85}.dropped-text{font-size:13px;color:var(--muted)}
  [hidden]{display:none!important}
  dialog{max-width:96vw;max-height:94vh;width:max-content;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--text);padding:16px;overscroll-behavior:contain}
  dialog::backdrop{background:rgb(0 0 0 / .78)}
  .lightbox-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:12px}
  .lightbox-bar p{margin:0;max-width:70ch;font-size:13px}
  .full-image{overflow:auto;max-width:calc(96vw - 34px);max-height:calc(94vh - 100px)}
  .full-image img{display:block;max-width:none;height:auto}
  body:has(dialog[open]){overflow:hidden}
  @media(max-width:520px){main{padding:24px 16px 40px}.grid{grid-template-columns:minmax(0,1fr)}.node-heading{display:block}}
</style></head>
<body><main>
  <header>
    <div class="eyebrow">Essentials 2.0 · Design research · User Manager</div>
    <h1>${escapeHtml(meta.title)}</h1>
    ${introParas}
    ${reportsLine}
    ${summaryTable}
  </header>
  ${nav}
  <div class="search-bar"><label class="field">Search cards<br><input id="search" type="search" placeholder="App, title, or take…" autocomplete="off"></label></div>
  <p id="status" role="status" aria-live="polite"></p>
  ${nodes.map(nodeSection).join('')}
  <section class="node-section" aria-labelledby="next-step-heading">
    <h2 id="next-step-heading">Next step</h2>
    <p class="lead">${mdInline(meta.nextStep)}</p>
  </section>
</main>
<dialog id="lightbox" aria-labelledby="lightbox-caption">
  <div class="lightbox-bar"><p id="lightbox-caption"></p><button id="close-lightbox" type="button" autofocus>Close</button></div>
  <div class="full-image"><img id="full-image" alt=""></div>
</dialog>
<script>
(function(){
  var input = document.getElementById('search');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  var status = document.getElementById('status');
  function filter(){
    var q = input.value.trim().toLowerCase();
    var shown = 0;
    cards.forEach(function(c){
      var match = !q || c.dataset.search.indexOf(q) !== -1;
      c.hidden = !match;
      if (match) shown++;
    });
    status.textContent = shown + ' of ' + cards.length + ' cards shown';
  }
  input.addEventListener('input', filter);
  filter();

  var lightbox = document.getElementById('lightbox');
  var fullImage = document.getElementById('full-image');
  var caption = document.getElementById('lightbox-caption');
  document.querySelectorAll('.preview-btn').forEach(function(btn){
    var img = btn.querySelector('img');
    btn.addEventListener('click', function(){
      fullImage.src = img.src;
      fullImage.alt = img.alt;
      caption.textContent = img.alt;
      lightbox.showModal();
      lightbox.querySelector('.full-image').scrollTo(0, 0);
    });
  });
  document.getElementById('close-lightbox').addEventListener('click', function(){ lightbox.close(); });
  lightbox.addEventListener('click', function(e){
    var r = lightbox.getBoundingClientRect();
    if (e.target === lightbox && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) lightbox.close();
  });
  lightbox.addEventListener('close', function(){ fullImage.removeAttribute('src'); });
})();
</script>
</body></html>`;

  fs.writeFileSync(outPath, html);
  const keepCount = nodes.reduce((sum, n) => sum + n.groups.reduce((s, g) => s + g.refs.length, 0), 0);
  const counterCount = nodes.reduce((sum, n) => sum + n.counterExamples.length, 0);
  console.log(`Shortlist: ${outPath} (${keepCount + counterCount} references: ${keepCount} keeps + ${counterCount} counter-examples across ${nodes.length} nodes)`);
}

main();
