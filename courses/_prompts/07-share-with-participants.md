# Research prompt — Courses › Share courses w/ Participants → Learner Portal

Using Mobbin & Refero MCP, research how top apps design **publishing a course and sharing it with participants, and the participant-side portal that results** (publish / unpublish, visibility, invite links, what the learner sees on day one). Find the most relevant screens and user flows, compare patterns across products, and identify what the best apps do differently. Create a visual HTML report (images embedded directly) showing the top examples, common patterns, and the best practices top companies converge on. Keep the big picture in mind: this is one sub-module of **managing courses** in Essentials 2.0 (Semester → Courses → this → Learner Portal).

## What the instructor is trying to do here
Move a course from "being set up" to "live for learners": publish state, who can access (enrolled groups from 04, link / code, public), preview-as-learner, and the learner's landing experience (course home in the Learner Portal: overview, schedule, materials, progress). Announcements and sending specific materials are sub-module 09; report access in the portal is 08 — note the seams.

## Search queries to start from
Mobbin `search_screens` (web, deep):
- "course publish settings with visibility options and share link"
- "share dialog with invite by email, link access levels and copy link"
- "student course home page with modules, upcoming sessions and progress"
- "preview as student toggle in a course editor"
- "learner dashboard listing enrolled courses with progress bars"
Mobbin `search_flows` (web, then ios):
- "instructor publishes a course and invites students, student opens the course"
- "sharing a document with a team via link with permission levels"
Refero: same intents; also Figma / Google Docs / Notion / Loom share dialogs, Canvas (Publish + Student View), Google Classroom (class code / invite), Coursera / Udemy learner course home, Teachable / Thinkific student dashboard.
Products to prioritise: Canvas, Google Classroom, Moodle, Coursera, Udemy, Teachable, Thinkific, Kajabi, Maven, Circle, Figma, Google Docs, Notion, Loom.

## Questions the board answers (Q1–Q6: these become the H2 sections of the report and the columns of the comparison table)
1. Publish model (single toggle vs. per-item visibility vs. scheduled release)
2. Access grant paths (enrolled groups / link / code / email) and how permission levels are expressed
3. "Preview as learner" availability and fidelity
4. Learner course home: what is above the fold (next session, progress, materials, announcements)
5. Feedback to instructor that sharing worked (who has opened, pending invites)
6. Cross-device (web vs. mobile portal) parity

---

## Context you must keep in mind

Essentials 2.0 is Elevate's simulation-education platform. Hierarchy: **Semester → Courses → sub-modules**. An instructor or program admin sets up and runs a course; learners experience it through a Learner Portal. Frame every finding as "how does this help someone managing a course", not "how does app X style this screen". Read `courses/00-direction.md` first: it has the full module map and the nine neighbouring sub-modules, so you know the seams and don't re-research them. The previous module ("Access, roles & sharing", in `userflow-patterns--user-mgmt/inspiration/`) set the pipeline and the reference schema; this module reuses both so the reports can be merged later.

## Run model: Fable plans and synthesises, cheaper models fetch and draft

You (Fable) are the planner and orchestrator. Do not run the searches yourself and never load raw search results into your own context; only agents' summaries.

