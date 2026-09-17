#!/usr/bin/env node
// Builds inspiration/access-sharing/refero.json from a curated selection of Refero flows/screens.
// Usage: node refero-build-access-sharing.mjs [outPath]
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const cli = path.join(here, 'refero-mcp.mjs');
const OUT = process.argv[2] || path.resolve(here, '..', 'access-sharing', 'refero.json');

function call(tool, args) {
  const out = execFileSync('node', [cli, 'call', tool, JSON.stringify(args)], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return JSON.parse(out);
}

// ---- Curation ---------------------------------------------------------------
// F = flow id (number), S = screen uuid. counter = counter-example.
const FLOWS = [
  // Q1 — letting people in without accounts up front
  { id: 9266, q: 'Q1', take: 'Email-only sign-in that doubles as sign-up; "check your email" step offers mail-client shortcuts and an explicit "Logging in…" state.' },
  { id: 4274, q: 'Q1', take: 'One email form serves both sign-up and log-in via magic link; in-app "Verify your log-in" confirmation before landing in the dashboard.' },
  { id: 12506, q: 'Q1', take: 'Six-step magic-link login with distinct "sending link" and "link sent" states — the minimum viable passwordless loop.' },
  { id: 9042, q: 'Q1', take: '"Sign in with work email" magic link lands straight in org creation — identity first, workspace second, no password anywhere.' },
  { id: 9798, q: 'Q1', take: 'Marketing CTA → auth-method card → email → link sent → empty team workspace; nothing asked beyond an email.' },
  { id: 1693, q: 'Q1', take: 'One "Add people" modal offers a shareable invite link and email invites side by side, with inline error feedback.' },
  // Q2 — scoping access by content
  { id: 5007, q: 'Q2', take: 'Per-file share settings switch link access to "Only invited people", then invite by email — item-level scope overrides team default.' },
  { id: 13031, q: 'Q2', take: 'Folder "Manage access" dialog with a per-collaborator permission selector and inline confirmation of the change.' },
  { id: 6152, q: 'Q2', take: 'Share a document folder to a specific shareholder or group from the folder context menu — you pick a person/group, not a global role.' },
  { id: 9583, q: 'Q2', take: 'Gate a content area by audience: pick which membership tiers can access the community in a modal — edtech cohort-based scoping.' },
  { id: 10880, q: 'Q2', take: 'Video-project share menu: send link to recipients (autosuggest) plus separate link settings; includes share error and retry states.' },
  { id: 4401, q: 'Q2', take: 'External-client invite modal lets you adjust what the client can see before sending; pending invite shown in the client list.' },
  { id: 13746, q: 'Q2', take: 'Guest invited to a single project: a "Review external access" step warns what they will see, then a permission level is chosen.' },
  { id: 199, q: 'Q2', take: 'One share modal combines link-access dropdown, collaborator invite, and per-collaborator role change/remove.' },
  // Q3 — bulk rosters
  { id: 10626, q: 'Q3', take: 'Canonical CSV import: upload → map columns (auto then manual) → review parsed rows → importing indicator → list.' },
  { id: 671, q: 'Q3', take: 'Import wizard maps each CSV column to a user attribute, then ends with a post-import report of created/updated/failed rows.' },
  { id: 9855, q: 'Q3', take: 'CSV import with a "mapping required" preview state and column labels applied before a success banner on the client list.' },
  { id: 6126, q: 'Q3', take: 'Auto-maps columns on upload, then validates on import attempt with row-level errors before committing.' },
  { id: 380, q: 'Q3', take: 'Same invite modal supports manual emails or CSV upload; shows format error and an "imported 0 of 5" review list to fix rows.' },
  { id: 9613, q: 'Q3', take: 'Add students manually with an "enroll in course" toggle in the same modal, then import feedback and an updated roster.' },
  { id: 8084, q: 'Q3', take: 'Multi-select people in the roster → "Add to group" overlay — groups/cohorts built from the existing member list.' },
  { id: 6641, q: 'Q3', take: 'Paste many emails into one field; the members list immediately reflects pending invites.' },
  // Q4 — minimal role set with escape hatch
  { id: 73, q: 'Q4', take: 'Role chosen at invite time from a short fixed list with one-line descriptions — no separate role-admin step.' },
  { id: 1398, q: 'Q4', take: 'Per-member "roles and access" page: one role plus product-level access toggles — the escape hatch lives on the person, not in a matrix.' },
  { id: 3904, q: 'Q4', take: 'Invite modal with an expandable "view role descriptions" panel so people pick the right role without leaving the flow.' },
  { id: 1940, q: 'Q4', take: 'Role dropdown plus a "Roles help" explainer inside the invite modal; pending invites list updates in place.' },
  { id: 2634, q: 'Q4', take: 'Change a member\'s permission from the row via a selector and confirm inline — no edit page.' },
  { id: 2622, q: 'Q4', take: 'Separate "Guests" area for external people with a restricted role — guest as a first-class, clearly bounded role.' },
  { id: 2131, q: 'Q4', take: 'Per-project collaborator roles override the workspace role — the per-item escape hatch next to a small global role set.' },
  { id: 974, q: 'Q4', counter: true, take: 'COUNTER: role choice, then per-business, then per-permission checklist — 8 steps to add one employee; matrix explosion.' },
  // Q5 — time-boxed access
  { id: 3937, q: 'Q5', take: 'Admin-created invite link carries a role, a usage limit and an expiry date — cohort self-enrolment with a built-in shelf life.' },
  { id: 13033, q: 'Q5', take: 'View-only folder link settings with expiration, password and download toggles, plus delete-link — all in one modal.' },
  { id: 8055, q: 'Q5', take: 'Switch from restricted to link-based access and choose the link\'s permission level in the same step, then copy.' },
  { id: 1642, q: 'Q5', take: 'Public link lives on its own "Share publicly" tab, configured separately from collaborator invites.' },
  { id: 10849, q: 'Q5', take: '"Configure protections" step before the link is generated — expiry/password set up-front, not as an afterthought.' },
  { id: 5943, q: 'Q5', take: 'Track sharing: invite-only vs public, allow downloads, password-protect — media-specific link controls in one panel.' },
  { id: 5945, q: 'Q5', take: 'Reset share link with a confirmation dialog — old link dies, new one issued; the simplest revoke pattern.' },
  { id: 7957, q: 'Q5', take: 'Publish document to web: published state shows URL + options; unpublish is the inverse toggle.' },
  { id: 7298, q: 'Q5', take: 'Schedule a membership post\'s publication date/time from the post editor — scheduled publish for gated content.' },
  { id: 13060, q: 'Q5', take: 'Cancel a pending invite from the admin members row — revoke before the person ever gets in.' },
  // Q6 — login friction & recovery
  { id: 11027, q: 'Q6', take: 'After password + 2FA, prompt passkey enrolment so the next login is one step.' },
  { id: 3604, q: 'Q6', take: 'SSO entry via team identifier with an explicit SSO-initiation error state.' },
  { id: 5063, q: 'Q6', take: 'Enter email → system checks for SSO config → clear error when the domain has no SSO — email-first routing.' },
  { id: 10263, q: 'Q6', take: 'After email, choose "password or one-time code" — lets users skip password recall without a reset.' },
  { id: 1268, q: 'Q6', take: 'On password mismatch, offer an email code instead of a reset link; handles invalid code and retry.' },
  { id: 8227, q: 'Q6', take: 'Password reset via one-time code typed inline, no link to click — fewer context switches.' },
  { id: 374, q: 'Q6', take: 'Complete recovery loop: error → enter email → loading → "instructions sent" → set new password → back in.' },
  { id: 9556, q: 'Q6', take: '2FA setup shows recovery codes and requires acknowledgement before finishing — recovery set up when access is set up.' },
];

const SCREENS = [
  // Q1
  { id: '1e20e343-27e6-4908-8d42-069070aaad89', q: 'Q1', title: "SSO authentication settings (admin)", take: 'Org SSO settings page: "no providers yet" empty state with one "Manage integrations" CTA — SSO as an admin toggle, invisible to end users.' },
  { id: 'f690f4ed-6af6-4a63-8496-ad6e23925486', q: 'Q1', title: "Team login policy: none / 2FA or SSO / SSO", take: 'Three-radio login policy (none / 2FA or SSO / SSO only) with consequence text — org-level enforcement in one control.' },
  { id: '84515928-46c1-49f2-aaa5-2516f368b142', q: 'Q1', title: "Admin login settings: SSO, provisioning, domain control", take: 'Single "Login" admin page with tabs for SSO, user provisioning and domain control — identity settings in one place.' },
  // Q2
  { id: '0108bda4-75dc-4653-936f-52d180b0cdea', q: 'Q2', title: "Share document: invite with role + public link toggle", take: 'Doc-level modal: invite by email with role, list of guests vs team members, and a public-link toggle — all scoped to one document.' },
  { id: 'c2570ea4-33ea-40e8-9608-72632aff9370', q: 'Q2', title: "Share reel: team-only vs anyone with link", take: 'Two radios — "Only members in your team" vs "Anyone with the link" — the minimal audience choice for sharing a recording.' },
  // Q3
  { id: '6c361e65-4f9d-4e4f-81dd-93f36f6955a3', q: 'Q3', title: "Invite to team: paste multiple emails", take: 'Multiline paste box for bulk emails with an "add individually" fallback — one field handles 1 or 100 invites.' },
  { id: 'c38bf684-80b3-475b-bfc1-400bc9fc5113', q: 'Q3', title: "Admin center: Groups", take: 'Admin "Groups" area organizes members by department/location with group admins — cohort structure with delegated admin.' },
  { id: 'c3e50548-7421-4c7d-a721-3611243d25f0', q: 'Q3', title: "Admin console: Members list with status filter", take: 'Admin members table with status filter (invited/active) and Groups as a sibling nav item — roster + cohorts in one console.' },
  { id: '8d70fdbc-4b2b-4049-a902-bccb0a1eaf20', q: 'Q3', title: "SSO & provisioning: domain verification", take: '"SSO & provisioning" settings with domain-verification tab — directory sync is set up next to SSO, not as a separate product.' },
  // Q4
  { id: '6239ee2f-4ac8-444e-9397-14063164d97a', q: 'Q4', title: "User Roles with View permissions", take: 'Fixed role list (Primary Owner / Owner / Author / Affiliate) with a "View permissions" expander — small set, fully transparent.' },
  { id: 'b2b65fe2-6a0c-43be-8f46-5e5fdfc041f8', q: 'Q4', title: "Workspace members: Members / Guests tabs", take: 'Members vs Guests tabs; each row shows role and license — guest is a tab, not a role-matrix column.' },
  { id: '310b8314-6883-42f6-b181-b6e47513d720', q: 'Q4', title: "Permission groups (apps x resources x users)", counter: true, take: 'COUNTER: "Permission groups" each tracking apps × resources × users — admin must reason about a 3-D matrix to answer "who can see X".' },
  // Q5
  { id: '6cfcb277-992e-4939-ab18-0c0bc5b1abbc', q: 'Q5', title: "Edit shared link: permission + expires after", take: 'Edit an existing per-recipient link: permission dropdown + "Expires after" — expiry remains editable after the link is created.' },
  { id: '48b360db-7456-4ade-a6b3-195f5dd0edce', q: 'Q5', title: "Share item link: expires after + available to", take: '"Link expires after" + "Available to" (anyone / specific emails) — two dropdowns cover expiry and audience for a shared item.' },
  // Q6
  { id: 'db4c0373-9281-4997-a6c6-cd69411f9239', q: 'Q6', title: "Login & security: password, passkeys, sign out all", take: 'Login & security page manages password and passkeys side by side, plus "sign out of all devices".' },
  { id: '1e530b09-3726-4367-b2c4-108f5e7e034c', q: 'Q6', title: "Account recovery: recovery codes", take: 'Account recovery page lists masked recovery codes with remove and "+ New recovery code" — recovery as a managed inventory.' },
];

// ---- Fetch ---------------------------------------------------------------------
function chunk(a, n) { const r = []; for (let i = 0; i < a.length; i += n) r.push(a.slice(i, i + n)); return r; }
const preview = (thumb) => (thumb || '').replace(/_thumb\.jpg$/, '_preview.jpg');

const flowById = new Map();
for (const ids of chunk(FLOWS.map((f) => f.id), 10)) {
  const r = call('refero_get_flow', { flow_ids: ids, response_format: 'json' });
  const arr = r.records || r.flows || (Array.isArray(r) ? r : [r]);
  for (const f of arr) if (f && f.id) flowById.set(f.id, f);
}
const screenById = new Map();
for (const ids of chunk(SCREENS.map((s) => s.id), 10)) {
  const r = call('refero_get_screen', { screen_ids: ids, response_format: 'json' });
  const arr = r.records || r.screens || (Array.isArray(r) ? r : [r]);
  for (const s of arr) if (s && s.uuid) screenById.set(s.uuid, s);
}

// ---- Compose -------------------------------------------------------------------
// Some older Refero flows only have the 800px `_thumb.jpg` on the CDN; their
// `_preview.jpg` variant 403s. Verify each rewritten URL with a HEAD request
// and fall back to the thumb when the preview doesn't actually exist.
async function resolvePreviewUrls(thumbs) {
  const unique = [...new Set(thumbs.filter(Boolean))];
  const results = new Map();
  for (const group of chunk(unique, 8)) {
    await Promise.all(group.map(async (thumb) => {
      const previewUrl = preview(thumb);
      if (!previewUrl || previewUrl === thumb) { results.set(thumb, { url: previewUrl || thumb, fallback: false }); return; }
      let url = previewUrl;
      let fallback = false;
      try {
        const res = await fetch(previewUrl, { method: 'HEAD' });
        if (!res.ok) { url = thumb; fallback = true; }
      } catch {
        url = thumb;
        fallback = true;
      }
      results.set(thumb, { url, fallback });
    }));
  }
  return results;
}

const allThumbs = [];
for (const sel of FLOWS) {
  const f = flowById.get(sel.id);
  if (!f) continue;
  for (const s of (f.steps || [])) if (s.thumbnail_url) allThumbs.push(s.thumbnail_url);
}
for (const sel of SCREENS) {
  const s = screenById.get(sel.id);
  if (s && !s.preview_url && s.thumbnail_url) allThumbs.push(s.thumbnail_url);
}
const previewByThumb = await resolvePreviewUrls(allThumbs);
const previewOf = (thumb) => (thumb ? (previewByThumb.get(thumb) || { url: preview(thumb), fallback: false }) : { url: '', fallback: false });

const out = [];
const missing = [];
const fallbackFlowIds = new Set();
let fallbackStepCount = 0;
for (const sel of FLOWS) {
  const f = flowById.get(sel.id);
  if (!f) { missing.push(`flow ${sel.id}`); continue; }
  const steps = f.steps || [];
  out.push({
    id: `refero:${f.id}`,
    source: 'refero',
    app: (f.site?.name || '').trim(),
    title: f.name,
    kind: 'flow',
    url: f.refero_url || `https://refero.design/flows/${f.id}`,
    images: steps.map((s) => {
      const r = previewOf(s.thumbnail_url);
      if (r.fallback) { fallbackStepCount++; fallbackFlowIds.add(f.id); }
      return r.url;
    }),
    question: sel.q,
    take: sel.take,
    counter_example: !!sel.counter,
    selected: false,
    crop: '',
  });
}
for (const sel of SCREENS) {
  const s = screenById.get(sel.id);
  if (!s) { missing.push(`screen ${sel.id}`); continue; }
  const title = (s.content?.description || '').split(/[.\n]/)[0].replace(/^The screen (shows|displays|is|features|presents)\s*/i, '').trim();
  const screenPreview = s.preview_url ? null : previewOf(s.thumbnail_url);
  if (screenPreview && screenPreview.fallback) fallbackStepCount++;
  out.push({
    id: `refero:${s.uuid}`,
    source: 'refero',
    app: (s.site?.name || '').trim(),
    title: sel.title || (title.length > 90 ? title.slice(0, 87) + '…' : title),
    kind: 'screen',
    url: s.refero_url || `https://refero.design/pages/${s.uuid}`,
    images: [s.preview_url || (screenPreview ? screenPreview.url : '')],
    question: sel.q,
    take: sel.take,
    counter_example: !!sel.counter,
    selected: false,
    crop: '',
  });
}
const qOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4, Q5: 5, Q6: 6 };
out.sort((a, b) => qOrder[a.question] - qOrder[b.question] || (a.kind === b.kind ? 0 : a.kind === 'flow' ? -1 : 1));
writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');

