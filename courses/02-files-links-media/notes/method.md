# Method and evidence limits

This board compares observed interaction patterns for managing course materials. It is not a feature inventory or a market ranking. Generic file managers supply analogues; they do not demonstrate LMS capabilities. A captured learner screen alone cannot establish parity with an instructor editor. Copy/duplicate controls alone cannot establish cross-course reuse or shared version propagation.

## Report decisions

|Decision|Source|Purpose|
|---|---|---|
|Existing report layout and inline assets|User prompt and shared build-report.mjs|Merge-compatible research board, readable offline|
|Exactly six question H2 sections|Prompt Q1–Q6 and references.stub.json|Stable comparison axes|
|Synthesis headings use H3|Prompt requires six H2s|Preserve question structure|
|Named product plus retained ID for each empirical claim|Prompt evidence rule|Make claims reviewable against screenshots|
|Unknowns labelled unverified|Evidence standard|Avoid mistaking missing captures for absent features|
|Full screenshots, selected false|User prompt|Defer cropping and convergence to review|

## Verification

Playwright QA results will be recorded in qa.json. Desktop and mobile screenshot artifacts are stored in .context/files-media-qa/.

## Coverage and exclusions
Final set: 30 references, 12 products, 61 embedded images. Mobbin and Refero both contributed; matching product/question pairs retain one source, preferring flows. All selected flags remain false. Counter-examples are Gumroad’s freeform document, Podia’s disappearing visibility label, and Skillshare’s separate resource destination.

Targeted LMS searches did not yield strong retained Canvas, Moodle, Google Classroom, Thinkific, Docebo or 360Learning captures. This limits direct applicability to institutional simulation education. Generic file-manager and digital-product examples are explicitly qualified.

Visual verification removed a Mobbin frame labelled Adobe that actually showed Cake Equity, two Refero Cake Equity grids, and a Gumroad receipt editor. Canva was restored after its course flow revealed explicit Copy to course / Move operations. Cross-course live linking, update propagation, per-group material visibility and same-course instructor/learner parity remain unverified.

## Rebuild
From workspace root, run:
```sh
python3 courses/02-files-links-media/write-synthesis.py
node userflow-patterns--user-mgmt/inspiration/scripts/fetch-assets.mjs courses/02-files-links-media/references.json --out courses/02-files-links-media/assets
node userflow-patterns--user-mgmt/inspiration/scripts/build-report.mjs courses/02-files-links-media/references.json --embed --assets courses/02-files-links-media/assets/manifest.json --out courses/02-files-links-media.html
node courses/02-files-links-media/finalize-report.mjs
```
The merged references.json is the curated source of truth. Re-running the shared merger would undo visual corrections and requires reapplying the stub header and curation.
