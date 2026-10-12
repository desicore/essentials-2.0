# UI library decision: Astryx vs shadcn

**Decision:** Astryx for the Essentials 2.0 IMSH prototype · **Decided by:** Daniel Brassnyo, 2026-10-08 · **Scope:** the prototype only. Engineering chooses the production library (agreed with Patrik, 10-05).

## 1. Why we compared them

The prototype is built from a ready-made UI library, not custom components (09-29 tasks call), so it gets built faster and shows engineering that an external, tried-and-tested library speeds up the work. Two candidates were tested on the same screens with the same brief:

- **Astryx**: Meta's open-source design system (MIT, beta v0.6.x, React 19 + StyleX).
- **shadcn/ui**: the most widely used React component set (Radix + Tailwind), copied into the project as source files.

## 2. How we compared them

1. **Wireframe benchmark (10-06 → 10-08):** Dashboard, Debrief, Recording view, Calendar and Edit event were built in both libraries' Figma kits by the same AI agent from one shared brief. Each run was logged (`benchmark-log.md`) and audited (`comparison.md`).
2. **A check of the code libraries (10-08):** the component lists and theming docs (astryx.atmeta.com, github.com/facebook/astryx).
3. **A pros-and-cons review**, written down explicitly so the choice doesn't rest on looks alone.

### Benchmark scores (1–5, from `comparison.md`)

| Criterion | Astryx | shadcn |
|---|---|---|
| Component coverage (of 18 needs) | **4** (15 found) | 3 (10 found) |
| Library instances vs custom parts | **5** | 2 |
| Token / variable binding | 4 | 4 |
| Accessibility out of the box | 2 | 2 |
| Density for a data-heavy staff app | **3** | 2 |
| Tablet fitness | 2 | 2 |
| Build effort | 3 (35 min) | **4** (23 min) |
| Colour leaks | 5 | 5 |

In short: Astryx covered more of our screens with library parts, and shadcn was quicker to build with. Neither library is tablet-ready out of the box (no 44 px controls).

## 3. Astryx

**Pros**
- **Looks more polished:** the icons, buttons and overall finish. "Looks great" is one of the IMSH goals, and the prototype has to sell a concept.
- **Doesn't look like every other app.** shadcn is everywhere, which proves it works, but it also makes apps look alike.
- **The code library is more complete than its Figma kit:** Switch, Dialog, Popover, Bottom Sheet, Toast, Table, Tab List, Segmented Control, Slider, Date Range Input and more are all in it. Most gaps found in the benchmark were Figma-kit gaps.
- **Strong theming:** `defineTheme` has tokens, a palette generator and per-component style overrides. Contrast and touch-size fixes happen once, in one file.
- **Built for AI agents:** it ships AGENTS.md/CLAUDE.md and a CLI, which suits a prototype that Cursor builds.
- **Simple upgrades:** it's an npm package. Bump the version and rerun `astryx theme build`, and our overrides stay in the theme file.
- **Credible backing:** Meta, MIT licence, ~13.6k GitHub stars, 4,400+ commits (checked 10-08).

**Cons**
- **Beta (v0.6.x):** expect breaking changes between versions, and there's less community help.
- **React 19 + StyleX only, no Angular.** Elevate engineering works in Angular, so only the visual language would carry over.
- **Weaker Figma kit:** no switch, dialog or sheet in Figma, and our wireframes live there.
- **AI models know it less well,** so Cursor guesses wrong more often (the bundled agent docs partly make up for this).
- **Accessibility is less proven** than Radix and has to be checked in code.
- **StyleX is uncommon,** so fewer developers know it.

## 4. shadcn

**Pros**
- **Proven and mature:** Radix accessibility, a large ecosystem (blocks, charts, audiocn for audio controls) and mature Figma kits.
- **AI models know it best,** so Cursor makes fewer mistakes.
- **Has a path to Angular:** community ports (e.g. Spartan) follow the same model.
- **You own the code:** nothing changes unless you change it.
- **Tailwind is familiar** to most developers.

**Cons**
- **Looks generic** unless a lot of effort goes into styling.
- **Getting the Astryx look takes much more than a theme.** A shadcn theme only covers colours, radius and fonts. Control heights, states, density and focus rings are hard-coded in each component's classes, so matching Astryx *exactly* means restyling every component by hand and then maintaining that fork.
- **No real upgrade path:** updates are compared against upstream by hand.
- **Owning the code is also a cost:** every customisation is code we maintain.

## 5. Things we corrected along the way

- **"Astryx needs more components built by hand"** was mostly wrong. The gaps were in the Figma kit, not the code library.
- **"shadcn can simply be themed to look like Astryx"** was too simple. The two libraries are styled in fundamentally different ways (see §4). The planned theme tests T1/T2 were dropped for that reason.

## 6. Why Astryx

1. **The prototype's job is to persuade**, and a polished look is part of that. This is a deliberate goal, not just taste.
2. **Its code coverage is enough** for the IMSH screens, and it beat shadcn on coverage and instance use in the benchmark.
3. **Theming happens in one place**, so the needed fixes (contrast, touch sizes) are cheap and consistent.
4. **The custom work is the same either way:** charts, the video player, the timeline with faculty and AI markers, and the room audio mixer are custom with both libraries.
5. **Production isn't decided by this choice,** so shadcn's Angular advantage weighs less for the prototype.

## 7. Accepted risks and how we handle them

| Risk | How we handle it |
|---|---|
| Beta, breaking changes | Pin the version; read the changelog before upgrading; rebuild the theme after every upgrade |
| No Angular | Treat Astryx as "the look and the method", not as the production library. Keep the theme file clean so it doubles as a token spec for engineering |
| Weaker Figma kit | Missing parts are built as named `CUSTOM ·` frames and logged |
| Contrast / accessibility | Fix contrast and touch sizes in the theme, never per screen; check focus and keyboard in code |
| Less AI familiarity | Use Astryx's agent docs (`astryx init`) in the prototype repo |

## 8. Open, parked for later

- **The production library is engineering's call.** Check whether the team is committed to Angular or open to React for new modules. If it's Angular, mention shadcn/Spartan as the Angular-compatible option so the pitch isn't all-or-nothing.
- **Touch behaviour of Astryx on the iPad** (the debrief runs on a tablet) has not been tested yet.

---

Sources: `wireframe-benchmark/comparison.md` (scores, §4 decision), `benchmark-log.md`, `discovery.md`, `spec/design-system.md`, astryx.atmeta.com (theme docs, component list), github.com/facebook/astryx (checked 2026-10-08).
