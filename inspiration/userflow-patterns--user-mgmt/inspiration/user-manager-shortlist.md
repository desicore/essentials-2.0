# User Manager — narrowed inspiration shortlist

Companion to `user-manager-map-index.md`. That file lists *everything* that touches each of Gabor's six User Manager nodes. This file is the cut: the references that best match each node, plus the counter-examples worth keeping on the "don't build this" wall.

**Reports:** R1 = `tmp/report-hotlink.html` (Access, roles & sharing, 137 refs). R2 = `university-identity/report.html` (University identity, directory sync & user import, 32 refs). Q-numbers mean different things in each report; filter by question, then search the app name.

**Result:** 169 refs → 41 keeps + 10 counter-examples. Per-node reasoning and every dropped ref with a reason lives in `.context/user-manager-shortlist/node-*.md`.

| Node | Keeps | Counters | Strongest single reference |
|---|---|---|---|
| import learners from Canvas? | 4 | 0 | R2 Q6 · Canvas — Retrieve a course roster through LTI NRPS |
| Add/Remove/Edit learner groups | 6 | 2 | R1 Q3 · Front — Creating a teammate group |
| Add/Remove/Edit users | 7 | 2 | R2 Q4 · Loom — Deactivate access while explaining content consequences |
| Give permissions and access | 9 | 3 | R1 Q2 · Basecamp — What can Jane Doe access? |
| Batch upload (AI?) | 7 | 1 | R1 Q3 · Customer.io — Mapping fields |
| SSO | 8 | 2 | R2 Q1 · Okta — Select AD users and groups before import |

---

## 1. import learners from Canvas?

All documentation, no product screens except Vimeo. Kept the refs that answer "pull learners from Canvas without creating duplicate users".

- **R2 Q6 · Canvas — Retrieve a course roster through LTI NRPS** — the live-roster mechanism; pulls the whole course population and matches to existing accounts instead of importing a snapshot.
- **R2 Q6 · Canvas — Respect roster identifier and privacy boundaries** — names the duplicate-user trap: an LTI user id is not the directory id, so identifiers must be previewed before matching.
- **R2 Q5 · Canvas — Join user identifiers to separate enrollment data** — the CSV path to the same problem; Users and Enrollments files must be joined, not assumed to create accounts.
- **R1 Q3 · Vimeo — Event registrants: 'Sync from email list' + 'Upload CSV'** — the one real screen; continuous sync and one-shot upload as distinct verbs in the same roster header. `https://mobbin.com/api/mcp/short/w66TfdlX`

Dropped: Canvas course-departure vs suspension (enrollment states, belongs to the users node if anywhere), Canvas Provisioning CSV export (mechanics only), Canvas roles-on-enrollments (better used as an argument in the permissions node).

## 2. Add/Remove/Edit learner groups

Still the thinnest node. Two distinct jobs: groups a sim tech builds by hand, and groups the university's IdP owns.

**Hand-built groups**
- **R1 Q3 · Front — Creating a teammate group** — checkbox picker of existing people *and* CSV import on one screen; small groups by hand, big cohorts by file. Best single reference. `https://mobbin.com/api/mcp/short/qYeezfsD`
- **R1 Q3 · Google Workspace — Manage members** — Add / Bulk upload / Download side by side, plus direct vs nested members. `https://mobbin.com/api/mcp/short/xRQqMVnN`
- **R1 Q3 · Calendly — Admin center: Groups** — groups by department/location with named group admins; the only delegated-admin reference. `https://images.refero.design/screenshots/calendly.com/desktop/09d9a4eb-667f-4ef3-9492-937a6bac4220_preview.jpg`
- **R1 Q3 · Canva — Manage team members** — multi-select in the roster → "Add to group"; groups built from the member list, no separate builder. `https://images.refero.design/screenshots/canva.com/desktop/dac58d87-a551-4122-94fb-120166d8a50c_preview.jpg`

**IdP-owned groups**
- **R2 Q3 · Okta — Show directory status and system-managed groups** — Group source filter (system / directory / local) makes it visible who owns membership. `assets/mobbin/91368794-4b0a-44aa-8556-4865258940d3.jpg`
- **R2 Q3 · Atlassian — Review access changes before replacing conflicting groups** — the migration screen for a university that already has local groups: shows membership and access deltas before you choose which to sync. `assets/documentation/atlassian-group-conflicts-0.png`

**Counter-examples:** R1 Q2 · Confluence — Hub permissions per-user grid (15 checkbox columns). R1 Q2 · StackAI — Roles permission matrix.

**Still uncovered by any ref:** renaming / merging groups, archiving a group and what happens to its shared content, late joiners getting retroactive access. This is the Q7 gap; it cannot be narrowed to, only researched.

Close calls dropped: Fireflies Team (User Groups), Notion Creating a group, Hex, Aboard — all show a group as a *sharing target*, which the permissions node already covers.

## 3. Add/Remove/Edit users

