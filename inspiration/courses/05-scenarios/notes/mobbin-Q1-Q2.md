# Mobbin fetch log — Q1/Q2

Kept 14 references across 13 distinct products (Sana AI, Magnific, Leonardo AI, Google Ads, 15Five, Square, Elicit, Teachable, Canva, Circle, Alan, Slack, ElevenReader). Q1 has 7 references; Q2 has 7 references, with Teachable and Canva flows carrying the clearest course-management evidence. Two one-at-a-time quiz flows (Teachable and Circle) are marked counter examples for Q2.

## Queries run

- Screens web/deep: `add content from library modal with search filters multi-select preview`
- Screens web/deep: `question bank picker for adding questions to a quiz with search filters and multi-select`
- Flows web: `instructor adds existing lessons from a content library into a course outline`
- Flows web: `creating a quiz by selecting questions from a question bank`
- Flows web/page 2: `select existing questions from a question bank into a quiz`
- Screens ios/deep: `library picker with search filters and multi-select before adding reusable content`
- Flows ios: `select multiple saved lessons or resources and add them to a course`

Every call used task intent: `Research how top apps design scenarios for course management in an education platform`.

## Limitations / gaps

Mobbin search returned mostly generic asset/content libraries and quiz authoring analogues rather than Canvas/Moodle/Docebo. The direct Teachable import flow shows selecting lessons from another course, but does not verify master-reference propagation or per-course override semantics. The mobile results provide useful collection/filter patterns but no mobile LMS course-builder flow. Image URLs are short-lived and were downloaded after each search into `courses/05-scenarios/assets`; later fetches reported prior assets as skipped/preserved.
