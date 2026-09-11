// Generates JavaScript for the Figma MCP use_figma tool from board-plan.json.
//   node figjam-gen.mjs stickies <board-plan.json> <Q1|...|Q6>          -> JS creating a sticky + label per row, resizing the section
//   node figjam-gen.mjs jobs <board-plan.json> <batchIndex> <urls.json>  -> writes inspiration/tmp/jobs-<n>.json for figjam-upload.mjs
//   node figjam-gen.mjs place <board-plan.json> <results.jsonl>          -> JS moving uploaded nodes into sections at planned x/y/w/h
import { readFile, writeFile } from 'node:fs/promises';
const [mode, planPath, a, b] = process.argv.slice(2);
const plan = JSON.parse(await readFile(planPath, 'utf8'));
const js = (s) => JSON.stringify(s);
if (mode === 'stickies') {
  const rows = plan.rows.filter(r => r.question === a);
  const sectionId = rows[0].sectionId; const height = plan.sectionHeights[a];
  const L = plan.layout;
  const items = rows.map(r => ({
    y: r.y, counter: r.counter,
    sticky: `${r.app}\n${r.take}`,
    label: `${r.source === 'mobbin' ? 'Mobbin' : 'Refero'} · ${r.kind} · ${r.title}${r.kind === 'flow' ? ` · ${Math.min(r.images.length, r.totalImages)}/${r.totalImages} steps` : ''}${r.counter ? ' · COUNTER-EXAMPLE' : ''}`,
    url: r.url,
  }));
  console.log(`const section = await figma.getNodeByIdAsync(${js(sectionId)});
section.resize(${L.PAD + 40 + L.STICKY_W + 40 + 8 * 296 + 60}, ${Math.max(height, 400)});
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
const BLUE = { r: 0xA8/255, g: 0xDA/255, b: 0xFF/255 }, RED = { r: 0xFF/255, g: 0xB8/255, b: 0xA8/255 };
const items = ${js(items)};
const created = [];
for (const it of items) {
  const s = figma.createSticky();
  await figma.loadFontAsync(s.text.fontName);
  s.text.characters = it.sticky;
  s.fills = [{ type: 'SOLID', color: it.counter ? RED : BLUE }];
  s.authorVisible = false;
  section.appendChild(s);
  s.x = ${L.PAD}; s.y = it.y;
  const t = figma.createText();
  t.fontName = { family: 'Inter', style: 'Regular' };
  t.fontSize = 18;
  t.characters = it.label;
  t.setRangeHyperlink(0, it.label.length, { type: 'URL', value: it.url });
  section.appendChild(t);
  t.x = ${L.IMG_X}; t.y = it.y;
  created.push(s.id, t.id);
}
return { createdNodeIds: created, count: items.length };`);
} else if (mode === 'jobs') {
  const batch = plan.batches[Number(a)];
  const urls = JSON.parse(await readFile(b, 'utf8'));
  const list = Array.isArray(urls) ? urls : urls.uploads.map(u => u.submitUrl);
  if (list.length < batch.length) throw new Error(`need ${batch.length} urls, got ${list.length}`);
  const jobs = batch.map((it, i) => ({ submitUrl: list[i], src: it.src, name: it.name }));
  const out = `inspiration/tmp/jobs-${a}.json`;
  await writeFile(out, JSON.stringify(jobs));
  console.log(out, jobs.length);
} else if (mode === 'place') {
  const lines = (await readFile(a, 'utf8')).trim().split('\n').map(l => JSON.parse(l));
  const byName = {}; for (const r of plan.rows) for (const im of r.images) byName[`r${r.ri}_i${im.i}`] = { row: r, im };
  const moves = []; const failed = [];
  for (const l of lines) {
    const key = (l.name || '').replace(/\.[a-z0-9]+$/i, '');
    let nodeId = null; try { nodeId = JSON.parse(l.body).placedOnNodeId; } catch {}
    const t = byName[key];
    if (!nodeId || !t) { failed.push(l.name); continue; }
    moves.push({ nodeId, sectionId: t.row.sectionId, x: t.im.x, y: t.im.y, w: t.im.w, h: t.im.h, name: `${t.row.app} · ${t.row.title} · ${t.im.i + 1}` });
  }
  console.error(JSON.stringify({ moves: moves.length, failed }));
  console.log(`const moves = ${js(moves)};
const moved = [], missing = [];
for (const m of moves) {
  const n = await figma.getNodeByIdAsync(m.nodeId);
  if (!n) { missing.push(m.nodeId); continue; }
  const sec = await figma.getNodeByIdAsync(m.sectionId);
  sec.appendChild(n);
  n.resize(m.w, m.h);
  n.x = m.x; n.y = m.y; n.name = m.name;
  moved.push(n.id);
}
return { mutatedNodeIds: moved, missing };`);
}
