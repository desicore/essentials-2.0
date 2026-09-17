# Courses module — research direction (Essentials 2.0)

_Status: direction set 2026-09-11. Sub-module research runs in separate chats, one prompt each (see `_prompts/`). Merge pass happens after all reports are reviewed._

## Big picture

Essentials 2.0 is Elevate's simulation-education platform. The hierarchy is
**Semester → Courses → (sub-modules)**. A course is the unit an instructor/admin
manages; learners see the outcome through a Learner Portal. "Managing courses" is
the umbrella context for every sub-module below — reports must always answer
_"how does this pattern serve an instructor setting up and running a course?"_,
not just "how does app X design settings".

Closest product analogues to mine from Mobbin/Refero (use these names in queries):
LMS / course builders (Canvas, Moodle, Blackboard, Google Classroom, Teachable,
Thinkific, Kajabi, Skillshare, Coursera, Udemy, Docebo, 360Learning, TalentLMS,
Lessonly/Seismic, WorkRamp, Absorb), collaboration/PM tools for the generic patterns
(Notion, Linear, Asana, ClickUp, Monday, Airtable), calendar/scheduling (Calendly,
Cal.com, Google Calendar, Notion Calendar), sharing/permissions (Figma, Google Drive,
Dropbox, Loom), analytics/reporting (Mixpanel, Amplitude, Loom, Zoom), file managers
(Dropbox, Google Drive, Notion, Slack), competency/skills (Lattice, Workday, Culture
Amp, LinkedIn Learning, Degreed).

## Sub-module tree (from the module map, 2026-09-11)

| # | Sub-module (node label, verbatim) | Child node | Prompt file |
|---|---|---|---|
| 01 | Objectives / Outcomes / Requirements | — | `_prompts/01-objectives-outcomes-requirements.md` |
| 02 | Files, links, media | — | `_prompts/02-files-links-media.md` |
| 03 | Set skills and competencies to measure | — | `_prompts/03-skills-competencies.md` |
| 04 | Adding Learner Groups to Courses | — | `_prompts/04-learner-groups.md` |
| 05 | Adding scenarios to courses | — | `_prompts/05-scenarios.md` |
| 06 | Adding Events to Courses | — | `_prompts/06-events.md` |
| 07 | Share courses w/ Participants | Learner Portal | `_prompts/07-share-with-participants.md` |
| 08 | Access Recordings / Course Reports | Learner portal | `_prompts/08-recordings-course-reports.md` |
| 09 | Announcements / Send learning materials or send to canvas | Shareable link | `_prompts/09-announcements-send-materials.md` |
| 10 | Simulation Dates (Calendar) — communicate to learners (or to canvas) | Invitations | `_prompts/10-simulation-dates-calendar.md` |

Node 09 is highlighted on the map — treat it as the priority / most uncertain one.
Nodes 07 and 08 share the Learner Portal child; 09 and 10 both fan out to the
learner (shareable link / invitations) and both mention "canvas" (Canvas LMS
hand-off), so those four should be researched with the learner-facing view in mind.

## Output contract (identical for every sub-module; reuses the previous module's pipeline)

- One self-contained HTML report per sub-module in
  `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/monrovia/courses/`,
  named `NN-<slug>.html` (same NN + slug as the prompt file). Built with
  `userflow-patterns--user-mgmt/inspiration/scripts/build-report.mjs --embed`
  (base64-embedded images, so the file survives Mobbin link expiry), plus a
  synthesis block after the intro: top examples, product x question comparison
  table, what the best apps do differently, converged best practices, open
  questions for Essentials 2.0.
- Work folder `NN-<slug>/`: `references.json` in the `schema.md` format
  (module, questions Q1..Q6 with answers, references with `take`,
  `counter_example`, `selected: false`), per-source JSON, `assets/`, `notes/`.
  `selected` stays false: the converge pass (<=3 refs per question) is a later,
  separate step, same as for the access-sharing module.
- Report structure = one H2 per question (Q1..Q6 from the prompt header), so all
  ten reports merge into one board the same way the access-sharing module did.

## Run model (each chat)

Fable plans, merges and writes the synthesis. Sub-agents do the fetching and
drafting on cheaper models: Haiku for Mobbin/Refero query fan-out + immediate
asset download, Sonnet for per-question pattern notes, Fable for the
cross-product comparison and final QA. Details are in `_prompts/_shared-block.md`;
run order and how to regenerate the prompts are in `_prompts/README.md`.
