# 03-scenario-manager — plan

Date: 2026-09-30. Orchestrator: Opus 5.5. Fetchers: Haiku 4.5 (general-purpose subagents running the `gallery-fetcher` rules). Annotators: Sonnet 5.5 (general-purpose subagents running the `gallery-annotator` rules).

## Jobs (verbatim)

| id | Job | What to look for |
|---|---|---|
| `crud` | Add / edit / delete scenarios | Create from blank vs. template vs. duplicate; structured sections (tabs vs. one long page vs. outline); draft/published; versioning; archive vs. delete |
| `equipment` | Add an equipment list to a scenario | Picking items from a catalog vs. free text; quantities; "setup notes" for the tech; printable prep sheet |
| `access` | Give access to specific scenarios | Share one template with people/groups/roles; view vs. edit; org library vs. private |
| `checklist` | Add simple checklists to scenarios | Build a checklist/rubric (items, scoring, required); **who fills it, when, and why**; reusing items across scenarios |
| `checklist-qr` | Feedback checklist via QR, no login | QR shown on the room TV opens a form on the phone without an account; anonymous vs. identified; submission confirmation |
| `scripts` | Add scripts (simulator, SP) | Role-specific scripts/cue cards; branching or state-based steps; per-role view |
| `orientation` | Add orientation material | Attach or build a pre-briefing (video, slides, interactive walkthrough) shown before the session |
| `automation` | Decide automatic behaviour per scenario | Per-template defaults that trigger automation: auto-record, auto announcements, learner tagging, reminders; rule builders ("when X, do Y") |

## Seams (not re-researched)

- `courses/05-scenarios/` covers adding scenarios to a course: library browse + preview (Figma, Canva), batch add (Teachable, PandaDoc), reference-vs-copy (Figma, Ditto, Notion synced blocks), outline sequencing (Circle, Kajabi). This module is the authoring side; fetchers skip "insert template into a course/document" flows.
- `userflow-patterns--user-mgmt/.../02-R1-access-roles-sharing.html` already covers generic share modals (Google Docs, Figma, Miro), magic links, guest access, role matrices, CSV rosters. For `access` fetchers look only for **per-template / per-item library sharing** (template galleries scoped to team vs. private, template-level permissions).
- Equipment stock and check-out → `05-inventory`. Here: only picking items into a scenario's list.

## Product longlist (24)

- Direct, template/lesson-plan builders: Notion (templates, database templates), Coda, Confluence, Canva (brand templates), Pitch
- Direct, course/lesson authoring: Articulate Rise, 360Learning, Teachable, Thinkific, Kajabi, Trainual
- Direct, checklist/inspection builders: SafetyCulture (iAuditor), Process Street, Lumiform, GoCanvas, Jotform
- Adjacent: Paprika, NYT Cooking, Mealime, Whisk/Samsung Food (ingredient lists → equipment); Linear / Asana / ClickUp templates (runbooks); StudioBinder (call sheets, scripts); Typeform, Tally, Google Forms (QR / no-login forms); Zapier, Airtable, Notion automations, HubSpot workflows (rules)
- Wildcard: Arcade, Supademo, Loom (interactive walkthroughs); World Anvil / D&D Beyond / Roll20 (game-master scenario tools); Duolingo-style interactive lessons; restaurant QR menus/feedback (Toast, Square)

## Queries → jobs → platforms

