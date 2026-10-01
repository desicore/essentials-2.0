# Open questions

Append-only. AI agents add here (AGENTS.md rule 1) and Daniel answers. Format: `ID · source · question · proposed default · owner · answer`.

## Blocking wireframes

| ID | Source | Question | Proposed default | Owner | Answer |
|---|---|---|---|---|---|
| Q-01 | SPEC §5 | Navigation: reconcile with Gabor's paper map | Use the SPEC §5 list and mark it provisional | Daniel + Gabor | |
| Q-02 | scope 1 | Courses in or out of the prototype? | A course is only a label on a session (from Canvas) | Scope call → Gergely | |
| Q-03 | scope 2 | Auto-start in DF-2: scheduled time with a prompt, or check-in trigger? | Scheduled time with the *Ask first* prompt; the check-in trigger shown as "exploring" | Scope call + engineering 10-01 | |
| Q-04 | scope 3 | One home, or a role switch, for coordinator + faculty? | One home with sections; role shown in the account menu | Daniel | |
| Q-05 | SPEC §12 | UI word for a segment: "Part"? | "Part" | Test with faculty | |
| Q-06 | DEB-08 | Marker categories | Good practice · Discuss · Safety · none | Daniel | |

## For engineering (10-01)

| ID | Source | Question | Proposed default | Owner | Answer |
|---|---|---|---|---|---|
| Q-10 | DF-3 | What does "ready in 30 s" mean: markers and session, or playable video? | Markers + session in ≤ 30 s; video shows progress | Engineering | |
| Q-11 | DF-2 | Can timeline thumbnails exist seconds after Stop (for Fix parts)? | Yes, at 30 s intervals | Engineering | |
| Q-12 | CAP-12 | Do downstream integrations need derived sessions instead of parts? | No; one session with parts | Engineering | |
| Q-13 | CAP-04 | Latency from start command to backend confirmation? | ≤ 3 s, which the countdown covers | Engineering | |
| Q-14 | SHR-05 | Recipient verification: email code, SSO, or both? | Email code; SSO where set up | Engineering + Security | |
| Q-15 | CAP-07 | After a pause, does the debrief timeline show the gap, or does the video jump over it? | Jump over it, with a visible marker ("Paused 2 min") at that point | Engineering | |

## Not blocking

| ID | Source | Question | Proposed default | Owner | Answer |
|---|---|---|---|---|---|
| Q-20 | DF-1 | Should Record now preselect the room the device is in? | "Last used by you" | Daniel | |
| Q-21 | DF-2 | Minimum part / session length | Warn under 60 s, don't block | Product | |
| Q-22 | DF-3 | Revealing AI items on the room display: one at a time, or none until released? | One at a time | Test with faculty | |
| Q-23 | RPT-04 | Contact-hour unit | 0.25 h per learner per session | Product | |
| Q-24 | DF-3 | Default share expiry | 14 days, set by the institution | Product | |
| Q-25 | SPEC §5, §8 | What device do learners actually use to open a shared recording? "Phone first" is a design call with no customer evidence yet. | Design at phone width, works in any browser | Gabor (realism check) | Phone-width-first approach approved by Patrik, 2026-10-01. Learner device use still unvalidated. |
