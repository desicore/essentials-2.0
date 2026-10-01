# Rewrite the inspiration reports in plain language (for stakeholders), Phase 1

> Status: done on 2026-09-30 (see `report.md`). For the Courses and User management reports, run `_prompt-phase2.md` instead.

You are the orchestrator (Opus 5.5). The inspiration reports in this folder are correct but written for designers and developers: long sentences, UI jargon ("toast", "CTA", "affordance", "scoped choice"), internal shorthand ("SRV", "PTZ", "09-10 asks"), and notes crammed with step references. Rewrite the **copy** so a stakeholder who is not a designer or developer (a product manager, a sales lead, a sim-center director) can open any report and understand what each product does and why it matters for Essentials 2.0.

Do not change what the reports say. Change how they say it.

## Tools and style reference

- **Humanizer rules:** read `/Users/danielbrassnyo/.claude/skills/humanizer/SKILL.md` in full before anything else. Every rewriting agent must apply its patterns (no inflated significance, no "-ing" padding, no "serves as", no negative parallelisms or tailing "no X" fragments, no rule-of-three filler, no em-dash chains, no bold inline headers, no AI vocabulary like "crucial / key / enhance / showcase / seamless", sentence-case headings, straight quotes). Skip the skill's "add personality / use I / opinions" section: these are reference documents, so the voice is plain, calm and direct, not chatty.
- If Cursor exposes the humanizer as a skill, use it. Otherwise paste the pattern list from that file into each subagent brief.

## Scope

### Phase 1 (do now): the 8 product-first reports
`03-scenario-manager`, `04-recording`, `05-inventory`, `06-scheduling`, `07-reports`, `08-debrief-review`, `09-mobile-ipad`, `10-dashboard` (all under `inspiration/`).

All their text comes from JSON, and the HTML is generated. **Never edit the `.html` files by hand.** Edit the sources and rebuild.

| Source | Fields to rewrite |
|---|---|
| `<module>/work/module.json` | `title`, `intro`, `baseline`, `jobs[].title`, `jobs[].description`, `products[].why`, `synthesis.patterns[].title`, `synthesis.patterns[].body`, `synthesis.open_questions[]` |
| `<module>/work/notes/<product>.json` | per flow: `summary`, `steps[]`, `steal[]`, `avoid[]`, `fit` |
| `<module>/work/raw/*.json` | **leave alone** (`title` and `take` are only a fallback) |

Roughly 46k words across 102 note files. The biggest modules are 03, 04, 06, 09 and 10 (about 6k words each).

### Phase 2: separate prompt
The Courses and User management reports are covered by `_humanize-copy/_prompt-phase2.md`. Do not touch them here.

## Builder labels (shared, do this once, first)

The page chrome is in `userflow-patterns--user-mgmt/inspiration/scripts/build-gallery.mjs`. Change the visible labels only (not CSS classes, data attributes or ids) so all 8 reports pick them up on rebuild:

| Now | Change to |
|---|---|
| `Steal this` | `Worth borrowing` |
| `Don't copy` | `Avoid` |
| `Essentials fit` | `What it means for Essentials` |
| `Baseline.` | `What we have today.` |
| analog badges `Direct` / `Adjacent` / `Wildcard` | `Close match` / `Same task, different field` / `Outside idea` |
| `What the best products converge on` | `What the best products have in common` |
| `Open questions for Essentials 2.0` | `Questions we still need to answer` |
| `Coverage: jobs × products` | `Which products show which tasks` |
| filter / legend wording that says "jobs" | "tasks" (keep the `jobs` field name in JSON) |
| `Counter-example` badge | `Example of what not to do` |

Also add a short **"How to read this page"** box directly under the intro (3–4 plain sentences, same for every report, hard-coded in the builder): each section is one product; the strip of screenshots is a real sequence of screens, click one to enlarge; "Worth borrowing" is what we could use, "Avoid" is what we should not copy; use the filters to see only one task; the ★ builds your own shortlist.

Keep the change small and in the style of the file. Run `--check` and a build on one module to confirm nothing broke.

## Writing rules for every rewrite agent

**Reader:** smart, busy, not a designer. They know what Essentials is and what a simulation center does. They do not know UI vocabulary or our internal abbreviations.

1. **Meaning stays the same.** Do not add facts, products, numbers or claims. Do not drop a finding, a warning, a gap or a counter-example. If a sentence is unclear to you, keep its meaning and simplify the words; do not guess.
2. **Short sentences.** Aim for 20 words or fewer. One idea per sentence. `steal`/`avoid` bullets: one sentence each, at most ~25 words. `summary`: one sentence, what the person does from start to finish. `why`: one or two sentences. Pattern `body`: 2–4 short sentences.
3. **Plain words for UI jargon.** Use the glossary below. If a technical term is unavoidable, explain it once in plain words the first time it appears in that report.
4. **Abbreviations:** spell out on first use per report, then the short form is fine. `SRV` → "the video review screen (SRV)", `PTZ` → "remote-controlled cameras that pan, tilt and zoom (PTZ)", `SP` → "standardized patient (SP)", `LMS`, `SSO`, `EMR`, `KPI`, `GDPR` likewise.
5. **Step references:** the notes currently end bullets with "(step Live REC with Mark Clip)". Replace them with a light "(screen 2)" using the step's position, or drop them if the bullet is already clear. Don't paste step labels into bullets.
6. **Quoted UI text** (button labels, messages like "Your microphone is muted. Unmute") stays verbatim in straight quotes. That is evidence; do not paraphrase it.
7. **`steps[]` labels:** short and plain (3–7 words), describing what the screen shows: "Recording in progress, with a Mark clip button", not "Live REC with Mark Clip on toolbar". The array must keep **exactly** the same length and order.
8. **`fit` lines:** say what this means for Essentials in everyday words, starting with the Essentials area it touches ("Recording: ...", "Dashboard: ..."). Keep any hand-off or "mobile beats desktop" judgement the original makes.
9. **Product and module names** stay exactly as written (Riverside, Grain, LearningSpace, Enterprise). Mobbin and Refero can stay; say "design reference libraries Mobbin and Refero" once in the intro.
10. **No new structure.** Don't add bold, emojis, headings or line breaks inside JSON strings.
11. Then apply the humanizer's final pass to each file: ask "what still reads as AI-written or as designer shorthand?", fix it, move on. Do not output the draft/audit/final triplet into the files, only the final text.

