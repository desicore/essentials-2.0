import path from 'node:path';
import sharp from 'sharp';
import { cli, readReferences, safeId, existingAsset, writeAtomic, fail } from './shared.mjs';

async function main() {
  const args = cli('Usage: node inspiration/scripts/crop.mjs <references.json> [--assets dir] [--out dir/cropped]', {
    assets: { type: 'string' }, out: { type: 'string' },
  });
  const data = await readReferences(args.input);
  const assets = args.assets ?? 'inspiration/access-sharing/assets';
  const out = args.out ?? path.join(assets, 'cropped');
  let cropped = 0, skipped = 0, failed = 0;
  for (const ref of data.references) {
    if (!ref.crop) { skipped++; continue; }
    try {
      const match = /^(\d+):(\d+),(\d+),(\d+),(\d+)$/.exec(ref.crop);
      if (!match) throw new Error('crop must be imageIndex:x,y,w,h with non-negative integers.');
      const [index, left, top, width, height] = match.slice(1).map(Number);
      if (![index, left, top, width, height].every(Number.isSafeInteger) || width < 1 || height < 1) throw new Error('Invalid crop dimensions.');
      if (index >= ref.images.length) throw new Error(`Image index ${index} is outside images array.`);
      const id = safeId(ref.id);
      const filename = await existingAsset(path.join(assets, id), index);
      if (!filename) throw new Error(`Missing asset ${id}/${index}.*; run fetch-assets first.`);
      const metadata = await sharp(filename).metadata();
      if (left + width > metadata.width || top + height > metadata.height) throw new Error(`Crop exceeds image bounds (${metadata.width} × ${metadata.height}).`);
      const buffer = await sharp(filename).extract({ left, top, width, height }).png().toBuffer();
      await writeAtomic(path.join(out, `${id}-${index}.png`), buffer);
      cropped++;
    } catch (error) { failed++; console.error(`${ref.id}: ${error.message}`); }
  }
  console.log(`Crops: ${cropped} written, ${skipped} without crop, ${failed} failed. Output: ${out}`);
  if (failed) process.exitCode = 1;
}
main().catch(fail);
