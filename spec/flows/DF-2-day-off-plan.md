# DF-2 · The day doesn't go to plan

**Demo flow** (full polish) · Persona: **SimTech / operator** (`personas.md#simtech`) · Cornerstones **C3, C4, C7** · PRD: AS-02, AS-03, AS-04 · SES-04, SES-05, ATT-02, ATT-03, ATT-05–08, CAP-02, CAP-03, CAP-12, SHR-10, RPT-09

## Context and trigger

Thursday 1 October, OB sim day. Sam Keller (sim tech) runs Sim Room 1 alone. The coordinator imported the day on Monday (see the wireframe-level Import screens). In the room, **one session runs one scenario for three groups in a row**: *Postpartum hemorrhage · Groups A, B, C · 09:00–11:15*. Three things go wrong:
1. The room is 12 minutes late.
2. One learner is swapped just before the start.
3. Sam forgets to mark the switch to Group C.

**End state:** one session, one recording, three non-overlapping parts, each attributed to the learners who were actually there. The one correction made afterwards is in the history, and the dependent share and report were updated. Nothing was recreated.

**Seed data:** session `s-ob-thu` with planned parts `A`, `B`, `C` (5, 5, 4 learners), user `sam.keller`, room `sim-1`.

> Model note: this flow uses the PRD's working decision that repeated groups are **one session with sequential group parts** (segments). If Engineering says a downstream integration needs derived sessions, only the post-session summary changes (CAP-12 open).

## Steps

| # | Screen | User action | System response | Data shown |
|---|---|---|---|---|
| 1 | **Today** | Sam opens Today at 08:48 | His room's session is at the top: "09:00 · Sim Room 1 · Postpartum hemorrhage · 3 groups · **Open room**" | Readiness: Ready (checked 06:00) |
| 2 | **Session sheet** | Clicks the session row, then **People** | Planned parts are listed: Group A (5), B (5), C (4) | Each part shows its planned time: 09:00 / 09:40 / 10:20 |
| 3 | Session sheet: **Swap** | On Group A, clicks the ⋯ next to *Jordan Lee* and chooses **Swap with…**, then picks *Aisha Rahman* (from Group C) | Inline: "Aisha Rahman moves from Group C to Group A. Jordan Lee is marked absent." · **Swap** | Group C drops to 3. The change is logged. |
| 4 | **Live room** | At 09:00 the room is still being reset | A **scheduled-start prompt** appears in the live room and as a toast on Today: "Group A is due in Sim Room 1 now. **Start recording for Group A** · Not yet · It's a different group" | The prompt never starts on its own when *Ask first* is set (the default) |
| 5 | Live room | Clicks **Not yet** | "Running late" chip: "Sim Room 1 · 0 min late". It counts up. At 09:12 Sam clicks **Start recording for Group A**. | A warning line: "Groups B and C are now expected 12 min later (09:52, 10:32). Later sessions weren't moved." (SES-05) |
| 6 | Live room | Recording is confirmed (DF-1 rules) | The part strip under the timeline reads: **Group A · 09:12 → now** | Who's here: 5 of 5 (Aisha included) |
| 7 | Live room | At 09:49 Group B walks in. Sam clicks **Next group** (next to Marker). | Confirm: "End Group A's part at 00:37:10 and start Group B? Recording keeps running." · **Start Group B** | Part strip: **A 09:12–09:49 · B 09:49 → now**. Who's here switches to Group B's roster (unconfirmed until tapped). |
| 8 | Live room | Group C comes in at 10:31. **Sam forgets to press Next group.** He stops at 11:02. | The recording is saved. Post-stop summary: "3 groups planned · 2 parts recorded · **Group C isn't in this recording yet**. **Fix parts**" | Attribution warning (ATT-01) |
| 9 | **Fix parts** (recording timeline editor) | Opens **Fix parts**. Scrubs the Group B part and sees the room reset on the thumbnails at about 10:29. Clicks **Split here** at 10:31. | A new part is created: "New part 10:31–11:02 · **Who is this?**" | Thumbnails every 30 s; the markers stay where they were |
| 10 | Fix parts | Assigns the new part to **Group C**, then writes a reason: "Forgot to switch group during recording" | Consequence line before saving: "Group B's part becomes 09:49–10:31. **1 share** for Group B will be paused until you review it. Reports update." · **Save** | Shows what changes downstream (ATT-06, SHR-10) |
| 11 | **Session summary** | Saves | Parts: A · B · C, all confirmed, no overlaps. 13 participants (Jordan Lee absent). A History tab lists 3 changes (swap, split, assign) with who, when, old value and reason. | "Debrief Group A / B / C" buttons; hands off to DF-3 |
| 12 | Session summary: **Shares** | Opens the paused share | "Group B · Paused: the part changed from 09:49–11:02 to 09:49–10:31. **Resume with new range** · Revoke" | Review before anything goes out again |

