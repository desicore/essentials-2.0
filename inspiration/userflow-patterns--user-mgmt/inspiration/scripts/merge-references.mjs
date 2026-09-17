// Usage: node inspiration/scripts/merge-references.mjs <dir> [--out <dir>/references.json]
// Merges <dir>/mobbin.*.json and <dir>/refero*.json (arrays) into one references.json with the module header.
// Dedupes by id. If the same app appears in both sources for the same question, keeps the source that has a flow
// (else Mobbin) and drops the other, per the "one source per product" rule.
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
const dir = process.argv[2];
const outIdx = process.argv.indexOf('--out');
const out = outIdx > -1 ? process.argv[outIdx + 1] : path.join(dir, 'references.json');
const QUESTIONS = [
  ['Q1', 'How do products let people in without creating accounts up front (magic link, guest, identity from SSO or LMS)?'],
  ['Q2', 'How is access scoped by content (share a course or recording with a person or group) instead of by global role?'],
  ['Q3', 'How do products handle bulk rosters: CSV or LMS import, sync, cohorts that churn until week one?'],
  ['Q4', 'What is the minimal role set that still has an escape hatch (owner/admin/member/guest plus per-item overrides)?'],
  ['Q5', 'How is access time-boxed (release date, expiry, semester end, view-only links, revoke)?'],
  ['Q6', 'How do products remove login friction and account-recovery dependency?'],
];
const files = (await readdir(dir)).filter(f => /^(mobbin|refero).*\.json$/.test(f) && f !== 'references.json');
let refs = [];
for (const f of files) {
  const data = JSON.parse(await readFile(path.join(dir, f), 'utf8'));
  const arr = Array.isArray(data) ? data : (data.references || []);
  refs.push(...arr.map(r => ({ ...r, _file: f })));
}
const seen = new Set(); refs = refs.filter(r => { if (seen.has(r.id)) return false; seen.add(r.id); return true; });
// one source per product+question
const key = r => `${(r.app || '').toLowerCase().trim()}|${r.question}`;
const groups = new Map();
for (const r of refs) { const k = key(r); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(r); }
const dropped = [];
refs = refs.filter(r => {
  const g = groups.get(key(r));
  const sources = new Set(g.map(x => x.source));
  if (sources.size < 2) return true;
  const winner = g.some(x => x.kind === 'flow' && x.source === 'mobbin') ? 'mobbin'
    : g.some(x => x.kind === 'flow') ? g.find(x => x.kind === 'flow').source : 'mobbin';
  if (r.source !== winner) { dropped.push(`${r.app} ${r.question} ${r.source}`); return false; }
  return true;
});
const order = { Q1: 1, Q2: 2, Q3: 3, Q4: 4, Q5: 5, Q6: 6 };
refs.sort((a, b) => (order[a.question] || 9) - (order[b.question] || 9) || a.app.localeCompare(b.app));
refs = refs.map(({ _file, ...r }) => r);
const doc = { module: 'access-sharing', title: 'Access, roles & sharing', intro: "Internal board for the Essentials 2.0 solution concept. Not about UI: each reference shows how another product solves an access, role or sharing problem our customers actually have (learners without logins, faculty that cannot be scoped to their own students, rosters living in Canvas, eight global roles nobody needs, recordings that should open and close on dates). One section per question; every card says what we would take from it. Counter-examples are flagged. Raw material from Mobbin and Refero, to be cut down before anything is shown outside the team.", questions: QUESTIONS.map(([id, title]) => ({ id, title, answer: '' })), references: refs };
await writeFile(out, JSON.stringify(doc, null, 2));
const counts = {}; for (const r of refs) counts[r.question] = (counts[r.question] || 0) + 1;
console.log(JSON.stringify({ files, total: refs.length, counts, sources: [...new Set(refs.map(r => r.source))], droppedForOneSourceRule: dropped }));
