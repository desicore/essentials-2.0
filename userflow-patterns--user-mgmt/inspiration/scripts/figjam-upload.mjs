// Usage: node scripts/figjam-upload.mjs <jobs.json>
// jobs.json = [{ "submitUrl": "...", "src": "<local path or https url>", "name": "layer-name.png" }]
// POSTs each image as multipart/form-data to a Figma upload_assets submit URL. Prints one JSON line per job.
import { readFile } from 'node:fs/promises';
const jobs = JSON.parse(await readFile(process.argv[2], 'utf8'));
const results = await Promise.all(jobs.map(async (job) => {
  try {
    let bytes, type = 'image/png';
    if (/^https?:/.test(job.src)) {
      const r = await fetch(job.src, { redirect: 'follow' });
      if (!r.ok) throw new Error(`src ${r.status}`);
      type = r.headers.get('content-type')?.split(';')[0] || type;
      bytes = new Uint8Array(await r.arrayBuffer());
    } else {
      bytes = new Uint8Array(await readFile(job.src));
      if (/\.jpe?g$/i.test(job.src)) type = 'image/jpeg';
      else if (/\.webp$/i.test(job.src)) type = 'image/webp';
      else if (/\.gif$/i.test(job.src)) type = 'image/gif';
    }
    const fd = new FormData();
    fd.append('file', new Blob([bytes], { type }), job.name || 'image.png');
    const r = await fetch(job.submitUrl, { method: 'POST', body: fd });
    const text = await r.text();
    return { name: job.name, status: r.status, body: text.slice(0, 400) };
  } catch (e) { return { name: job.name, error: String(e) }; }
}));
for (const r of results) console.log(JSON.stringify(r));
