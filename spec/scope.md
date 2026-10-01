# Scope one-pager (PROPOSAL, for the Daniel, Gabor and Patrik scope call)

Status: **draft 0.1, 2026-09-30, not decided.** Written by Daniel as the input for step 1 of the prototype plan. After Daniel, Gabor and Patrik agree it, Patrik takes it to Gergely for sign-off. Nothing in `flows/` counts as final until this page says **Signed off**.

## What the oct 15 handoff is

A **prototype design handoff to engineering**, used for two things:

1. An IMSH demo in January. It shows *Early Essentials 2.0*, built by engineering from 10-15 to 12-15.
2. The engineering start. Engineering builds from the same flows.

The handoff is **not** a finished UI and **not** the full PRD scope. Where the PRD and this page disagree, this page wins for the prototype. The PRD stays the long-term target.

## Proposed demo flows (full polish, fully clickable)

Pick **three**. Together they tell one sales story, "a normal day at a small center, done by one person without training", and they cover 7 of the 8 cornerstones.

| # | Demo flow | Persona | Cornerstones | PRD scenarios | Why it sells |
|---|---|---|---|---|---|
| **DF-1** | **Walk in and record.** From the Today screen, start an ad hoc session in a free room from a saved scenario, tap in the learners, start recording, add markers, stop. | Faculty (occasional user) | C1, C3, C4, C8 (light) | AS-01, AS-05, AS-10 | Answers the VoC hook "1 in 5 sites recorded nothing in 12 months". One screen, one action to record. |
| **DF-2** | **The day doesn't go to plan.** A scheduled session is late, one learner is swapped, and Group A hands over to Group B in the same room. The recording follows what actually happened, not the plan. | SimTech / operator | C3, C4, C7 | AS-02, AS-03, AS-04 | The competitive gap called out in C3 ("simpler, more automatic start") without the wrong-group risk. |
| **DF-3** | **Debrief in 30 seconds, then share.** When recording stops, the debrief opens on the tablet with the markers ready. Faculty jump to the key moment and approve one time range, and the learner opens it on a phone without an account. | Faculty, Learner (recipient) | C5, C6 | AS-07, AS-08 | Protects what we already do well (C6) and adds magic-link learner access (C5), the pillar customers asked about most in comparisons. |

**C2 (audio)** isn't a demo flow. It's hardware and acceptance tests (AV-11). In the prototype it shows as the talk / listen controls in DF-1 and a "no audio detected" state. That's an honest representation, not a feature demo.

**The demo script chains the flows:** DF-1 (or DF-2) ends with Stop, and DF-3 starts there. The IMSH story is one continuous click-through.

## Wireframe level (basic screens, no polish, clickable only where a demo flow passes through)

| Area | Why it's needed | Detail |
|---|---|---|
| Today (home) | The entry point of DF-1 and DF-3 (EXP-03) | Part of DF-1. The layout is basic, the Today list is polished. |
| Rooms and readiness overview | C8. The DF-1 room picker reads from it. | One overview, one room detail with a guided fix. Admin alerting is out. |
| Session list and calendar | DF-2 starts from a scheduled day | A list and day view only. No flexi or rotation builder. |
| Spreadsheet import (sessions and roster) | C7, AS-12. How DF-2's day got into the system. | Upload, map, review and result, reusing the UM-C pattern |
| Core reports | C7, AS-09. Proves "nothing typed twice". | Three tiles, one drill-down to sessions, export |
| People and access | Needed to invite faculty and to show recipients who have no account | Reuse the UM flows, re-labelled to the PRD roles |
| Scenario library | DF-1 and DF-2 pick a scenario from it | List, detail and "use in session". No authoring. |
| Settings: integrations | Canvas and Outlook / Google tiles with sync status (INT-06) | Status cards only |
| Inventory | INV-05, AS-11 | A locked nav entry with "Contact Sales", visible to admins only. Nothing else. |

## Out of scope for 10-15

Scenario authoring, checklists and QR feedback forms · the flexi, rotation and OSCE builder · PTZ and 360° camera control beyond picking a camera · the AI assistant (AI-06) · assessment authoring and grading rubrics (RPT-10) · accreditation report packs · the multi-site view · the native mobile app · Inventory workflows · consent management (ATT-09) · the dean digest emails.

## Needs a decision in the call

1. **Courses.** The Courses research (nine reports, CO-A…F wireframe prompts) treats the course as the container for everything. **The PRD v0.2 information model has no Course entity.** Proposal: for 10-15 a course is only an optional **label on a session**, synced from Canvas where connected. The course container waits for a product decision. If Gergely wants courses in the demo, DF-3's share step becomes "share with the NURS 210 group", and the course page moves up to wireframe level.
2. **Automatic recording start in DF-2.** Is it a scheduled start plus a confirmation prompt (low risk), or a check-in trigger (needs engineering on 10-01)? Proposal: show the scheduled start with confirmation, and show the check-in trigger as a toggle labelled "exploring".
3. **One home or a role switch** for someone who is both coordinator and faculty. Proposal: one home with sections, and the role shown in the account menu.
4. **AI in the demo.** PRD AI-02 says evaluation packages have AI switched on. Proposal: AI markers and transcript appear in DF-3, badged "AI" and reviewable (AI-04). No summaries go to learners without approval.
5. **Tablet vs phone for the debrief.** The PRD settles it as tablet first (DEB-03). DF-3 is wireframed at iPad size, and the recipient view at phone size.

## Quality risk (on the record)

Scope is cut to three demo flows so that each can be finished to a standard the team will stand behind (DDC 09-30, *"minden nem lehet"*). If the 10-05 wireframe walk shows a demo flow is broken, **the gate is to cut scope, not to start a second design** (prototype plan, step 5).

## Sign-off

| Who | Date | Note |
|---|---|---|
| Daniel | | |
| Gabor | | Evidence check: is any cornerstone left without a flow? |
| Patrik | | |
| Gergely | | |
