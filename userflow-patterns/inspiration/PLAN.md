# Essentials 2.0 — Inspiration boards, plan v0

Date: 2026-09-08. Status: proposal, nothing executed yet.
Inputs: Gabor's module map (Essentials - Concept board), the final user journey map, the empty
"Essentials 2.0 - Inspiration" FigJam, the vault (wiki/work/*, wiki/research/moodboard-method.md).

## 1. Which module first — recommendation

**Start with the User Manager, but frame the board as "Access, roles & sharing", not "admin screens".**

Why User Manager is the right first pick:
- It has the densest evidence in the vault. Eight global roles today vs the 2.0 bet of three
  (teacher / admin / student) with content-based sharing. Galen: lab manager cannot scope faculty to
  their own students' videos. Mitchell: roles are rigid ("record, but not all rooms"). Kent State:
  LDAP username doesn't persist, first-login failures fixed by hand. Victoria: customers want to attach
  a learner to a video *without creating an account*; rosters live in Canvas, students arrive via SSO.
  Journey map pains: password lockouts for months, dummy users instead of names, batch upload undiscovered.
- It is cross-cutting. "Who can see what, for how long" is the same question behind course sharing,
  video release/closing dates, Canvas sync and Settings. So this board feeds the course module (which
  ships first) even though the vault says the User Manager itself is parked and gets absorbed into Settings.
- Learners are the same shape as guest accounts in task-manager / doc tools, so there is a rich,
  well-solved pattern space to mine (this was already the idea in the course-model note).

Caveat to hold: the vault's direction is *fewer* roles, not a better role editor. The board must argue
for simplification with evidence, not collect elaborate permission matrices.

Second module (iteration 2, only after the pipeline works): **Course** (root entity, ships first).

## 2. The argument the board makes (one section per question)

Every reference on the board answers one of these, and its annotation says which.

| # | Question | Evidence (vault) | Nodes on Gabor's map |
|---|---|---|---|
| Q1 | How do products let people in *without* creating accounts up front (magic link, guest, identity from SSO/LMS)? | Victoria, Galen, Kent | User Manager → Add/Remove/Edit users |
| Q2 | How is access scoped by *content* (share a course / recording with a person or group) instead of by global role? | Galen, Mitchell, 8-roles finding | User Manager → Give permissions and access; Courses → Share courses w/ Participants |
| Q3 | How do products handle bulk rosters: CSV/LMS import, sync, cohorts that churn until week one? | Galen, Prepare Sim Environment pains | Courses → Adding Groups to Courses; Settings |
| Q4 | What is the minimal role set that still has an escape hatch (owner/admin/member/guest + per-item overrides)? | ls-essentials-product-model, course-model | User Manager |
| Q5 | How is access time-boxed (release date, expiry, semester end, view-only links)? | Debrief: "set video release and closing dates" | Debrief/Review → Rewatch videos |
| Q6 | How do products remove login friction and account recovery dependency? | Prepare Learners pain, JCU power user locked out | Settings |

Candidate products to mine (guest / sharing / roster patterns): Notion, Linear, Figma, Google Drive,
Dropbox, Slack Connect, Asana, ClickUp, Airtable, Miro, Loom, Frame.io, Vimeo review links,
Google Classroom, Canvas, GitHub orgs/teams, 1Password (shared vaults).

## 3. Pipeline for one module

Step 0 — **Probe** (short, before any real research)
- Mobbin MCP: run two queries (web platform), confirm we get screen ids + image URLs + mobbin_url.
- FigJam: with use_figma, place one image from URL + one sticky + one section on the Inspiration board.
  If image-from-URL is blocked, fall back to download → upload_assets.
- Refero: no MCP is configured; check whether the refero-design skill's Playwright path works with
  Daniel's login. If not, Refero is manual for this round.

Step 1 — **Research** (internal, volume is fine here)
- Per question: 2–3 Mobbin queries (flows first, screens second), limit 5–8 each.
- Output: `inspiration/access-sharing/mobbin.json` — one row per reference:
  `{id, app, title, url, image, question, take: "what we are referencing", counter_example: bool}`.
- Same shape for `refero.json` if Refero works.

Step 2 — **Internal HTML report**
- `inspiration/access-sharing/report.html`, self-contained, images embedded, grouped by question,
  each card = image + app + one-line "take" + source link. This is the raw material, never the client artefact.

Step 3 — **Converge** (Daniel + Claude, in chat)
- Pick at most 3 per question (≤ 18 total). Mark `selected: true` + crop notes in the JSON.
- Crop to the element being referenced; never place whole UIs (this was Daniel's own fix in the 09-08 DDC).

Step 4 — **FigJam board**
- One section per question. Header sticky = the question + one-sentence answer.
- Per reference: cropped image + annotation sticky ("referencing X, not Y") + source link.
- Reuse the journey-map colour legend (blue insight, pink recommendation, yellow idea) so the
  three boards read as one system. Link each section back to Gabor's module node.

Step 5 — **Client cut for Gergely (Thursday 2026-09-10)**
- Separate section on the same board, ≤ 8 references, annotated, visually coherent. Built after the
  09-09 merge with Gabor so it supports his argument rather than duplicating it.

Step 6 — **Wiki**: log to `wiki/log.md`, update `moodboard-method.md` with what the pipeline taught us.

## 4. Repo layout (this folder)

```
inspiration/
  PLAN.md                       this file
  access-sharing/
    brief.md                    questions, evidence, product list (from §2)
    mobbin.json  refero.json    references + "take" + selection
    report.html                 internal board
    assets/                     downloaded + cropped images
  scripts/
    build-report.mjs            json → self-contained html
    crop.mjs                    crop assets from selection notes
    figjam-push.mjs             helper snippets used via use_figma
```

## 5. Split: Claude vs Codex (GPT-6 Astra)

| Claude (has the MCPs and the vault) | Codex (parallel, Bash-only) |
|---|---|
| Write `brief.md` from vault evidence | Scaffold repo: README, .gitignore, `scripts/` |
| Mobbin MCP searches → `mobbin.json` | `build-report.mjs`: JSON → self-contained HTML (embed images, group by question, cards) |
| FigJam writes via use_figma | `crop.mjs`: download + crop assets from selection notes |
| Converge with Daniel, annotations | Optional: Playwright script for Refero if a login path exists |
| Wiki log | — |

Codex can start on the scaffolding + report builder immediately against a stub JSON; it does not need
research results to finish.

## 6. Decisions needed from Daniel before we start

1. Framing: "Access, roles & sharing" (recommended) or strict "User Manager admin flows"?
2. Second module: Course, or stop after one and review the process?
3. Refero: do you have a login we can use through the browser? If not, Mobbin-only for round one.
4. FigJam: OK to place full screenshots first and crop in a second pass, or crop before anything lands?
5. Timebox: client cut ready Wednesday evening for Thursday's Gergely session?

---

## Status — 2026-09-08 evening (after round 1)

Decisions taken: framing = "Access, roles & sharing"; stop after this module and review the process;
full screenshots first, crop later; client cut deferred (Daniel handles it tomorrow).

Done:
- Research: Mobbin (3 agents, 84 refs → 80 after dedupe) + Refero over its MCP HTTP endpoint (64 refs).
  Merged with the one-source-per-product rule (7 dropped) → `access-sharing/references.json`, 137 refs, 581 images.
- Assets: `access-sharing/assets/` (551 downloaded; 64 Refero previews returned 403 and are skipped).
- Internal HTML report: `access-sharing/report.html` (self-contained, 20 MB, 551 images embedded, filters + lightbox).
- FigJam: 6 sections, 137 sticky+label rows, 517 images (flows capped at 8 steps). See `access-sharing/figjam/README.md`.
- Tooling (Codex/GPT-6 Astra built the report builder, fetch-assets, crop; Claude built merge, planner, FigJam generators).

Lessons for round 2:
- Figma rejects WebP fills silently (blank). Convert to PNG first (`scripts/convert-webp.mjs`).
- FigJam stickies cannot be made wide via the API; long "take" text shrinks. Consider a text node beside the sticky.
- Mobbin image URLs are per-call redirect links; download immediately. Refero preview URLs are stable but some 403.
- Refero MCP is not loaded in this workspace; `scripts/refero-mcp.mjs` talks to it directly with the bearer token.
- Volume: 137 refs is too many for a converged board. Next step is the converge pass (`selected: true`, ≤3 per question).

Next: converge with Daniel → mark `selected` in references.json → rebuild report → client cut section on the board.
