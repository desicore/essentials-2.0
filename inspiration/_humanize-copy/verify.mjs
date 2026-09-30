// Compares rewritten module JSON against backup/ and flags leftover style problems.
// Usage: node verify.mjs <module>|all [--details]
//        node verify.mjs phase2 <report>|all [--details]   (see verify-phase2.mjs)
// Exit 1 on structural changes, unparsable JSON, or unaccepted style flags (see accepted.json).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const INSP = path.dirname(HERE);
const BACKUP = path.join(HERE, 'backup');
const MODULES = ['03-scenario-manager', '04-recording', '05-inventory', '06-scheduling', '07-reports', '08-debrief-review', '09-mobile-ipad', '10-dashboard'];

const args = process.argv.slice(2);
const target = args.find(a => !a.startsWith('--'));
const details = args.includes('--details');
if (!target) { console.error('Usage: node verify.mjs <module>|all [--details]'); process.exit(2); }
const modules = target === 'all' ? MODULES : [MODULES.find(m => m === target || m.startsWith(target + '-')) ?? target];

const guide = fs.readFileSync(path.join(HERE, 'style-guide.md'), 'utf8');
const wordList = label => (guide.match(new RegExp(`^${label}:(.*)$`, 'm'))?.[1] ?? '').split(',').map(s => s.trim()).filter(Boolean);
const toRegex = words => words.map(w => ({ w, re: new RegExp(`(?<![\\w-])${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s+')}(?![\\w-])`, /[A-Z]{2}/.test(w) ? 'g' : 'gi') }));
const BANNED = toRegex(wordList('Banned'));
const CHECK = toRegex(wordList('Allowed when explained or unavoidable \\(flagged as "check" only, not an error\\)'));
const ABBR = ['SRV', 'PTZ', 'SP', 'SCE', 'OSCE', 'LMS', 'SSO', 'EMR', 'KPI', 'GDPR', 'OCR', 'PO', 'POS', 'AV', 'STT', 'PTT', 'ICS', 'MVP', 'RSVP'];
const WRITE_OUT = ['LS', 'OT', 'NL'];

const acceptedFile = path.join(HERE, 'accepted.json');
const accepted = fs.existsSync(acceptedFile) ? JSON.parse(fs.readFileSync(acceptedFile, 'utf8')) : {};

const MODULE_TEXT = [/^title$/, /^intro$/, /^baseline$/, /^jobs\.\d+\.(title|description)$/, /^products\.\d+\.why$/, /^synthesis\.patterns\.\d+\.(title|body)$/, /^synthesis\.open_questions\.\d+$/];
const NOTE_TEXT = [/^flows\.[^]+\.(summary|fit)$/, /^flows\.[^]+\.(steps|steal|avoid)\.\d+$/];

// Deep-compare with key order; only rewritable string paths may differ.
function compare(before, after, rewritable, p, errors) {
  const where = p || '(root)';
  if (rewritable.some(re => re.test(p))) {
    if (typeof after !== 'string') errors.push(`${where}: expected a string`);
    else if (String(before).trim() && !after.trim()) errors.push(`${where}: became empty`);
    return;
  }
  if (Array.isArray(before)) {
    if (!Array.isArray(after)) return errors.push(`${where}: no longer an array`);
    if (before.length !== after.length) return errors.push(`${where}: length ${before.length} -> ${after.length}`);
    before.forEach((b, i) => compare(b, after[i], rewritable, p ? `${p}.${i}` : String(i), errors));
    return;
  }
  if (before && typeof before === 'object') {
    if (!after || typeof after !== 'object' || Array.isArray(after)) return errors.push(`${where}: no longer an object`);
    const bk = Object.keys(before), ak = Object.keys(after);
    if (bk.join('\u0000') !== ak.join('\u0000')) return errors.push(`${where}: keys changed [${bk.join(',')}] -> [${ak.join(',')}]`);
    for (const k of bk) compare(before[k], after[k], rewritable, p ? `${p}.${k}` : k, errors);
    return;
  }
  if (before !== after) errors.push(`${where}: ${JSON.stringify(before)} -> ${JSON.stringify(after)}`);
}
function parse(file, errors) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { errors.push(`${path.basename(file)}: ${e.code === 'ENOENT' ? 'missing' : 'invalid JSON (' + e.message + ')'}`); return null; }
}

