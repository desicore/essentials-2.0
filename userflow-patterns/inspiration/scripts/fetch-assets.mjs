import path from 'node:path';
import { cli, readReferences, safeId, downloadImage, writeAtomic, existingAsset, fail } from './shared.mjs';

async function main() {
  const args = cli('Usage: node inspiration/scripts/fetch-assets.mjs <references.json> [--out inspiration/access-sharing/assets]', { out: { type: 'string' } });
  const data = await readReferences(args.input);
  const out = args.out ?? 'inspiration/access-sharing/assets';
  const manifest = Object.create(null);
  let downloaded = 0, skipped = 0, failed = 0;
  for (const ref of data.references) {
    manifest[ref.id] = [];
    const directory = path.join(out, safeId(ref.id));
    for (const [index, url] of ref.images.entries()) {
      try {
        let filename = await existingAsset(directory, index);
        if (filename) skipped++;
        else {
          const { buffer, ext } = await downloadImage(url);
          filename = path.join(directory, `${index}.${ext}`);
          await writeAtomic(filename, buffer);
          downloaded++;
        }
        manifest[ref.id][index] = path.relative(out, filename).split(path.sep).join('/');
      } catch (error) {
        failed++;
        manifest[ref.id][index] = null;
        console.error(`${ref.id} image ${index}: ${error.message}`);
      }
    }
  }
  await writeAtomic(path.join(out, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Assets: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed. Manifest: ${path.join(out, 'manifest.json')}`);
  if (failed) process.exitCode = 1;
}
main().catch(fail);
