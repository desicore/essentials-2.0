Continue the Essentials 2.0 / LearningSpace inspiration research by researching university identity, directory integration, and user imports, then building an internal inspiration board on PAGE 2 of our existing FigJam file.

This is a research and moodboard creation task. Execute the research, collect real assets, build the HTML report, and populate FigJam. Do not stop after proposing a plan.

## Destination and existing references

Existing inspiration board, PAGE 1 — use as the reference for layout and annotation conventions:
https://www.figma.com/board/tN2AM7RZD2InF1LYnN0zcn/Essentials-2.0---Inspiration?node-id=0-1

Destination, PAGE 2 — place the new research here:
https://www.figma.com/board/tN2AM7RZD2InF1LYnN0zcn/Essentials-2.0---Inspiration?node-id=5-422

File key: tN2AM7RZD2InF1LYnN0zcn
Reference page ID: 0:1
Destination page ID: 5:422

Supporting product context:
- Module/concept map:
  https://www.figma.com/board/3xW76Dey8RHknOkTB5t8Mq/Essentials---Concept?node-id=0-1
- User journey map:
  https://www.figma.com/board/leqoQWMBawO4ZlKZJchEQG/Essentials-2.0---User-journey-map?node-id=12-440

Local project:
 /Users/danielbrassnyo/Documents/dev-projects/elevate/essentials-2.0

Read relevant project instructions and these existing files before starting:
- README.md
- inspiration/PLAN.md — read the later status and decisions, not just the initial proposal.
- inspiration/schema.md
- inspiration/access-sharing/references.json
- inspiration/access-sharing/figjam/README.md
- Relevant existing report, asset, and FigJam scripts.

Create this round’s files under:
 inspiration/university-identity/

Reuse the existing pipeline where appropriate. Inspect scripts before running them: some defaults and page IDs may target the previous round. Pass explicit new paths and destination IDs.

Preserve page 1 and the previous research files. Do not create a new Figma file or substitute a new page for the specified page 2. Reinspect page 2 before writing in case it has changed.

## Purpose

The first board investigated “Access, roles & sharing.”

This second board should investigate:
“University identity, directory sync & user import”

We are collecting evidence about user journeys, interaction patterns, decisions, system responses, and recovery paths. Visual style is secondary. Do not redesign LearningSpace or produce speculative product screens.

The central research question is:
“How can LearningSpace work with the university’s existing user management, while supporting institutions that need imports or manual exceptions?”

## Product context and technical distinctions

Prioritize university-managed identities and directories, including LDAP / Active Directory environments.

Keep these separate:
1. Authentication / SSO: using an existing university identity to sign in.
2. Provisioning: creating, updating, linking, and deactivating LearningSpace user records.
3. Authorization: determining what those people can access.
4. Course membership: associating people with particular Canvas or LearningSpace courses.

LDAP is a protocol for communicating with a directory. It is not itself an app launcher or a complete synchronization solution.

A university without LDAP may still have centralized identity through another system. Research the broader institutional identity requirement, with LDAP explicitly included. SAML, OpenID Connect, SCIM, and directory connectors may be relevant mechanisms, but do not prescribe an implementation before validating the requirements.

Canvas has two relevant roles:
- A complementary source of course information and memberships.
- An alternative source of users through authorized export/import or integration.

Canvas administrators can export users through its Provisioning report, including names, emails, identifiers, and status. Canvas also documents automated roster retrieval. Verify current capabilities and restrictions in official documentation.

A CSV import is a snapshot, not continuous sync.
SSO alone does not establish a complete account lifecycle.
A directory connection does not automatically provide course enrollment data.

Do not assume LearningSpace already supports any particular mechanism.

Our working hypothesis is that each system supplies the information it owns:
- University identity infrastructure: institutional identity and sign-in.
- Canvas: relevant course memberships and roles.
- LearningSpace: local access rules, guests, and LearningSpace-specific information.

Label this as a hypothesis to validate.

## Research sections

Use six question-based sections. Give the first four most of the research attention.

Q1 — How does university IT connect and scope institutional identity?
Look for connection setup, provider selection, configuration guidance, test connection, group or department selection, attribute mapping, and first-sync previews.
Distinguish IT setup from everyday administrator tasks.