// Reading order of the built page: intro, baseline, synthesis, open questions, jobs, then products top to bottom.
function textsInOrder(mod, notesByProduct) {
  const out = [];
  const push = (loc, text) => { if (typeof text === 'string' && text.trim()) out.push({ loc, text }); };
  push('module.title', mod.title); push('module.intro', mod.intro); push('module.baseline', mod.baseline);
  (mod.synthesis?.patterns ?? []).forEach((p, i) => { push(`pattern[${i}].title`, p.title); push(`pattern[${i}].body`, p.body); });
  (mod.synthesis?.open_questions ?? []).forEach((q, i) => push(`open_question[${i}]`, q));
  (mod.jobs ?? []).forEach(j => { push(`job ${j.id}.title`, j.title); push(`job ${j.id}.description`, j.description); });
  for (const product of mod.products ?? []) {
    push(`${product.id}.why`, product.why);
    const flows = notesByProduct.get(product.id)?.flows ?? {};
    for (const id of product.flows ?? []) {
      const n = flows[id]; if (!n) continue;
      const tag = `${product.id} ${id.split(':').pop().slice(0, 8)}`;
      push(`${tag}.summary`, n.summary);
      (n.steal ?? []).forEach((s, i) => push(`${tag}.steal[${i}]`, s));
      (n.avoid ?? []).forEach((s, i) => push(`${tag}.avoid[${i}]`, s));
      push(`${tag}.fit`, n.fit);
      (n.steps ?? []).forEach((s, i) => push(`${tag}.steps[${i}]`, s));
    }
  }
  return out;
}

