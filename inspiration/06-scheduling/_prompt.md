# Essentials 2.0 — Scheduling: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. A simulation center schedules **sessions** (a scenario run in a room, at a time, with faculty and a group of learners) across several rooms and simulators.

A nursing course may run one scenario as up to 30 sessions for groups of 4–10 learners, rotating through stations. Schedules are born in the university's own tools (Excel master files, Outlook, Google Docs, Teams Shifts) and today get re-typed into the sim system.

**Personas:**
- **Sim coordinator / admin:** owns the schedule.
- **Faculty:** needs to know where and when to be.
- **Learners:** receive invitations.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

| id | Job | What to look for |
|---|---|---|
| `new-scheduling` | New scheduling experience in Essentials | Calendar views (day/week/resource-by-room), create/edit an event, drag to move/resize, conflict detection (room/faculty/simulator double-booked), filters |
| `simple-events` | Simple events | The fastest path to "this scenario, this room, this time, these people"; quick-create vs. full form; recurring events |
| `flexi-custom` | Flexi or custom scheduling | Rotations and group splitting: auto-generate N sessions from a roster, assign learners to slots/cells, swap people, capacity per slot, self-sign-up slots |
| `excel-import` | Excel to calendar | Upload a spreadsheet → map columns → preview → resolve errors/duplicates → create events in bulk; re-import to update |
| `outlook-sync` | Outlook calendar sync | Connect Outlook/Google/ICS, two-way vs. one-way, what shows where, invite emails, handling changes and cancellations |

## Baseline

**Reuse decision:** the **new LearningSpace Enterprise scheduling component** will be cleaned up and reused.
- OSCE features are dropped.
- **Flexi scheduling** and **calendar filtering** are kept.
- The exact keep/remove list is still open. This research should help decide it.
- The previous scheduling build took 4–5 months, so patterns must be cheap to adopt.

**Direction:**
- A **simple event model**.
- **Custom rotation with learner-cell assignment**.
- **Excel master-file import** that generates events.
- **Outlook sync**.
- **Import everywhere / enter once** is a cross-cutting principle. Calendar data should later feed Reports (room utilisation, learner contact hours).
- Canvas course/learner sync via LTI exists, but learner-to-session assignment is still manual.

**Known pain:** slots and rosters live in Excel, Outlook, Google Docs and Shifts, so every change is entered twice.

## Seams (read, don't re-research)

- `courses/06-events/` covers **adding events to a course** (the course-side view). Read its `synthesis.html` and `notes/` first and build on it. This module is the **center-wide scheduler**.
- The planned Courses sub-module "10 — Simulation dates / calendar" was **never run**, so this module also covers communicating dates to learners where a product shows it (invitation/RSVP flows under `outlook-sync`).
- Equipment reservation belongs to `05-inventory`. Room/simulator settings belong to Settings (not in scope).

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Resource and room booking: Skedda, Robin, Envoy, Condeco, Teem, Google Calendar room resources
  - Staff rostering / shifts: Deputy, When I Work, Homebase, Connecteam, Teams Shifts, Rotageek
  - Education timetabling: Google Classroom calendar, Canvas calendar, Schoology
- **Adjacent:**
  - Booking and slots: Calendly (group events, round robin), Cal.com, SavvyCal, Acuity
  - Calendars: Notion Calendar, Fantastical, Outlook, Google Calendar (import, subscription, sync settings)
  - Spreadsheet import with mapping: Airtable, Notion, HubSpot, Attio, Flatfile-style importers, Linear CSV import
- **Wildcard:**
  - Sports league schedulers: TeamSnap, LeagueApps (auto-generated round robins)
  - Restaurant table management: OpenTable, SevenRooms (capacity, rotations, drag to reseat)
  - Interview scheduling: Greenhouse, Ashby, GoodTime (multi-person, multi-room)

## Module-specific rules

- For `excel-import`, the column-mapping + preview + error-resolution steps matter more than the upload screen. Keep flows that show all three.
- For `flexi-custom`, look for flows that turn **one roster into many sessions**. That is the core simulation-center problem.

---

## Output (read this first)

The deliverable is a **product-first flow gallery**: one self-contained, offline HTML file for this module. It is organized **by product**. Each product shows 1–3 **complete flows** (every step, in order), and every flow is tagged with the module's **jobs** (the table above). Jobs act as filters and feed a jobs × products coverage grid. Earlier modules were split into Q1–Q6 per sub-module with 30–50 mostly single screens each. That was too fragmented and too long. Do not reproduce that format.