1. **Plan (Fable)** — turn the header above into `courses/07-share-with-participants/plan.md`: the six questions as `Q1`..`Q6` (verbatim from the header), 8–12 concrete search queries (screens + flows, per source) mapped to questions, the product shortlist, and the agent split below. Create `courses/07-share-with-participants/references.stub.json` with the module header + questions in the `schema.md` format (see Pipeline).
2. **Mobbin fetch agents (Haiku, 3 in parallel, one per 2 questions)** — each runs `search_screens` (`mode: "deep"`, `platform: "web"` first, then `"ios"` for the best one or two queries) and `search_flows` for its queries, with the shared `task_intent`. For every kept result it appends a reference object (schema below, `question` set, `take` = one evidence-based sentence, `selected: false`) to `courses/07-share-with-participants/mobbin.Qa-Qb.json`. After **each** search call it runs `fetch-assets.mjs` on that file so the per-call Mobbin image links are downloaded before they expire. Returns ≤200 words: products, counts per question, anything surprising. No analysis.
3. **Refero fetch agent (Haiku, 1)** — same job via the HTTP helper (`refero-q.mjs`, see Pipeline), writes `courses/07-share-with-participants/refero.json`. Refero preview URLs are stable but some return 403; skip those silently.
4. **Merge (Fable, script)** — `merge-references.mjs` → `courses/07-share-with-participants/references.json` (dedupes; one source per product+question, keeps the source with a flow). Then `fetch-assets.mjs` once more for anything missing. Target after merge: **8–12 products, 30–50 references**. If you have more than 60, cut before analysis (the previous module's 137 was too many).
5. **Pattern agents (Sonnet, 1 per question, 6 in parallel)** — each reads the references and local assets for one question and writes `courses/07-share-with-participants/notes/Qn.md` (≤350 words): how each product answers the question, the flow step by step where a flow exists, what is distinctive, one candidate counter-example. Evidence only, cite reference ids.
6. **Synthesis (Fable)** — read the six notes; write the `answer` for each question in `references.json` (this is what renders under each H2), set `counter_example: true` where warranted, and write the synthesis block (see Deliverables). Then build the report and QA it (open in Playwright; every image renders; six H2 sections; synthesis present).

Sub-agents automatically get the context-mode routing block; you still tell them the exact file paths, the schema, and the script commands.

## Pipeline (reuse, don't rebuild)

Scripts live in `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/monrovia/userflow-patterns--user-mgmt/inspiration/scripts/`; the reference JSON contract is `../schema.md` next to them (read it before writing any JSON). Set `PIPE=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/monrovia/userflow-patterns--user-mgmt/inspiration/scripts` and `MOD=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/monrovia/courses/07-share-with-participants`.

- Reference object (per `schema.md`): `{ id: "<source>:<uuid-or-id>", source: "mobbin"|"refero", app, title, kind: "flow"|"screen", url, images: [<one url per step, in order>], question: "Qn", take, counter_example: false, selected: false, crop: "" }`. Module file: `{ module: "07-share-with-participants", title, intro, questions: [{id, title, answer}], references: [] }`.
- Mobbin: MCP tools `search_screens` / `search_flows` (use the same `task_intent` for every call in this chat: `"Research how top apps design share-with-participants for course management in an education platform"`). Flow results give per-step previews; put them in `images` in order. Each screen's `mobbin_url` is the reference `url`.
- Refero: the MCP server is not loaded in this workspace. Use `node $PIPE/refero-q.mjs screens|flows "<query>" [page]` for compact listings, and `node $PIPE/refero-mcp.mjs call refero_search_screens '{"query":"...","platform":"web","response_format":"json"}'` when you need the full records (image URLs, screen UUIDs). Refero and Mobbin are alternative sources: if a product appears in both, the merge keeps one; never hand-duplicate.
- Download: `node $PIPE/fetch-assets.mjs <refs.json> --out $MOD/assets` (writes `manifest.json`, no npm deps).
- Merge: `node $PIPE/merge-references.mjs $MOD` (reads `mobbin.*.json` + `refero*.json` in that folder, writes `references.json`; it expects `references.stub.json` for the module header, mirror the previous module's stub).
- Build: `node $PIPE/build-report.mjs $MOD/references.json --embed --assets $MOD/assets --out /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/monrovia/courses/07-share-with-participants.html` (base64-embeds every image; no npm deps). Do not write your own report builder.
- `crop.mjs` / `convert-webp.mjs` need `sharp` (`npm install` in `userflow-patterns--user-mgmt/`), and are only for the later converge/FigJam pass. Skip them now: full screenshots first, crop later.
- Do not use WebFetch or curl. If a Mobbin/Refero page must be opened, use Playwright or `ctx_execute` javascript.

## Deliverables (all under `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/monrovia/courses/`)

1. `07-share-with-participants.html` — self-contained report from `build-report.mjs --embed`, **plus** a synthesis block inserted directly after the intro (a small post-processing step on the built HTML; plain HTML, no external CSS/JS):
   - **Top examples** — the 5–8 references you would show first, with product, source, one line why.
   - **Pattern comparison** — table: product × Q1..Q6 (✓ / partial / ✗ + a few words), 8–12 rows.
   - **What the best apps do differently** — 4–7 findings, each naming products and reference ids that are in the report.
   - **Best practices top companies converge on** — the short, actionable list.
   - **Open questions for Essentials 2.0** — where the pattern does not map cleanly to simulation education, the Learner Portal, or the Canvas hand-off.
   Below the synthesis, the six question sections (H2 = question title, `answer` paragraph, reference cards; flows as step strips) render as in the previous module's report.
2. `07-share-with-participants/references.json` — the merged, annotated list (`selected` stays `false`; the converge pass is a later, separate step with Daniel).
3. `07-share-with-participants/` — plan, stub, per-source JSON, `assets/`, `notes/` (kept for the merge pass; not part of the report).

## Rules

- Functional focus: flows and patterns, not visual style. Ignore colour and typography unless they carry meaning.
- Every claim in the synthesis must point to a named product and a reference id that is in the report.
- Compare, don't list: the value is in the differences between products. Include 1–3 counter-examples per report.
- Never edit files in `userflow-patterns--user-mgmt/` (previous module). Never edit other `courses/NN-*` folders.
- Report size: aim for under 20 MB; if bigger, keep flows to at most 8 steps in `images` (previous module's rule).
- When done, print: report path, reference count, product count, and 3–5 headline findings. Then **stop**: do not start another sub-module, do not merge anything.
