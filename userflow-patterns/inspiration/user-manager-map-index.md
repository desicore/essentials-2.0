# User Manager module map → where the inspiration lives

Index from Gabor's **User Manager** node and its six children to the two research reports.

**Warning:** both rounds label their questions Q1–Q6 but they mean *different* things. Always note which report.

| Report | File | Scope | Refs |
|---|---|---|---|
| **R1** | `inspiration/tmp/report-hotlink.html` | Access, roles & sharing | 137 |
| **R2** | `inspiration/university-identity/report.html` | University identity, directory sync & user import | 32 |

**R1 questions** — Q1 let people in without accounts up front · Q2 access scoped by content, not global role · Q3 bulk rosters / CSV / LMS import / churning cohorts · Q4 minimal role set + escape hatch · Q5 time-boxed access · Q6 login friction & recovery

**R2 questions** — Q1 IT connects & scopes institutional identity · Q2 existing university users arrive & link to the right account · Q3 externally managed people, groups & permissions · Q4 what happens when users or connections change · Q5 safe bulk import & update · Q6 Canvas complements identity without duplicate users

Both reports filter by question and free-text search — filter to the question, then search the app name.

---

## 1. import learners from Canvas?

**Primary: R2 Q6 (all 3 refs) + two in R2 Q5.** This node is almost entirely round 2; round 1 has nothing on Canvas.

- **R2 Q6 · Canvas — Retrieve a course roster through LTI NRPS** — pulls the whole course population, not just people who launched the tool. Needs developer key + membership-read scope.
- **R2 Q6 · Canvas — Respect roster identifier and privacy boundaries** — NRPS returns an LTI user id + context roles; names/email/SIS ids depend on tool privacy settings. This is the constraint on "attach a learner without an account".
- **R2 Q6 · Canvas — Course departure differs from account suspension** — active / inactive / concluded / deleted enrollments; inactive students lose course access while instructors keep submitted work.
- **R2 Q5 · Canvas — Export a selected Provisioning CSV from account reports** — Settings → Reports, pick CSV categories, run, download. The manual alternative to NRPS.
- **R2 Q5 · Canvas — Join user identifiers to separate enrollment data** — Users file and Enrollments file are separate; groups and group memberships only export when created in Canvas.
- **R2 Q3 · Canvas — Roles belong to course enrollments** — role lives on the enrollment (user + course + section), not on the person. Key for the 3-role bet.

Supporting pattern from round 1: **R1 Q3 · Vimeo — Event registrants list with 'Sync from email list' + 'Upload CSV'** — continuous sync sitting next to one-shot upload in the same roster header.

## 2. Add/Remove/Edit learner groups

**This is the thinnest node.** Round 1 treated groups as *an audience you share to* (Q2) and *a cohort you import* (Q3); round 2 Q3 is the only place groups are modelled as a durable, externally-owned object.

**R2 Q3 — groups as an externally managed object (the whole question, 5 refs):**
- **Okta — Show directory status and system-managed groups** — Groups list with a *Group source* filter (system vs directory vs local), people and applications columns; People list has status filtering with "Pending user action" beside Active.
- **Atlassian — Separate directory ownership from application access** — synced groups are **read-only** locally and edited in the IdP; app access is granted *through group assignment*. The cleanest statement of "the directory owns membership, we own permissions".
- **GitHub — External membership with local resource permissions** — connect an existing team to IdP groups; membership then comes from the IdP while repository access stays in GitHub.
- **Atlassian — Review access changes before replacing conflicting groups** — when a local group and an IdP group share a name, it lists the conflicts (app access + membership deltas) before you choose which to sync. This is the migration screen for a university that already has local groups.

**R1 Q3 — building and maintaining a group by hand:**
- **Front — Creating a teammate group** — create-group form offers a checkbox picker of existing people *and* "Download CSV template / Import CSV" inline. Small groups by hand, big cohorts by file, same screen. **Best single reference for this node.**
- **Google Workspace — Manage members** — Add / Bulk upload / Download members side by side, and separates **direct vs indirect (nested)** members — the model if learner groups ever contain sub-groups.
- **Calendly — Admin center: Groups** — members organised by department/location **with group admins** — the only delegated-admin reference in either round.
- **Canva — Manage team members** — multi-select in the roster → "Add to group" overlay; groups built from the existing member list rather than a separate builder.
- **Dropbox — Admin console: Members list with status filter** — Members table (invited/active filter) with Groups as a sibling nav item; roster and cohorts in one console.
- **Ghost — Importing members** — auto-labels the batch "Import <date>" so the cohort is findable afterwards.
- **Customer.io — Mapping fields** — the review step offers "add these people to a new or existing segment": the import *creates* the group in one pass.

