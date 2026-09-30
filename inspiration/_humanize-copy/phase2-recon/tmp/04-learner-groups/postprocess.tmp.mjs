// Run after the shared report builder. Keeps the previous module untouched.
import fs from 'node:fs/promises';
const mod = new URL('file:///Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/courses/04-learner-groups/');
const report = new URL('file:///Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/_humanize-copy/phase2-recon/tmp/04-learner-groups/04-learner-groups.html');
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