**Add**
- **R2 Q2 · Atlassian — Create accounts at first SAML sign-in** — JIT provisioning plus verified-domain claiming; the default add path for university learners. `assets/documentation/atlassian-jit-0.png`
- **R2 Q2 · GitHub — Inspect and repair a linked SAML identity** — admin revokes a wrong identity link so the person retries; the fix for first-login failures currently repaired by hand. `assets/documentation/github-linking-1.png`
- **R1 Q1 · Slite — Accepting an invitation** — join link, import from contacts, or typed emails as three parallel ways in. `https://mobbin.com/api/mcp/short/FnPpgnEa`

**Edit**
- **R1 Q4 · Expensify — Editing member role** — role as an inline segmented control on the row. `https://mobbin.com/api/mcp/short/gyGxjnr2`
- **R1 Q4 · Twist — Downgrading a member** — the confirmation explains what the person loses. `https://mobbin.com/api/mcp/short/6aY5CjcC`

**Remove / deactivate**
- **R2 Q4 · Loom — Deactivate access while explaining content consequences** — spells out lost access, content that stays reachable, and ownership transfer. Best deactivation reference in either round. `assets/refero-1250/0.jpg`
- **R2 Q4 · Microsoft Entra — Separate disabling, deletion, and return** — disable on scope exit vs delete; restoring reactivates. `assets/documentation/entra-lifecycle-3.png`

**Counter-examples:** R1 Q1 · Dovetail — Accepting invite (full name + 12-char password before entry). R1 Q4 · Retool — Permission groups.

Close calls dropped: Jitter magic-link invite and Mural visitor (no institutional identity), Ballpark inline row edit (same pattern as Expensify), Atlassian stop-sync vs resync (troubleshooting, not CRUD).

## 4. Give permissions and access

Deepest node, so this was mostly cutting. Sonnet reviewed all 68 candidates.

**Minimal role set (the 8 → 3 argument)**
- **R1 Q4 · Gamma — Changing a member role** — the floor: two roles, one-line descriptions, one-click change. `https://mobbin.com/api/mcp/short/BGheoITV`
- **R1 Q4 · Slack — Inviting people (guest)** — guest role reveals required channels *and* an expiry on one screen: role, content scope and time scope together. Not in the original index. `https://mobbin.com/api/mcp/short/BTHyxkeY`
- **R1 Q4 · Zendesk — Team member roles and access** — one role plus toggles on the person, no matrix. `https://images.refero.design/screenshots/zendesk.com/desktop/d51d8388-22f2-42f2-951a-d5913fb70e3a_thumb.jpg`

**Content-scoped sharing (the vault)**
- **R1 Q4 · Coda — Updating sharing permissions** — link / workspace / inherited-from-folder (greyed) / named people, each with its own level. The JSON tags this Q4, not Q2 as the index said. `https://mobbin.com/api/mcp/short/qY5AoLdK`
- **R1 Q2 · ElevenLabs — Sharing a project** — Collaborators vs Readers over three independently levelled audiences. `https://mobbin.com/api/mcp/short/UmsiA9VE`

**"Who can see what" inverse view**
- **R1 Q2 · Basecamp — What can Jane Doe access?** — person-side checklist with plain-English consequences; the direct answer to Galen's lab-manager complaint. `https://mobbin.com/api/mcp/short/BzoJQI5c`

**Time-boxed access (release and closing dates)**
- **R1 Q5 · Frame.io — Scheduling an expiration date** — video share panel with presets plus exact date/time; the closing-date mechanic. `https://mobbin.com/api/mcp/short/yLjZ4mKf`
- **R1 Q5 · Squarespace — Updating content status** — Draft / Published / Scheduled with a date, bulk-settable; the release-date half. Not in the original index. `https://mobbin.com/api/mcp/short/anuQaQrF`
- **R1 Q5 · Hashnode — Invite link creation** — role + usage limit + expiry on one link. `https://images.refero.design/screenshots/hashnode.com/desktop/0bc49980-21d8-4d98-935b-338595148864_preview.jpg`

**Counter-examples (the wall):** R1 Q2 · StackAI — Roles permission matrix (its take names the "8-global-roles trap"). R1 Q4 · Retool — Permission groups (apps × resources × users). R1 Q4 · Fresha — Basic/Low/Med/High tiers that carry no meaning.

Close calls dropped: Stripe role-at-invite (Gamma shows the same idea more simply), GitHub "previous role plus X" (docs-only, use as copywriting reference), Sketch and Figma sharing (ElevenLabs and Coda cover the pattern), Craft / 1Password / Shuttle expiry (Frame.io is the video-specific one), Asana request access (recovery path, keep in mind for later).

## 5. Batch upload (AI?)

