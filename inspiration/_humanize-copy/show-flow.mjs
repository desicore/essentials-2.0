// Prints one flow's numbered step labels with its original and rewritten text, to check "(screen N)" references by eye.
// Usage: node show-flow.mjs <module> <product> <flow-id-prefix>   e.g. 04-recording luma 74bc6276
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const [module, product, prefix] = process.argv.slice(2);
if (!prefix) { console.error('Usage: node show-flow.mjs <module> <product> <flow-id-prefix>'); process.exit(2); }
const load = dir => JSON.parse(fs.readFileSync(path.join(dir, module, 'work', 'notes', `${product}.json`), 'utf8'));
const before = load(path.join(HERE, 'backup')), after = load(path.dirname(HERE));
const id = Object.keys(before.flows).find(k => k.split(':').pop().startsWith(prefix));
if (!id) { console.error(`No flow ${prefix} in ${product}`); process.exit(1); }
const b = before.flows[id], a = after.flows[id];
console.log(`${module} / ${product} / ${id}`);
b.steps.forEach((s, i) => console.log(`  screen ${i + 1}: ${s}  |  now: ${a.steps[i]}`));
for (const key of ['summary', 'steal', 'avoid', 'fit']) {
  const bv = [].concat(b[key] ?? []), av = [].concat(a[key] ?? []);
  bv.forEach((t, i) => console.log(`  ${key}${bv.length > 1 ? `[${i}]` : ''}\n    was: ${t}\n    now: ${av[i]}`));
}
