# University identity, directory sync & user import

Research accessed 2026-09-08. This is an internal evidence collection and a set of hypotheses for validation, not a LearningSpace implementation commitment.

## Evidence and asset handling

`documentation-references.json` contains 21 official documentation references: Q1 4, Q2 3, Q3 4, Q4 5, Q5 2, Q6 3. Its `source: documentation` value intentionally extends the previous two-source schema. Each record includes a source URL, actor, observation, proposed adaptation, limitation, local source file and ordered steps.

Thirteen selected official image assets were downloaded to `assets/documentation/` and inspected in the two `evidence/docs-contact-*.jpg` contact sheets. They remain uncropped at the original aspect ratio, converted to PNG where necessary. `documentation-assets.json` records 17 downloaded images, including four not used in the references; use reference `localAssets` to identify the selected sequence. Many official images are publisher-provided excerpts, not full application screenshots. Documentation-only references intentionally have no image. They must not appear as broken-image flows or as visually observed screens.

Canvas export illustrations come from a general reports guide. The final download illustration depicts another report; it proves the documented download control, not a successful Provisioning run captured in this research. The complete source article is linked. Atlassian’s JIT article identifies itself as AI-generated; that limitation is recorded.

## Q1 — How does university IT connect and scope institutional identity?

**Takeaway:** Treat the institution’s identity system as the starting point. IT chooses a population and shared attributes, checks representative records, and explicitly starts synchronization. Keep connection setup separate from daily user administration.

