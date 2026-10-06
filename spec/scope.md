# Scope one-pager

Status: **Signed off, 2026-10-05.** Gergely Németh chose and approved the flow on the scope call with Balázs Vegső and Patrik Makrai, and Patrik relayed it to Daniel and Gabor the same day. This replaces the DF-1 / DF-2 / DF-3 proposal (draft 0.1, 2026-09-30, in Git at the tag `spec-pre-imsh-final`).

## What the 10-15 handoff is

A **prototype design handoff to engineering**, used for two things:

1. **The IMSH demo in January.** It shows *Early Essentials 2.0*, built by engineering from 10-15 to 12-15.
2. **The engineering start.** Engineering builds from the same flow.

It's a **happy-flow demo**: one end-to-end journey, designed and clickable along its main path. Not every button has to work, and edge cases aren't designed. Patrik's measure: *"about five screens, with one or two extra versions"*.

The handoff is **not** a finished UI and **not** the full PRD scope. Where the PRD and this page disagree, this page wins for the prototype. The PRD stays the long-term target.

## The demo flow (full polish)

One flow, `flows/IMSH-demo-story-final.md`, with one protagonist: **Dr. Maya Ortiz, faculty**. It follows Gergely's five steps:

| # | Step | Steps in the flow file | Why it's in |
|---|---|---|---|
| 1 | **Dashboard** (new) | 1 | The entry point. A new home that shows upcoming events and recent recordings. |
| 2 | **Calendar → edit event → learner assignment** | 2–3 | The reworked calendar Gabor started on, in a simplified form. Learner assignment is the focus. |
| 3 | **Refined SRV** | 4–6 | The existing recording view with a facelift, started from today's event |
| 4 | **Debrief on the tablet** | 7–10 | **The cornerstone of the project.** It gets the most care: ready in 30 seconds, AI summary and clips, the room display, a photo of paper notes, and sharing by link without login. |
| 5 | **Report** | 11–12 | Simulation Lab Usage, and a weekly report to management |

Sharing (step 10) is in as simple link generation. It isn't a key element of the story.

## Wireframe level

Nothing outside the flow. Screens that the flow doesn't pass through may appear as **non-clickable navigation items only**, so the app doesn't look empty. No screens behind them.

## Out of scope for 10-15

Excel user and session import · user and group management · Canvas / LMS integration (Balázs raised it on 10-05; Patrik pushed back as high risk, and it was dropped) · course creation · scenario and checklist authoring (incl. the checklist editor) · scoring, grading and rubrics · SRV sound controls (voice modulator, background sounds) · shadowing · the learner's side, the recipient pages and any mobile app · learner performance reports · recording the debrief itself · rooms and readiness screens · ad hoc "Record now" · fixing parts · the flexi, rotation and OSCE builder · PTZ and 360° camera control · the AI assistant (AI-06) · accreditation report packs · the multi-site view · Inventory · consent management (ATT-09).

## Still open

1. ~~Course / activity concept (Q-02)~~. Decided 2026-10-05: a course is a container (Gabor's concept), shown lightly.
2. ~~Event vs Session in the UI (Q-26)~~. Decided 2026-10-05: **Event**, one object.
3. ~~Rotations in learner assignment (Q-27)~~. Decided 2026-10-05: dropped.
4. **The 30-second definition.** "Debrief material ready" or "video playable"? Engineering needs to give a number.

## Quality risk (on the record)

The scope was cut by management, not just by the team. Daniel's concern on 10-05: most of what's new and "sexy" was cut, and outside the debrief the demo is close to a facelift. Gabor's and Patrik's answer: the calendar, the reporting and the debrief are new. If the debrief isn't convincing, the demo isn't, so that's where the time goes.

## Sign-off

| Who | Date | Note |
|---|---|---|
| Gergely | 2026-10-05 | Chose the flow and approved it on the scope call (relayed by Patrik): *"mehetünk ezzel a flow-val"* |
| Patrik | 2026-10-05 | Took the scope to the call, relayed the decision |
| Daniel | 2026-10-05 | Final story written: `flows/IMSH-demo-story-final.md` |
| Gabor | 2026-10-05 | Agreed on the follow-up call |
