// Offline stand-in for share/build-shortlist.py: writes share/01 from the rebuilt user-manager-shortlist.html,
// reusing the embedded images already in the backed-up share/01 (the Python step needs the network).
// It does what the Python does and nothing else: swaps src="..." for the embedded data and rewrites the
// two sibling-report hrefs. Refuses to write unless doing the same to the backed-up page reproduces the
// backed-up share/01 byte for byte.
// Usage: node patch-share01.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const INSP = path.dirname(HERE);
const U = 'userflow-patterns--user-mgmt/inspiration';
const BK = path.join(HERE, 'backup/phase2/shortlist');
const oldSrc = fs.readFileSync(path.join(BK, U, 'user-manager-shortlist.html'), 'utf8');
const oldShare = fs.readFileSync(path.join(BK, U, 'share/01-user-manager-shortlist.html'), 'utf8');
const newSrc = fs.readFileSync(path.join(INSP, U, 'user-manager-shortlist.html'), 'utf8');

const srcs = html => [...html.matchAll(/src="([^"]*)"/g)].map(m => m[1]);
const a = srcs(oldSrc), b = srcs(oldShare);
if (a.length !== b.length) throw Error(`src count differs: ${a.length} vs ${b.length}`);
const map = new Map();
a.forEach((s, i) => { if (map.has(s) && map.get(s) !== b[i]) throw Error(`conflicting image for ${s}`); map.set(s, b[i]); });

function share(html) {
  return html
    .replace(/src="([^"]*)"/g, (m, s) => { if (!map.has(s)) throw Error(`no embedded image for ${s}`); return `src="${map.get(s)}"`; })
    .replace(/href="([^"]*)"/g, (m, h) => h.startsWith('tmp/report-hotlink.html') ? `href="02-R1-access-roles-sharing.html${h.slice('tmp/report-hotlink.html'.length)}"`
      : h.startsWith('university-identity/report.html') ? `href="03-R2-university-identity-directory-sync.html${h.slice('university-identity/report.html'.length)}"` : m);
}
if (share(oldSrc) !== oldShare) throw Error('self-test failed: the backed-up page does not reproduce the backed-up share/01');
const out = share(newSrc);
fs.writeFileSync(path.join(INSP, U, 'share/01-user-manager-shortlist.html'), out);
console.log(`self-test OK; wrote share/01 (${oldShare.length} -> ${out.length} chars, ${srcs(out).length} images)`);
