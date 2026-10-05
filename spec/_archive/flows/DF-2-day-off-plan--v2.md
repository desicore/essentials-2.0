# DF-2 v2 · Your spreadsheet in, the day runs itself

> **Status: PROPOSAL, 2026-10-02. Do not build.** An alternative to `DF-2-day-off-plan.md` (v1), written after Patrik's Confluence comment that v1 is too weak as an IMSH selling point. v1 stays canonical until Daniel, Gabor and Patrik pick one. If v2 wins, `scope.md` and `screens.md` change with it (see "What changes vs v1" below) and v1 is archived.

**Demo flow** (full polish) · Personas: **SimCoordinator** (`personas.md#coordinator`) for the import, **SimTech / operator** (`personas.md#simtech`) for the day · Cornerstones **C3, C4, C7** · PRD: AS-12, AS-02, AS-03, AS-04 · IMP-01–03, SES-04, SES-05, SES-10, ATT-02, ATT-03, ATT-05–08, CAP-02, CAP-03, CAP-12, RPT-09

## What changes vs v1

| Part | v1 | v2 |
|---|---|---|
| Spreadsheet import (AS-12) | Basic, a precondition outside the flow | **Demo, opens the flow** |
| Late start, scheduled-start prompt, swap, Next group | Demo | Demo (unchanged) |
| Post-stop "Group C isn't in this recording yet" warning | Demo | Demo (unchanged, it's where the demo hands off) |
| Fix parts, share pause, History | Demo | **Basic**: still specced and built, not in the demo script |

The rest of the day still goes off plan. What leaves the demo is the cleanup after a mistake, not the live adapting.

## Context and trigger

**Monday 28 September.** Dana Whitfield (coordinator) gets the OB sim week from the nursing department as the spreadsheet they always send. It doesn't match any Essentials template.

**Thursday 1 October**, OB sim day. Sam Keller (sim tech) runs Sim Room 1 alone. **One session runs one scenario for three groups in a row**: *Postpartum hemorrhage · Groups A, B, C · 09:00–11:15*. Three things go wrong:
1. The room is 12 minutes late.
2. One learner is swapped just before the start.
3. Sam forgets to mark the switch to Group C.

**End state (demo):** the week came in from the department's own spreadsheet with one fix and nothing re-typed. On the day, the recording followed what actually happened: one session, one recording, parts per group, the right learners on each. The missed switch is flagged, not hidden, with a one-click way to fix it.

**Seed data:** session `s-ob-thu` with planned parts `A`, `B`, `C` (5, 5, 4 learners), users `dana.whitfield` and `sam.keller`, room `sim-1`. **OPEN:** the workbook `OB-sim-week.xlsx` needs adding to `data/seed.json` (column headings, one row whose room reads "SR1", one person listed twice with the same email).

> Model note: unchanged from v1. Repeated groups are **one session with sequential group parts** (CAP-12 open).

## Steps

| # | Screen | User action | System response | Data shown |
|---|---|---|---|---|
| 1 | **Import sessions and roster** | Dana drops `OB-sim-week.xlsx` onto the upload area. No template download first. | "Reading OB-sim-week.xlsx… 1 sheet, 46 rows" | File name, sheet picker (one sheet, preselected) |
| 2 | Import: **Map columns** | Checks the suggested mappings | Each Essentials field shows the matched column and a sample value: *Learner name ← "Student"*, *Email ← "Student Email"*, *Group ← "Grp"*, *Start ← "Date/Time"*, *Room ← "Room #"*, *Scenario ← "Case"*. Each row is marked **Suggested**. | One field is unmatched: *Faculty* ("No column found · Choose a column · Leave empty") |
| 3 | Import: **Review** | Reads the preview | Counts before anything is saved: "**3 sessions** will be created · **14 learners**: 12 new, 2 already in Essentials · **1 duplicate** · **1 row needs a fix**". The fix row: "Room 'SR1' doesn't match a room." | People are matched by email. Nothing is saved yet. |
| 4 | Import: Review | Picks **Sim Room 1** for "SR1" and ticks *Use for every 'SR1'*. Merges the duplicate (*Aisha Rahman* listed twice, same email). | Counts update in place: "0 rows need a fix". **Import** becomes active. Dana didn't start over. | The duplicate shows as "1 person, 2 rows · merged" |
| 5 | Import: **Result** | Clicks **Import** | "3 sessions and 14 learners imported. Labelled *Import 2026-09-28*." · **View the day** · Undo this import | Links to the Sessions day view for Thursday |
| 6 | **Today** (Thursday) | Sam opens Today at 08:48 | His room's session is at the top: "09:00 · Sim Room 1 · Postpartum hemorrhage · 3 groups · **Open room**" | Readiness: Ready (checked 06:00) |
| 7 | **Session sheet**: Swap | Clicks the session, then **People**. On Group A, clicks the ⋯ next to *Jordan Lee* and chooses **Swap with…**, then picks *Aisha Rahman* (from Group C) | Inline: "Aisha Rahman moves from Group C to Group A. Jordan Lee is marked absent." · **Swap** | Planned parts A (5), B (5), C (4 → 3). The change is logged. |
| 8 | **Live room** | At 09:00 the room is still being reset | A **scheduled-start prompt** in the live room and as a toast on Today: "Group A is due in Sim Room 1 now. **Start recording for Group A** · Not yet · It's a different group" | It never starts on its own when *Ask first* is set (the default) |
| 9 | Live room | Clicks **Not yet**. At 09:12 clicks **Start recording for Group A**. | "Running late" chip counts up. Then: "Groups B and C are now expected 12 min later (09:52, 10:32). Later sessions weren't moved." (SES-05) | Part strip: **Group A · 09:12 → now** · Who's here: 5 of 5 (Aisha included) |
| 10 | Live room | At 09:49 Group B walks in. Sam clicks **Next group**. | "End Group A's part at 00:37:10 and start Group B? Recording keeps running." · **Start Group B** | Part strip: **A 09:12–09:49 · B 09:49 → now**. Who's here switches to Group B's roster. |
| 11 | Live room → **post-stop summary** | Group C comes in at 10:31. **Sam forgets Next group.** He stops at 11:02. | "3 groups planned · 2 parts recorded · **Group C isn't in this recording yet**. **Fix parts**" · **Debrief Group A** | Attribution warning (ATT-01). **The demo script continues into DF-3 from here.** |

Steps 12–15 below are **Basic** (wireframe level). Engineering builds them; the IMSH script doesn't walk them.

| # | Screen | User action | System response |
|---|---|---|---|
| 12 | **Fix parts** | Opens **Fix parts**, sees the room reset on the thumbnails at about 10:29, clicks **Split here** at 10:31 | "New part 10:31–11:02 · **Who is this?**" |
| 13 | Fix parts | Assigns it to **Group C**, writes a reason: "Forgot to switch group during recording" | "Group B's part becomes 09:49–10:31. **1 share** for Group B will be paused until you review it. Reports update." · **Save** |
| 14 | **Session summary** | Saves | Parts A · B · C, all confirmed, no overlaps. 13 participants. History lists 3 changes (swap, split, assign). |
| 15 | Session summary: **Shares** | Opens the paused share | "Group B · Paused: the part changed from 09:49–11:02 to 09:49–10:31. **Resume with new range** · Revoke" |

## Screens and states

| Screen | Fidelity | States that must be designed |
|---|---|---|
| Import: upload | **Demo** | empty · reading · **file can't be read** ("This file has no rows we can read. Try .xlsx or .csv.") |
| Import: map columns | **Demo** | all suggested · **one field unmatched** · a mapping changed by hand (the *Suggested* mark goes away) |
| Import: review | **Demo** | rows need a fix · **duplicate found** · all clear · counts update in place after a fix |
| Import: result | **Demo** | success · partial (with "Download the rows that failed") · undone |
| Session sheet: People | **Demo** | as v1 |
| Scheduled-start prompt | **Demo** | as v1 |
| Live room: part strip | **Demo** | as v1 |
| Post-stop summary | **Demo** | all groups recorded · **a planned group missing** (Fix parts link) |
| Running-late chip | **Demo** | as v1 |
| Fix parts | Basic | view · split · assign · reason required. Overlap blocked and move-boundary stay in the spec but aren't designed for 10-15. |
| Session summary, history, shares | Basic | main state plus *unconfirmed parts* banner |

## Pattern decisions (from the inspiration research)

Everything in v1's table still applies. Added for the import:

| Decision | Reference (max 2) | Research area |
|---|---|---|
| **Upload what you have.** No "download our template first" step. | UM-C (legacy pain: template first, no mapping) | User management |
| **Preview counts before commit**, and fixes update the counts in place | Deel preview counts · GitHub "test before save" | User management |
| **Email is the match key.** Existing people are updated, never duplicated. | Canvas docs: the duplicate-user trap · Intercom upsert on email | User management |
| **Every import is labelled and can be undone** | UM-C result screen | User management |

## Done when

- [ ] A real-looking department spreadsheet whose headings don't match a template is imported **without a template download**. Suggested mappings, one fix, a preview showing what's created, changed, skipped or duplicated, and **nothing saved until Import**. (AS-12, IMP-01–03)
- [ ] The fix is made **without starting the import over**. (IMP-03)
- [ ] A learner swap before the start is done in **one action** from the session. (AS-02, ATT-03)
- [ ] At the scheduled time, with the room still busy, **nothing is attached automatically to the wrong group**. (AS-04, CAP-03)
- [ ] A delay shows the new expected times and **does not move later sessions**. (SES-05)
- [ ] One continuous recording holds group parts **without cutting or copying media**. (AS-03, CAP-12)
- [ ] A missed group switch is **flagged right after Stop**, with a one-click way to fix it. (ATT-01)
- [ ] Basic level: Fix parts can split, assign and record a reason; the downstream effect shows before saving. (ATT-02, ATT-06, SHR-10)

## Open questions

- **Are the suggested mappings AI or rules?** IMP-02 is *design exploration*. Header matching covers this demo without AI. If it's AI, AI-04 applies (show the source, reviewable). Proposal: rules for 10-15, labelled **Suggested**, not "AI".
- **Two personas in one demo flow** (Dana Monday, Sam Thursday). Does the demo script need a visible day change, or does the presenter narrate it?
- Does the import also create the **planned parts** (A, B, C) from the "Grp" column, or only sessions plus roster? Proposal: yes, one session per room and scenario block, one part per group.
- v1's open questions on Next group placement, thumbnails, split snapping, absent learners and minimum length still apply.
