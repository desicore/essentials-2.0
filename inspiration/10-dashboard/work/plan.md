# 10-dashboard — plan

Date: 2026-09-30. Orchestrator: Opus 5.5. The custom `gallery-fetcher` / `gallery-annotator` subagent types were not offered in this Cursor session, so fetchers run as **general-purpose subagents on Haiku 4.5** and annotators as **general-purpose subagents on Sonnet 5.5**, each with the full body of the matching `.cursor/agents/*.md` pasted into its brief.

## Jobs (verbatim)

| id | Job | What to look for |
|---|---|---|
| `role-home` | Role-based home | Different first screens per role (admin vs. faculty vs. tech vs. learner), switching roles/views, what's hidden vs. shown per role |
| `today` | Today & upcoming | Today's agenda (sessions by time and room), "up next", countdowns, jumping straight into the session's action (start recording, open checklist, open debrief) |
| `center-overview` | Center overview / room status | Compact multi-room status (free / in use / recording / problem) on the home, drill into one room. The full live wall belongs to Recording. |
| `system-health` | System health at a glance | "All systems OK" vs. warning vs. failing, last self-test result, what's broken and the guided path to fix it or who to call |
| `kpis` | Few, precise KPIs | A handful of metrics (utilisation, sessions run, recordings, learner contact hours), trend vs. last period, click-through to the full report |
| `action-items` | Action items & notifications | What needs me: pending grading, checklists to review, recordings to share, setup tasks, approvals. Inbox vs. cards; dismiss / snooze / done |
| `widgets` | Customizable widgets | Add / remove / reorder / resize widgets, widget library, defaults per role, reset to default. **Also counter-examples of clutter.** |
| `navigation` | Module navigation & quick actions | How the home exposes modules (tiles vs. sidebar vs. command palette), global search, quick-create ("new session", "new scenario"), recents / favourites |
| `first-run` | Empty state & setup guide | A brand-new center: setup checklist (rooms, cameras, users, first course), progress, sample data, "what's new" announcements for existing users |

## Seams (not re-researched)

- `04-recording` (Riverside, Grain, Preply, Google Home, Tesla, Alexa…): multi-room wall and device check. Its open question: no NVR/security multi-room flow was found. Here: the home-level summary only.
- `06-scheduling` (Deputy, Calendly, Cal.com, Motion, Notion, Better Stack…): the calendar itself. Robin/Skedda/Envoy returned nothing. Here: the today/upcoming slice.
- `07-reports` (Mixpanel, Amplitude, Cal.com, Whereby, Deputy, Midday…): full reports, digests, utilisation units. Here: the few KPIs and the click-through.
- `08-debrief-review`, `09-mobile-ipad`: grading, sharing, AI summaries, check-in; these surface here as action items.
- Products reused from earlier modules (Tesla, Google Home, Better Stack, Cal.com, Deputy, Motion, American Airlines, Slack) are allowed only with their **home/dashboard** flow.
- Lesson from 07–09: Refero's image CDN returned 403 for most steps. The Refero fetcher checks downloads after its first flow and stops early if they fail.

## Product longlist (24)

- Direct, ops/facility: UniFi / Ubiquiti, Verkada, Envoy, Robin, Skedda, Eero, Google Home
- Direct, education: Canvas, Google Classroom, Schoology, Blackboard, Docebo, 360Learning, Teachable/Kajabi admin
- Direct, clinic ops: Jane App, Cliniko, Doctolib, SimplePractice
- Adjacent, SaaS homes: Stripe, Shopify, Square, HubSpot, Linear, GitHub, Vercel, Better Stack, Datadog, Intercom
- Adjacent, personal today: Sunsama, Motion, Notion Calendar, Google Calendar, Apple Health / Fitness
- Adjacent, widget systems: Notion, ClickUp, Monday, Jira, Home Assistant, iOS widgets
- Wildcard: Tesla, United / Delta / American (day of travel), Ring

## Queries → jobs → platforms