Q2 — How do existing university users arrive and link to the right account?
Look for institutional sign-in, account creation at first login, users provisioned before login, linking existing accounts, duplicate resolution, missing attributes, changed email addresses, and successful login with no application access.
Investigate stable identity matching; do not assume email alone is sufficient.
Keep guest access visible as a separate route.

Q3 — How are externally managed people, groups, and permissions represented?
Look for source labels, “managed by your organization” states, editable versus controlled fields, inherited group access, role mapping, local exceptions, and explanations of effective access.
Explore a person having different roles in different courses.
Do not treat an imported teacher role as permission to administer the whole institution.

Q4 — What happens when users or connections change?
Look for group changes, departures, returning users, deactivation/reactivation, sync history, last-successful-sync information, partial failures, retries, expired connection authorization, and support escalation.
Distinguish removing course membership, disabling access, and deleting historical records.
Investigate how products avoid treating a failed sync as proof that users were removed.

Q5 — How can administrators safely import and update users in bulk?
Use Canvas CSV export → LearningSpace import as a concrete scenario.
Look for templates, column mapping, required identifiers, validation, previewing additions and updates, duplicate handling, partial success, downloadable error reports, and repeat imports.
Names and emails alone do not establish course access; investigate membership mapping separately.
Include generic CSV imports from other institutional systems.

Q6 — How can Canvas complement university identity without creating duplicate users?
Look for selecting courses/rosters, mapping course roles, linking roster entries to existing institutional users, enrollment changes, and explaining which system controls which information.
Keep materials/course-content integration as context, not a separate research project.
Use documentation to establish technical feasibility and product examples to study interaction patterns.

Across the sections, include privacy-conscious patterns such as selecting relevant groups, previewing shared fields, limiting imported information, and showing who can perform an import.
Do not present a screenshot or available API as proof of legal permission.

## Phase 1 — Research and evidence collection

1. Inspect page 1 visually and structurally.
   Identify its section arrangement, reference rows, screenshot sizing, labels, annotation placement, and color conventions.
   Its established format is tall question-based sections with an annotation sticky on the left and ordered full screenshots extending horizontally.
   Match the actual board rather than relying solely on old scripts.

2. Check access to Mobbin, Refero, and FigJam.
   Use available supported MCP tools first; use an authenticated browser when appropriate.
   Discover current capabilities rather than assuming the previous session’s tools or authentication still apply.
   Load relevant installed skills.
   If a connector fails but the app is accessible, use the available supported route.
   Never expose tokens or copy credentials into research files.

3. Search BOTH Mobbin and Refero.
   Start with flows; use individual screens for specific states and gaps.
   Useful search families include:
   - enterprise SSO setup
   - directory integration / directory sync
   - LDAP / Active Directory
   - SCIM provisioning
   - identity provider / organization-managed users
   - group mapping / attribute mapping
   - externally managed profile
   - account linking / duplicate accounts
   - provisioning logs / sync errors
   - deactivate / reactivate user
   - CSV user import / field mapping / import preview
   - roster / enrollment / LMS integration

4. Broaden beyond literal LDAP screenshots.
   Investigate enterprise administration and identity patterns in products such as Microsoft Entra, Okta, Google Workspace, Atlassian, Slack, GitHub, Notion, Figma, Miro, and comparable products.
   These are search candidates, not confirmed library coverage.
   Inspect education-specific examples where available.

5. Deduplicate against page 1 and across sources.
   If a product appears in both Mobbin and Refero, choose one source for this round, favoring the clearer and more complete relevant evidence.
   Do not download the same assets twice.
   Reuse a page-1 reference only when it answers a materially different question here; explain that new relevance.

6. Inspect the actual screens before selecting a reference.
   Search-result titles alone are insufficient evidence.
   Record the entry point, user decision, system response, completion state, and any observed error or recovery state.
   Do not invent unseen steps or capabilities.

7. Where identity or Canvas coverage is missing, supplement with official documentation or official product screenshots.
   Mark these clearly as documentation evidence.
   Mark analogous SaaS patterns as analogies.
   Distinguish observed behavior, technical facts, proposed adaptations, and open questions.

Aim for approximately 4–6 strong references per section, around 24–36 overall.
Quality and coverage matter more than hitting a quota. Report genuine gaps rather than filling the board with generic signup screens.
This is an internal research collection, not a final client shortlist.

