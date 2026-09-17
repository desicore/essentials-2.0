// Cut merged references.json to the reviewed keep-list (prefix match on id). Records drops in cut.json.
import { readFile, writeFile } from 'node:fs/promises';
const KEEP = `
Q1 refero:9859 mobbin:b360aa69 mobbin:f92f2d5a mobbin:1680974d mobbin:64f56885 mobbin:c497ddd0 refero:1843 mobbin:30fee836 mobbin:5094f489 refero:5222 refero:df769788 mobbin:715206de
Q2 refero:20c8ba7c mobbin:0135db7d mobbin:787e8052 refero:9226 mobbin:1caacacf refero:12719 mobbin:da2ca788 mobbin:399ec1b5
Q3 refero:9872 mobbin:68dd9778 mobbin:1c7e609d refero:1848 refero:9721 mobbin:1eb73c81 mobbin:d5d0e3c0 mobbin:ee06623b refero:12705 mobbin:b85c076b
Q4 mobbin:8796902e refero:9868 mobbin:671e0870 mobbin:ac5e971e mobbin:0a1650e1 refero:4117 mobbin:44fd56e6 refero:12709 refero:023aed7b mobbin:2ef394f0
Q5 mobbin:4fa0df58 mobbin:733e9406 mobbin:c0b0ead0 mobbin:68dc9ea7 mobbin:8a3407fe refero:10204 mobbin:4022cce6 refero:3371 refero:12706
Q6 refero:3492 mobbin:8a0d881c mobbin:1fe20459 mobbin:a9dbeaf9 refero:7186 mobbin:5de887fe mobbin:9a8fc4f4 mobbin:55d0a62f mobbin:f6032c78 refero:9746
`.split(/\s+/).filter(s => s.includes(':'));
const doc = JSON.parse(await readFile('references.json', 'utf8'));
const kept = [], dropped = [];
for (const r of doc.references) {
  if (!r.source) r.source = r.id.split(':')[0];
  (KEEP.some(k => r.id.startsWith(k)) ? kept : dropped).push(r);
}
const missing = KEEP.filter(k => !kept.some(r => r.id.startsWith(k)));
doc.references = kept;
await writeFile('references.json', JSON.stringify(doc, null, 2) + '\n');
await writeFile('cut.json', JSON.stringify({ kept: kept.length, dropped: dropped.map(r => ({ id: r.id, app: r.app, question: r.question, title: r.title })) }, null, 2) + '\n');
console.log('kept', kept.length, 'dropped', dropped.length, 'missing keys', missing);
console.log('products', new Set(kept.map(r => r.app)).size);
