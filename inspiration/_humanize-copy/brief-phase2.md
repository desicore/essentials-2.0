# Brief for one Phase 2 rewrite agent (question-based reports)

The orchestrator adds a "Your report" block (files, rebuild recipe, notes) under this brief when sending it.

---

You are rewriting the copy of one design-research report into plain language for non-designer stakeholders (product managers, sales leads, sim-center directors). Meaning stays exactly the same; only the wording changes.

`INSP=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration`. Run every command from `$INSP` unless the recipe says otherwise.

## Read first, in full

1. `$INSP/_humanize-copy/style-guide.md` (the rules, including "Lessons from the pilot" and the worked example; follow them exactly). It was written for a different page type (products and flows). The writing rules, lessons, humanizer patterns and banned words all apply here unchanged; the "What to edit" table does not (see "What you edit" below).
2. `$INSP/_humanize-copy/glossary.md`, including the section "Added in Phase 2".
3. The finished Phase 1 pilot, as a model of tone and length: `$INSP/04-recording/work/module.json` (read `intro`, `baseline`, `synthesis`, and a few `products[].why`). Read only; never edit anything in `03-*` to `10-*`.

## Rule 1: never rerun a generator
Many modules have scripts that **write the copy into the sources from hard-coded strings**: `synthesise.py`, `synthesize.py`, `write-synthesis.py`, `annotate.mjs`, `annotate-cards.py`, `cut.mjs`, `extract-policy.mjs`, `merge-references.mjs`, `post.mjs header`, `fetch-assets.mjs`, and the Python builders in `university-identity/` (`build-documentation.py`, `build-library.py`, `build-mobbin.py`). Running any of them silently reverts the rewrite or needs the network. **Edit the sources directly. Only run the build step and the post-processor named in each recipe.**

## Rule 2: post-processors that break if run twice
The post-processors for Courses 01, 03, 04, 05 and 08 edit the built report in place and fail or double-insert on a second run. Always run the base `build-report.mjs` step right before them, never the post-processor alone.

## Other limits

- You own only the files listed under "Your report". Do not edit anything else: not the shared `userflow-patterns--user-mgmt/inspiration/scripts/build-report.mjs` (the orchestrator already changed its labels), not other reports, and nothing in `_humanize-copy/`.
- Backups already exist in `_humanize-copy/backup/phase2/`. Do not make copies.
- No network. Do not commit, stash or checkout.

## What you edit

In a `references.json`:
- `title`: "<Topic>: ideas from other products", sentence case, no slashes or middle dots. Example: "Courses · Objectives / Outcomes / Requirements" becomes "Course objectives, outcomes and requirements: ideas from other products".
- `intro`: what the page covers and why, in short sentences. Say "the design reference libraries Mobbin and Refero" once. Keep every caveat the original gives (for example, fewer examples than planned and why), in plain words. Drop pipeline words ("merged candidates", "curated", "raw material") but keep their meaning ("we looked at 39 examples and kept 27").
- `questions[].title`: a plain question in sentence case. Keep the question id (Q1...) out of the title; the page shows it separately. Keep any `*emphasis*` markers.
- `questions[].answer`: the short answer under each question, as 2 to 5 short sentences. If an answer is empty, leave it empty. Never write a new one.
- `references[].title`: the card heading. Describe what the screen or sequence shows, in plain words (3 to 10 words). Keep on-screen labels in straight single quotes.
- `references[].take`: the note on the card. One to three short sentences with a subject and a verb: what the product does, then why it matters for Essentials if the original says so.

Never touch in `references.json`: `module`, any `id`, `question`, `app`, `source`, `kind`, `url`, `images`, `counter_example`, `selected`, `crop`, or any other key. Keep every array at the same length and order. Write valid JSON with the same indentation as the original, UTF-8, real characters rather than `\u2014` escapes.

In a synthesis file (`synthesis.html` fragment or `synthesis.json`):
- Rewrite only the visible text. Keep every tag, attribute, `id`, `href`, class, heading, list item, table row and cell, and every link, in the same order. The verifier fails if the number of headings, list items, cells or links changes, or if any `href` changes.
- Link text that is a reference id (for example "Udemy · mobbin:3558619c-...") stays exactly as it is.
- Table symbols (✓, ✗, ?, "partial") stay. Rewrite the words after them and the legend that explains them.
- In `synthesis.json`, never change `ref`, `refs`, `app` or `id` values.
- Headings: plain, sentence case. Suggested wording, so the reports match each other: "Top examples", "How the products compare", "What the best products do differently", "What the leading products have in common", "Open questions for Essentials 2.0". Keep other headings' meaning.

