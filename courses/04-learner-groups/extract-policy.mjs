// Keep only Basecamp's explicit policy preview; preserve source sequence assets.
import fs from 'node:fs/promises';
const dir = new URL('./', import.meta.url);
const id = 'mobbin:03d638de-71a2-4fdd-a4a9-19fb51e82492';
const refsPath = new URL('references.json', dir);
const refs = JSON.parse(await fs.readFile(refsPath, 'utf8'));
const raw = JSON.parse(await fs.readFile(new URL('mobbin.Q1-Q2.json', dir), 'utf8'));
const source = (Array.isArray(raw) ? raw : raw.references).find(r => r.id === id);
const ref = refs.references.find(r => r.id === id);
ref.images = [source.images[1]];
ref.kind = 'screen';
const mp = new URL('assets/manifest.json', dir);
const manifest = JSON.parse(await fs.readFile(mp, 'utf8'));
const local = `${encodeURIComponent(id)}/1.jpg`;
await fs.access(new URL(`assets/${local.replaceAll('%','%25')}`, dir));
manifest[id] = [local];
await fs.writeFile(mp, JSON.stringify(manifest, null, 2));
await fs.writeFile(refsPath, JSON.stringify(refs, null, 2));
