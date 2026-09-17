// Converts every .webp under the assets dir to a sibling .png (Figma cannot read WebP metadata). Idempotent.
import { readdir, stat } from 'node:fs/promises'; import { existsSync } from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const dir = process.argv[2]; let n = 0, skipped = 0;
async function walk(d) { for (const e of await readdir(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) await walk(p); else if (/\.webp$/i.test(e.name)) { const out = p.replace(/\.webp$/i, '.png'); if (existsSync(out)) { skipped++; continue; } await sharp(p).png().toFile(out); n++; } } }
await walk(dir); console.log(JSON.stringify({ converted: n, skipped }));
