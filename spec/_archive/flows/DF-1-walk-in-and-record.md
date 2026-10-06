# DF-1 · Walk in and record

**Demo flow** (full polish) · Persona: **Faculty**, an occasional user (`personas.md#faculty`) · Cornerstones **C1, C3, C4, C8 (light)** · PRD: AS-01, AS-05, AS-10 · SES-01, SES-02, SES-03, ATT-01–03, CAP-01, CAP-04, CAP-06, CAP-10, EXP-03, EXP-06, RDY-05/06, DEB-07

## Context and trigger

Wednesday 30 September, 13:50. Dr. Maya Ortiz teaches in the program and uses Essentials about twice a month. Her group of five learners is in the corridor. There is no coordinator today and nothing on the schedule. She wants to run *Sepsis recognition* in whichever room is free and record it, so she can debrief right after.

**End state:** a confirmed recording in Sim Room 2, linked to the session, the scenario and five confirmed participants, with three markers. It hands off to DF-3.

**Seed data:** `data/seed.json`, which has user `maya.ortiz`, rooms `sim-1`…`sim-4`, scenario `sepsis-recognition`, and group `nurs310-grp-a`.

## Steps

| # | Screen | User action | System response | Data shown |
|---|---|---|---|---|
| 1 | **Today** | Opens Essentials on the control-room laptop | Home loads with a room verdict and "Record now" first | "3 of 4 rooms ready · Sim Room 3: Issue detected" · Today list (2 scheduled sessions, neither hers) · primary button **Record now** |
| 2 | **Start a session** (side sheet over Today) | Clicks **Record now** | The sheet opens with a room picker first. Free rooms first, each with its state. | Sim Room 2 · Free · Ready (preselected: last used by Maya) · Sim Room 3 · Free · Issue detected · Sim Room 1 · In use until 14:30 |
| 3 | Start a session | Keeps Sim Room 2. Under **Scenario (optional)** picks *Sepsis recognition* from "Your recent". Under **Who's taking part (optional)** picks group *NURS 310 · Group A* | The session name fills in as "Sepsis recognition · Sim Room 2 · 30 Sep". A 12px line says "You can add or change people during or after recording." | The group shows 5 members as chips |
| 4 | Start a session | Clicks **Open room** | Creates an **ad hoc session** (no event) and opens the live room | — |
| 5 | **Live room** (SRV reuse, refreshed) | — | Camera tiles (3), a room audio strip, and a participants panel. The panel shows the 5 planned members with **"Participants not confirmed · Confirm who's here"** | Readiness: Ready · last room check 06:00 |
| 6 | Live room: **Who's here** (panel mode) | Taps 4 names. Priya is missing. | Tapped names turn to "Here" with an Undo. Priya stays "Not here". | "4 of 5 here" |
| 7 | Live room | Clicks **Start recording** | The button changes to **Starting… 3** (click to cancel), then to **Recording 00:00:01** only when the backend confirms. An app-wide red banner appears: "● Recording · Sim Room 2 · 00:00:04 · Stop". | Recording state is confirmed, not assumed (SPEC §7.1) |
| 8 | Live room | Taps **Marker** twice during the scenario, once with the category chip *Discuss* | A toast "Marker at 04:12". The button reads **Marker (2)**, then **(3)**. | The markers appear on the live timeline strip |
| 9 | Live room | Holds **Talk to room** to prompt the learners | Mic live state: "Talking to Sim Room 2", and the release returns to "Muted" | Talk/listen stays separate from **Announce** |
| 10 | Live room: Who's here | Priya arrives late. Taps **+ Add** and types "Priy…" | Priya is added as "Here · joined 00:06:30" | "5 of 5 here" |
| 11 | Live room | Clicks **Stop** | A one-line confirm: "Stop recording in Sim Room 2? The session stays open for debrief." · **Stop** / Keep recording | — |
| 12 | Live room | Confirms | *Stopping…*, then a "Recording saved" panel: **Open debrief** (primary), "Show QR for the debrief tablet", "Processing video… markers and notes are ready now" | Hands off to **DF-3 step 1** |

## Screens and states