### Glossary (starting point, extend it in `_humanize-copy/glossary.md`)

| Jargon | Plain |
|---|---|
| toast | short pop-up message |
| modal / dialog | pop-up window |
| CTA | main button |
| affordance | visible control / cue |
| empty state | what the screen shows before there is any data |
| onboarding | first-time setup |
| inline | right where you are, without opening a new screen |
| chip / pill / tag | small label |
| badge | small counter or label on a button |
| drawer / side panel | panel that slides in from the side |
| stepper / wizard | step-by-step form |
| scoped choice | choice of where it applies |
| pre-flight check | check before you start |
| guardrail | automatic safety limit |
| granular permissions | detailed permissions |
| bulk action | do it to many items at once |
| deep link | link that opens a specific screen |
| state (success/error) | what the screen shows when it worked / failed |
| happy path | the normal case when everything works |
| counter-example | example of what not to do |
| flow | sequence of screens |

## Agent plan

Cursor's context is ~250k tokens, so delegate. The `.cursor/agents/*.md` definitions were not picked up last time; use general-purpose subagents and paste the brief yourself.

1. **You (Opus 5.5), serially:**
   - Read the humanizer file and this prompt. Write `_humanize-copy/style-guide.md` (the writing rules above + the humanizer pattern list, condensed to fit in a brief) and `_humanize-copy/glossary.md`.
   - **Back up** every `work/module.json` and `work/notes/*.json` of modules 03–10 into `_humanize-copy/backup/<module>/` (preserve paths). The module folders are not in git yet, so this backup is the only undo.
   - Write `_humanize-copy/verify.mjs`: for each module, compares backup vs current and fails if any id, key, array length (`steps`, `steal`, `avoid`, `flows`, `jobs`, `products`, `patterns`, `open_questions`), `analog`, `counter_example`, `flows` id list or product name changed, or a JSON file no longer parses. It also flags remaining banned words (from the style guide), sentences over 30 words and any "(step ..." references. Print a compact summary per module.
   - Make the builder label change (above).
2. **Pilot (1 Sonnet 5.5 agent): `04-recording`.** Brief = style guide + glossary + the file list for that module. It rewrites `module.json` and all `notes/*.json` in place. Then you run `verify.mjs 04-recording`, `build-gallery.mjs <work> --check`, and the build. Take a screenshot of the top of the page and one product card and save them to `_humanize-copy/pilot-*.png`.
   **Stop here and show the user** 3 before/after examples (one `why`, one `steal` list, one pattern `body`) plus the screenshots. Wait for approval or corrections, fold corrections into the style guide.
3. **Roll-out (Sonnet 5.5, 1 agent per module, run in parallel, max 4 at a time):** 03, 05, 06, 07, 08, 09, 10. Each agent owns only its module folder, so no two agents write the same file. Split a module across two agents only if it exceeds ~8k words (split by note files; `module.json` goes to one of them).
4. **Checks (Haiku 4.5, 1 agent):** run `verify.mjs` on all modules and read the flagged sentences. It fixes only what the verifier flags (long sentences, banned words, leftover step references, missing abbreviation expansion) and reports anything it isn't sure about, without guessing.
5. **You:** read every module's `module.json` yourself (intro, product `why`s, synthesis): these are the parts a stakeholder reads first, so they get the Opus pass. Then for each module: `--check` (0 errors), build, and `build-gallery-index.mjs` once at the end. Also rewrite the short descriptions on `inspiration/index.html` if they come from the index builder.

## Commands

```
INSP=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration
PIPE=$INSP/userflow-patterns--user-mgmt/inspiration/scripts
node $PIPE/build-gallery.mjs $INSP/<module>/work --check
node $PIPE/build-gallery.mjs $INSP/<module>/work          # writes $INSP/<module>/<module>.html
node $PIPE/build-gallery-index.mjs $INSP
node $INSP/_humanize-copy/verify.mjs <module>|all
```

The data contract is in `$INSP/userflow-patterns--user-mgmt/inspiration/gallery-schema.md`. Do not change field names or the schema.

## Done when

- All 8 reports rebuilt, `--check` shows 0 errors, `verify.mjs all` passes (no structural changes, no flagged leftovers you didn't consciously accept).
- Builder labels and the "How to read this page" box appear in every report.
- `_humanize-copy/` contains: `style-guide.md`, `glossary.md`, `verify.mjs`, `backup/`, pilot screenshots, and `report.md` with per-module word counts before/after, 5 representative before/after pairs, and any sentence you left technical on purpose (and why).
- Nothing committed. Tell the user it's ready for review.
