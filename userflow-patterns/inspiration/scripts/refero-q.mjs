#!/usr/bin/env node
// Ad-hoc compact search. Usage: node refero-q.mjs flows|screens "<query>" [page]
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const cli = path.join(path.dirname(fileURLToPath(import.meta.url)), 'refero-mcp.mjs');
const [kind, query, page] = process.argv.slice(2);
const tool = kind === 'flows' ? 'refero_search_flows' : 'refero_search_screens';
const args = { query, platform: 'web', response_format: 'json' };
if (page) args.page = Number(page);
const r = JSON.parse(execFileSync('node', [cli, 'call', tool, JSON.stringify(args)], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }));
const short = (s, n) => (s || '').replace(/\s+/g, ' ').slice(0, n);
console.log(`=== ${kind.toUpperCase()}: ${query} (total ${r.pagination?.total_count})`);
for (const rec of r.records || []) {
  if (kind === 'flows') {
    console.log(`F#${rec.id} | ${rec.site?.name} | ${rec.name} | ${rec.screens_count} steps | ${short(rec.description, 150)}`);
    console.log(`   steps: ${short((rec.steps || []).join(' > '), 170)}`);
  } else {
    console.log(`S ${rec.uuid} | ${rec.site?.name} | ux: ${(rec.ux_patterns || []).join(',')} | ${short(rec.content?.description, 150)}`);
  }
}