Raw ids inside prose (answers, takes, synthesis sentences), such as "[mobbin:3558619c-...]" or "(mobbin:7fa8...)": replace each with the product name, adding a few words when you need to tell two examples from the same product apart ("the Udemy outcomes editor"). Link text is not prose; leave it.

Screen references: cards number their screenshots "Screen 1 of 4". If a take says "(step 3)", check the card's `images` array and write "(screen N)" with the 1-based position of the screen it describes, or drop the reference if the sentence is clear without it.

## Method

- Work one file at a time: read it fully, then edit only the text fields. For large JSON files it is fine to write a small throwaway Node script (outside the repo, for example in /tmp) that loads the JSON, replaces the text fields from a map you write, and saves it with `JSON.stringify(data, null, 2) + '\n'`. Check the original's indentation first.
- Expand abbreviations on first use in reading order of the built page (intro, synthesis, then questions top to bottom with their cards). The verifier checks first use in that order. See the glossary for expansions.
- No em dashes, dash punctuation or arrows (→) outside quoted UI text. Straight quotes only. "Semester → Courses → Objectives" becomes "Semester, then Courses, then Objectives" or "the Objectives step inside Courses".
- The rewrite should end up about as long as the original or somewhat longer; spelling out jargon adds a little. Never add explanation the original did not have.
- Final pass on every text: what still reads as AI-written or as designer or researcher shorthand? Fix it. The verifier only catches listed words. Read each card as a sales lead would. Every sentence needs a subject and a verb; card titles are the only exception. Watch for: "analogue", "captures", "sampled", "surface", "exposes", "affords", "roll-up", "downstream", "inspectable", "fidelity", "state", "scoped", "gate", "hub", "primary CTA", label-colon fragments ("Decision point: ...").

## Lessons from the smoke test (Courses 01)

The first pass was clean for the verifier; the cards read well, but the summary block still read like research notes. Avoid these:

- **Subjectless blurbs.** Top-example lines such as "Connects a progression rule to a specific lesson..." or "The strongest direct course-outcome editor: separate required items..." need a subject and a verb: "Kajabi links a progression rule to a specific lesson and says when an assessment counts as complete." / "Udemy has the clearest editor for course outcomes. Each outcome is a separate required item, with a character counter, and it says where learners will see them."
- **Researcher shorthand** that the verifier does not catch: "serve optional presentation", "constrains outcome input", "the interaction transfers", "completion metric", "order preservation", "historical screenshots, not live behaviour tests", "missing evidence is not a missing feature", "direct" (as in "direct evidence"), "unverified", "unseen", "not established". Say it the way a person would: "The screenshots don't show whether the order can be changed." / "If a screenshot doesn't show a feature, the product may still have it."
- **Table cells** may stay short (they are cells), but in plain words: "partial: separate items; reordering not shown", not "partial Separate items; reorder unverified". Use "? Not shown" for cells that only say the screenshots don't show it.
- **Every visible sentence counts**, including the ones hard-coded in a post-processor script (for example "Recommendations inferred from the cited examples; these are design proposals for Essentials 2.0." becomes "These recommendations come from the examples cited. They are design proposals for Essentials 2.0.").
- **Length:** growth of up to about 15% from spelling out jargon is fine. More than that usually means padding.

## Rebuild and check

Run the rebuild recipe under "Your report" exactly, then:

    node _humanize-copy/verify.mjs phase2 <report> --details
    node _humanize-copy/show-page.mjs <built page> [from] [to]    # the page as the stakeholder sees it; line numbers match the verifier

Structure errors must be zero. Fix every style flag you can; `[long]` means a sentence over 30 words, `[abbr]` means the first use of an abbreviation is not spelled out. If a flag is on text you may not change (a product's own on-screen label, an id), say so in your reply instead of changing it. Then rebuild again after each round of fixes (rebuild step first, then the post-processor, every time).

## Final reply (short)

1. The verify summary line, and any flags you left on purpose with the reason.
2. Any term or abbreviation you were unsure about and left as is.
3. Three before/after pairs copied exactly: the intro, one question answer, and one card take.
