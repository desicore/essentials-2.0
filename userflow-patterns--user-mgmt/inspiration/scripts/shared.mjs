import { readFile, mkdir, writeFile, rename, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';

export function cli(usage, options) {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: { help: { type: 'boolean', short: 'h' }, ...options },
  });
  if (values.help) { console.log(usage); process.exit(0); }
  if (positionals.length !== 1) throw new Error(usage);
  return { input: positionals[0], ...values };
}

export const string = (value, fallback = '') => typeof value === 'string' ? value : fallback;

export async function readReferences(input) {
  const data = JSON.parse(await readFile(input, 'utf8'));
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Expected a JSON object.');
  if (data.references != null && !Array.isArray(data.references)) throw new Error('references must be an array.');
  if (data.questions != null && !Array.isArray(data.questions)) throw new Error('questions must be an array.');
  const ids = new Set();
  const questions = (data.questions ?? []).map((q, i) => {
    const id = string(q?.id).trim() || `Q${i + 1}`;
    if (ids.has(id)) throw new Error(`Duplicate question id: ${id}`);
    ids.add(id);
    return { id, title: string(q?.title) || id, answer: string(q?.answer) };
  }).sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
  const refIds = new Set();
  const references = (data.references ?? []).map((ref, i) => {
    const id = string(ref?.id).trim() || `reference-${i + 1}`;
    if (refIds.has(id)) throw new Error(`Duplicate reference id: ${id}`);
    refIds.add(id);
    return {
      id, source: ['mobbin', 'refero'].includes(ref?.source) ? ref.source : 'unknown',
      app: string(ref?.app) || 'Unknown app', title: string(ref?.title) || 'Untitled reference',
      kind: ['flow', 'screen'].includes(ref?.kind) ? ref.kind : 'screen',
      url: string(ref?.url), images: Array.isArray(ref?.images) ? ref.images.map(url => string(url)) : [],
      question: string(ref?.question), take: string(ref?.take),
      counter_example: ref?.counter_example === true, selected: ref?.selected === true,
      crop: string(ref?.crop).trim(),
    };
  });
  return { module: string(data.module), title: string(data.title) || 'Design references', intro: string(data.intro), questions, references };
}

// Percent encoding preserves uniqueness and prevents IDs from becoming path segments.
export function safeId(id) { return encodeURIComponent(id).replace(/\./g, '%2E'); }

export function httpUrl(value) {
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
  catch { return ''; }
}

const imageTypes = {
  'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif',
  'image/avif': 'avif', 'image/svg+xml': 'svg', 'image/tiff': 'tif',
  'image/bmp': 'bmp', 'image/x-icon': 'ico',
};

export async function downloadImage(url) {
  if (!httpUrl(url)) throw new Error(`Expected an HTTP(S) image URL: ${url || '(empty)'}`);
  let lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const mime = (response.headers.get('content-type') ?? '').split(';')[0].trim().toLowerCase();
      if (!imageTypes[mime]) throw new Error(`Unsupported image content type: ${mime || '(missing)'}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      if (!buffer.length) throw new Error('Empty image response');
      return { buffer, mime, ext: imageTypes[mime] };
    } catch (error) {
      lastError = error;
      if (attempt < 2) await new Promise(resolve => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }
  throw new Error(`${url}: ${lastError.message}`);
}

export async function writeAtomic(filename, contents) {
  await mkdir(path.dirname(filename), { recursive: true });
  const temporary = `${filename}.${process.pid}.tmp`;
  await writeFile(temporary, contents);
  await rename(temporary, filename);
}

export async function existingAsset(directory, index) {
  let files;
  try { files = await readdir(directory); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
  const matches = files.filter(file => file.startsWith(`${index}.`) && Object.values(imageTypes).includes(path.extname(file).slice(1)));
  const valid = [];
  for (const file of matches) {
    const filename = path.join(directory, file);
    const info = await stat(filename);
    if (info.isFile() && info.size > 0) valid.push(filename);
  }
  if (valid.length > 1) throw new Error(`Multiple assets for image ${index} in ${directory}; remove the stale file.`);
  return valid[0] ?? null;
}

export function fail(error) { console.error(`Error: ${error.message}`); process.exitCode = 1; }
