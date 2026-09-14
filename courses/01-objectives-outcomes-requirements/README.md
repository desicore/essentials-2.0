# Objectives / Outcomes / Requirements research

Deliverable: `../01-objectives-outcomes-requirements.html`.

The final board contains 27 references across 8 products, with 37 embedded images and three counter-examples. The 39-reference merged candidate pool was reduced after visual evidence review. This is below the requested 30–50 target: unrelated marketing, graphics, and generic setup evidence was removed rather than used to fill the board.

`references.json` is the annotated final board. All `selected` flags remain false. Per-source JSON and assets preserve the research inputs; the six `notes/Qn.md` files contain Sol's evidence reviews. `notes/curation.json` records removals and reassignment. Search logs record catalogue gaps. No conclusion about a missing product feature should be inferred from absent catalogue evidence.

## Rebuild

Run from the workspace root:

```sh
node userflow-patterns--user-mgmt/inspiration/scripts/merge-references.mjs courses/01-objectives-outcomes-requirements
python3 courses/01-objectives-outcomes-requirements/synthesise.py
node userflow-patterns--user-mgmt/inspiration/scripts/fetch-assets.mjs courses/01-objectives-outcomes-requirements/references.json --out courses/01-objectives-outcomes-requirements/assets
node userflow-patterns--user-mgmt/inspiration/scripts/build-report.mjs courses/01-objectives-outcomes-requirements/references.json --embed --assets courses/01-objectives-outcomes-requirements/assets/manifest.json --out courses/01-objectives-outcomes-requirements.html
node courses/01-objectives-outcomes-requirements/insert-synthesis.mjs
node courses/01-objectives-outcomes-requirements/qa-report.cjs
```

The existing merger hardcodes the previous module header; `synthesise.py` restores this module's stub before annotation. The existing builder takes a manifest-file path for `--assets`. Shared scripts were not changed. The synthesis injector only adds the requested block, reference anchors and modest template-compatible styling.

The Playwright QA script uses an existing local Playwright package and the installed Chrome channel. Adjust that package path if rebuilding on another machine. `notes/qa.json` records checks; screenshots are in `notes/qa-*.png`.

## Evidence limits

- Flow strips preserve sampled preview order, not a guaranteed complete click path.
- Udemy provides direct outcome and prerequisite authoring evidence, but exact same-course author-to-learner wording/order is unverified.
- Kajabi exposes a progression-lock configuration; Codecademy states completion criteria. Runtime failure, override and bypass behaviour were not tested.
- Asana is a goal-authoring/linkage analogue, not evidence of educational assessment integration.
- Objective reordering, reusable competency mapping, and Canvas interoperability remain open questions.
