# Essentials 2.0 — Dashboard (home): flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. A simulation center runs recorded training sessions in several rooms with manikins/simulators, standardized patients (SPs) and cameras. The **dashboard** is the first screen after login. It has to answer, per role, *"what's happening, what needs me, and is everything working?"*, then get people into the right module in one click.

The modules it sits on top of have been researched already (see Seams): Courses, User management, Scenario manager, Recording, Inventory, Scheduling, Reports, Debrief/Review, Mobile/iPad.

**Personas:**
- **Sim coordinator / admin:** runs the center, schedules, reports to leadership.
- **Sim tech / operator:** preps rooms and AV, wants recording to "just work".
- **Faculty:** 40–60, non-technical. Designs, observes, debriefs and grades.
- **Learner:** mostly doesn't log in today. Wants their own recording and feedback, via a lightweight web page rather than an app.

## Jobs (derived from Daniel's notes; the FigJam concept map has no dashboard boxes)

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

## Baseline

**Today (LS Essentials):**
- The dashboard is a set of **module tiles**: Recording, Video Review, Reports, SC (scenario) management, Calendar.
- A **Center Overview** shows rooms and their activity from the calendar.
- In the team's own words, **today's dashboard is weak**.

**The LearningSpace Enterprise dashboard facelift (shipped mid-2026):**
- Scope was **WCAG / screen-reader compliance + visual cleanup, "redrawn not rewritten"**.
- A clean white layout, modules in their own row so "Core Activities" breathes, a raised **Upcoming** tab, a **"Your Activities"** tab, buttons instead of links, the settings cogwheel kept.
- Responsive to iPad portrait/landscape and mobile.
- **Explicitly deferred to a "phase 2":** a **role-specific, widget-based layer** (admin / center lead vs. learner: event counts, sim-center utilisation, recording stats, toggleable widgets). Leadership (Gergely) keeps asking for widgets modelled on a third-party dashboard he saw.
- Daniel's standing line, agreed with engineering: **a good dashboard shows little, but precisely. Don't add widgets or charts just to have something there.** Widgets need a dashboard rewrite anyway, so they are being folded into Essentials 2.0.

**Direction for Essentials 2.0:**
- A **central dashboard** that brings learner feedback, faculty grading and reports together (data sources: LS, Qualtrics, Power BI; KPIs; access rules still to be specified).
- A **"system health OK"** status fed by the automatic per-room device check.
- A **center overview** for fast multi-room awareness.
- Open strategic question: **build the Essentials 2.0 dashboard new, or facelift the existing one**. This research should inform that call.
- A **multi-campus dashboard** has been floated, but it's an access-control rabbit hole (separate LS instances per campus). At most one flow on it, as a pointer.
- Cross-cutting principle: **information entered once** (calendar, sessions, participants) feeds everything the dashboard shows. There is no separate data entry for the dashboard.

## Seams (read, don't re-research)

Every earlier module has a built gallery. Read **only** the `synthesis` block and the product list of these `module.json` files (not the HTML, not raw/notes). Use them to avoid repeating flows and to see which module each dashboard card should hand off to:
- `inspiration/04-recording/work/module.json`: multi-room wall, device check. Here: the **home-level summary** only.
- `inspiration/06-scheduling/work/module.json`: the calendar itself. Here: the **today/upcoming slice** on the home.
- `inspiration/07-reports/work/module.json`: full reports and scheduled digests. Here: the **few KPIs** and the click-through.
- `inspiration/08-debrief-review/work/module.json` and `inspiration/09-mobile-ipad/work/module.json`: learner/faculty follow-ups that may surface as action items.

