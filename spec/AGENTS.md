# AGENTS.md: rules for any AI working from this spec

Applies to wireframe generation (Pencil), prototype code, persona tests and reviews.

## Read order

1. `SPEC.md`: purpose, navigation, model, the rules in §7
2. `scope.md`: what's a demo flow, what's in, what's out
3. `screens.md`: the only screens we may create
4. The flow file you've been asked to work on in `flows/`
5. `personas.md`, `design-system.md` and `data/seed.json` as needed

## Hard rules

1. **Don't invent.** If the spec doesn't answer something, **append it to `open-questions.md`** (flow ID, question, your proposed default) and use the proposed default visibly marked as `OPEN`. Never silently fill a gap.
2. **Only the screens in `screens.md`.** Don't add screens, tabs, settings or features. Anything out of scope in `scope.md` is not built, not even as a teaser. The one exception is the locked Inventory entry.
3. **Use the spec's words** (SPEC §6), exactly. No legacy LearningSpace terms (SCE, Activity, Video Review, Event as a container).
4. **Seed data only.** Use the names, rooms, scenarios and times from `data/seed.json`. Don't make up new people or places.
5. **Every state listed in a flow file is designed.** A demo-flow screen isn't done until all of its listed states exist.
6. **Local only.** Nothing is deployed to external hosting (Vercel, Netlify, public previews). Prototypes run locally or live in company Git.
7. **No secrets or real customer data.** Quotes in `personas.md` stay inside the team.
8. **The spec is edited by Daniel only.** An AI may append to `open-questions.md`, and it writes generated artefacts into `wireframes/` or the prototype repo. It never rewrites `SPEC.md`, `scope.md`, `flows/` or `personas.md`.

## Working loop (per flow)

1. List ambiguities in `open-questions.md` and stop for answers.
2. Propose a screen plan (screen names, states, click path) and stop for approval.
3. Build one flow.
4. Run the **scripted walkthrough**: follow the flow's Steps table click by click and check each "System response" and "Data shown". Then tick the flow's "Done when" list, each item with pass / fail and a one-line reason.
5. Report: what was built, the walkthrough result, and new open questions.

## Persona test (after a flow is built)

For each persona in `personas.md` whose role touches the flow: walk the flow as that persona using their **test lens** line. Report where they would hesitate, what they would misread, and what they'd need to ask someone. Quote the exact screen text that causes it. Don't suggest features outside scope.