| | Target |
|---|---|
| Products | 8–12 |
| Complete flows | 15–25 (single screens only as a rare supplement, never more than 20% of cards) |
| Per job | at least 2 flows from 2 different products |
| Per flow | every step Mobbin/Refero provides, max 12 (if longer, keep first, last and evenly spaced steps between) |

**Where everything goes (absolute paths, create folders as needed):**

```
MOD=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/06-scheduling
WORK=$MOD/work
PIPE=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/userflow-patterns--user-mgmt/inspiration/scripts
```

- **Report (the deliverable):** `$MOD/06-scheduling.html`, built only by `node $PIPE/build-gallery.mjs $WORK`. Do not write your own report builder or post-process the HTML.
- **Working files:** `$WORK/plan.md`, `$WORK/module.json`, `$WORK/raw/*.json`, `$WORK/notes/*.json`, `$WORK/assets/`.
- **Data contract:** `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/userflow-patterns--user-mgmt/inspiration/gallery-schema.md`. Read it before anything else; every JSON file you or your agents write follows it exactly.
- **Index:** after building, run `node $PIPE/build-gallery-index.mjs /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration` to refresh `inspiration/index.html`.

## Run model: you orchestrate, subagents fetch and annotate

You are the planner and orchestrator (Opus). Your context window is limited (~250k), so **delegate every token-heavy step**:

- Never call Mobbin or Refero tools yourself.
- Never open screenshots.
- Never read `raw/*.json` or `assets/` directly. Use `build-gallery.mjs --list` / `--check`, which print compact summaries.

Two custom subagents are defined in `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/.cursor/agents/`:

| Subagent | Model | Job |
|---|---|---|
| `gallery-fetcher` | Haiku 4.5 | Mobbin/Refero searches → `raw/<file>.json` → downloads images immediately |
| `gallery-annotator` | Sonnet 5.5 | Looks at the downloaded steps of its products → `notes/<product-id>.json` |

If Cursor doesn't offer these two as subagent types in your session, launch **general-purpose** subagents instead. Paste the full body of the matching `.cursor/agents/*.md` file into each brief, and set the model explicitly: Haiku 4.5 for fetchers, Sonnet 5.5 for annotators. Note in `plan.md` that you did this.

Launch parallel subagents **in a single message** (several Task calls at once). Give each one: the absolute paths above, its exact output file, its jobs and queries, the fixed `task_intent`, and the return format. Subagents don't see this prompt; brief them fully.

