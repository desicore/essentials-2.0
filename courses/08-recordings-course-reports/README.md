# Recordings / course reports research

Final: 37 references, 10 products, 7 sampled flows, 60 embedded images. Three counter-examples; all selections false. QA: 6 H2 sections, synthesis and 10-row comparison, no broken/hotlinked images, working filters/lightbox, no desktop/mobile page overflow. See notes/qa.json and screenshots.

## Rebuild annotated report
Run from the workspace root:

```sh
node userflow-patterns--user-mgmt/inspiration/scripts/fetch-assets.mjs courses/08-recordings-course-reports/references.json --out courses/08-recordings-course-reports/assets
node userflow-patterns--user-mgmt/inspiration/scripts/build-report.mjs courses/08-recordings-course-reports/references.json --embed --assets courses/08-recordings-course-reports/assets/manifest.json --out courses/08-recordings-course-reports.html
python3 courses/08-recordings-course-reports/insert-synthesis.py
```

The shared merge script is unchanged and uses a legacy header. A fresh source merge needs the header restored from references.stub.json, followed by the exclusions and annotations documented in notes/curation.md. It would otherwise overwrite the final synthesis answers. Per-source files and raw results retain the wider discovery set; references.json is the curated report contract. Notes Q2/Q5/Q6 include evidence later excluded, preserving the audit trail. A mistyped Coursera ID in Q6 was corrected against the source file before synthesis.

## Evidence limits
No direct Canvas/Moodle gradebook, attendance default, learner-own-only recording policy or Canvas integration was established. Learner-side results evidence is Coursera only. Flows show ordered supplied previews and can omit intervening steps. No current product capability audit is implied.
