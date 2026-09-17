# Research plan — Objectives / Outcomes / Requirements

## Scope
Instructor/admin course management for Essentials 2.0; web first. Learner Portal is the read surface. Identify competency/assessment and Canvas seams without researching adjacent modules. Functional evidence takes priority over target counts.

## Questions
- Q1: Objectives are structured (list items, not free text) and reorderable
- Q2: Objectives are visible to the learner in the same shape the instructor authored them
- Q3: Requirements / prerequisites are enforced or only informational (and how that's communicated)
- Q4: Objectives can be linked downstream (lesson, assessment, competency)
- Q5: Guidance for authoring (examples, verb prompts, character limits, AI suggestions)
- Q6: Where in the course-creation flow this step sits (required up front vs. optional later)

## Queries
Use each query on Mobbin and Refero; adapt vocabulary to catalogue results. Mobbin screens: deep/web, then iOS for the best 1–2 queries per pair. Flows: web then useful iOS follow-up.
| Questions | Type | Query |
|---|---|---|
| Q1 | screens | course builder learning outcomes individual objective fields add reorder Udemy Teachable |
| Q1, Q5 | flows | instructor creates course and edits intended learners objectives |
| Q2 | screens | Coursera Udemy course details what you will learn requirements |
| Q2, Q6 | flows | preview course landing page after editing learning objectives |
| Q3 | screens | course prerequisites required prior course completion enrollment restriction |
| Q3, Q6 | flows | set course requirements then publish course instructor |
| Q4 | screens | Canvas learning outcome align rubric assignment assessment |
| Q4 | flows | Asana goal connect supporting work projects measurable outcome |
| Q5 | screens | learning objective editor examples character limit AI suggestions |
| Q5, Q1 | screens | Lattice Asana Notion goal creation measurable outcome target metric |
| Q6 | screens | Udemy intended learners course creation checklist required objectives |
| Q6, Q5 | flows | Teachable Thinkific Kajabi create course setup curriculum publish |

Shared Mobbin task_intent: `Research how top apps design objectives-outcomes-requirements for course management in an education platform`

## Product shortlist
Coursera, Udemy, Teachable, Thinkific, Kajabi, Canvas, Moodle, Docebo, 360Learning, Maven; generic outcome-authoring comparisons: Asana Goals, Lattice, Notion, Linear. Expand only to directly relevant evidence.

## Agent split
1. Astra: plan, pipeline validation, merge and synthesis. No raw search results.
2. Three Luna Mobbin fetch agents in parallel: Q1–Q2, Q3–Q4, Q5–Q6. Target 10–15 kept references per pair.
3. One Luna Refero agent in next available slot: all questions, complementary course products, 10–18 candidates.
4. Merge, one source per product+question, prefer source with flow. Target 30–50 references / 8–12 products, hard review above 60. Never pad with irrelevant evidence.
5. Six Sol pattern agents, one per question, batches of three: inspect local images and provide ≤350-word notes with reference IDs and uncertainty.
6. Astra: annotate answers and 1–3 supported counter-examples, synthesis, existing report builder, embedded image/browser QA.

## Pipeline compatibility and QA
Read schema.md. Source files use module objects with references arrays (fetch-assets requires object). Download after every Mobbin search to preserve signed URLs. Asset manifest writes are per-call snapshots: final serial fetch reconstructs the full manifest.
The checked-in merge script ignores the stub and uses the previous module header: after merging, replace only header/questions from references.stub.json with a module-local postprocessing step. Do not edit the previous module.
The checked-in report builder expects --assets to name assets/manifest.json, despite the prompt using the assets directory. Use the manifest path.
Keep selected=false, crops empty, full screenshots, at most 8 steps per flow. No fabricated journeys from non-sequential screens. Record search limitations.
Report direction is locked to the existing build-report.mjs template; synthesis uses its typography, surfaces and borders. Six H2s remain the six questions; synthesis headings use H3. Validate images, links, counts, mobile overflow, filters and lightbox in Playwright.
