// Applies hand-written text to notes files without touching structure.
// Usage: node patch-notes.mjs <patch.json>
// patch.json: { "module": "07-reports", "flows": { "<product> <8-char id>": { "summary"?, "steal"?, "avoid"?, "fit"?, "steps"?: { "<1-based index>": "label" } } } }
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const INSP = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const patch = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const files = new Map();
for (const [key, change] of Object.entries(patch.flows)) {
  const [product, prefix] = key.split(' ');
  const file = path.join(INSP, patch.module, 'work', 'notes', `${product}.json`);
  const notes = files.get(file) ?? JSON.parse(fs.readFileSync(file, 'utf8'));
  files.set(file, notes);
  const id = Object.keys(notes.flows).find(k => k.split(':').pop().startsWith(prefix));
  if (!id) throw new Error(`${key}: no such flow`);
  const n = notes.flows[id];
  for (const field of ['steal', 'avoid']) {
    if (!change[field]) continue;
    if (change[field].length !== n[field].length) throw new Error(`${key}.${field}: ${change[field].length} items for ${n[field].length}`);
    n[field] = change[field];
  }
  for (const field of ['summary', 'fit']) if (change[field]) n[field] = change[field];
  for (const [i, label] of Object.entries(change.steps ?? {})) {
    if (!(i >= 1 && i <= n.steps.length)) throw new Error(`${key}.steps: no step ${i}`);
    n.steps[i - 1] = label;
  }
}
for (const [file, notes] of files) fs.writeFileSync(file, JSON.stringify(notes, null, 2) + '\n');
console.log(`Patched ${Object.keys(patch.flows).length} flows in ${files.size} files.`);
