// Writes <inspiration>/index.html linking every built module gallery (NN-slug/NN-slug.html) plus the earlier question-based reports.
import path from 'node:path';
import fs from 'node:fs/promises';
import { cli, string, writeAtomic, fail } from './shared.mjs';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const exists = file => fs.stat(file).then(() => true, () => false);
const EARLIER_LABELS = {
  'share/01-user-manager-shortlist.html': 'User management: shortlist of the best examples for the User Manager',
  'share/02-R1-access-roles-sharing.html': 'User management: access, roles and sharing (R1)',
  'share/03-R2-university-identity-directory-sync.html': 'User management: university sign-in, directory sync and user import (R2)',
  'courses/01-objectives-outcomes-requirements.html': 'Courses: objectives, outcomes and requirements',
  'courses/02-files-links-media.html': 'Courses: files, links and media',
  'courses/03-skills-competencies.html': 'Courses: skills and competencies',
  'courses/04-learner-groups.html': 'Courses: learner groups',
  'courses/05-scenarios.html': 'Courses: scenarios',
  'courses/06-events.html': 'Courses: events',
  'courses/07-share-with-participants.html': 'Courses: share with participants',
  'courses/08-recordings-course-reports.html': 'Courses: recordings and course reports',
  'courses/09-announcements-send-materials.html': 'Courses: announcements and sending materials',
};

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
    for (const f of (await fs.readdir(dir).catch(() => [])).filter(f => /^\d\d-.*\.html$/.test(f)).sort()) {
      const label = EARLIER_LABELS[`${rel.split('/').pop()}/${f}`] ?? `${rel.split('/')[0].replace('userflow-patterns--', '')} · ${f.replace(/\.html$/, '')}`;
      earlier.push(`<li><a href="${escape(`${rel}/${f}`)}">${escape(label)}</a></li>`);
    }
  }
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Essentials 2.0: ideas from other products</title>
<style>:root{color-scheme:light dark;font:15px/1.5 system-ui,-apple-system,sans-serif}body{max-width:1200px;margin:auto;padding:36px 24px}table{border-collapse:collapse;width:100%}th,td{text-align:left;border-bottom:1px solid #8884;padding:8px 10px;vertical-align:top}td:nth-child(4){font-size:13px;opacity:.8}.muted{opacity:.6}</style></head>
<body><h1>Essentials 2.0: ideas from other products</h1><p>One report per Essentials module, showing how other products handle the same tasks, with real screenshots. Each report is a single file that also works offline.</p>
<table><thead><tr><th>Module</th><th>Products</th><th>Screen sequences</th><th>Tasks</th></tr></thead><tbody>${rows.join('') || '<tr><td colspan="4">No modules yet.</td></tr>'}</tbody></table>
${earlier.length ? `<h2>Earlier reports (organized by question)</h2><p>These reports came first. Each one asks a few design questions and answers them with examples from other products.</p><ul>${earlier.join('')}</ul>` : ''}</body></html>`;
  await writeAtomic(path.join(root, 'index.html'), html);
  console.log(`Index: ${path.join(root, 'index.html')} (${rows.length} galleries, ${earlier.length} earlier reports)`);
}
main().catch(fail);
