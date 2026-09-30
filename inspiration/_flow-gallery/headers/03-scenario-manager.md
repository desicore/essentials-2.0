<!-- vars
SLUG: 03-scenario-manager
PRODUCTS: 8–12
FLOWS: 15–25
FETCHERS: 4
PLATFORMS: web first; ios only for the QR / no-login checklist job
TASK_INTENT: Research complete user flows for authoring and managing reusable templates with checklists, equipment lists and access rules in a simulation-education platform
-->
# Essentials 2.0 — Scenario manager: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. A simulation center runs recorded training sessions in rooms with manikins/simulators, standardized patients (SPs) and cameras.

A **scenario** is the reusable lesson plan for one simulated case: objectives, patient story, briefing, equipment and supplies, scripts for the simulator operator and the SP, orientation material, and the checklists faculty (and learners) fill in during or after the run. Courses pull scenarios in (see Seams).

**Personas:**
- **Faculty:** 40–60, non-technical, designs, observes, debriefs and grades.
- **Sim tech / operator:** preps rooms and equipment, runs AV.
- **Sim coordinator / admin:** manages the center.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

| id | Job | What to look for |
|---|---|---|
| `crud` | Add / edit / delete scenarios | Create from blank vs. template vs. duplicate; structured sections (tabs vs. one long page vs. outline); draft/published; versioning; archive vs. delete |
| `equipment` | Add an equipment list to a scenario | Picking items from a catalog vs. free text; quantities; "setup notes" for the tech; printable prep sheet |
| `access` | Give access to specific scenarios | Share one template with people/groups/roles; view vs. edit; org library vs. private |
| `checklist` | Add simple checklists to scenarios | Build a checklist/rubric (items, scoring, required); **who fills it, when, and why**; reusing items across scenarios |
| `checklist-qr` | Feedback checklist via QR, no login | QR shown on the room TV opens a form on the phone without an account; anonymous vs. identified; submission confirmation |
| `scripts` | Add scripts (simulator, SP) | Role-specific scripts/cue cards; branching or state-based steps; per-role view |
| `orientation` | Add orientation material | Attach or build a pre-briefing (video, slides, interactive walkthrough) shown before the session |
| `automation` | Decide automatic behaviour per scenario | Per-template defaults that trigger automation: auto-record, auto announcements, learner tagging, reminders; rule builders ("when X, do Y") |

## Baseline

**Today:** the Essentials SCE (Simulated Clinical Experience) editor has tabs:
- Details
- Objectives
- Patient
- Briefing
- Equipment & Supplies (setup notes for the tech)

Around the editor:
- It exports to PDF or a Maestro file. Its state-based builder is a subset of Laerdal Maestro.
- A scheduling template can auto-send prep emails and auto-start recording/announcements per phase.
- The checklist editor is a cut-down Enterprise Case Manager.

**Known pains:**
- Customers author in Word/paper.
- A checklist window that closes loses its data.

**Direction:**
- Keep the scenario manager **basic**. Don't build another Maestro-style editor; SimCreate integration is being floated instead.
- Link scenarios to equipment/inventory.
- Simplify scenario access and sharing.
- Add an **interactive orientation/pre-briefing maker** (nothing exists today; centers show a video).
- Learner (and possibly faculty) checklists on the phone via a **QR on the room TV, optionally without login**.
- Open question: is the checklist editor its own module or part of the scenario manager? The research should inform that.

## Seams (read, don't re-research)

- `courses/05-scenarios/` covers **adding scenarios to a course** (picking from a library, sequencing). Read `synthesis.html` and `notes/` first and only reference it. This module is the **authoring side**.
- `userflow-patterns--user-mgmt/inspiration/share/02-R1-access-roles-sharing.html` covers roles and sharing in general. For `access`, look only for **per-item template sharing**, not role design.
- Equipment stock and check-out belong to Inventory (`05-inventory`).

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Template/lesson-plan builders: Notion templates, Coda, Confluence templates, Canva/Pitch templates
  - Course/lesson authoring: Articulate Rise, 360Learning, Teachable curriculum builder
  - Checklist and inspection builders: SafetyCulture (iAuditor), Process Street, Lumiform, GoCanvas
- **Adjacent:**
  - Recipe apps with ingredient lists: Paprika, NYT Cooking, Mealime
  - Runbooks and procedure templates: Linear templates, Asana templates, ClickUp
  - Production call sheets / stage-manager scripts: StudioBinder
  - QR / no-login forms: Typeform, Tally, Google Forms, Jotform
  - Rule builders: Zapier, Airtable automations, Notion automations, HubSpot workflows
- **Wildcard:**
  - Interactive product walkthrough makers for `orientation`: Arcade, Supademo, Loom
  - Game-master / tabletop scenario tools
  - Figma/Canva "share one file with specific people"

## Module-specific rules

- `checklist-qr` must show the phone side (iOS or responsive web) **and** how the QR/entry point is created, if the product shows it.
- For `automation`, prefer flows where the rule is set **on a template** and applied to every run, not one-off automations.
