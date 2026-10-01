# Style guide: plain-language rewrite of the inspiration reports

Paste this whole file (plus `glossary.md`) into every rewriting brief.

## Job

The reports are correct but written for designers and developers. Rewrite the copy so a stakeholder who is not a designer or developer (product manager, sales lead, sim-center director) understands what each product does and why it matters for Essentials 2.0.

Do not change what the reports say. Change how they say it.

**Reader:** smart, busy, not a designer. Knows what Essentials is and what a simulation center does. Does not know UI vocabulary or our internal abbreviations.

**Voice:** plain, calm, direct. These are reference documents. No "I", no opinions that are not already in the source, no chatty asides, no jokes.

## What to edit

| File | Fields to rewrite |
|---|---|
| `work/module.json` | `title`, `intro`, `baseline`, `jobs[].title`, `jobs[].description`, `products[].why`, `synthesis.patterns[].title`, `synthesis.patterns[].body`, `synthesis.open_questions[]` |
| `work/notes/<product>.json` | per flow: `summary`, `steps[]`, `steal[]`, `avoid[]`, `fit` |

Never touch: any id, `module`, `targets`, `jobs[].id`, `products[].id/name/analog/flows`, `synthesis.patterns[].flows`, notes `product`, flow ids, `jobs` arrays, `counter_example`, anything in `work/raw/`, any `.html` file. Keep every array at exactly the same length and order. Keep every key. Write valid JSON (2-space indent, UTF-8, real characters rather than `\u2014` escapes).

`title` format: `<Module name>: ideas from other products` (e.g. "Recording: ideas from other products").

## Writing rules

1. **Meaning stays the same.** Do not add facts, products, numbers or claims. Do not drop a finding, warning, gap or counter-example. If a sentence is unclear to you, keep its meaning and simplify the words; do not guess. If you cannot tell what an abbreviation or term means, leave it as is and list it in your final report.
2. **Short sentences.** Aim for 20 words or fewer; never over 30. One idea per sentence.
   - `summary`: one sentence, what the person does from start to finish.
   - `steal` / `avoid` bullets: one sentence each, at most about 25 words.
   - `why`: one or two sentences.
   - pattern `body`: 2 to 4 short sentences (split long ones; keep every product and finding it names).
   - `intro`, `baseline`, `open_questions`: as many short sentences as the content needs.
3. **Plain words for UI jargon.** Use `glossary.md`. If a technical term is unavoidable, explain it once in plain words the first time it appears in that report.
4. **Abbreviations:** spell out on first use per report (in reading order: intro, baseline, synthesis, open questions, then products top to bottom), then the short form is fine. Example: "the video review screen (SRV)". See the list in `glossary.md`. Common ones need no expansion: AI, QR code, PDF, CSV, URL, TV, OK, ID, iPad, iOS.
5. **Step references:** bullets end with things like "(step Live REC with Mark Clip)" or "(steps 10–11)". Replace them with "(screen 2)" / "(screens 10–11)" using the step's position in that flow's `steps` array (1-based), or drop them if the bullet is already clear. Never paste a step label into a bullet.
6. **Quoted UI text** (button labels, on-screen messages) stays verbatim, wrapped in straight single quotes: 'Your microphone is muted. Unmute'. That is evidence; do not paraphrase or translate it. Where the source runs a label into the sentence without quotes (e.g. "taps Mark Clip"), add the quotes: "taps 'Mark Clip'". Say what the control is for if that is not obvious.
7. **`steps[]` labels:** short and plain, 3 to 7 words, describing what the screen shows: "Recording in progress, with a 'Mark clip' button", not "Live REC with Mark Clip on toolbar". Same count, same order.
8. **`fit`:** what this means for Essentials in everyday words, starting with the Essentials area it touches ("Recording: ...", "Dashboard: ...", "Scheduling: ..."). Keep any hand-off ("covered in 08") or judgement ("mobile beats desktop here") the original makes.
9. **Names** of products and Essentials modules stay exactly as written (Riverside, Grain, LearningSpace, Enterprise). Say "the design reference libraries Mobbin and Refero" once in the intro; after that "Mobbin" and "Refero" are fine.
10. **No new structure.** No bold, emojis, headings, bullet characters or line breaks inside JSON strings.
11. **Final pass per file:** ask "what still reads as AI-written or as designer shorthand?", fix it, move on. Only the final text goes into the file.

## Lessons from the pilot (04-recording)

The first pilot pass was clean for the verifier and still hard to read. Avoid these:

- **Fragments with a label and a colon.** "Record split: 'Start recording' versus 'Run test recording'." / "Decision point: ..." / "Per-participant upload health: ...". Write one full sentence with a subject and a verb: "The record button offers 'Start recording' or 'Run test recording'."
- **Two fragments in one bullet** ("X (screen 2). Shows Y without Z."). One sentence per bullet. If the original gives a reason, join it with "so", "because" or "which": "..., so faculty can grade while watching."
- **Designer words the verifier does not catch:** state (success/empty/idle/wait state), dismissible, copy (meaning wording), benefit copy, hub, gate/gated, overlay, inline, hold target, scrub, heat map, zero-touch, main stage, control bar, drilling in, field-of-view wedges, armed mode, spatial, discrete, criterion-level, upload health, absolute timestamp. Say what the person sees or does.
- **Stacks of quoted labels.** Quote the one or two labels that matter and say what they do: "a 'Mark Clip' button that marks the moment".
- **Getting longer.** Plain does not mean padded. The rewrite should be about as long as the original or shorter. Cut words that add nothing, and never add explanation the original did not have.

