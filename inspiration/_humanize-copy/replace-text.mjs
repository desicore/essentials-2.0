// Review edits: exact text replacements in one source file. Each "old" must occur exactly once.
// Usage: node replace-text.mjs <file> <pairs.json>    pairs.json = [["old", "new"], ...]
// JSON sources are checked to still parse after the edit.
import fs from 'node:fs';

const [file, pairsFile] = process.argv.slice(2);
let text = fs.readFileSync(file, 'utf8');
const pairs = JSON.parse(fs.readFileSync(pairsFile, 'utf8'));
for (const [from, to] of pairs) {
  const n = text.split(from).length - 1;
  if (n !== 1) { console.error(`expected 1 match, found ${n}: ${from.slice(0, 90)}`); process.exit(1); }
  text = text.replace(from, () => to);
}
if (file.endsWith('.json')) JSON.parse(text);
fs.writeFileSync(file, text);
console.log(`${file}: ${pairs.length} replacements`);