**R1 Q2 — the group as a sharing target:**
- **Fireflies — Team (User Groups)** — a recording tool that sells groups explicitly as "share meetings with a particular group"; groups exist to receive recordings, not to hold a global role. Closest analogue to LearningSpace.
- **Notion — Creating a group** — People table with Teamspaces / Groups / Role as separate columns; Groups tab shows how many teamspaces each group unlocks.
- **Hex — Sharing a project** — one input accepting "users, groups, or collections".
- **Aboard — Set access (document)** — attribute-scoped access (Workplace × Department × Role) instead of naming people; maps to site × program × cohort.
- **Teachable — Community Access Management** — gate a content area by membership tier; edtech cohort scoping.
- Counter-example: **Confluence — Hub permissions (per-user grid)** — Users/Groups/Guests tabs over a 15-column checkbox grid.

Still missing (the Q7 gap): group lifecycle (rename/merge/archive), nested groups beyond Google Workspace, what happens to shared content when a group dissolves, retroactive access for late joiners.

## 3. Add/Remove/Edit users

**R1 Q1 — arriving without an account up front:**
- **Jitter — Accepting an invite** — invite email is already known, so "Log in" sends a temporary magic link straight into the team; no password ever set.
- **Mural — Continue as a visitor** — a real no-account path.
- **Slite — Accepting an invitation** — three parallel ways in: shareable join link, import from Google/Slack contacts, or typed emails.
- Counter-examples: **Dovetail — Accepting invite**, **Retool — Accepting an invite**.

**R2 Q2 — the same person arriving from the university's identity:**
- **Microsoft Entra — Configure unique matching attributes and precedence** — matching attributes evaluated in precedence order until unique; every user needs a value for at least one. The answer to Kent State's non-persistent LDAP username.
- **Atlassian — Create accounts at first SAML sign-in** — JIT provisioning + verified-domain claiming, and its warning about inconsistent IdP use.
- **GitHub — Inspect and repair a linked SAML identity** — admin can inspect and **revoke** a wrong identity link so the person retries. The fix for first-login failures currently repaired by hand.

**R2 Q4 — editing and removing over time:**
- **Loom — Deactivate access while explaining content consequences** — the confirmation spells out what access is lost, which shared content stays reachable, and ownership consequences. Best deactivation reference in either round.
- **Microsoft Entra — Separate disabling, deletion, and return** — disable on scope exit vs delete; restoring a soft-deleted user can reactivate the target.
- **Atlassian — Distinguish resynchronizing from stopping account sync** — stop-sync unlinks the account and drops SCIM group memberships while the account stays active. The manual-exception escape hatch.

**R1 Q4 — the row-level edit interaction:** **Ballpark — Manage team member permission** (change from the row, confirm inline, no edit page), **Twist — Downgrading a member**, **Expensify — Editing member role**.

## 4. Give permissions and access

**R1 Q4 — the minimal role set (the "8 roles → 3" argument):**
- **Gamma — Changing a member role** — the floor: exactly two roles, each with a one-line description in the dropdown.
- **Stripe — Team Member Invitation and Role Assignment** — role chosen at invite time from a short fixed list with one-line descriptions; no separate role-admin step.
- **GitHub — Repository roles** (Q2) — five roles each described as "previous role plus X".
- **Zendesk — Team member roles and access** — one role plus product-level toggles; the escape hatch lives on the person, not in a matrix.
- **Notion — Inviting a guest** / **Descript — Project Access Management** / **GitBook — Share space with 'Inherited' org access** — per-item override on top of a small global role, with inherited rows labelled as inherited.
- **Synthesia.io / Ballpark** — Guests as a *tab*, not a role-matrix column.
- Counter-examples (the "don't build this" wall): **Fresha — Basic/Low/Med/High matrix**, **Retool — Permission groups (apps × resources × users)**, **StackAI — Roles permission matrix**, **Pinterest — Add and assign employee permissions**.

**R1 Q2 — scoping by content instead of by role:**
- **Sketch — Share a document** and **ElevenLabs — Sharing a project** — the share dialog organised by *audience tier* (Workspace members / Guests / Everyone; Collaborators vs Readers).
- **Figma — Manage sharing and invite collaborator**, **Coda — Updating sharing permissions**, **Dropbox — Folder access management** — stacked audience rows with inherited access shown separately from direct grants.
- **Basecamp — What can Jane Doe access?** — the inverse view: answer "who can see what" from the *person's* side. Directly answers Galen's lab-manager complaint.
- **Asana — Request access to project** — the recovery path when scoping is too tight.

**R2 Q3 · Atlassian — Separate directory ownership from application access** is the bridge: permissions stay ours even when membership isn't.

**R1 Q5 — time-boxing access:** **Frame.io — Scheduling an expiration date**, **Craft — Adding expiration date**, **1Password — Share item link: expires after + available to**, **Hashnode — Invite link creation** (role + usage limit + expiry on one link), **Mural — Updating link access** (a distinct visitor tier for people without accounts), **Shuttle — Edit shared link: permission + expires after**. This is the set for video release/closing dates.

## 5. Batch upload (AI?)

