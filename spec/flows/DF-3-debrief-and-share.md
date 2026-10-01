# DF-3 · Debrief in 30 seconds, then share

**Demo flow** (full polish) · Personas: **Faculty** (`personas.md#faculty`) and **Learner as recipient** (`personas.md#learner`) · Cornerstones **C5, C6** · PRD: AS-07, AS-08 · DEB-01–05, DEB-07–14, SHR-01–11, IAM-01, IAM-05, IAM-06, AI-03, AI-04

## Context and trigger

It's 14:41, straight after DF-1. Maya stopped the recording in Sim Room 2. The five learners walk down the corridor to Debrief Room A, where an iPad sits on a stand next to the wall display. Maya wants the moment where the team missed the lactate result on screen before anyone sits down. After the debrief she sends each learner their part of the recording. They have no Essentials accounts.

**End state:** the debrief happened with the key moment found in seconds. One time range (not a new video file) was approved and shared with the five learners, with view only and a 14-day expiry. Maya can see who opened it and can revoke access.

**Requirement from the 09-29 plan call:** debrief material is **ready within 30 seconds** of the recording ending. How that's achieved is engineering's job. The design shows what "ready" means and what shows while something is still processing.

## Steps

| # | Screen | User action | System response | Data shown |
|---|---|---|---|---|
| 1 | **Debrief home** (iPad, debrief room) | Maya picks up the iPad | The latest relevant session is already on top: "**Sim Room 2 · Sepsis recognition · ended 14:41** · Group A · 3 markers · **Open debrief**". Older sessions are listed below. | No search needed (DEB-04). Alternative: scan the QR shown on the live-room screen after Stop. |
| 2 | **Debrief** (full-screen, tablet landscape) | Taps **Open debrief** | The player opens on the **first marker**, not at 00:00. The right rail holds **Markers** (3 faculty, 4 AI, each with its badge) · Notes · Transcript (AI) · People. | Multi-camera: 3 camera thumbnails with a tap to switch (DEB-10). Playback works even though Sim Room 1 is still recording (DEB-05). |
| 3 | Debrief | Taps the marker "*Discuss* · 04:12 · lactate result not escalated" | Video and transcript jump there together. **‹ Prev · Next ›** marker buttons sit under the player. | Faculty notes are **private by default**. A lock icon reads "Only faculty see notes" (DEB-11). |
| 4 | Debrief: **Room display** | Taps **Show on room display** | The wall display shows only the video. The iPad keeps the notes, markers and AI items. A bar reads "Showing on Debrief Room A display · Stop showing". | The AI items stay hidden from the display until Maya reveals one (AI-04) |
| 5 | Debrief | Adds a marker during the debrief ("*Good practice* · 09:40 · closed-loop communication") | Marker (4). It's saved to the recording. | Markers can be added during debrief (DEB-07) |
| 6 | Debrief: **Select range** | On the timeline, long-presses the 04:12 marker and chooses **Select range from here**. Drags the end handle to 06:30. | The range is highlighted: "04:00–06:30 (2 min 30 s)". Actions: **Share range** · Clear. | No new file is created (DEB-14) |
| 7 | **Share sheet** | Taps **Share range** | The sheet opens with the recipients prefilled **from attribution**: the 5 confirmed participants of Group A | See "Share sheet contents" below |
| 8 | Share sheet | Leaves the defaults, then taps **Approve and send to 5** | Consequence line before sending: "5 learners get a secure link by email. They can view 04:00–06:30 until 14 Oct. No download." | Approval is the send (SHR-01) |
| 9 | **Share status** (recording → Shares) | — | A list per recipient: Sent · Opened 15:02 · Not opened. Each row has **Resend** and **Revoke**. There is also a **Revoke all**. | Recipient status and bulk actions (SHR-09) |
| 10 | **Recipient: email** (phone 390×844) | Emily Baker opens the email | "Maya Ortiz shared a part of your simulation: *Sepsis recognition*, 30 Sep. **Open**" | No password and no account |
| 11 | **Recipient: verify** | Taps **Open** | "Enter the 6-digit code we sent to e•••@riverbend.edu" (or **Sign in with Riverbend SSO** where it's set up) | Verifies the intended person even if the link is forwarded (SHR-05) |
| 12 | **Recipient: share page** | Enters the code | Player limited to 04:00–06:30, with the faculty markers Maya included and "Shared by Maya Ortiz · available until 14 Oct". No download button. No other recordings. | Phone-first. No LearningSpace chrome. |

### Share sheet contents (step 7)

- **What:** a segmented choice: *This range (04:00–06:30)* (preselected) · *Group A's part* · *Whole recording*. For group recordings the default is never "whole recording" (SHR-06).
- **Include:** ☑ markers in this range · ☐ faculty notes (off by default) · ☐ AI summary (off; only shown with the AI subscription, and it needs a review first)
- **To:** chips for the 5 participants, with "+ Add person" and "+ Add group". A recipient without an account shows "(secure link)".
- **Access:** View ☑ · Download ☐, as two separate switches (SHR-07)
- **Available:** presets *7 days · 14 days (default, from the institution's retention setting) · End of term · Custom* (SHR-08, SHR-12)
- **How:** Email with a secure link (default). *Canvas* shows greyed as "Coming: send to Canvas course" (SHR-03, INT-04).

## Screens and states

| Screen | States that must be designed |
|---|---|
| Debrief home | latest session on top · **still processing** (see below) · nothing recorded today ("Nothing recorded today. Open a recording") · several rooms ended at once (a list, most recent first) |
| Debrief | video ready · **video still processing**: markers, notes and transcript are usable, the player shows "Preparing video · about 20 s" (DEB-13) · **no video at all** (audio-only or failed capture: the markers and notes list still works) · **participants not confirmed** banner (DEB-12) · without the AI subscription (no AI tab or AI markers; nothing looks broken) |
| Room display | idle (a QR plus a short code "Join: 4F7K" to pair) · showing video · disconnected ("Reconnect" on the iPad) |
| Share sheet | default · recipient with no email (share blocked for that person, with the reason) · **attribution unconfirmed** ("Confirm participants first, or add recipients by hand") |
| Share status | sent · opened · not opened · revoked · **paused** (after an attribution correction, see DF-2 step 12) · expired |
| Recipient pages | email · verify code · **wrong code** (3 tries, then "Send a new code") · share page · **expired** ("This share ended on 14 Oct. Ask Maya Ortiz for a new link." with a mailto) · **revoked** (same pattern) · forwarded link opened by someone else (the code goes to the original recipient, so it can't be opened) |

## Pattern decisions (from the inspiration research)

| Decision | Reference (max 2) | Research area |
|---|---|---|
| **AI claims link to the moment that proves them.** Click to jump video and transcript. | Grain, Fireflies | Debrief and review |
| **A human check comes before AI output reaches learners or the big screen** | Fireflies prompt preview (at setup) · Descript clip settings | Debrief and review |
| **The big screen shows only playback. Control and private notes live on the handheld.** Pair by QR plus a short code. | Canva present mode · Google TV remote (named-screen bar) | Debrief and review, Mobile and iPad |
| **Share policy sits beside the video.** Expiry presets, and download as its own switch. | Frame.io share sidebar · Dropbox "Restrictions apply" | Debrief and review |
| **Speaker-coloured transcript** (AI) as a participation view, with speaker correction | Grain, Otter | Debrief and review |
| **Recipients open without an account, and failure routes stay on screen** | Slack guest scope + expiry · Riverside / incident.io failure page | User management (R1, R2) |

## Done when

- [ ] Within **30 s of Stop**, the debrief home shows the session and opens on its markers. If video processing isn't done, markers and notes are usable and the player shows progress. (AS-07, DEB-04, DEB-13, 09-29 requirement)
- [ ] Facilitators move between markers with **Prev / Next**, never by scrubbing. It works while another room records. (DEB-05, DEB-09)
- [ ] The room display never shows faculty notes or unrevealed AI output. (DEB-11, AI-04)
- [ ] A time range is shared **without creating a video file**. Recipients are prefilled from attribution. (DEB-14, SHR-06)
- [ ] A recipient **without an account** opens only what was shared, only as themselves, with view and download rights as set. A forwarded link doesn't open for someone else. (AS-08, SHR-04, SHR-05, SHR-07)
- [ ] Faculty see delivery status per recipient and can **revoke instantly**, and a revoked link shows the revoked page. (SHR-08, SHR-09)
- [ ] Every approval, view, revoke and pause is in History. (SHR-11)
- [ ] The whole flow works on an iPad in landscape (faculty) and a 390 px phone (recipient), with 44 px targets. (DEB-03, WCAG)

## Open questions

- **The 30-second definition.** Is it "markers and session ready" (design proposal) or "video playable"? Needs a number from engineering (DEB-06).
- **Recipient verification.** Is it an email one-time code (proposal), SSO where available, or both? SHR-05 leaves the method open.
- **Revealing AI items on the room display.** One at a time (proposal), or all hidden until released? No reference exists (08 open question).
- **Retention default.** 14 days is a placeholder. Kent releases for two weeks (persona evidence), but the policy is the institution's.
- **Captions** for shared recordings: Accessibility and Legal decide before beta exit. Not in the prototype.
- **Consent** isn't handled (ATT-09 out of scope). There's a sticky only: "Legal to confirm no launch obligation".