**Small batch (a sim tech adding 4–10)**
- **R1 Q3 · Miro — Invite to team: paste multiple emails** — one paste box handles 1 or 100; rows appear immediately. `https://images.refero.design/screenshots/miro.com/desktop/06bb10d1-bbaf-401c-a79c-29fec0012322_preview.jpg`
- **R1 Q3 · Linear — Inviting team members** — paste emails plus "Add to team" in the same dialog; roster exists before anyone accepts. `https://mobbin.com/api/mcp/short/vlhXY9dW`

**CSV import with mapping and review**
- **R1 Q3 · Customer.io — Mapping fields** — Upload / Map / Review; the review counts new vs existing and can drop the batch into a segment. Answers "update, don't duplicate". `https://mobbin.com/api/mcp/short/61Y3iAGy`
- **R1 Q3 · Ghost — Importing members** — column map with sample data, upsert on email, auto-labels the batch "Import <date>". `https://mobbin.com/api/mcp/short/oyAKpWbF`
- **R2 Q5 · Rox — Map columns with sample data and validation review** — sample values beside each destination field, valid/invalid counts before commit. `https://images.refero.design/screenshots/rox.com/desktop/288031a6-ac62-411e-9b2b-63d7309c8c10_thumb.jpg`

**Safety net for large or repeated imports**
- **R2 Q5 · Intercom — Repeat-import matching and an all-error result** — states the matching rule up front; reports created / updated / failed honestly, even when everything failed. `https://images.refero.design/screenshots/intercom.com/desktop/638e3125-aac1-4239-bff8-cee3b95bf70b_thumb.jpg`
- **R2 Q4 · Microsoft Entra — Quarantine unexpected mass removals** — deletion threshold pauses the run for inspection. The guard against a bad file mass-deleting learners. (docs only)

**Counter-example:** R1 Q3 · Deel — Uploading a CSV, 4-stage full-screen wizard.

**AI:** no evidence in either round. The only "auto" anything is Cake Equity's rule-based column auto-map. If the AI question matters, it is a new research question, not a narrowing.

Close calls dropped: Grammarly "Import list" nudge (worth remembering for the discoverability problem, but it is one button), Intercom / Circle / Resend / Acuity / Cake Equity CSV imports (same pattern as Customer.io and Ghost), Google GCDS simulate-first (Entra quarantine covers the safety idea with a clearer screen).

## 6. SSO

**IT setup and scoping**
- **R2 Q1 · Okta — Select Active Directory users and groups before import** — separate user-OU and group-OU selection, matching rules, and a warning that changing filters can deactivate people. The core LDAP/AD reference. (docs only)
- **R2 Q1 · GitHub — Test SAML before saving an enforced sign-in policy** — Save stays disabled until the test passes. Stops the months-long lockout failure mode. `assets/mobbin/277cd6a1-2548-408c-ba65-3a0acf33c36e.jpg`
- **R1 Q1 · Homerun — Team login policy: none / 2FA or SSO / SSO only** — three radios with consequence text before enforcement. `https://images.refero.design/screenshots/homerun.co/desktop/f05829c5-427b-4523-bd79-b5f2fd5952bd_preview.jpg`

**Learner sign-in and failure states**
- **R2 Q2 · Riverside — SSO email discovery with an explicit failure** — "this email is not recognised for SSO" with a supported next step. `assets/refero-4649/0.jpg`
- **R2 Q2 · incident.io — Keep SAML failure and recovery routes visible** — retry and contact-admin paths stay on screen after a failed sign-in. `assets/mobbin/d320f96d-739d-45ea-a4a7-8c8f92fcaf90.jpg`
- **R2 Q2 · Atlassian — Create accounts at first SAML sign-in** — shared with the users node; JIT as an explicit policy. `assets/documentation/atlassian-jit-0.png`

**Account recovery for lockouts**
- **R1 Q6 · Microsoft Copilot — Incorrect password, send a code instead** — inline code fallback on a wrong password. `https://mobbin.com/api/mcp/short/SG2p0r0R`
- **R1 Q6 · Surfshark — Too many login attempts, login with code** — code as the way out of a rate limit instead of a hard lockout. `https://mobbin.com/api/mcp/short/Zv3LvYo2`

**Counter-examples:** R1 Q6 · Skiff — Recover with recovery key (its take: "the hidden recovery dependency that produces six-month lockouts"). R1 Q6 · Sentry — Recover account, link invalid or expired.

Close calls dropped: Calendly SSO / provisioning / domain-control tabs (clean IA, but it is an information-architecture reference rather than a flow; pull it back if you design the settings page), Zendesk named SAML connection and Remote SAML guide (form-level detail, GitHub's test-before-save is the stronger lesson), WorkOS attribute toggles, Entra provisioning diagnostics, Epidemic Sound / Maze / Workable sign-in variants, OpenAI and Miro recovery (not counter-examples despite the index saying so; the JSON flags them false).

---

## Next step

The converge pass in `PLAN.md` is still open: nothing in either `references.json` is marked `selected: true`. This shortlist is the proposed selection. Flipping `selected` on these 41 + 10 refs and regenerating both reports would produce the client cut.