**R1 Q3 — the CSV mechanics:**
- **Customer.io — Mapping fields** — 3-step Upload / Map fields / Review; the review counts **new vs existing** people with warnings and errors before committing.
- **Ghost — Importing members** — column-mapping table (field / sample data / import as), upserts on matching email, auto-labels the batch.
- **Intercom — CSV User Import**, **Circle — Importing member from CSV**, **Resend — Import contacts from CSV**, **Acuity — Client Import/Export**, **Cake Equity — Bulk Stakeholder Import**.
- **Miro — Invite to team: paste multiple emails** and **Linear — Inviting team members** — the lightweight alternative: one paste box handles 1 or 100, invited rows appear immediately with "(Invited)" status.
- **Grammarly — Invite members dialog** — an "Import list" nudge inside the ordinary invite dialog; a possible answer to "batch upload undiscovered".
- Counter-example: **Deel — Uploading a CSV** — 4-stage full-screen wizard; right for 300 payroll records, far too heavy for a sim tech adding 4–10 learners.

**R2 Q5 — doing it safely at university scale:**
- **Intercom — Repeat-import matching and an all-error result** — states the matching rule up front (user ID or email updates, otherwise creates) and shows a total-failure result honestly.
- **Rox — Map columns with sample data and validation review** — sample values shown beside the selected destination field, plus auto-map.
- **R2 Q4 · Microsoft Entra — Quarantine unexpected mass removals** — a configurable deletion threshold that quarantines the run and lets the admin inspect staged actions before allowing deletes. The safety net for any bulk path.
- **R2 Q1 · Google Cloud Directory Sync — Simulate before the first live synchronization** — dry run first, and handle pre-existing unmanaged accounts before syncing.

No AI-assisted import evidence was collected in either round — that part of the node is unresearched.

## 6. SSO

**R2 Q1 — IT connects and scopes the identity source:**
- **Okta — Select Active Directory users and groups before import** — separate user-OU and group-OU selection, delegated authentication, import schedule, username format and matching rules; documented warning that changing filters can deactivate people. **The core LDAP/AD reference.**
- **WorkOS — Choose which directory attributes are synchronized** — per-attribute toggles with a warning that changes may not apply to existing directory users.
- **Remote — Guide IT between the app and identity provider** — numbered SAML setup guide; IT copies SP URL and audience into the IdP.
- **GitHub — Test SAML before saving an enforced sign-in policy** — Save stays disabled until the test passes. Stops the lockout-for-months failure mode.
- **Zendesk — Configure a named SAML connection** — named connections with helper text for the ACS URL and certificate fingerprint.
- **Calendly — Separate sign-in from user provisioning** — SSO, User provisioning and Domain control as three distinct tabs. The clearest IA for keeping authn / provisioning / authz apart.
- **Microsoft Entra — LDAP is a directory protocol** and **Entra — Test one user through provisioning diagnostics** (single-user trace through import → scope → match → action).

**R2 Q2 / R1 Q6 — the user-facing sign-in and its failures:**
- **R2 Q2 · Riverside — SSO email discovery with an explicit failure** — "this email is not recognised for SSO", directed to their organisation.
- **R2 Q2 · incident.io — Keep SAML failure and recovery routes visible** — SAML failure error with retry and contact-admin paths still on screen.
- **R1 Q6 · Epidemic Sound — SSO email check and error handling**, **Maze — SSO sign-in with team identifier**, **Workable — Sign in with Google / Microsoft / LinkedIn / SSO / instant link**.
- **R1 Q1 · Plain — Logging in** (email → Continue with SSO → "Select an organization") and **Slite — Sign into workspace** (domain auto-join: "if you have an @school.edu address you can join this organization").
- **R1 Q6** is the whole account-recovery set for the JCU lockout pain: **Miro — Password recovery and reset**, **OpenAI Platform — Resetting password (one-time code escape hatch)**, **Microsoft Copilot — Incorrect password, send a code instead**, **Surfshark — Too many login attempts, login with code**, **Family — Account recovery: recovery codes**. Counter-examples: **Sentry — link invalid or expired**, **Skiff — Recover with recovery key**, **Paramount+**.
- **R1 Q1 · Homerun — Team login policy: none / 2FA or SSO / SSO only** — org-level enforcement as three radios with consequence text.

---

## Coverage at a glance

| Module map node | Strongest source | Depth |
|---|---|---|
| import learners from Canvas? | R2 Q6 + Q5 | good (documentation-only, no product screens) |
| Add/Remove/Edit learner groups | R2 Q3, R1 Q3/Q2 | **weakest — see the Q7 gap** |
| Add/Remove/Edit users | R1 Q1/Q4 + R2 Q2/Q4 | good |
| Give permissions and access | R1 Q4/Q2/Q5 | strongest in the whole set |
| Batch upload (AI?) | R1 Q3 + R2 Q5 | good for CSV; **no AI evidence** |
| SSO | R2 Q1/Q2 + R1 Q6 | good |
