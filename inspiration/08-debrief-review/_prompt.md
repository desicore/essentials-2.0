# Essentials 2.0 — Debrief / Review: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. After a recorded simulation session, faculty lead a **debrief**: the group sits in a debrief room with a big screen, rewatches key moments, discusses what happened, and faculty give (mostly **group**) feedback and grades. Later, learners and faculty may **rewatch**, download or share the recording.

**Personas:**
- **Faculty:** 40–60, non-technical. Runs the debrief, often straight after the session.
- **Learners:** want their own recording and feedback.
- **Sim tech:** sets up the debrief room.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

| id | Job | What to look for |
|---|---|---|
| `rewatch` | Rewatch videos | Jump to moments from markers/chapters/transcript, playback speed, multi-angle, resume where you left off |
| `second-screen` | Separate app or QR: see notes and annotations | Scan a QR on the big screen → phone becomes the private remote/notes view while the big screen shows only video; handoff between devices |
| `ai-debrief` | AI-based debriefing (formative & summative) | AI summary of what happened, suggested discussion points, evidence-linked moments, faculty edit/approve before showing |
| `ai-clips` | AI-provided short clips | Auto-generated highlight clips/reels from long recordings, trimming, reviewing and publishing clips |
| `record-debrief` | Record the debriefing and attach the evaluation to reports | Record the discussion itself (audio), transcribe, attach outcomes/grades to the session record |
| `group-grading` | Group grading | Grade/give feedback to a whole team at once with per-person overrides; rubric for a group |
| `download-share` | Download videos / easy sharing of recordings | Share link with expiry and permissions, share with a specific learner, download with a consent/confirmation step |
| `camera-views` | 360 camera / PTZ in review | Switching camera angles or a 360 view during playback |

## Baseline

**The SRV (LearningSpace's session video review screen) is reused, not rebuilt.** Screenshot: `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/04-recording/baseline/srv-transcript-tab.png`.
- Layout: video left; right-panel tabs **Annotation · Data Entry · Layout · Transcript**.
- Transcript tab: chapters with speaker-labelled transcript and search.
- A chaptered timeline with clickable manual and AI annotation markers.
- Today faculty annotations are **visible to learners** on the debrief-room screen, which faculty dislike.

**The headline concept (from the solution concept):**
- When the recording ends, the SRV shows a **QR for this recording's debrief**. The faculty member scans it and gets a **web page on their phone**: their own annotations, the AI annotations, the AI summary and AI clips.
- The **big screen shows only the video**, controlled from the phone.
- The debrief's audio is captured and AI-harvested (phone voice-memo as a fallback).

**Open conflict:** one stakeholder wants a **tablet** interface like SimStation/Laerdal because a phone is too small; the concept deck says don't mandate tablets. Flows that work on both are especially valuable.

**Also proposed:**
- Prioritize group grading (it is the dominant mode).
- Easy download and link sharing.
- AI short clips.

**Constraints:**
- AI clips must exist **immediately after** the session; render-then-transcribe is too slow.
- Recording faculty speech raises a separate consent question.
- Learners get video via an **expiring share link or SSO**. Stand-alone vs. Canvas SSO is still debated.
- No native app is preferred for the debrief page (web first).

## Seams (read, don't re-research)

- `courses/08-recordings-course-reports/` covers access to recordings from a course (library, per-learner access, playback enrichments like chapters/transcripts). Read `synthesis.json` / `notes/` first and don't repeat it.
- `04-recording` covers live control, live notes and grading **during** the recording. Here, grading is **after**, in the debrief.
- `09-mobile-ipad` covers the general mobile/iPad app. Here, `second-screen` is specifically the **QR → phone remote for the debrief**.

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Sports video review: Hudl, Veo, Coach's Eye / OnForm, Catapult (team review, clips, group feedback)
  - Video feedback: Frame.io, Loom, Vimeo review, Wistia (comments on the timeline, share links with expiry, download permissions)
- **Adjacent:**
  - Meeting recorders with AI summaries and clips: Grain, Gong, Fathom, Otter, tl;dv, Fireflies, Zoom AI Companion
  - AI clip makers: Descript, Opus Clip, Riverside Magic Clips
  - Second-screen / QR handoff: Netflix/YouTube phone-as-remote, Chromecast, Kahoot (big screen + phones), Mentimeter/Slido, Apple Continuity
- **Wildcard:**
  - Group feedback and peer review: Miro/FigJam voting, Parabol / Retrium retrospectives, Perusall
  - Smart-home "tap to cast" flows

## Module-specific rules

- `second-screen` must show **both sides** (big screen and phone) where the source allows. A lone phone screen is weak evidence.
- For `ai-debrief` and `ai-clips`, keep flows that show **human review before sharing**. Flag products that publish AI output with no review step as counter-examples.

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
MOD=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/08-debrief-review
WORK=$MOD/work
PIPE=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/userflow-patterns--user-mgmt/inspiration/scripts
```

- **Report (the deliverable):** `$MOD/08-debrief-review.html`, built only by `node $PIPE/build-gallery.mjs $WORK`. Do not write your own report builder or post-process the HTML.
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
3. Write `$WORK/module.json` with `module: "08-debrief-review"`, `title`, `intro` (scope, sources Mobbin + Refero, today's date), `baseline` (from "Baseline" below, 2–5 sentences), `targets` (`{"products": [min, max], "flows": [min, max]}` from the Output table, as integers), `jobs` (ids/titles/descriptions exactly as in the table), `products: []`, `synthesis: {patterns: [], open_questions: []}`.

### Phase 1 — Fetch (4 or more × `gallery-fetcher`, parallel)
- **Hard cap: at most 4 Mobbin search calls per fetcher**, each with `limit` ≤ 5. Every Mobbin call returns inline preview images, and a subagent conversation crashes at ~100 images, losing everything it hadn't written. If the jobs need more searches, launch **more fetchers** (1–2 jobs each), not longer ones. Fetchers must append to their raw file **after every call**, so a crash loses at most one search.
- Split the jobs across fetchers (1–3 jobs each, within the 4-call cap). Each fetcher writes **its own** file: `$WORK/raw/mobbin.<letter>.json`, plus one fetcher (or a dedicated one) for `$WORK/raw/refero.json`.
- Brief each fetcher with:
  - Its queries (plain-language journeys, one per call, with product names where useful).
  - Its platforms (web and ios (phone-controlled debrief is central)).
  - The Mobbin settings: `task_intent: "Research complete user flows for reviewing recorded sessions, AI highlight clips, group feedback and sharing videos in a simulation-education debrief"` and `output_destination: "doc"`, the same on every call.
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
2. `node $PIPE/build-gallery.mjs $WORK` → `$MOD/08-debrief-review.html`. Target size < 40 MB; if bigger, trim steps per flow to ≤8.
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
