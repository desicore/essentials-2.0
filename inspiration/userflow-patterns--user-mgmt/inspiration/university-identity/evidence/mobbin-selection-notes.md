# Mobbin research and selection

Access date: 2026-09-08.

The installed Claude CLI had an existing connected Mobbin MCP integration. Bounded noninteractive invocations used the existing permission state, ToolSearch and Mobbin search tools only. No authentication, permission grants, configuration edits or credential extraction were needed. The supported tools expose natural-language flow/screen/section search, not a flow-by-ID retrieval endpoint. Targeted searches returned all ordered screen records and supported `image_url` links. Images were downloaded promptly through those returned URLs, preserving the complete delivered frame, proportions and Mobbin attribution. The delivered screenshots are 768 pixels wide; a higher source resolution was not exposed.

## Queries

- Enterprise SSO setup, SAML configuration and directory provisioning.
- Existing-account SSO, identity linking and no application access.
- Directory-synced groups and externally managed SCIM users.
- Failed directory sync, provisioning errors, last synchronization and retry.
- Targeted Remote SAML setup and GitHub enterprise SAML test configuration.

Full source result IDs and returned screenshot URLs are in the adjacent JSON evidence files. Search terms describe research intent; they are not claims that every result contains those states.

## Selected after visual inspection

- **Remote, 4 screens, Q1:** numbered app/identity-provider setup handoffs, domain scope cue and unsupported certificate-file feedback. Activation and connection success are not shown.
- **GitHub, 6 screens, Q1:** mandatory test-before-save SAML gate. Test fails because the supplied certificate is not valid X509; inline error, failed-test state and global banner all remain visible. No successful save is implied.
- **WorkOS, 4 screens, Q1:** optional directory attribute toggles with per-field descriptions, a delayed-propagation warning and persisted enabled/disabled states. This shows field scope, not selecting groups or a completed directory run.
- **incident.io, 4 screens, Q2:** SAML failure with retry/support instruction and alternative authentication routes. The later home screen does not reveal the successful method or prove a successful SAML retry/account link.
- **Okta, 5 screens, Q3:** pending versus active people, group source filtering, group/application counts and an explicitly Okta-managed administrator group. An external directory group and controlled profile edit are not shown.

All five selected flows are distinct from exact source IDs on page 1. These products use Mobbin as their design-library source in this round; official documentation is separately labeled evidence.

## Rejected and unresolved

- Twingate login is a generic provider-choice-to-home sequence without identity-linking or no-access evidence.
- 1Password Integrations shows a directory of providers rather than configuration or externally controlled group state.
- WorkOS Directory Sync overview and sample payload were inspected, but the more specific attribute-edit flow was selected to avoid repetitive screenshots. Their shared screenshot was downloaded only once.
- A broad GitHub Enterprise flow was returned by one targeted search; it was not downloaded or substituted for the specific SAML test flow.
- The sync-error search yielded configuration flows rather than an actual failed synchronization/retry journey. This remains a gap.
- No selected Mobbin flow proves stable-ID duplicate resolution, returning-user linking, successful sign-in with no app access, or Canvas-to-directory identity matching.

Final selection: **5 references, 23 screenshots**, all retained in order in both report input and board selection. Unselected candidate downloads remain evidence only and are not counted as placed images.
