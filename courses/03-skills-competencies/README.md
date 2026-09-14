# Skills and competencies research

This folder contains evidence for `../03-skills-competencies.html`. The report follows Semester → Courses → skills and competencies, with scenario/event measurement and course reports treated as seams.

- `plan.md`: questions, queries, scope and model split.
- `references.stub.json`: original module header and verbatim question titles.
- `mobbin.Q*.json`, `refero.json`: source captures and one-sentence initial annotations.
- `search-*.md`: search coverage and gaps.
- `references.json`: curated and corrected final evidence. All `selected` values remain false.
- `assets/manifest.json`: local image mapping used by the report.
- `notes/Q*.md`: visual evidence analysis, at most 350 words per question.
- `synthesis.html`: cross-product interpretation and proposals, with links to retained reference IDs.
- `curation.md`: exclusions and corrections.

## Rebuild the final annotated report

To regenerate synthesis and final annotations from the reviewed shortlist, run `python3 courses/03-skills-competencies/synthesise.py`. Then rebuild from workspace root:

```sh
node userflow-patterns--user-mgmt/inspiration/scripts/fetch-assets.mjs courses/03-skills-competencies/references.json --out courses/03-skills-competencies/assets
node courses/03-skills-competencies/validate.mjs
node userflow-patterns--user-mgmt/inspiration/scripts/build-report.mjs courses/03-skills-competencies/references.json --embed --assets courses/03-skills-competencies/assets/manifest.json --out courses/03-skills-competencies.html
node courses/03-skills-competencies/insert-synthesis.mjs
node courses/03-skills-competencies/qa.cjs
```

QA uses the local Playwright installation and Chrome; screenshots and results go to `.context/skills-competencies-qa/`.

Do not rerun the merge over final annotations without saving them: the shared merger resets the header, answers and curation. Initial collection used that merger unchanged, restored the header from the stub, then applied curation. The previous module and other course modules remain untouched.