**Evidence:** LDAP describes communication with a directory. The Microsoft architecture is a particular deployment, not a universal university connection model. [Microsoft LDAP architecture](https://learn.microsoft.com/en-us/entra/architecture/auth-ldap)

Google recommends a simulation before a live sync. Entra on-demand provisioning applies a real operation and reports scope, matching, and action results. These are distinct test modes. [Google GCDS practices](https://knowledge.workspace.google.com/admin/users/gcds-best-practices), [Entra on-demand provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/provision-on-demand)

**Open questions:** Which directories and IdPs are deployed? Are relevant users grouped by department, participating cohort, or another attribute? Who owns connector installation and authorization renewal? What can a preview read without creating records?

## Q2 — How do existing university users arrive and link to the right account?

**Takeaway:** Make account arrival and matching explicit. An institution must decide whether accounts exist before sign-in, appear at first login, or need administrator review. A changed email address should not be treated as proof of a new person.

**Evidence:** Entra supports unique matching attributes with precedence, subject to target filtering support. GitHub exposes a linked SAML identity and a revoke-and-retry repair route. These support inspecting account correspondence instead of hiding it. [Entra matching](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/customize-application-attributes#matching-users-in-the-source-and-target-systems), [GitHub linked identity](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/viewing-and-managing-a-members-saml-access-to-your-organization)

**Open questions:** Which identifier persists through renames, reenrollment and employment changes? Can identifiers be recycled? How is ownership established when an existing guest account and an institutional identity seem to match? Who reviews collisions?

**Gap:** No verified end-to-end user flow was captured for successful institutional authentication followed by no application access. Guest entry and conversion to institutional identity also need stronger direct evidence.

## Q3 — How are externally managed people, groups, and permissions represented?

**Takeaway:** Display source ownership beside controlled fields and membership. Show local permissions separately. A person’s role must be contextual where the source supplies course membership.

**Evidence:** GitHub separates IdP-managed team membership from locally managed repository access. Atlassian previews membership gains and losses before replacing conflicting groups. Canvas represents roles within enrollments. [GitHub team sync](https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group), [Atlassian group conflict review](https://support.atlassian.com/provisioning-users/docs/resolve-group-conflicts-when-syncing-users/), [Canvas Enrollments API](https://developerdocs.instructure.com/services/canvas/resources/enrollments)

**Open questions:** Which local fields remain editable? Can an administrator add a temporary exception to an externally managed group, and when does it expire? How should effective access explain several sources? Which Canvas custom roles map to LearningSpace course capabilities?

## Q4 — What happens when users or connections change?

**Takeaway:** Show last success, current attempt, stale data, record-level errors, and recovery actions. Keep disabling access, removing course membership, deleting records, and unlinking a source distinct.

**Evidence:** Entra separates synchronization status from logs and can quarantine unusually large removals. Atlassian distinguishes refreshing an account from stopping its synchronization, including different consequences and confirmation states. [Entra status](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/check-status-user-account-provisioning), [Entra deletion prevention](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/accidental-deletions), [Atlassian account sync actions](https://support.atlassian.com/atlassian-cloud/kb/how-to-manage-account-sync-actions-in-atlassian-admin-hub/)

**Proposal:** Do not treat an unavailable source, partial retrieval, or failed sync as evidence that people have departed. Preserve the last-known state, identify the incomplete run, and require a successful complete evaluation before processing removals.

**Open questions:** How quickly must access end after departure? What history is retained? Who receives connection-expiry and failure notifications? What is the escalation route? Does a returning user regain prior course memberships or only the institutional account?

**Gap:** Documentation establishes reactivation mechanisms, but a complete returning-user interaction sequence was not captured.

## Q5 — How can administrators safely import and update users in bulk?

**Takeaway:** Treat Canvas export → LearningSpace import as a dated snapshot with provenance. Validate person matching and course-membership matching separately; make additions, updates, exclusions, and row errors reviewable before applying them.

**Evidence:** Canvas account reports provide a configurable export route. Users and Enrollments have separate identifiers and status fields. Only SIS-created groups and memberships are included in those Provisioning categories. [Canvas report workflow](https://community.instructure.com/en/kb/articles/661600-how-do-i-view-reports-for-an-account), [Canvas default reports](https://community.instructure.com/en/kb/articles/387054-canvas-default-account-reports)

**Open questions:** Who may export and import? Which identifier is required? How are repeated snapshots applied without duplication? Can an import update externally controlled fields? How will partial success, corrected rows, file history, and downloadable errors work? What generic institutional CSV formats are needed?

## Q6 — How can Canvas complement university identity without duplicate users?

**Takeaway:** Match each Canvas person to an established identity, then apply the selected course relationships. Collect only the identifiers and personal fields required for that mapping.

**Evidence:** Canvas documents roster retrieval through LTI 1.3 NRPS, with configuration and authorization prerequisites. Launch-only provisioning cannot establish later course departures. NRPS supplies contextual roles and privacy-dependent personal fields. [Canvas user provisioning](https://developerdocs.instructure.com/services/canvas/external-tools/lti/file.provisioning), [Canvas NRPS](https://developerdocs.instructure.com/services/canvas/resources/names_and_role)

**Open questions:** Which courses should be visible to the integration? Which identity mapping spans Canvas and the directory? How are missing identifiers handled? Can the university authorize the requested fields and populations? What does each enrollment state mean for LearningSpace access and retained work?

## Ownership hypothesis to validate

| Information | Proposed owner | Decision still needed |
| --- | --- | --- |
| Institutional identity and sign-in | University identity infrastructure | Authoritative identifier, supported sign-in route, identity lifecycle |
| Relevant course memberships and contextual roles | Canvas | Course selection, refresh schedule, custom-role and status mapping |
| LearningSpace access rules, guests and product-specific data | LearningSpace | Local overrides, expiration, effective-access explanation and historical retention |

Authentication establishes who is signing in. Provisioning creates, links, updates or disables the local user record. Authorization determines access. Course membership associates the person with a specific teaching context. A connected directory supplies none of the other layers automatically.

This ownership table comes from the brief and is a proposal. Supporting concept/journey maps do not establish implemented identity functionality. Institutions without LDAP may still have centralized identity; SAML, OpenID Connect, SCIM, directory connectors and exports are candidate mechanisms to investigate after requirements are agreed.

## Priority university IT interview questions

1. What is authoritative for people, sign-in, institutional affiliation, and course enrollment today?
2. Which non-recycled identifier survives email changes and returning-user scenarios across systems?
3. How can IT scope a pilot population and review exactly which fields leave each source?
4. Which administrators can authorize connectors, export Canvas reports and approve imports?
5. What should happen when sign-in succeeds but no LearningSpace entitlement or course membership exists?
6. How are guests, visiting faculty, alumni and temporary exceptions represented and reviewed?
7. Which departure events disable the account, remove one membership, or trigger historical retention decisions?
8. What latency, monitoring, credential-renewal ownership and support escalation are required?
9. Which local overrides are permitted, and how should source changes interact with them?
10. What institutional privacy review and agreements authorize the selected population and data fields?

## Evidence boundaries

Official documentation supports technical feasibility and documented procedures. SaaS administration patterns remain analogies where organizational or permission models differ from university teaching. Screenshots and APIs do not prove legal authorization, institution-specific configuration, LearningSpace support, or an observed end-to-end completion. Missing full screenshots, no-access arrival, guest linking, ambiguous matches and returning-user recovery should remain visible research gaps.