### Worked example (Riverside, 'Mark Clip' flow)

Before:
- summary: "During an active live recording the host taps Mark Clip; a toast confirms a timestamped clip and the button badge increments the marker count."
- steps: "Live REC with Mark Clip on toolbar" / "Toast Clip created from marker + Mark Clip (3)"
- steal: "One-tap Mark Clip on the live control bar (no form) while REC and upload % stay visible (step Live REC with Mark Clip)." / "Toast with absolute timestamp: 00:03:59 Clip created from marker, dismissible (step Toast Clip created)." / "Button label gains count Mark Clip (3) so overlapping markers stay countable (step Toast Clip created)." / "Per-participant upload health: 720p 97% uploaded beside REC in People panel (step Live REC with Mark Clip)."
- fit: "Extends SRV live/control capture: quick-tag markers that later land on the existing timeline marker row above chapters; count badge helps the known overlapping-marker risk."

After:
- summary: "During a live recording, the host taps 'Mark Clip' to mark a moment, a short pop-up message confirms it, and the button counts the marks so far."
- steps: "Recording in progress, with a 'Mark Clip' button" / "Pop-up confirms the clip; button now says 'Mark Clip (3)'"
- steal: "One tap on 'Mark Clip' marks a moment without a form, while the 'REC' sign and upload progress stay on screen (screen 1)." / "A short pop-up message gives the exact time in the recording ('00:03:59 Clip created from marker') and can be closed (screen 2)." / "The button counts the marks so far ('Mark Clip (3)'), so the host can keep track even when marks overlap (screen 2)." / "The People panel shows how much of each participant's video has uploaded ('720p 97% uploaded') next to 'REC' (screen 1)."
- fit: "Recording: faculty could mark moments during a live session, and the marks would land in the existing marker row on the SRV timeline. The counter helps with the known problem of overlapping marks."

## Humanizer patterns to remove (condensed)

- **Inflated significance:** "serves as", "stands as", "marks a shift", "plays a key role", "underscores", "a testament to", "setting the stage". Use "is", "has", "does".
- **"-ing" padding:** trailing clauses like ", ensuring...", ", highlighting...", ", reflecting...", ", making it...". Cut them or make a separate sentence with a real subject.
- **Promotional words:** seamless, powerful, robust, intuitive, elegant, delightful, best-in-class, stunning, rich.
- **AI vocabulary:** crucial, key (adjective), delve, enhance, showcase, leverage, foster, pivotal, vital, landscape, tapestry, intricate, additionally, notably, underscore, highlight (verb), streamline, empower, holistic, comprehensive.
- **Negative parallelisms and tailing negations:** "not just X, it's Y", "X, not Y" as a flourish, or clipped endings like ", no guessing." / ", no login." Write a real clause: "without having to guess", "without logging in". (A plain factual contrast such as "reused, not rebuilt" is fine.)
- **Rule-of-three filler:** do not group things in threes for rhythm. Lists from the source stay as long as they are.
- **Em dashes and arrows:** do not use — or → in running text. Use a period, comma, colon or "then". Keep them only inside quoted UI text.
- **Bold inline headers, title case, emojis:** none. Headings and titles in sentence case.
- **Curly quotes:** use straight quotes only.
- **Filler and hedging:** "in order to" → "to"; "has the ability to" → "can"; "it is important to note that" → cut; "could potentially" → "may".
- **Signposting:** no "Here's what...", "Let's look at...", "In short...".
- **Passive or subjectless fragments:** "No setup needed." → "You don't need any setup." Say who does what (faculty, the sim tech, the coordinator, the learner, the system).
- **Synonym cycling:** call a thing by the same name throughout ("recording", not "capture / session video / take").
- **Generic positive endings:** no "this makes for a great experience".

## Banned words (checked by verify.mjs)

Banned: crucial, delve, enhance, enhances, enhancing, showcase, showcases, seamless, seamlessly, leverage, leverages, robust, pivotal, vital, testament, underscore, underscores, highlighting, foster, fosters, intricate, tapestry, landscape, additionally, notably, streamline, streamlined, empower, empowers, holistic, serves as, stands as, in order to, affordance, affordances, CTA, CTAs, toast, toasts, modal, modals, chip, chips, pill, pills, stepper, wizard, empty state, empty states, zero state, happy path, deep link, deep links, deep-link, pre-flight, preflight, granular, scoped, gated, gates, surfaces, surfaced, FAB, popover, kebab, affords, counter-example, counter-examples, dismissible, dismissable, benefit copy, hold target, heat map, heatmap, zero-touch, main stage, control bar, drilling in, drill in, drill into, armed mode, upload health, absolute timestamp, criterion-level

Allowed when explained or unavoidable (flagged as "check" only, not an error): drawer, sheet, banner, badge, toggle, dropdown, tooltip, sidebar, tile, widget, canvas, scrubber, overlay, inline, bulk, onboarding, guardrail, guardrails, CRUD, metadata, roster, state, states, hub, gate, copy, scrub, spatial, discrete
