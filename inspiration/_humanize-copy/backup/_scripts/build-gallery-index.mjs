// Writes <inspiration>/index.html linking every built module gallery (NN-slug/NN-slug.html) plus the earlier question-based reports.
import path from 'node:path';
import fs from 'node:fs/promises';
import { cli, string, writeAtomic, fail } from './shared.mjs';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const exists = file => fs.stat(file).then(() => true, () => false);

async function main() {
  const args = cli('Usage: node build-gallery-index.mjs <inspiration dir>', {});
  const root = path.resolve(args.input);
  const rows = [];
  for (const dir of (await fs.readdir(root)).filter(d => /^\d\d-/.test(d)).sort()) {
    const moduleFile = path.join(root, dir, 'work', 'module.json');
    if (!await exists(moduleFile)) continue;
    const mod = JSON.parse(await fs.readFile(moduleFile, 'utf8'));
    const html = `${dir}/${string(mod.module) || dir}.html`;
    const built = await exists(path.join(root, html));
    const products = mod.products ?? [];
    rows.push(`<tr><td>${built ? `<a href="${escape(html)}">${escape(string(mod.title) || dir)}</a>` : `${escape(string(mod.title) || dir)} <span class="muted">(not built yet)</span>`}</td><td>${products.length}</td><td>${products.reduce((n, p) => n + (p.flows?.length ?? 0), 0)}</td><td>${(mod.jobs ?? []).map(j => escape(string(j.title))).join(' · ')}</td></tr>`);
  }
  const earlier = [];
  for (const rel of ['userflow-patterns--user-mgmt/inspiration/share', 'courses']) {
    const dir = path.join(root, rel);
    for (const f of (await fs.readdir(dir).catch(() => [])).filter(f => /^\d\d-.*\.html$/.test(f)).sort()) earlier.push(`<li><a href="${escape(`${rel}/${f}`)}">${escape(rel.split('/')[0].replace('userflow-patterns--', ''))} · ${escape(f.replace(/\.html$/, ''))}</a></li>`);
  }
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Essentials 2.0 — flow inspiration</title>
<style>:root{color-scheme:light dark;font:15px/1.5 system-ui,-apple-system,sans-serif}body{max-width:1200px;margin:auto;padding:36px 24px}table{border-collapse:collapse;width:100%}th,td{text-align:left;border-bottom:1px solid #8884;padding:8px 10px;vertical-align:top}td:nth-child(4){font-size:13px;opacity:.8}.muted{opacity:.6}</style></head>
<body><h1>Essentials 2.0 — flow inspiration</h1><p>Product-first galleries, one per module. Each file is self-contained and works offline.</p>
<table><thead><tr><th>Module</th><th>Products</th><th>Flows</th><th>Jobs</th></tr></thead><tbody>${rows.join('') || '<tr><td colspan="4">No modules yet.</td></tr>'}</tbody></table>
${earlier.length ? `<h2>Earlier modules (question-based reports)</h2><ul>${earlier.join('')}</ul>` : ''}</body></html>`;
  await writeAtomic(path.join(root, 'index.html'), html);
  console.log(`Index: ${path.join(root, 'index.html')} (${rows.length} galleries, ${earlier.length} earlier reports)`);
}
main().catch(fail);
