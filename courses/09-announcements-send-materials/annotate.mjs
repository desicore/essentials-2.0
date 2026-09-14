#!/usr/bin/env node
// Applies annotate.json (drops, counter-example flags, take fixes, question answers) to references.json.
// Idempotent. Usage: node annotate.mjs
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(here, 'references.json');
const doc = JSON.parse(await readFile(file, 'utf8'));
const ann = JSON.parse(await readFile(path.join(here, 'annotate.json'), 'utf8'));

const before = doc.references.length;
doc.references = doc.references.filter(r => !(r.id in ann.drop));
const ids = new Set(doc.references.map(r => r.id));
const missing = [];
for (const r of doc.references) {
  r.counter_example = ann.counter_example.includes(r.id);
  if (ann.takes[r.id]) r.take = ann.takes[r.id];
  r.selected = false;
}
for (const id of [...ann.counter_example, ...Object.keys(ann.takes)]) if (!ids.has(id) && !(id in ann.drop)) missing.push(id);
for (const q of doc.questions) if (ann.answers[q.id]) q.answer = ann.answers[q.id];
await writeFile(file, JSON.stringify(doc, null, 2) + '\n');
const counts = {}; for (const r of doc.references) counts[r.question] = (counts[r.question] || 0) + 1;
console.log(JSON.stringify({ before, after: doc.references.length, counts, counter_examples: doc.references.filter(r => r.counter_example).map(r => r.app), products: new Set(doc.references.map(r => r.app.toLowerCase().trim())).size, unknownIds: missing }));
