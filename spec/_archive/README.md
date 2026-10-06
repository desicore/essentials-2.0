# Archive

Superseded spec documents, kept for reference. **Don't build from anything in this folder.** The current flow is `flows/IMSH-demo-story-final.md`.

| File | What it was | Replaced by |
|---|---|---|
| `flows/DF-1-walk-in-and-record.md` | Demo flow 1: ad hoc recording from Today | IMSH demo story (2026-10-05) |
| `flows/DF-2-day-off-plan.md`, `flows/DF-2-day-off-plan--v2.md` | Demo flow 2: the scheduled day that doesn't go to plan (v1 and the import proposal) | Dropped 2026-10-02 |
| `flows/DF-3-debrief-and-share.md` | Demo flow 3: debrief and share | IMSH demo story (2026-10-05) |
| `flows/IMSH-demo-story.md` | IMSH story v1: Dana + Maya, import → recording → debrief → report | `flows/IMSH-demo-story-final.md` |
| `flows/IMSH-demo-story-v2.md` | IMSH story v2: after Patrik's and Gabor's Teams review | `flows/IMSH-demo-story-final.md` |
| `golden-paths/DF-1--faculty.md` | Gabor's golden-path template for DF-1 | A golden path for the final flow (to do) |

`SPEC.md`, `scope.md`, `screens.md` and `open-questions.md` were updated in place. Their DF-era versions are in Git at the tag **`spec-pre-imsh-final`**:

```
git show spec-pre-imsh-final:spec/scope.md
```

## Storyboard prompts

| File | What it was | Replaced by |
|---|---|---|
| `storyboard/cursor-prompts-IMSH.md` | Cursor image prompts for IMSH story v1 (16 numbered panels, images in `storyboard/png/imsh/`) | `storyboard/cursor-prompts-IMSH-final.md` |
| `storyboard/cursor-prompts-IMSH-v2.md` | Cursor image prompts for IMSH story v2 (16 numbered panels, images in `storyboard/png/imsh-v2/`) | `storyboard/cursor-prompts-IMSH-final.md` |

| `storyboard/weavy-prompts-DF-1-2-3.md` | Weavy image prompts for the DF-1/2/3 storyboards | `storyboard/cursor-prompts-IMSH-final.md` |

## Storyboard images

Moved here on 2026-10-05. The final images are in `storyboard/png/imsh-final/`. `storyboard/cursor-prompts-IMSH-final.md` still uses some of these as style and composition references, and its paths point here.

| Folder | What it is |
|---|---|
| `storyboard/png/imsh/` | IMSH story v1 panels (16) |
| `storyboard/png/imsh-v2/` | IMSH story v2 panels (16) |
| `storyboard/png/painted-DF/` | The painted DF-1/2/3 storyboards, contact sheets and `rejected/` tries (was `storyboard/png/painted/`) |
| `storyboard/png/DF-1-drafts/` | Two early drafts of DF-1 panel 1 |
| `storyboard/png/character-sheets/` | The three style explorations (A editorial, B 3D, C painted). The chosen sheet, `00-character-sheet-v2.png`, stays in `storyboard/png/`. |

## Data model and demo data v0.1

`data-model-v0.1/` has the DF-era information model (`data-model-v0.1.md` and its `.png`, `.svg` and `.pdf` renders) and the demo data (`seed-v0.1.json`), as of 2026-10-01. Replaced by `data-model.md` v0.2 and `data/seed.json` (2026-10-05): Event instead of Session, Course as a container, no rotations, and checklist, AI and report entities added.
