// Phase 2 checks (Courses 01-09, User management R1/R2/shortlist, index). Loaded by verify.mjs.
// Usage: node verify.mjs phase2 <report>|all [--details]    reports: courses-01..courses-09, r1, r2, shortlist, index
//        node verify.mjs phase2 baseline                      (records built-page stats once, before any edit)
import fs from 'node:fs';
import path from 'node:path';

const EXTRA_ABBR = ['LDAP', 'SCIM', 'SAML', 'LTI', 'NRPS', 'IdP', 'MFA', 'RBAC', 'SIS', 'API', 'OIDC', 'SCORM', 'LRS', 'JIT'];
// Researcher shorthand found in Phase 2 review; checked on top of the style guide's banned list.
const EXTRA_BANNED = ['counterexamples?', 'converge pass', 'analogues?', 'net-new', 'unverified', 'cohort sync', 'curated', 'merged candidates', 'raw material']
  .map(w => new RegExp(`(?<![\\w-])${w}(?![\\w-])`, 'gi'));
const UM = 'userflow-patterns--user-mgmt/inspiration';
const UI = `${UM}/university-identity`;
const COURSES = {
  '01': ['01-objectives-outcomes-requirements', 'synthesis.json'],
  '02': ['02-files-links-media', 'synthesis.html'],
  '03': ['03-skills-competencies', 'synthesis.html'],
  '04': ['04-learner-groups', 'synthesis.html'],
  '05': ['05-scenarios', 'synthesis.html'],
  '06': ['06-events', 'synthesis.html'],
  '07': ['07-share-with-participants', 'synthesis.html'],
  '08': ['08-recordings-course-reports', 'synthesis.json'],
  '09': ['09-announcements-send-materials', 'synthesis.html'],
};
const REFS_TEXT = [/^title$/, /^intro$/, /^questions\.\d+\.(title|answer)$/, /^references\.\d+\.(title|take)$/];
const R2_CARD = /^references\.\d+\.((title|take|observed|adaptation|limitation|asset_gap|actor)|steps\.\d+\.label)$/;
const R2_OUT = [/^(title|intro)$/, /^questions\.\d+\.(title|answer)$/, /^questions\.\d+\.openQuestions\.\d+$/, /^(priorityITQuestions|gaps)\.\d+$/, R2_CARD];
const SYN_LOCKED = new Set(['ref', 'refs', 'app', 'id']);
const SHORTLIST_LOCKED = new Set(['id', 'round', 'question', 'app', 'image', 'imageKind', 'sourceUrl', 'refId', 'path']);

const REPORTS = {};
for (const [n, [slug, syn]] of Object.entries(COURSES)) {
  REPORTS[`courses-${n}`] = {
    sources: [
      { file: `courses/${slug}/references.json`, kind: 'json', text: p => REFS_TEXT.some(re => re.test(p)) },
      { file: `courses/${slug}/${syn}`, kind: syn.endsWith('.json') ? 'json' : 'synhtml', text: (p, key) => !SYN_LOCKED.has(key) && !/\.refs\.\d+$/.test(p) },
    ],
    built: [`courses/${slug}.html`],
  };
}
REPORTS.r1 = {
  sources: [{ file: `${UM}/access-sharing/references.json`, kind: 'json', text: p => REFS_TEXT.some(re => re.test(p)) }],
  built: [`${UM}/access-sharing/report.html`, `${UM}/share/02-R1-access-roles-sharing.html`], identical: true,
};
REPORTS.r2 = {
  sources: [
    ...['documentation', 'library', 'mobbin'].map(s => ({ file: `${UI}/${s}-references.json`, kind: 'json', text: p => R2_CARD.test(p) })),
    { file: `${UI}/references.json`, kind: 'json', text: p => R2_OUT.some(re => re.test(p)) },
  ],
  built: [`${UI}/report.html`, `${UM}/share/03-R2-university-identity-directory-sync.html`], identical: true,
};
REPORTS.shortlist = {
  sources: [{ file: '.context/user-manager-shortlist/shortlist-data.json', kind: 'json', text: (p, key) => !SHORTLIST_LOCKED.has(key) }],
  built: [`${UM}/user-manager-shortlist.html`], patched: `${UM}/share/01-user-manager-shortlist.html`,
};
REPORTS.index = { sources: [], built: ['index.html'] };

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decode = s => s.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => e[0] === '#' ? String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : +e.slice(1)) : ENTITIES[e.toLowerCase()] ?? m);
const INLINE = 'a|strong|em|b|i|code|small|span|sup|sub|abbr|mark|kbd|time|img|input|wbr';
// Visible text of a page, one entry per block element, in reading order.
export function visibleBlocks(html) {
  const s = html.replace(/<head[\s\S]*?<\/head>/i, ' ').replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ').replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(new RegExp(`</?(${INLINE})\\b[^>]*>`, 'gi'), ' ').replace(/<[^>]+>/g, '\n');
  return decode(s).split('\n').map(l => l.replace(/\s+/g, ' ').trim()).filter(Boolean);
}
const TAGS = ['img', 'h1', 'h2', 'h3', 'h4', 'li', 'a', 'article', 'section', 'table', 'tr', 'td', 'th', 'figure', 'details', 'dl'];
export function stats(html) {
  const out = { bytes: Buffer.byteLength(html) };
  for (const t of TAGS) out[t] = (html.match(new RegExp(`<${t}[\\s>]`, 'gi')) ?? []).length;
  out.hrefs = [...html.matchAll(/href="([^"]*)"/g)].map(m => m[1]).filter(h => !h.startsWith('data:'));
  return out;
}

