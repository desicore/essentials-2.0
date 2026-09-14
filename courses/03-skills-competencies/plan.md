# Research plan

Audience: instructor or program admin managing a simulation course. Functional evidence only; retain library coverage gaps explicitly. Report visual direction is locked to the existing build-report.mjs output, with a plain HTML synthesis insertion.

## Q1
Framework model (central taxonomy vs. free tags vs. both)

## Q2
Selection UX (tree / search / suggestions) and scale when there are hundreds of items

## Q3
Levels / rubric definition (numeric, descriptive, checklist)

## Q4
Traceability: competency → activity → evidence → score

## Q5
Learner-facing visualisation of mastery

## Q6
Reuse of the same competency set across courses and semesters

## Queries
Each query runs on Mobbin and Refero, web first. Mobbin screens use deep mode. Best 1–2 queries per pair repeat on iOS.

| Questions | Type | Query |
|---|---|---|
|Q1,Q2|screens|competency framework picker with skills tree and checkboxes for a course|
|Q1,Q2|screens|skills tagging on a course with searchable skill taxonomy|
|Q1,Q2|flows|admin creates a competency framework and assigns competencies to a course|
|Q3,Q4|screens|rubric builder with criteria rows and rating levels columns|
|Q3,Q4|screens|skills matrix table of employees versus skills with proficiency levels|
|Q3,Q4|flows|instructor builds a rubric and attaches it to an assignment|
|Q4|flows|learner completes assessment and reviews skill scores with evidence|
|Q5|screens|competency progress dashboard showing learner mastery levels|
|Q5|screens|Duolingo Brilliant skill tree mastery progress|
|Q6|screens|course competency framework template reuse copy|
|Q5,Q6|flows|learner reviews skill progress and chooses next course|
|Q6|flows|instructor copies a rubric competency set to another course|

## Shortlist
Canvas, Moodle, Docebo, 360Learning, Degreed, Lattice, Culture Amp, Workday Skills Cloud, Coursera, LinkedIn Learning, Brilliant, Duolingo. Accept relevant adjacent products, label analogues and do not mistake missing screenshots for missing capabilities.

## Agent split
Astra plans, merges, synthesises and validates. Three Luna Mobbin fetchers own Q1–Q2, Q3–Q4, Q5–Q6, followed by one Luna Refero fetcher. Six Sol analysts own one question each, queued in batches of three. All use fork_turns none and exact task paths. Fetchers return at most 200 words; notes at most 350 words.

## Pipeline observations
The installed merger hardcodes the previous module header and ignores the stub. Run it unchanged, then restore module header and questions from references.stub.json. Fetch writes a manifest for its input; rebuild the complete manifest after merge. Previous module scripts remain untouched.

The installed builder expects --assets <assets/manifest.json>, although the prompt shows the assets directory. Use the manifest file argument to embed downloaded images.

## Evidence rules for synthesis
The comparison uses ✓ for directly observed support, partial for an adjacent or incomplete pattern, and ✗ for not evidenced in the retained material—not a claim that a product lacks the feature. Never infer validated mastery from course completion, learning streaks, or marketing skill chips. Recommendations for Essentials are proposals informed by cited examples. Unknown institutional framework governance, rubric versioning, assessor calibration, cross-semester reuse and Canvas transfer stay open unless direct evidence resolves them. Keep real rubric builders distinct from generic rating widgets.
