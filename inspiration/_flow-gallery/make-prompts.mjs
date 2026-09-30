// Regenerates inspiration/<SLUG>/_prompt.md = headers/<SLUG>.md (minus its vars comment) + shared-block.md with {{VARS}} filled in.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const shared = await fs.readFile(path.join(here, 'shared-block.md'), 'utf8');
for (const file of (await fs.readdir(path.join(here, 'headers'))).filter(f => f.endsWith('.md')).sort()) {
  const header = await fs.readFile(path.join(here, 'headers', file), 'utf8');
  const block = header.match(/<!--\s*vars\n([\s\S]*?)-->\n?/);
  if (!block) throw new Error(`${file}: missing <!-- vars ... --> block`);
  const vars = Object.fromEntries(block[1].trim().split('\n').map(line => { const i = line.indexOf(':'); return [line.slice(0, i).trim(), line.slice(i + 1).trim()]; }));
  const text = (header.replace(block[0], '').trimEnd() + '\n' + shared).replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in vars)) throw new Error(`${file}: no value for {{${key}}}`);
    return vars[key];
  });
  const out = path.join(here, '..', vars.SLUG, '_prompt.md');
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, text);
  console.log(`${path.relative(path.join(here, '..'), out)} (${text.length} chars)`);
}
