// Prints the reader-facing text of one module.json with field paths, for review. Usage: node show-module.mjs <module>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const module = process.argv[2];
if (!module) { console.error('Usage: node show-module.mjs <module>'); process.exit(2); }
const m = JSON.parse(fs.readFileSync(path.join(path.dirname(HERE), module, 'work', 'module.json'), 'utf8'));
const out = (key, text) => console.log(`[${key}] ${text}`);
out('title', m.title); out('intro', m.intro); out('baseline', m.baseline);
m.jobs.forEach(j => out(`job ${j.id}`, `${j.title} :: ${j.description}`));
m.products.forEach(p => out(`why ${p.id}`, p.why));
m.synthesis.patterns.forEach((p, i) => out(`pattern ${i}`, `${p.title} :: ${p.body}`));
m.synthesis.open_questions.forEach((q, i) => out(`question ${i}`, q));