const words = s => (s.match(/[\p{L}\p{N}][\p{L}\p{N}'’/.-]*/gu) ?? []).length;
const stripQuoted = s => s.replace(/(^|[\s(\[\/])'(.+?)'(?=$|[\s).,;:!?\]\/])/g, '$1Q').replace(/"[^"]*"/g, 'Q');
const sentences = s => s.split(/(?<=[.!?])\s+(?=[A-Z'"(\d])/);

function styleFlags(module, items, extraAbbr = []) {
  const flags = [], info = new Map();
  const add = (kind, loc, snippet) => flags.push({ kind, loc, snippet });
  const firstSeen = new Map();
  for (const { loc, text } of items) {
    const plain = stripQuoted(text);
    for (const s of sentences(text)) if (words(s) > 30) add('long', loc, `${words(s)}w: ${s}`);
    for (const { w, re } of BANNED) for (const m of plain.matchAll(re)) add('banned', loc, `"${m[0]}" in: ${text}`);
    for (const { w, re } of CHECK) for (const _ of plain.matchAll(re)) info.set(w, (info.get(w) ?? 0) + 1);
    if (/\(steps? [^)]*\)/i.test(text)) add('stepref', loc, text);
    if (/[—→]|\s–\s/.test(plain)) add('dash', loc, text);
    if (/[“”‘’]/.test(text)) add('curly', loc, text);
    for (const a of [...ABBR, ...extraAbbr]) {
      if (firstSeen.has(a)) continue;
      const m = plain.match(new RegExp(`\\(?\\b${a}s?\\b`));
      if (!m) continue;
      firstSeen.set(a, true);
      if (!m[0].startsWith('(')) add('abbr', loc, `${a} first used without expansion: ${text}`);
    }
    for (const a of WRITE_OUT) if (new RegExp(`\\b${a}\\b`).test(plain)) add('abbr', loc, `${a} should be written out: ${text}`);
  }
  const acc = [...(accepted.all ?? []), ...(accepted[module] ?? [])];
  for (const f of flags) f.accepted = acc.some(a => f.snippet.includes(a) || f.loc === a);
  return { flags, info };
}

// Original notes mixed 0-based and 1-based step numbers; the page shows screens from 1.
// Numbering is inferred per flow (a 0 or a number past the last step means 0-based; the last
// step's number means 1-based), else from other flows in the same file. Some flows mix both, so a
// mismatch is only 'screen?' (review with show-flow.mjs); a number outside 1..steps is an error.
const refNums = text => {
  const out = [];
  for (const m of text.matchAll(/\((?:steps?|screens?) ([^)]*)\)/gi)) {
    for (const part of m[1].split(/[,/]|\band\b/)) {
      const range = part.match(/(\d+)\s*(?:[–-]|to)\s*(\d+)/);
      if (range) for (let i = +range[1]; i <= +range[2]; i++) out.push(i);
      else if (/\d/.test(part)) out.push(+part.match(/\d+/)[0]);
    }
  }
  return out;
};
const norm = s => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
// "(step Record menu)" -> 1-based position of the step label it names.
const labelRefs = (text, steps) => {
  const out = [], labels = steps.map(norm);
  for (const m of text.matchAll(/\(steps? ([^)]*)\)/gi)) {
    for (const part of m[1].split(/[,;/+]| and /)) {
      const ref = norm(part); if (!ref || /^\d/.test(ref)) continue;
      labels.forEach((l, i) => { if (l.startsWith(ref.slice(0, 14)) || ref.startsWith(l.slice(0, 14))) out.push(i + 1); });
    }
  }
  return out;
};
const flowText = n => [n.summary, ...(n.steal ?? []), ...(n.avoid ?? []), n.fit].join(' ');
function screenFlags(before, after, file) {
  const flags = [], flows = Object.entries(before.flows ?? {});
  const baseOf = ([, n]) => { const r = refNums(flowText(n)), L = n.steps.length; if (!r.length) return undefined; if (r.includes(0) || Math.max(...r) > L) return 0; if (Math.max(...r) === L) return 1; return null; };
  const known = flows.map(baseOf).filter(b => b === 0 || b === 1);
  const fileBase = known.length && known.every(b => b === known[0]) ? known[0] : null;
  for (const entry of flows) {
    const [id, n] = entry, a = after.flows?.[id]; if (!a) continue;
    let base = baseOf(entry); if (base === undefined) base = fileBase; if (base === null) base = fileBase;
    const orig = refNums(flowText(n)), now = refNums(flowText(a)), L = n.steps.length;
    const loc = `${before.product} ${id.split(':').pop().slice(0, 8)}`;
    const over = now.filter(x => x < 1 || x > L);
    if (over.length) { flags.push({ kind: 'screen', loc, snippet: `screen ${over.join(',')} outside 1-${L} (${file})` }); continue; }
    if (!orig.length || !now.length) continue;
    if (base === null || base === undefined) { flags.push({ kind: 'screen?', loc, snippet: `numbering unclear; original ${[...new Set(orig)]} now ${[...new Set(now)]}; check against step labels (${file})` }); continue; }
    const expected = new Set([...orig.map(x => x + (base === 0 ? 1 : 0)), ...labelRefs(flowText(n), n.steps)]);
    const bad = now.filter(x => !expected.has(x));
    if (bad.length) flags.push({ kind: 'screen?', loc, snippet: `original looks ${base}-based ${[...new Set(orig)]}; expected ${[...expected]}, found ${[...new Set(bad)]} (${file})` });
  }
  return flags;
}

if (target === 'phase2') {
  const { run } = await import('./verify-phase2.mjs');
  process.exit(await run({ INSP, HERE, args, styleFlags, words }));
}

let failed = false;
for (const module of modules) {
  const errors = [];
  const bDir = path.join(BACKUP, module, 'work'), cDir = path.join(INSP, module, 'work');
  if (!fs.existsSync(bDir)) { console.log(`${module}: no backup`); failed = true; continue; }
  const bMod = parse(path.join(bDir, 'module.json'), errors), cMod = parse(path.join(cDir, 'module.json'), errors);
  if (bMod && cMod) compare(bMod, cMod, MODULE_TEXT, '', errors);
  const bNotes = fs.readdirSync(path.join(bDir, 'notes')).filter(f => f.endsWith('.json')).sort();
  const cNotes = fs.readdirSync(path.join(cDir, 'notes')).filter(f => f.endsWith('.json')).sort();
  if (bNotes.join() !== cNotes.join()) errors.push(`notes files changed: [${bNotes}] -> [${cNotes}]`);
  const before = new Map(), after = new Map(), screens = [];
  for (const f of bNotes) {
    const b = parse(path.join(bDir, 'notes', f), errors), c = parse(path.join(cDir, 'notes', f), errors);
    if (!b || !c) continue;
    const e = []; compare(b, c, NOTE_TEXT, '', e); errors.push(...e.map(x => `notes/${f} ${x}`));
    before.set(b.product, b); after.set(c.product, c);
    if (!e.length) screens.push(...screenFlags(b, c, `notes/${f}`));
  }
  const wBefore = bMod ? textsInOrder(bMod, before).reduce((n, t) => n + words(t.text), 0) : 0;
  const itemsAfter = cMod ? textsInOrder(cMod, after) : [];
  const wAfter = itemsAfter.reduce((n, t) => n + words(t.text), 0);
  const { flags, info } = styleFlags(module, itemsAfter);
  const acc = [...(accepted.all ?? []), ...(accepted[module] ?? [])];
  for (const s of screens) { s.accepted = acc.some(a => s.snippet.includes(a) || s.loc === a); flags.push(s); }
  const open = flags.filter(f => !f.accepted && f.kind !== 'screen?');
  const unclear = flags.filter(f => !f.accepted && f.kind === 'screen?');
  const count = kind => open.filter(f => f.kind === kind).length;
  const kinds = ['long', 'banned', 'stepref', 'dash', 'curly', 'abbr', 'screen'];
  const status = errors.length ? 'STRUCTURE FAIL' : open.length ? 'flags' : 'OK';
  if (errors.length || open.length) failed = true;
  console.log(`${module}: ${status} | words ${wBefore} -> ${wAfter} | ${kinds.map(k => `${k} ${count(k)}`).join(', ')} | unclear-screens ${unclear.length} | accepted ${flags.filter(f => f.accepted).length}`);
  if (info.size) console.log(`  check-words: ${[...info].sort((a, b) => b[1] - a[1]).map(([w, n]) => `${w} ${n}`).join(', ')}`);
  for (const e of errors.slice(0, details ? Infinity : 10)) console.log(`  ERROR ${e}`);
  if (!details && errors.length > 10) console.log(`  ... ${errors.length - 10} more errors`);
  if (details) for (const f of [...open, ...unclear]) console.log(`  [${f.kind}] ${f.loc}: ${f.snippet.length > 220 ? f.snippet.slice(0, 217) + '...' : f.snippet}`);
}
process.exit(failed ? 1 : 0);
