// Guards Phase 1 files while Phase 2 runs.
// Usage: node phase1-guard.mjs snapshot | check
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const INSP = path.dirname(HERE);
const OUT = path.join(HERE, 'backup/phase2/phase1-checksums.json');
const ROOTS = [
  ...fs.readdirSync(INSP).filter(d => /^(0[3-9]|10)-/.test(d)),
  ...fs.readdirSync(path.join(HERE, 'backup')).filter(d => /^(0[3-9]|10)-/.test(d)).map(d => `_humanize-copy/backup/${d}`),
  'userflow-patterns--user-mgmt/inspiration/scripts/build-gallery.mjs',
];

function walk(rel, out) {
  const abs = path.join(INSP, rel);
  const st = fs.statSync(abs);
  if (st.isDirectory()) for (const e of fs.readdirSync(abs).sort()) walk(path.join(rel, e), out);
  else out[rel] = crypto.createHash('sha1').update(fs.readFileSync(abs)).digest('hex');
}
const now = {};
for (const r of ROOTS) walk(r, now);

if (process.argv[2] === 'snapshot') {
  fs.writeFileSync(OUT, JSON.stringify(now, null, 1) + '\n');
  console.log(`snapshot: ${Object.keys(now).length} files`);
} else {
  const then = JSON.parse(fs.readFileSync(OUT, 'utf8'));
  const changed = [...new Set([...Object.keys(then), ...Object.keys(now)])].filter(f => then[f] !== now[f]);
  console.log(changed.length ? `CHANGED ${changed.length}:\n  ${changed.join('\n  ')}` : `Phase 1 unchanged (${Object.keys(now).length} files)`);
  process.exit(changed.length ? 1 : 0);
}
