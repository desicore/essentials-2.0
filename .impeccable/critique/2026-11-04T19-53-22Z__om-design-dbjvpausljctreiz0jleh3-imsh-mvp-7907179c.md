---
target: "SRV / Share dialog FINAL (Figma 1075:41331)"
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "url:https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP"
timestamp: 2026-11-04T19-53-22Z
slug: om-design-dbjvpausljctreiz0jleh3-imsh-mvp-7907179c
---
# Critique: [Impeccable] SRV / Share dialog FINAL (Figma 1075:41331)

Method: dual-agent (A: d8f8600d-a9f7-4f40-a897-2976714a3086 · B: 04c58eeb-aa86-491a-9471-8a17a902524a). Detector ran on an HTML conversion of the Figma node. Per-heuristic split synthesized by parent from A's total and findings.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Ehli readiness + sending/error/empty states designed |
| 2 | Match System / Real World | 3 | "Recording with annotations" ambiguous |
| 3 | User Control and Freedom | 2 | Final send, pre-ticked items |
| 4 | Consistency and Standards | 3 | Preview 28px vs 44px elsewhere |
| 5 | Error Prevention | 2 | Consequence line omits the two risky facts |
| 6 | Recognition Rather Than Recall | 3 | Names visible, items described |
| 7 | Flexibility and Efficiency | 2 | Choices not remembered |
| 8 | Aesthetic and Minimalist Design | 3 | Bold lands on the least risky fact |
| 9 | Error Recovery | 3 | Couldn't-send keeps choices |
| 10 | Help and Documentation | 3 | Subtitle + consequence line |
| **Total** | | **27/40** | **Acceptable** |

## Design Specificity Verdict
Authored for the product: Ehli, AI badge, recording as the shared object, no-login link, seed names. Detector clean (CLI exit 0, browser "No anti-patterns found"); nested-cards from the original is gone. Text contrast AA everywhere (min 4.74:1).

## Priority Issues
1. [P1] "Recording with annotations" may include private annotations (spec/screens.md:19). Fix: "Recording with shared annotations" + "Private annotations stay with faculty". /impeccable clarify
2. [P1] AI approval pre-ticked and stated only in grey meta. Fix: keep tick, add "…and approves the AI summary" to footer. /impeccable clarify
3. [P1] Footer bolds expiry; irreversible send unstated (spec/data-model.md:213, SPEC rule 4). Fix: "Emails go out right away and **can't be recalled**. Links open without login and expire on Feb 2." /impeccable clarify
4. [P2] Footer spacing 12 top / 24 gap groups the line with the list. Fix: 16 top / 12 gap. /impeccable layout
5. [P2] Preview 28px (< 44px tablet rule, SPEC.md:136) inside a row that toggles on click; accessible name "Edit learners, 4 tagged" doesn't contain visible "4 learners" (WCAG 2.5.3). Fix: 44px Preview excluded from row toggle; name "4 learners, edit". /impeccable harden

## Persona Red Flags
- Jordan: unsure whether private annotations go out.
- Sam: label-in-name mismatch; Preview nested in toggle row.
- Alex: no remembered choices.

## Minor Observations
- "Always included" and "Preview" share the same right edge.

## Questions to Consider
- If the send can't be undone, does the expiry deserve the bold?
- Should Preview expand inline instead of navigating?
- Is "Share with 4 learners" enough confirmation for an unrecallable send?
