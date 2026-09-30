// Prints every flow's rewritable note text for one module, compactly, in page order.
// Usage: node dump-notes.mjs <module> [product ...]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const INSP = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const [module, ...only] = process.argv.slice(2);
const work = path.join(INSP, module, 'work');
const mod = JSON.parse(fs.readFileSync(path.join(work, 'module.json'), 'utf8'));
for (const p of mod.products) {
  if (only.length && !only.includes(p.id)) continue;
  const notes = JSON.parse(fs.readFileSync(path.join(work, 'notes', `${p.id}.json`), 'utf8'));
  for (const id of p.flows) {
    const n = notes.flows[id];
    if (!n) continue;
    console.log(`\n## ${p.id} ${id.split(':').pop().slice(0, 8)}`);
    console.log(`S: ${n.summary}`);
    console.log(`STEPS: ${n.steps.map((s, i) => `${i + 1}) ${s}`).join(' | ')}`);
    n.steal.forEach((s, i) => console.log(`B${i}: ${s}`));
    n.avoid.forEach((s, i) => console.log(`A${i}: ${s}`));
    console.log(`F: ${n.fit}`);
  }
}
