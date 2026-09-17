# Learner groups report

Open `../04-learner-groups.html`. Final: 21 retained references, 12 products, 43 embedded image previews, six question sections and three counter-examples. All references are unselected. The report is approximately 1.99 MB (decimal).

The search/merge produced 41 references across 23 products before final curation. The final collection is below the 30–50 target because weaker analogues, group-creation flows and redundant examples were excluded. `curation.json` records exclusions; `notes/Q1.md`–`Q6.md` retain evidence review. No direct live LMS cohort-sync behavior was established. Refero thumbnails and Mobbin previews are evidence snapshots rather than guaranteed complete flows.

## Rebuild the reviewed report

Run from the workspace root:

```sh
node userflow-patterns--user-mgmt/inspiration/scripts/build-report.mjs courses/04-learner-groups/references.json --embed --assets courses/04-learner-groups/assets/manifest.json --out courses/04-learner-groups.html
node courses/04-learner-groups/postprocess.mjs
node courses/04-learner-groups/qa.mjs
```

The saved manifest intentionally maps Basecamp's sole retained image to its original sequence index 1. Preserve that mapping. If re-fetching assets, run `extract-policy.mjs` afterward to restore it. Original source-sequence assets remain available.

For a new merge: the shared merger hardcodes the prior module header, so restore module/title/intro/questions from `references.stub.json` after running it. Fetch assets before curation. `synthesize.py` applies the reviewed annotations/retention set and generates `synthesis.html`; then `extract-policy.mjs` keeps only the Basecamp policy preview. Build and postprocess as above. Shared scripts and other modules were not edited.

QA used Playwright with installed Chrome. `qa.json` records six H2s, 21 cards, 43 rendered images, no broken/external images, valid synthesis anchors, working search/lightbox and no desktop/mobile overflow. Screenshots are kept beside this file. `qa.mjs` references the local cached Playwright package and may need its import path adjusted on another machine.
