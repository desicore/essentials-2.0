// Postprocess the existing pipeline's HTML; this does not build reference cards.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const report = path.join(dir, '../01-objectives-outcomes-requirements.html');
const data = JSON.parse(await fs.readFile(path.join(dir, 'references.json'), 'utf8'));
const synthesis = JSON.parse(await fs.readFile(path.join(dir, 'synthesis.json'), 'utf8'));
const refs = new Map(data.references.map(r => [r.id, r]));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function cite(ids) {
  if (!ids?.length) throw Error('Every synthesis entry needs evidence');
  return ids.map(id => { const r=refs.get(id); if (!r) throw Error(`Unknown reference ${id}`); return `<a class="evidence" href="#ref-${encodeURIComponent(id)}">${esc(r.app)} · ${esc(id)}</a>`; }).join('; ');
}
const list = entries => `<ul>${entries.map(e=>`<li>${esc(e.text)} <span class="citations">${cite(e.refs)}</span></li>`).join('')}</ul>`;
const block = `<section id="synthesis" aria-label="Research synthesis">
<p class="eyebrow">Research synthesis · ${data.references.length} references · ${new Set(data.references.map(r=>r.app)).size} products</p>
<p>${esc(synthesis.scope)}</p>
<h3>Top examples</h3><ol class="top-examples">${synthesis.top.map(e=>{ const r=refs.get(e.ref); if(!r)throw Error('Missing top ref'); return `<li><strong>${esc(r.app)}</strong> <span class="badge">${esc(r.source)}</span><p>${esc(e.why)} ${cite([e.ref])}</p></li>`; }).join('')}</ol>
<h3>Pattern comparison</h3><p class="muted">${esc(synthesis.legend)}</p>
<div class="comparison-scroll" role="region" aria-label="Product comparison across six questions" tabindex="0"><table><thead><tr><th scope="col">Product</th>${data.questions.map(q=>`<th scope="col"><a href="#question-${Number(q.id.slice(1))-1}">${esc(q.id)}</a><br>${esc(q.title)}</th>`).join('')}</tr></thead><tbody>${synthesis.comparison.map(row=>`<tr><th scope="row">${esc(row.app)}</th>${row.cells.map(cell=>`<td>${esc(cell.text)}${cell.refs?.length?`<br><small>${cite(cell.refs)}</small>`:''}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
<h3>What the best apps do differently</h3>${list(synthesis.differences)}
<h3>Best practices top companies converge on</h3><p class="muted">Recommendations inferred from the cited examples; these are design proposals for Essentials 2.0.</p>${list(synthesis.practices)}
<h3>Open questions for Essentials 2.0</h3>${list(synthesis.openQuestions)}
</section>`;
let html=await fs.readFile(report,'utf8');
if(html.includes('id="synthesis"'))throw Error('Rebuild base report before inserting synthesis');
let index=0;
html=html.replace(/<article class="card"/g,()=>`<article id="ref-${encodeURIComponent(data.references[index++].id)}" class="card"`);
if(index!==data.references.length)throw Error('Card/reference count mismatch');
let bodyIndex=0;
html=html.replace(/<div class="card-body">/g,()=>`<div class="card-body"><div class="ref-id">${esc(data.references[bodyIndex++].id)}</div>`);
html=html.replace('</header>', `</header>\n${block}`);
html=html.replace('</style>', `
.ref-id{font-size:10px;color:var(--muted);margin-bottom:12px;overflow-wrap:anywhere}#synthesis{margin:28px 0;padding:24px;background:var(--surface);border:1px solid var(--border);border-radius:8px}#synthesis h3{margin-top:28px}#synthesis li{margin:12px 0;max-width:1100px}#synthesis .citations{display:block;font-size:12px;color:var(--muted)}#synthesis .evidence{overflow-wrap:anywhere}.top-examples{padding-left:24px;columns:2;column-gap:40px}.top-examples li{break-inside:avoid}.top-examples p{margin:6px 0;font-size:14px}.top-examples .evidence{display:block;font-size:11px;color:var(--muted)}.comparison-scroll{overflow-x:auto;margin:16px 0}table{border-collapse:collapse;font-size:12px;min-width:1100px;width:100%}th,td{padding:12px 10px;border:1px solid var(--border);vertical-align:top;text-align:left}thead th{background:var(--subtle);font-weight:600}tbody th{min-width:100px}td{min-width:160px}td small{font-size:10px;color:var(--muted)}article:target{outline:3px solid var(--focus);outline-offset:4px}article{scroll-margin-top:24px}@media(max-width:700px){#synthesis{padding:16px}.top-examples{columns:1}}\n</style>`);
await fs.writeFile(report,html);
console.log(`Synthesis inserted; ${index} reference anchors; ${(Buffer.byteLength(html)/1024/1024).toFixed(2)} MiB`);
