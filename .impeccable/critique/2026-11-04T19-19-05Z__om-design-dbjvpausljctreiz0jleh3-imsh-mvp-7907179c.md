---
target: "SRV / Share dialog (Figma 1075:40724)"
total_score: 16
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
target_identity: "url:https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP"
timestamp: 2026-11-04T19-19-05Z
slug: om-design-dbjvpausljctreiz0jleh3-imsh-mvp-7907179c
---
# Critique: SRV / Share dialog (Figma 1075:40724)

Method: dual-agent (A: 28c39506-10da-4934-9188-beb9439e1a1a · B: d8dd7688-40f8-4c0e-b5ae-7a9548301b04). Detector ran on an HTML conversion of the Figma node.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 1 | No AI-ready state, no named recipients, no sending/sent state |
| 2 | Match System / Real World | 2 | "Generate AI-based formative feedback" is system language |
| 3 | User Control and Freedom | 2 | Cancel + close exist; everything pre-ticked |
| 4 | Consistency and Standards | 1 | "Checklist" twice; "Facilitator Notes" rename pending; Title Case vs sentence case; two type families |
| 5 | Error Prevention | 1 | One click emails everything with no consequence line |
| 6 | Recognition Rather Than Recall | 2 | Learners reduced to "4"; AI output can't be previewed |
| 7 | Flexibility and Efficiency | 2 | Fast defaults, nothing remembered |
| 8 | Aesthetic and Minimalist Design | 2 | Eyebrow repeats title; off-scope footer option; three containment levels |
| 9 | Error Recovery | 1 | Email failure / AI not ready / zero learners undesigned |
| 10 | Help and Documentation | 2 | Subtitle helps; nothing says what learners receive |
| **Total** | | **16/40** | **Poor** |

## Design Specificity Verdict
Generic share modal. Only copy ties it to simulation debriefing. Missing: recording as the shared object, emailed no-login link, 14-day expiry (Q-24), AI approval (Q-28).
Detector: exit 2, `nested-cards` x2 (both option cards inside the dialog). Real structure, not a conversion artifact; low severity. Contrast passes AA everywhere; #737373 at 11–13px = 4.74:1. Detector-adjacent data: sub-option labels Inter 14/500 vs parent description Figtree 12/400 (hierarchy inversion, two families).

## Priority Issues
1. [P0] Formative feedback card selects AI inputs, but Share is meant to approve AI output (spec/screens.md:30, Q-28, AI-04). Fix: replace with an AI summary item (AI badge, ready status, Preview); ticking it is the approval. Move input selection to the Feedback tab or behind More options (EXP-05). /impeccable shape
2. [P1] Never says what learners receive. Fix: consequence line above footer ("4 learners get an email link to the recording and the items below. Opens in the browser, no login. Expires 18 Nov."); button "Share with 4 learners". /impeccable clarify
3. [P1] Naming and scope drift: duplicate Checklist, pending renames, eyebrow restates title, footer "access each item separately" is download rights (out of scope, spec/data-model.md:213). /impeccable distill
4. [P2] Type and hierarchy: one family, sub-options quieter than parent text, align sub-options to a grid, drop the card borders or the nested sub-group container. /impeccable typeset, /impeccable layout
5. [P2] States and a11y: indeterminate parent checkbox, fieldset/legend, "4" button needs an accessible name, whole-row hit areas for 18px boxes, sending/sent/error states. /impeccable harden

## Persona Red Flags
- Jordan (first-time faculty): can't tell if learners see raw AI output or who "4" is; pre-ticked everything = accidental oversharing.
- Sam (screen reader): button announces "4"; nested group lacks mixed state; no success announcement.
- Alex (shares every session): no remembered choices, no "Shared" status afterward.

## Minor Observations
- Share icon tile repeats the title.
- Sub-option rows don't share columns.
- Checklist meta ends with a stray period.
- Sub-option frame (536px) overflows its 488px parent; several sub-checkboxes share the layer name "Checkbox / AI feedback"; primary button layer named "Stop and share".

## Questions to Consider
- If Share approves the AI output, why can faculty shape its inputs but never see it?
- Should anything be pre-ticked on a screen learners might be watching?
- Sharing isn't a key story beat (spec/scope.md:28). Could this be a confirmation line plus three checkboxes?