// ---- Report ----------------------------------------------------------------------
const perQ = {};
for (const o of out) perQ[o.question] = (perQ[o.question] || 0) + 1;
const apps = {};
for (const o of out) apps[o.app] = (apps[o.app] || 0) + 1;
console.log('wrote', OUT, 'entries:', out.length);
console.log('per question:', JSON.stringify(perQ));
console.log('top apps:', Object.entries(apps).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([k, v]) => `${k}(${v})`).join(', '));
console.log('flows with 0 images:', out.filter((o) => o.kind === 'flow' && o.images.length === 0).map((o) => o.id).join(',') || 'none');
console.log('flows with empty steps:', [...flowById.values()].filter((f) => !(f.steps || []).length).map((f) => f.id).join(',') || 'none');
if (missing.length) console.log('MISSING:', missing.join('; '));
if (fallbackStepCount) console.log(`preview fallback: ${fallbackStepCount} step image(s) used _thumb.jpg (no _preview.jpg on CDN) — flows: ${[...fallbackFlowIds].sort((a, b) => a - b).join(', ')}`);

// HEAD-check image variants for one flow step and one screen
const sample = out.find((o) => o.kind === 'flow' && o.images.length)?.images[0];
const sampleScreen = out.find((o) => o.kind === 'screen')?.images[0];
for (const u of [sample, sample?.replace('_preview.jpg', '_thumb.jpg'), sample?.replace('_preview.jpg', '.jpg'), sampleScreen]) {
  if (!u) continue;
  try {
    const res = await fetch(u, { method: 'HEAD' });
    console.log('HEAD', res.status, res.headers.get('content-type'), res.headers.get('cache-control') || '', u.slice(-60));
  } catch (e) { console.log('HEAD ERR', u.slice(-60), String(e).slice(0, 80)); }
}