### Phase 0 — Plan (you)
1. Read `gallery-schema.md`, this prompt, and the **prior research** listed under "Seams" (synthesis/notes only, not whole reports).
2. Write `$WORK/plan.md`: the jobs (verbatim from the table), a **product longlist** (15–25 names, drawn from the seed list plus your own ideas), 10–16 search queries mapped to jobs and platforms, and the fetcher split below.
3. Write `$WORK/module.json` with `module: "06-scheduling"`, `title`, `intro` (scope, sources Mobbin + Refero, today's date), `baseline` (from "Baseline" below, 2–5 sentences), `targets` (`{"products": [min, max], "flows": [min, max]}` from the Output table, as integers), `jobs` (ids/titles/descriptions exactly as in the table), `products: []`, `synthesis: {patterns: [], open_questions: []}`.

### Phase 1 — Fetch (3 or more × `gallery-fetcher`, parallel)
- **Hard cap: at most 4 Mobbin search calls per fetcher**, each with `limit` ≤ 5. Every Mobbin call returns inline preview images, and a subagent conversation crashes at ~100 images, losing everything it hadn't written. If the jobs need more searches, launch **more fetchers** (1–2 jobs each), not longer ones. Fetchers must append to their raw file **after every call**, so a crash loses at most one search.
- Split the jobs across fetchers (1–3 jobs each, within the 4-call cap). Each fetcher writes **its own** file: `$WORK/raw/mobbin.<letter>.json`, plus one fetcher (or a dedicated one) for `$WORK/raw/refero.json`.
- Brief each fetcher with:
  - Its queries (plain-language journeys, one per call, with product names where useful).
  - Its platforms (web first; ios only for calendar-sync and invite-response flows).
  - The Mobbin settings: `task_intent: "Research complete user flows for scheduling rooms, sessions and learner rotations with calendar import and sync in a simulation-education platform"` and `output_destination: "doc"`, the same on every call.
  - Tool order: `search_flows` first (limit 5, pages 1–2), then `search_screens` (`mode: "deep"`) only to fill a job with no usable flow.
  - Refero: search flows first, then fetch the full flow to get every step's image URL.
- **Keep rule:** keep a result only if its steps actually show the job end-to-end (the fetcher must look at the inline previews, not just titles). Cap at 12 steps. Prefer products from the longlist, but keep strong unexpected finds.
- **Download immediately** after every search call: `node $PIPE/fetch-assets.mjs <its raw file> --out $WORK/assets` (Mobbin image URLs expire).
- Target per fetcher: 10–20 kept candidates, at most 3 per product per job.
- Fetcher return: ≤150 words. Kept count per product, per job, per platform; jobs with no good flow; download failures.

### Phase 2 — Shortlist (you)
1. Run `node $PIPE/build-gallery.mjs $WORK --list`. It prints one compact line per candidate, grouped by product.
2. Pick 8–12 products and 15–25 flows so that every job is covered by ≥2 products. Prefer **complete multi-step flows**, a mix of `direct` / `adjacent` / `wildcard` analogs, and different approaches to the same job, because the value is in the differences.
3. Write `products` in `module.json`: `id` (kebab-case), `name`, `analog`, a first-draft `why`, and `flows` (candidate ids in display order, strongest product first).
4. If a job has <2 products, run **one** extra `gallery-fetcher` round targeted at that gap. Then stop fetching: an honest gap is better than a weak filler flow. Mention the gap in `open_questions`.

### Phase 3 — Annotate (`gallery-annotator` × 3–4, parallel, 2–4 products each)
Brief each annotator with:
- Its product ids and flow ids.
- The step image folders: `$WORK/assets/<safe-id>/<index>.*`, where `safe-id` = `encodeURIComponent(id)` with `.` → `%2E`, e.g. `mobbin%3A<uuid>`.
- The job table.
- The **Baseline** paragraph.
- The notes format from `gallery-schema.md`.

It looks at **every** step image and writes `$WORK/notes/<product-id>.json`:
- `summary`: start → end, one sentence
- `steps`: one short label per image, same count
- `steal`: 2–4 concrete, reusable ideas
- `avoid`: 0–1 things not to copy
- `fit`: one line on how it maps to Essentials 2.0 / the baseline
- `jobs`: corrected if the candidate tags were wrong
- `counter_example`: true only when the whole flow is a "don't build this"

Evidence only: describe what the screens show, never what the app "probably" does. Return: ≤120 words per product (headline difference vs. the other products, 1–2 candidate cross-product patterns).

### Phase 4 — Synthesis (you)
1. From the annotator returns (not the images), finalize each product's `why` and `analog`.
2. Write `synthesis.patterns`: 5–8 patterns the best products converge on, or where they meaningfully diverge. Each has a title, 2–4 sentences, and 1–4 `flows` ids that demonstrate it.
3. Write `synthesis.open_questions`: 3–6 items, covering where patterns don't map cleanly to a simulation center, plus known gaps.
4. Every claim must point to flows in the report.

### Phase 5 — Build & QA (you, or a Bash subagent for the noisy parts)
1. `node $PIPE/build-gallery.mjs $WORK --check`: must end with **0 ERROR lines**. Fix by editing `module.json` or asking an annotator/fetcher to fill the hole. Warnings are fine if explained in the final message.
2. `node $PIPE/build-gallery.mjs $WORK` → `$MOD/06-scheduling.html`. Target size < 40 MB; if bigger, trim steps per flow to ≤8.
3. `node $PIPE/build-gallery-index.mjs /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration`.
4. Browser QA (browser subagent): serve with `python3 -m http.server` from `$MOD`, open the HTML over http, and confirm:
   - zero broken `img` elements (ignore `#lb-img`, the empty lightbox)
   - the coverage grid has no red job, or the gap is explained
   - a job filter and the search narrow the list
   - the lightbox arrows step through a flow

   Stop the server afterwards.

## Rules

- **Functional focus:** journeys, states, decisions, defaults, error/empty states. Ignore colour, typography and brand unless they carry meaning.
- **Complete flows over pretty screens.** A 7-step flow with a mediocre UI beats one beautiful screen.
- **Compare, don't list.** Each product must earn its place with something the others don't show. Include 1–3 counter-examples across the module.
- Mobbin and Refero are alternative sources. If the same flow is in both, keep one (prefer the one with more steps).
- Do not use WebFetch or curl. Download images only through `fetch-assets.mjs`.
- Stay inside `$MOD`. Never edit other modules' folders, `courses/`, `userflow-patterns--user-mgmt/` (except running its scripts), or the scripts themselves. If a script bug blocks you, stop and report it.
- Don't commit; Daniel reviews first.
- **Final message:** report path + size, product/flow/screen counts, the `--check` summary line and coverage line, any warnings with reasons, and 3–5 headline findings. Then **stop**: do not start another module.
