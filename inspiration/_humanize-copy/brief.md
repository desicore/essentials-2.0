# Brief for one module rewrite agent

Replace `{MODULE}`, `{AREA}` and `{FILES}` before sending.

---

You are rewriting the copy of one design-inspiration report into plain language for non-designer stakeholders (product managers, sales leads, sim-center directors). Meaning stays exactly the same; only the wording changes.

## Read first, in full

1. /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/_humanize-copy/style-guide.md (the rules, including "Lessons from the pilot" and the worked example; follow them exactly)
2. /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/_humanize-copy/glossary.md
3. The finished pilot, as a model of tone and length: /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/04-recording/work/module.json and 04-recording/work/notes/riverside.json and slack.json. Read them only; never edit anything in 04-recording. Pay attention to the step labels in slack.json: they describe what the screen shows in plain words ("Button held down; rings show it is live"), not designer shorthand ("Hold-to-talk pressed with ripple").

## Your files (you own only these)

Module folder: /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/{MODULE}/work/
{FILES}

Rewrite them in place. Do not edit `raw/*.json`, any `.html` file, or anything outside your files. A backup already exists; do not make copies.

## Method

- Work file by file: read it fully, then write the whole file back with only the text fields changed. For notes: `summary`, `steps[]`, `steal[]`, `avoid[]`, `fit`. For module.json: `title`, `intro`, `baseline`, `jobs[].title`, `jobs[].description`, `products[].why`, `synthesis.patterns[].title`, `synthesis.patterns[].body`, `synthesis.open_questions[]`. Every key, id, array length and order, `jobs` array, `counter_example`, `product`, `name`, `analog`, `flows` and `targets` stays identical.
- `title` is "{AREA}: ideas from other products".
- `fit` lines start with "{AREA}: ".
- "(step <label>)" references become "(screen N)", where N is the 1-based position of that label in the same flow's ORIGINAL `steps` array (read it before you rewrite the steps). Drop the reference if the bullet is clear without it.
- Numeric references like "(step 3)" or "(steps 1–2)" are NOT reliable: many original notes counted steps from 0, while the page labels screens from 1. For every numeric reference, check the step labels to see which screen the bullet is really about, and write that 1-based screen number. Helper: `node _humanize-copy/show-flow.mjs {MODULE} <product> <first 8 chars of flow id>` prints the numbered step labels next to the original and your rewritten text. A flow that mentions "step 0" was certainly counted from 0.
- On-screen text stays verbatim inside straight single quotes.
- Expand abbreviations on first use in reading order (intro, baseline, synthesis patterns, open questions, job titles, then products top to bottom in module.json order, then each product's notes in the order its flows are listed). If an abbreviation's first use is in a notes file, expand it there.
- No em dashes, dash punctuation or arrows outside quoted UI text. Straight quotes only.
- The rewrite should end up about as long as the original or shorter.
- After each file, do the final pass: what still reads as AI-written or as designer shorthand? Fix it. The verifier only catches listed words; in the pilot, shorthand like "struck mic", "ripple feedback", "untargeted announce", "one-shot cue", "Canvas:" as a step label and compressed fit lines ("informs X with time trigger, required target and preview") slipped through. Read each bullet as a sales lead would. Every sentence needs a subject and a verb: no fragment sentences such as "Delivery and comparison without a builder." (step labels are the only exception).

## Check your work

From /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration :

    node _humanize-copy/verify.mjs {MODULE} --details
    node userflow-patterns--user-mgmt/inspiration/scripts/build-gallery.mjs {MODULE}/work --check

Structure errors must be zero; fix every style flag you can; `--check` must show 0 ERROR lines (existing warnings about product/flow counts or job coverage are fine). Do not run the full build.

## Final reply (short)

1. The verify summary line, and any flags you left on purpose with the reason.
2. Any term or abbreviation you were unsure about and left as is.
3. Two before/after pairs copied exactly: one `products[].why` and one full `steal` list.
