// Run after the shared report builder. Keeps the previous module untouched.
import fs from 'node:fs/promises';
const mod = new URL('./', import.meta.url);
const report = new URL('../04-learner-groups.html', mod);
const doc = JSON.parse(await fs.readFile(new URL('references.json', mod), 'utf8'));
const synthesis = await fs.readFile(new URL('synthesis.html', mod), 'utf8');
let html = await fs.readFile(report, 'utf8');
if (html.includes('id="synthesis"')) throw new Error('Rebuild report before postprocessing');
html = html.replace('</header>', `</header>\n${synthesis}`);
let index = 0;
html = html.replace(/<article class="card"/g, () => {
  const ref = doc.references[index++];
  return `<article id="${ref.id}" class="card"`;
});
if (index !== doc.references.length) throw new Error('Reference card count mismatch');
await fs.writeFile(report, html);
console.log(`Inserted synthesis and ${index} reference anchors`);