// Deep-compare with key order; string leaves for which text(path, key) is true may differ.
function compare(before, after, text, p, key, errors) {
  const where = p || '(root)';
  if (typeof before === 'string' && text(p, key)) {
    if (typeof after !== 'string') errors.push(`${where}: expected a string`);
    else if (before.trim() && !after.trim()) errors.push(`${where}: became empty`);
    return;
  }
  if (Array.isArray(before)) {
    if (!Array.isArray(after)) return errors.push(`${where}: no longer an array`);
    if (before.length !== after.length) return errors.push(`${where}: length ${before.length} -> ${after.length}`);
    before.forEach((b, i) => compare(b, after[i], text, p ? `${p}.${i}` : String(i), key, errors));
    return;
  }
  if (before && typeof before === 'object') {
    if (!after || typeof after !== 'object' || Array.isArray(after)) return errors.push(`${where}: no longer an object`);
    const bk = Object.keys(before), ak = Object.keys(after);
    if (bk.join('\u0000') !== ak.join('\u0000')) return errors.push(`${where}: keys changed [${bk}] -> [${ak}]`);
    for (const k of bk) compare(before[k], after[k], text, p ? `${p}.${k}` : k, k, errors);
    return;
  }
  if (before !== after) errors.push(`${where}: ${JSON.stringify(before)?.slice(0, 120)} -> ${JSON.stringify(after)?.slice(0, 120)}`);
}
const htmlShape = html => { const s = stats(html); delete s.bytes; delete s.img; return s; };