| # | Query | Jobs | Platform | Fetcher |
|---|---|---|---|---|
| 1 | Create a new template from blank or from a template gallery, edit sections, publish (Notion, Coda, Confluence) | crud | web | A |
| 2 | Duplicate, archive or delete a template, version history / restore (Notion, Confluence, Canva) | crud | web | A |
| 3 | Share a single template with specific people or a team, view vs edit, team library vs private (Canva brand templates, Notion, SafetyCulture) | access | web | A |
| 4 | Recipe with ingredient list and quantities, add ingredients, shopping list / print (Paprika, NYT Cooking, Mealime) | equipment | ios, web | B |
| 5 | Add items from a catalog to a list with quantities and notes (Airtable, inventory/BOM, StudioBinder) | equipment | web | B |
| 6 | Production call sheet / shooting script / breakdown per role (StudioBinder) | scripts, equipment | web | B |
| 7 | Script / cue cards / step-by-step procedure with branching or role views (Trainual, Process Street, SOP) | scripts | web | B |
| 8 | Build an inspection checklist template with items, scoring, required questions (SafetyCulture, Lumiform, Process Street) | checklist | web, ios | C |
| 9 | Build a rubric / quiz / evaluation form with scoring (Google Forms, Typeform, Jotform, 360Learning) | checklist | web | C |
| 10 | Share a form via QR code, fill it on the phone without an account, submission confirmation (Typeform, Tally, Jotform, Google Forms) | checklist-qr | web, ios | C |
| 11 | Scan a QR code to open a feedback form / survey on the phone (restaurant, event, SafetyCulture) | checklist-qr | ios | C |
| 12 | Build an interactive walkthrough / demo from screenshots, add hotspots and steps (Arcade, Supademo, Loom) | orientation | web | D |
| 13 | Course authoring: add lesson blocks — video, slides, interactive (Articulate Rise, 360Learning, Teachable) | orientation, crud | web | D |
| 14 | Create an automation rule "when X happens, do Y" on a template or database (Notion, Airtable, Zapier, HubSpot) | automation | web | D |
| 15 | Recurring / default settings on a template that apply to every instance (Linear, Asana, ClickUp recurring templates) | automation, crud | web | D |

## Fetcher split

- **A** → `raw/mobbin.A.json`: crud, access (queries 1–3).
- **B** → `raw/mobbin.B.json`: equipment, scripts (queries 4–7).
- **C** → `raw/mobbin.C.json`: checklist, checklist-qr (queries 8–11). iOS allowed for checklist-qr phone side.
- **D** → `raw/mobbin.D.json`: orientation, automation (queries 12–15).
- **R** → `raw/refero.json`: dedicated Refero fetcher, all 8 jobs, web. Must verify every kept flow's images belong to that flow id (04-recording's Refero file had mismatched image sets).

Mobbin settings on every call: `task_intent: "Research complete user flows for authoring and managing reusable templates with checklists, equipment lists and access rules in a simulation-education platform"`, `output_destination: "doc"`.

## Run log

- Round 1 (A, B, C, R): 58 candidates. Fetcher D crashed (more than 100 inline preview images in one conversation). Subagent sandboxes block the image CDNs, so the orchestrator ran every `fetch-assets.mjs` download with network access (0 failures).
- Gap round (D1 orientation, D2 automation, E checklist + QR phone side; `limit: 3`, at most 6 calls each): +32 candidates. Duplicate Grain scorecard removed from E. Cal.com workflow trimmed from 13 to 12 steps (middle step dropped, asset files renumbered).
- Refero: both used flows (`refero:593` Pitch, `refero:5421` Shopify) were verified by annotators as matching their product.
- Annotation retags: Luma is the host scanning guest tickets, so it is kept as the QR counter-example. UNIQLO is a logged-in in-app survey (tagged `checklist`) and was dropped. Grain's auto-record defaults are workspace-global and were dropped, together with Grain's scorecard. Google AI Studio kept for per-role scripts.
- Two resumed/relaunched annotator calls reported a timeout but ran in the background. One edited `module.json` and renamed `notes/google-ai-studio.json` (outside its brief). Both were reverted by the orchestrator. Unused notes (`grain.json`, `uniqlo.json`) are left in `notes/`.
- Final: 13 products, 21 flows, 131 steps, 4.6 MB. `checklist-qr` has no complete TV-QR → phone → no-login loop (see open questions).