## Screens and states

| Screen | States that must be designed |
|---|---|
| Session sheet: People | planned parts · swap · walk-in added to a part · **no-show** (marked absent, excluded from contact hours) · group-size change |
| Scheduled-start prompt | *Ask first* (default) · *Start and ask who's in* (setting: it starts, then attribution stays "not confirmed" until answered) · **the room is still recording the previous session** ("Sim Room 1 is still recording *Sepsis · Group D*. Stop it first or start in another room.") |
| Live room: part strip | single part · multiple parts · part without a group ("Who is this?") |
| Fix parts | view · split · move a boundary (drag, snaps to 1 s) · assign a group or individual participants · **overlap blocked** ("Parts can't overlap: Group B ends after Group C starts") · reason required |
| Session summary | all confirmed · **unconfirmed parts** (a banner with a count) · history tab · shares affected |
| Running-late chip | on time · late · "later sessions not moved" warning |

## Pattern decisions (from the inspiration research)

| Decision | Reference (max 2) | Research area |
|---|---|---|
| **Automatic start needs scope and confirmation.** A default per room (*Ask first* / *Start and ask who's in*) plus a one-off override. The automation never runs without a target. | Grain "All meetings / Next meeting only" · Slack "Needs attention" | Recording |
| **Conflicts and delays are counted and shown, not blocked or silently fixed** | 7shifts conflict counters · Clockwise "changes nothing until you confirm" | Scheduling |
| **Changes keep history and ask for scope.** A cancellation or swap stays visible with a label instead of disappearing. | time2book "Canceled" label | Scheduling |
| **Undoing a check-in or attribution is a deliberate step** | Partiful "Uncheck them?" | Recording |
| **Say what a correction affects downstream before saving** | Twist consequence text on downgrade | User management (R1) |
| Post-session part fixing on a timeline: **no reference found**, so it's original design. Keep it to split, move boundary and assign. | — | gap |

## Done when

- [ ] A learner swap before the start is done in **one action** from the session. Recording, debrief, sharing and reports all show the learner who was actually there. (AS-02, ATT-03)
- [ ] At the scheduled time, with the room still busy, **nothing is attached automatically to the wrong group**. The prompt names the expected group, and manual start and override stay available. (AS-04, CAP-03)
- [ ] A delay shows a warning with the new expected times and **does not move later sessions**. (SES-05)
- [ ] One continuous recording holds **three non-overlapping parts**, each linked to its group, **without cutting or copying media**. (AS-03, CAP-12)
- [ ] A missed group switch can be fixed after the session **without starting over**. The fix shows its downstream effect before saving and pauses the affected share. (ATT-02, ATT-06, SHR-10)
- [ ] Every change (swap, split, assign) appears in History with the **old value, who, when and why**. (ATT-07, RPT-09)
- [ ] Reports for the day count 13 participants and the real occupied time 09:12–11:02. Nobody re-typed anything. (AS-09, C7)

## Open questions

- Should the **Next group** button live next to Marker, or in the Who's here panel? Test with sim techs.
- Can a thumbnail strip realistically be ready seconds after Stop for **Fix parts**? Engineering question (DEB-06).
- Should the split point snap to the nearest marker or silence? This is an AI candidate (AI-04 labelling rules apply).
- Does an absent learner (Jordan) get a share automatically when the absence is later reversed? Proposal: no. Faculty share manually.
- Minimum session or part length (PRD: "one minute" is unconfirmed). Proposal: warn under 60 s, don't block.