| Screen | States that must be designed |
|---|---|
| Today | populated · **all rooms ready** ("All rooms ready · last check 06:00") · **nothing scheduled today** (Record now still first) · a recording running elsewhere (banner) · first run (setup guide, wireframe only) |
| Start a session | default · **no free room** (lists in-use rooms with "free at 14:30", and "Record anyway in…" is disabled) · the chosen room has **Issue detected** (step 2b) · the chosen room **can't record** (step 2c) |
| Live room | pre-record · Starting… · Recording · **Pausing… · Paused** (wireframe level, not a demo step: the banner stays on with Resume and Stop, and resuming continues the same recording, CAP-07) · Stopping… · **start rejected** by the backend ("Sim Room 2 didn't start recording: encoder not responding. Try again · Run room check") · **no audio detected** banner during recording ("No sound from room mics for 20 s · Check audio") · **browser reopened** during a recording (the banner resumes and the timer is correct: CAP-06) |
| Who's here panel | planned group · walk-in added · no group chosen ("Add people now or after recording") · undo |
| Recording saved | processing · ready |

### 2b · Issue detected (advisory)

Picking Sim Room 3 shows an inline block: "⚠ Issue detected · Camera 2 not responding since 06:00 · **See fix** · Record anyway". Choosing *Record anyway* logs an acknowledgment ("Maya Ortiz continued with an issue · 13:52"). Record is never disabled for an advisory issue (RDY-05, RDY-06, AS-10).

### 2c · Can't record

If the AV backend for the room is unreachable, **Open room** still works, but **Start recording** is shown **disabled** with the reason and the fix next to it: "Can't record: the room's recorder is offline. Restart recorder · Call support". It is never hidden.

## Pattern decisions (from the inspiration research)

| Decision | Reference (max 2) | Research area |
|---|---|---|
| Today leads with **one verdict line** and one main action, not equal tiles | Rivian home · Better Stack incident-first | Dashboard |
| **Today is a short time-ordered list** above the tasks. The session row carries its action ("Open room", "Open debrief"). This is original design: no reference puts the action on the row. | Fresha agenda | Dashboard (open question) |
| **Arm → count down → unmistakable REC**, with Stop separate from leaving the room, and processing shown immediately | Riverside · Fireflies app-wide LIVE banner | Recording |
| **Check-in is how people get tagged.** Tap to confirm, undo right there, and show "who's here" as a count | Luma check-in | Recording, Mobile and iPad |
| **One-tap marker that counts itself** | Riverside "Mark Clip (3)" | Recording |
| **Talking live and announcing are separate controls.** Hold-to-talk with a persistent live/muted state. | Slack huddle push-to-talk · Alexa Drop In vs Announce | Recording, Mobile and iPad |
| A room check **says what failed and offers one next step**, without blocking | VEED muted-mic banner · Preply device check | Recording |

## Done when

- [ ] A first-time faculty member gets from Today to confirmed **Recording** in **≤ 4 clicks** with no scheduling and no required fields (Record now → Open room → Start recording, plus the optional scenario or group picks). (C1, SES-01, EXP-06)
- [ ] The UI shows "Recording" **only after backend confirmation**. The start-rejected state names the cause and offers retry. (CAP-04, AS-05)
- [ ] Closing and reopening the browser during a recording shows it still running, with the correct elapsed time. (CAP-06)
- [ ] Recording can start with participants unconfirmed. The unconfirmed state is visible until it's fixed, and the late arrival is added without recreating the session. (ATT-01, ATT-03)
- [ ] A room with **Issue detected** can still record after one acknowledgment. A room that **can't record** shows a disabled Start with its reason and fix. (RDY-05, RDY-06, AS-10)
- [ ] At every step the screen names the **room, the session, the group and the recording state**. (AS-01)
- [ ] Stop leads straight to **Open debrief**. (Hands off to DF-3.)

## Open questions

- Should **Record now** preselect the room the laptop is in? That needs the device to know its room. Proposal: "last used by you" for now.
- Is the scenario really optional for an ad hoc session? The PRD allows incomplete sessions (SES-03). Reports then show "No scenario".
- Countdown length: 3 s, or none? Test it with faculty.
- Marker categories: *Good practice · Discuss · Safety* (SPEC §12).
- Does the in-room recording light (CAP-05) have any UI? For now it's a sticky only: "The room light mirrors the confirmed state".
