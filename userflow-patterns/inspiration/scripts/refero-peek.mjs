#!/usr/bin/env node
// Peek at screen details in batches of 10. Usage: node refero-peek.mjs <uuid> <uuid> ...
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const cli = path.join(path.dirname(fileURLToPath(import.meta.url)), 'refero-mcp.mjs');
const ids = process.argv.slice(2);
const N = Number(process.env.PEEK_LEN || 380);
for (let i = 0; i < ids.length; i += 10) {
  const batch = ids.slice(i, i + 10);
  const out = execFileSync('node', [cli, 'call', 'refero_get_screen', JSON.stringify({ screen_ids: batch, response_format: 'json' })], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const r = JSON.parse(out);
  const arr = r.screens || r.records || (Array.isArray(r) ? r : [r]);
  for (const s of arr) {
    const c = s.content || {};
    const fn = (c.functions || '').replace(/\s+/g, ' ');
    console.log(`\n## ${s.uuid} | ${s.site?.name} | ${(s.page_url || '').slice(0, 80)}`);
    console.log(`   flows: ${(s.flows || []).map((f) => `${f.id}:${f.name}`).join('; ').slice(0, 160)}`);
    console.log(`   ${fn.slice(0, N)}`);
  }
}
