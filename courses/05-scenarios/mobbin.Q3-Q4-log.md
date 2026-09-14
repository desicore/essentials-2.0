# Mobbin Q3–Q4 fetch log

Task intent used on every call: `Research how top apps design scenarios for course management in an education platform`

## Queries

- Screens / web / deep: `Notion synced blocks template duplicate Figma component instance overrides`
- Screens / web / deep: `course outline drag reorder modules lessons prerequisites`
- Flows / web: `instructor adds existing lessons from a content library into a course outline`
- Flows / web: `insert component from library customize instance`
- Flows / ios: `instructor adds existing lessons from a content library into a course outline`
- Screens / ios / deep: `course outline with ordered lessons and sections`
- Flows / web: `reorder lessons into course sections`

## Limitations

- Mobbin results were strongest for adjacent course builders and component libraries; no direct Canvas/Moodle result was returned in this batch.
- Screens show visible controls and states only. Master propagation, reference lifetime, and hidden prerequisite rules were not inferred where the UI did not state them.
- iOS search produced learner-facing library/curriculum examples rather than instructor authoring flows; they are retained only where they show useful ordering or library affordances.
- Asset fetching completed after every search call; 24 images downloaded successfully with no failures (later calls skipped already downloaded URLs).