export async function run({ INSP, HERE, args, styleFlags, words }) {
  const BK = path.join(HERE, 'backup/phase2');
  const baselineFile = path.join(BK, 'baseline.json');
  const target = args[1];
  const details = args.includes('--details');
  const read = rel => fs.readFileSync(path.join(INSP, rel), 'utf8');

  if (target === 'baseline') {
    if (fs.existsSync(baselineFile)) { console.log('baseline already recorded; delete it first to redo'); return 1; }
    const base = {};
    for (const r of Object.values(REPORTS)) for (const f of [...r.built, r.patched].filter(Boolean)) {
      const html = read(f);
      base[f] = { ...stats(html), words: visibleBlocks(html).reduce((n, b) => n + words(b), 0) };
    }
    fs.writeFileSync(baselineFile, JSON.stringify(base, null, 1) + '\n');
    console.log(`baseline: ${Object.keys(base).length} pages`);
    return 0;
  }
  const baseline = JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
  const names = target === 'all' ? Object.keys(REPORTS) : [target];
  let failed = false;
  for (const name of names) {
    const rep = REPORTS[name];
    if (!rep) { console.log(`${name}: unknown report (use ${Object.keys(REPORTS).join(', ')})`); failed = true; continue; }
    const errors = [];
    for (const src of rep.sources) {
      const bFile = path.join(BK, name, src.file);
      let before, after;
      try { before = fs.readFileSync(bFile, 'utf8'); } catch { errors.push(`${src.file}: no backup`); continue; }
      try { after = read(src.file); } catch { errors.push(`${src.file}: missing`); continue; }
      if (src.kind === 'json') {
        let b, a;
        try { b = JSON.parse(before); a = JSON.parse(after); } catch (e) { errors.push(`${src.file}: invalid JSON (${e.message})`); continue; }
        const e = []; compare(b, a, src.text, '', '', e);
        errors.push(...e.map(x => `${path.basename(src.file)} ${x}`));
      } else {
        const b = htmlShape(before), a = htmlShape(after);
        for (const k of Object.keys(b)) if (JSON.stringify(b[k]) !== JSON.stringify(a[k])) errors.push(`${path.basename(src.file)}: ${k} ${k === 'hrefs' ? 'changed' : `${b[k]} -> ${a[k]}`}`);
      }
    }
    const pages = [...rep.built, rep.patched].filter(Boolean);
    const html = {};
    for (const f of pages) {
      try { html[f] = read(f); } catch { errors.push(`${f}: missing`); continue; }
      const b = baseline[f], a = stats(html[f]);
      for (const k of Object.keys(a)) {
        if (k === 'bytes') continue;
        if (JSON.stringify(b[k]) !== JSON.stringify(a[k])) errors.push(`${path.basename(f)}: <${k}> ${k === 'hrefs' ? `links changed (${b[k].length} -> ${a[k].length})` : `${b[k]} -> ${a[k]}`}`);
      }
      if (f === rep.patched && Math.abs(a.bytes - b.bytes) / b.bytes > 0.02) errors.push(`${path.basename(f)}: size ${b.bytes} -> ${a.bytes} (over 2%)`);
    }
    if (rep.identical && html[rep.built[0]] && html[rep.built[1]] && html[rep.built[0]] !== html[rep.built[1]]) errors.push(`${path.basename(rep.built[1])} is not a copy of ${path.basename(rep.built[0])}`);
    if (rep.patched && html[rep.patched] && html[rep.built[0]] && visibleBlocks(html[rep.patched]).join('\n') !== visibleBlocks(html[rep.built[0]]).join('\n')) errors.push(`${path.basename(rep.patched)}: visible text differs from ${path.basename(rep.built[0])}`);

    const main = html[rep.built[0]];
    const items = main ? visibleBlocks(main).map((text, i) => ({ loc: `line ${i + 1}`, text })) : [];
    const { flags, info } = styleFlags(name, items, EXTRA_ABBR);
    for (const { loc, text } of items) for (const re of EXTRA_BANNED) for (const m of text.matchAll(re)) flags.push({ kind: 'banned', loc, snippet: `"${m[0]}" in: ${text}`, accepted: false });
    const open = flags.filter(f => !f.accepted);
    const count = kind => open.filter(f => f.kind === kind).length;
    const kinds = ['long', 'banned', 'stepref', 'dash', 'curly', 'abbr'];
    const wBefore = baseline[rep.built[0]]?.words ?? 0, wAfter = items.reduce((n, t) => n + words(t.text), 0);
    const img = main ? stats(main).img : 0;
    const status = errors.length ? 'STRUCTURE FAIL' : open.length ? 'flags' : 'OK';
    if (errors.length || open.length) failed = true;
    console.log(`${name}: ${status} | page words ${wBefore} -> ${wAfter} | img ${img} | ${kinds.map(k => `${k} ${count(k)}`).join(', ')} | accepted ${flags.length - open.length}`);
    if (info.size) console.log(`  check-words: ${[...info].sort((a, b) => b[1] - a[1]).map(([w, n]) => `${w} ${n}`).join(', ')}`);
    for (const e of errors.slice(0, details ? Infinity : 10)) console.log(`  ERROR ${e}`);
    if (!details && errors.length > 10) console.log(`  ... ${errors.length - 10} more errors`);
    if (details) for (const f of open) console.log(`  [${f.kind}] ${f.loc}: ${f.snippet.length > 240 ? f.snippet.slice(0, 237) + '...' : f.snippet}`);
  }
  return failed ? 1 : 0;
}
