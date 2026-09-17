import { readFile } from 'node:fs/promises';
const d = JSON.parse(await readFile('inspiration/access-sharing/mobbin.Q1-Q2.json','utf8'));
const urls = [d[0].images[0], d[5].images[0]];
for (const u of urls) { const r = await fetch(u, { redirect: 'follow' }); console.log(r.status, r.headers.get('content-type'), r.url.slice(0, 90), (await r.arrayBuffer()).byteLength); }