Technical starting points to verify:
- https://learn.microsoft.com/en-us/entra/architecture/auth-ldap
- https://learn.microsoft.com/en-us/entra/identity/app-provisioning/how-provisioning-works
- https://community.instructure.com/en/kb/articles/387054-canvas-default-account-reports
- https://developerdocs.instructure.com/services/canvas/external-tools/lti/file.provisioning

## Research data and annotations

Follow the existing JSON schema for the main reference collection.
Keep stable source IDs, product names, direct source links, and ordered images.
Put additional evidence metadata in compatible fields or a sidecar file; do not mislabel official documentation as Mobbin or Refero.

For each reference capture:
- Research question.
- Actor: university IT, LearningSpace administrator, faculty, learner, or guest.
- Observed behavior.
- What LearningSpace could adapt and why.
- Important limitation or mismatch.
- Evidence type: direct pattern, analogy, or documentation.
- Source URL, source IDs, and access date.
- Local asset paths and ordered step IDs.

Write specific annotations. For example:
“Preview which directory groups will receive access before enabling provisioning. Could help IT limit LearningSpace to participating departments.”

Avoid vague descriptions such as “clean UI” or “good onboarding.”

Keep the visible sticky concise. Put longer reasoning in adjacent text or the HTML report.

## Phase 2 — HTML report and FigJam creation

Build the internal HTML report using the existing tooling:
 inspiration/university-identity/report.html

Keep the complete flow sequences in the report, with source links and annotations.
Prefer locally embedded images so the report remains usable when source links expire.
Disclose missing assets rather than silently presenting broken images as complete.

Populate PAGE 2 with:
- A short introduction explaining the directory-first scope.
- Six question-based sections following page 1’s visual conventions.
- One row per reference.
- A concise annotation sticky on the left.
- Product/flow labels and clickable source links.
- Full screenshots in sequence across the row.
- A short section takeaway and unresolved research questions.

Full screenshots first. Cropping and final convergence are later passes.
Preserve aspect ratios and readable labels.
Use page 1’s existing color meanings; distinguish evidence, proposals, and open questions without inventing conflicting meanings.

Show up to eight key steps per flow on FigJam if needed for space.
Preserve original order, label any omitted steps, and link to the complete sequence in the report. Do not imply that a shortened sequence is the complete flow.

Add a compact synthesis area covering:
- Strongest patterns worth exploring.
- Decisions still needed about information ownership and local overrides.
- Questions for university IT.
- Technical and privacy assumptions requiring validation.

Do not create a client presentation or expand into another module.

## Pipeline lessons from the first round

- Download Mobbin assets promptly; previous image URLs expired.
- Refero preview downloads sometimes returned 403. Use a supported full-image retrieval route or record the gap; do not bypass access controls.
- Previous WebP uploads produced blank Figma fills. Convert to PNG/JPEG before upload and verify the rendered result.
- Long FigJam stickies became unreadable. Keep them short and use adjacent text for detail.
- Reuse existing helpers carefully; inspect hard-coded source paths, section IDs, and destination page IDs.
- Keep a manifest mapping references and images to created FigJam node IDs.
- Make uploads resumable so retries do not duplicate rows.
- Test one complete reference row on page 2, inspect it, then proceed with the remaining batches.
- Review batches while building rather than discovering all placement errors at the end.

## Completion and handoff

Verify:
- All new content is on page 2.
- Page 1 and its assets remain intact.
- Every reference has a readable annotation and source link.
- Images render, preserve their proportions, and appear in the correct order.
- Rows and sections do not overlap.
- The HTML report opens and its images work.
- Missing evidence and unavailable assets are explicitly recorded.
- Each section contains useful synthesis, not just screenshots.

Save the brief, references, asset manifest, research notes, HTML report, and FigJam node map under inspiration/university-identity/.

Proceed autonomously with routine research, downloads, report generation, and additions to page 2. There is no need for another approval checkpoint between these phases.
If access prevents part of the task, complete independent work and clearly identify the remaining blocker. Do not claim the board is finished without verifying it.

Finish with:
- The page-2 link.
- The local report path.
- Reference and image counts actually placed.
- The most useful findings.
- Evidence gaps and questions for university IT.