A product already used in another module may appear again only with a **different flow** (its home/dashboard flow).

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Ops and facility homes: UniFi / Ubiquiti site manager, Verkada Command, Envoy, Robin, Skedda (room status + health)
  - Education homes: Canvas dashboard and to-do, Google Classroom, Schoology, Blackboard Ultra, Docebo, 360Learning
  - Healthcare/clinic ops: Jane App, Cliniko, Doctolib Pro, SimplePractice (today's schedule + to-dos)
- **Adjacent:**
  - Role-based SaaS homes: Stripe (home + setup guide), Shopify admin home, Square dashboard, HubSpot home, Linear "My issues" / Inbox, GitHub dashboard, Vercel/Netlify overview, Datadog/Better Stack status (health)
  - Personal "today" homes: Sunsama, Motion, Notion Calendar, Google Calendar Today, Apple Fitness/Health Summary (few precise metrics)
  - Widget systems: Notion home, ClickUp dashboards, Monday dashboards, Jira dashboards, iOS/iPadOS widgets, Home Assistant
- **Wildcard:**
  - Tesla / car apps (single glanceable status + one primary action)
  - Airline apps on the day of travel: United, Delta, American (time-sensitive "what's next")
  - Smart-home health: Google Home, Eero, Ring (all-OK vs. problem states)

## Module-specific rules

- Favour homes that **show little, but precisely**. At least one counter-example must be a **cluttered widget/chart wall**, with a `why` that says what it costs the user.
- For `role-home`, prefer products that show **two or more role variants** of the same home. A single role's home is weak evidence.
- For `system-health` and `center-overview`, the **problem state** (warning/failing, with a fix path) matters more than the all-green state. Keep flows that show both.
- Every `fit` line must name which Essentials module the card hands off to (Recording, Scheduling, Reports, Debrief, Scenario manager, Inventory, Courses, User management), or say that it lives only on the dashboard.

---

## Output (read this first)

The deliverable is a **product-first flow gallery**: one self-contained, offline HTML file for this module. It is organized **by product**. Each product shows 1–3 **complete flows** (every step, in order), and every flow is tagged with the module's **jobs** (the table above). Jobs act as filters and feed a jobs × products coverage grid. Earlier modules were split into Q1–Q6 per sub-module with 30–50 mostly single screens each. That was too fragmented and too long. Do not reproduce that format.

| | Target |
|---|---|
| Products | 8–12 |
| Complete flows | 18–25 (single screens only as a rare supplement, never more than 20% of cards) |
| Per job | at least 2 flows from 2 different products |
| Per flow | every step Mobbin/Refero provides, max 12 (if longer, keep first, last and evenly spaced steps between) |

**Where everything goes (absolute paths, create folders as needed):**

```
MOD=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/10-dashboard
WORK=$MOD/work
PIPE=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/userflow-patterns--user-mgmt/inspiration/scripts
```

- **Report (the deliverable):** `$MOD/10-dashboard.html`, built only by `node $PIPE/build-gallery.mjs $WORK`. Do not write your own report builder or post-process the HTML.
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
3. Write `$WORK/module.json` with `module: "10-dashboard"`, `title`, `intro` (scope, sources Mobbin + Refero, today's date), `baseline` (from "Baseline" below, 2–5 sentences), `targets` (`{"products": [min, max], "flows": [min, max]}` from the Output table, as integers), `jobs` (ids/titles/descriptions exactly as in the table), `products: []`, `synthesis: {patterns: [], open_questions: []}`.

### Phase 1 — Fetch (5 or more × `gallery-fetcher`, parallel)
- **Hard cap: at most 4 Mobbin search calls per fetcher**, each with `limit` ≤ 5. Every Mobbin call returns inline preview images, and a subagent conversation crashes at ~100 images, losing everything it hadn't written. If the jobs need more searches, launch **more fetchers** (1–2 jobs each), not longer ones. Fetchers must append to their raw file **after every call**, so a crash loses at most one search.
- Split the jobs across fetchers (1–3 jobs each, within the 4-call cap). Each fetcher writes **its own** file: `$WORK/raw/mobbin.<letter>.json`, plus one fetcher (or a dedicated one) for `$WORK/raw/refero.json`.
- Brief each fetcher with:
  - Its queries (plain-language journeys, one per call, with product names where useful).
  - Its platforms (web first; ios/ipad only for glanceable status and today views).
  - The Mobbin settings: `task_intent: "Research complete user flows for role-based home dashboards with today's agenda, room and system status, key metrics and action items in a simulation-center platform"` and `output_destination: "doc"`, the same on every call.
  - Tool order: `search_flows` first (limit 5, pages 1–2), then `search_screens` (`mode: "deep"`) only to fill a job with no usable flow.
  - Refero: search flows first, then fetch the full flow to get every step's image URL.
- **Keep rule:** keep a result only if its steps actually show the job end-to-end (the fetcher must look at the inline previews, not just titles). Cap at 12 steps. Prefer products from the longlist, but keep strong unexpected finds.
- **Download immediately** after every search call: `node $PIPE/fetch-assets.mjs <its raw file> --out $WORK/assets` (Mobbin image URLs expire).
- Target per fetcher: 10–20 kept candidates, at most 3 per product per job.
- Fetcher return: ≤150 words. Kept count per product, per job, per platform; jobs with no good flow; download failures.

### Phase 2 — Shortlist (you)
1. Run `node $PIPE/build-gallery.mjs $WORK --list`. It prints one compact line per candidate, grouped by product.
2. Pick 8–12 products and 18–25 flows so that every job is covered by ≥2 products. Prefer **complete multi-step flows**, a mix of `direct` / `adjacent` / `wildcard` analogs, and different approaches to the same job, because the value is in the differences.
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
2. `node $PIPE/build-gallery.mjs $WORK` → `$MOD/10-dashboard.html`. Target size < 40 MB; if bigger, trim steps per flow to ≤8.
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
