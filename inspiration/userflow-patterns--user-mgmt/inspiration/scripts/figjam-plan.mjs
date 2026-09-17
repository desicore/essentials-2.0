// Usage: node inspiration/scripts/figjam-plan.mjs <references.json> <assets/manifest.json> <sections.json> [--max-steps 8] [--out board-plan.json]
// sections.json = { "Q1": "6:7", ... }. Produces board-plan.json with a row per reference (sticky text, label, image slots with
// section-local x/y/w/h) and upload batches (<=60 images each) with names that encode ref index + image index.
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import sharp from 'sharp';
const [refsPath, manifestPath, sectionsPath] = process.argv.slice(2);
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const MAX_STEPS = Number(arg('--max-steps', 8));
const out = arg('--out', path.join(path.dirname(refsPath), 'board-plan.json'));
const refs = JSON.parse(await readFile(refsPath, 'utf8')).references;
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const sections = JSON.parse(await readFile(sectionsPath, 'utf8'));
const assetsDir = path.dirname(manifestPath);
const PAD = 60, STICKY_W = 480, STICKY_H = 240, IMG_X = PAD + STICKY_W + 40, IMG_W = 280, IMG_GAP = 16, LABEL_H = 44, ROW_GAP = 80, TOP = 140;
const yBySection = {}; const rows = []; const uploads = [];
const localPaths = (id) => { const m = manifest[id]; if (!m) return []; return (Array.isArray(m) ? m : Object.values(m)).filter(Boolean); };
refs.forEach((r, ri) => {
  const sec = sections[r.question]; if (!sec) { console.error('no section for', r.question, r.id); return; }
  const y = yBySection[r.question] ?? TOP;
  const paths = localPaths(r.id).map(p => path.isAbsolute(p) ? p : path.resolve(assetsDir, p)).map(p => { const png = p.replace(/\.webp$/i, '.png'); return (png !== p && existsSync(png)) ? png : p; }).slice(0, MAX_STEPS);
  const row = { ri, id: r.id, question: r.question, sectionId: sec, y, app: r.app, source: r.source, kind: r.kind, title: r.title, url: r.url,
    take: r.take, counter: !!r.counter_example, totalImages: r.images.length, images: [] };
  rows.push(row);
  uploads.push({ row, paths });
  yBySection[r.question] = y; // finalized after dims
});
// image dims
let maxH = {};
for (const u of uploads) {
  let x = IMG_X; let rowH = STICKY_H;
  for (let i = 0; i < u.paths.length; i++) {
    let w = IMG_W, h = Math.round(IMG_W * 0.66);
    try { const m = await sharp(u.paths[i]).metadata(); if (m.width && m.height) h = Math.round(IMG_W * m.height / m.width); } catch (e) { console.error('dim fail', u.paths[i]); }
    if (h > 700) { h = 700; w = IMG_W; }
    u.row.images.push({ i, path: u.paths[i], x, y: u.row.y + LABEL_H, w, h });
    x += w + IMG_GAP; rowH = Math.max(rowH, h + LABEL_H);
  }
  u.row.h = rowH;
}
// assign y per section sequentially
const cursor = {};
for (const row of rows) {
  const y = cursor[row.question] ?? TOP;
  const dy = y - row.y; row.y = y; row.images.forEach(im => im.y += dy);
  cursor[row.question] = y + row.h + ROW_GAP;
}
const sectionHeights = Object.fromEntries(Object.entries(cursor).map(([q, y]) => [q, y + PAD]));
// upload batches
const all = rows.flatMap(row => row.images.map(im => ({ name: `r${row.ri}_i${im.i}.${path.extname(im.path).slice(1) || 'png'}`, src: im.path, ri: row.ri, i: im.i })));
const batches = []; for (let i = 0; i < all.length; i += 60) batches.push(all.slice(i, i + 60));
await writeFile(out, JSON.stringify({ layout: { PAD, STICKY_W, STICKY_H, IMG_X }, sectionHeights, rows, batches }, null, 1));
console.log(JSON.stringify({ rows: rows.length, images: all.length, batches: batches.length, sectionHeights }));