| # | Query | Jobs | Platform | Fetcher |
|---|---|---|---|---|
| 1 | Home dashboard that looks different per role or lets you switch role/workspace view (Canvas student vs. teacher, Shopify, HubSpot, Google Classroom) | role-home | web | A |
| 2 | App home with sidebar modules, global search / command palette and quick-create (Linear, Vercel, GitHub, Notion) | navigation | web | A |
| 3 | Home with recents and favourites / pinned items, jump back in (Notion home, ClickUp, Figma) | navigation, role-home | web | A |
| 4 | Today's schedule home: appointments by time, next up, open the appointment's action (Jane App, Cliniko, SimplePractice, Sunsama, Notion Calendar) | today | web | B |
| 5 | Inbox / to-do on the home: mark done, snooze, dismiss notifications (Linear Inbox, Canvas To-Do, GitHub) | action-items | web | B |
| 6 | Day-of-travel home card with countdown, status and one primary action (United, Delta, American) | today, system-health | ios | B |
| 7 | Network / site overview: all devices OK vs. offline alert, drill into one device and fix (UniFi, Eero, Google Home, Ring) | center-overview, system-health | ios, web | C |
| 8 | Status / monitoring dashboard: incident or failing check → details → resolve or notify (Better Stack, Datadog, Vercel) | system-health | web | C |
| 9 | Room or desk booking overview: which rooms are free / in use now, open one room (Robin, Envoy, Skedda, Deskbird) | center-overview, today | web | C |
| 10 | Car app home: one glanceable status + one primary action, alert state (Tesla, Rivian) | system-health, center-overview | ios | C |
| 11 | Business home with a few KPIs, trend vs. last period, click through to the report (Stripe, Shopify, Square) | kpis | web | D |
| 12 | Customize a dashboard: add, remove, reorder and resize widgets from a library (ClickUp, Monday, Jira, HubSpot) | widgets | web | D |
| 13 | Health / fitness summary with a few pinned metrics and edit the summary (Apple Health, Apple Fitness, Oura) | kpis, widgets | ios | D |
| 14 | New account setup guide / onboarding checklist on the home with progress (Stripe, Shopify, Square, Intercom) | first-run | web | E |
| 15 | Empty dashboard with sample data or a "get started" empty state for a new workspace | first-run, widgets | web | E |
| 16 | "What's new" announcement / changelog on the home for returning users | first-run, action-items | web | E |

## Fetcher split

- **A** → `raw/mobbin.A.json`: role-home, navigation (queries 1–3).
- **B** → `raw/mobbin.B.json`: today, action-items (queries 4–6).
- **C** → `raw/mobbin.C.json`: center-overview, system-health (queries 7–10).
- **D** → `raw/mobbin.D.json`: kpis, widgets incl. one cluttered-wall counter-example (queries 11–13).
- **E** → `raw/mobbin.E.json`: first-run (queries 14–16).
- **R** → `raw/refero.json`: dedicated Refero fetcher, all 9 jobs, web first.

Mobbin settings on every call: `task_intent: "Research complete user flows for role-based home dashboards with today's agenda, room and system status, key metrics and action items in a simulation-center platform"`, `output_destination: "doc"`. Max 4 Mobbin calls per fetcher, `limit` ≤ 5.

Module rules: favour homes that show little but precisely; ≥1 cluttered widget/chart wall as a counter-example; `role-home` prefers ≥2 role variants; `system-health` / `center-overview` need the problem state; every `fit` names the Essentials module the card hands off to, or says it lives only on the dashboard.

## Fetch log

- A 8 (after dropping 2 Notion duplicates of B/E), B 12, C 12, D 13, E 15 Mobbin candidates = 60, all step images on disk.
- A and B used their 4th call on gaps: role-home (Aboard, Patreon, time2book) and today (Fresha, Tana).
- C first capped flows at 3 steps; it restored full step lists from its own results (no new calls) and re-downloaded.
- Two Notion flows were saved by two fetchers with different step lists into the same asset folder; A's shorter copies were removed and the folders re-downloaded.
- R (Refero): first report claimed 15 kept / 214 downloads, but the file was empty on disk. On retry, all 35 step images returned HTTP 403 from images.refero.design. Refero is excluded (same as 07–09).
- Sandbox note: `fetch-assets.mjs` needs `full_network` from the orchestrator's shell.

## Shortlist

12 products, 21 flows (see module.json). Reserves annotated in case a job ends with <2 products: Stripe (`kpis`) and ClickUp (`navigation`).

Mobbin returned "Untitled flow" for 18 of the 21 shortlisted flows; the orchestrator set descriptive `title`s in `raw/*.json` from the annotators' summaries. Reserves Stripe and ClickUp were not needed (their notes were deleted).

## Annotator split

- N1: shopify, notion, linear
- N2: fresha, square, jira, google-analytics
- N3: google-home, better-stack, rivian
- N4: aboard, patreon + reserves stripe, clickup
