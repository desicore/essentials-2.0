# Adding scenarios to courses — research plan

Read courses/00-direction.md. Focus: pick from library → place in course; exclude authoring and neighbouring sub-modules.

## Questions
- Q1: Library browse UX: search, filters (tags, competency, duration), preview before adding
- Q2: Multi-select and batch add vs. one at a time
- Q3: Instance vs. reference semantics (edits to master propagate? per-course overrides?)
- Q4: Sequencing after add (drag reorder, grouping into sections, prerequisites between items)
- Q5: Metadata carried along (competencies, duration, equipment) and shown in the outline
- Q6: Empty / first-run state and suggestions

## Search plan
Run each intent on Mobbin and Refero (screens and flows as marked); web first, best 1–2 screen intents per pair on iOS. Mobbin screens use deep mode.

- Q1–Q2 | screens | Mobbin + Refero | add content from library modal with search filters multi-select preview
- Q1–Q2 | screens | Mobbin + Refero | question bank picker adding questions to quiz
- Q1–Q2 | flows | Mobbin + Refero | instructor adds existing lessons from content library into course outline
- Q1–Q2 | flows | Mobbin + Refero | creating quiz selecting questions from question bank
- Q3–Q4 | screens | Mobbin + Refero | Notion synced blocks template duplicate Figma component instance overrides
- Q3–Q4 | screens | Mobbin + Refero | course outline drag reorder modules lessons prerequisites
- Q3–Q4 | flows | Mobbin + Refero | insert component from library customize instance
- Q3–Q4 | flows | Mobbin + Refero | reorder lessons into course sections
- Q5–Q6 | screens | Mobbin + Refero | course content library duration skills metadata preview
- Q5–Q6 | screens | Mobbin + Refero | empty course outline add existing lesson template suggestions
- Q5–Q6 | flows | Mobbin + Refero | start course from template content library
- Q5–Q6 | flows | Mobbin + Refero | browse course library preview lesson details add

## Product shortlist
Canvas (Commons, Modules), Moodle, Teachable, Thinkific, Kajabi, Docebo, 360Learning, Articulate, Typeform, Notion, Figma, Canva; Tally and Webflow as alternatives. Follow stronger evidence if these are absent.

## Agent split
Astra plans, merges, synthesizes and QA. Three Luna Mobbin agents own Q1–Q2, Q3–Q4, Q5–Q6 in parallel. One queued Luna Refero agent covers all questions. Six Sol pattern agents own one question each, queued in batches of three to preserve the four-slot limit. Fetch summaries ≤200 words; pattern notes ≤350 words.

## Evidence rules
Same Mobbin task_intent: Research how top apps design scenarios for course management in an education platform. Download after every search. Keep 8–12 products and 30–50 references after merge, never pad weak matches. Separate visible UI evidence from unverified propagation/override behavior. All selected=false. Use the existing builder and add synthesis after intro, with only six H2s.

## Verified pipeline adaptations
- Existing merge script hard-codes access-sharing metadata and does not consume the stub. Run it unchanged, then replace only module/title/intro/questions from references.stub.json.
- Existing build script --assets expects assets/manifest.json, not the assets directory.
- fetch-assets expects an object with references, not a bare array. Fetch files use that wrapper.
- Parallel per-source downloads overwrite the shared manifest; the final serial fetch reconstructs it from all retained references, reusing files.
- Repository CLAUDE.md requests context-mode routing; those tools are not exposed here. Keep command output compact and delegate raw search handling.

## Completion
Final report: ../05-scenarios.html, 30 references across 12 products; 20 Mobbin and 10 Refero references, 82 unique embedded images / 86 displayed frames. Six question notes, seven top examples, a 12×6 matrix, and three counter-examples. No selections made.

All fetch agents used Luna and all six question analysts used Sol. Q3–Q6 analysis began with the provisional Mobbin merge while Refero finished; Q3/Q5/Q6 were refreshed against final Refero evidence and Q4’s discovery-only MasterClass example was reassigned to Q1. Q1/Q2 were checked against final curation.

Final source merge had 49 references; scope curation and a second source-rule pass after question reassignment left 30. Removed candidates remain in per-source files; curation.json records exclusions from the report.

Rebuild annotated report: python3 courses/05-scenarios/scripts/synthesize.py, then sh courses/05-scenarios/scripts/build.sh. QA: node courses/05-scenarios/scripts/qa.cjs (uses the locally installed Playwright/browser paths). Do not rerun source merge over annotated references without reapplying curation/header.

QA passed: six exact H2 titles, every displayed image embedded and decoded, no page errors, filter reset/search and full-size preview work, no desktop/mobile document overflow, citation IDs resolve, all selected=false, flow captures max 8 frames. Size 4.09 MiB.
