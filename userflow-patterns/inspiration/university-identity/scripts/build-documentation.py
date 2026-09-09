import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
assets = json.loads((ROOT / 'documentation-assets.json').read_text())
refs = []

def add(slug, q, app, title, url, take, observed, adaptation, limitation, actor='university IT', image_keys=(), source_file=None):
    selected = [next(a for a in assets if (a['source'], a['source_index']) == key) for key in image_keys]
    r = dict(id='documentation:'+slug, source='documentation', app=app, title=title,
        kind='flow' if len(selected)>1 else 'screen', url=url, images=[a['url'] for a in selected],
        question=q, take=take, observed=observed, adaptation=adaptation, limitation=limitation,
        actor=actor, evidence_type='documentation', access_date='2026-09-08', counter_example=False,
        selected=False, localAssets=[a['local'] if not a.get('error') else None for a in selected],
        steps=[dict(id=f'{slug}:{i+1}', title=a['title'], asset=a['url'], local_asset=a['local'],
            source_step_index=a['source_index'], evidence='Official documentation illustration; not a captured live session') for i,a in enumerate(selected)],
        asset_gap='' if selected else 'Text documentation only; no relevant product screenshot collected.',
        source_file='evidence/'+(source_file or slug)+'.md')
    for key,limit in [('take',35),('observed',70),('adaptation',40),('limitation',40)]:
        assert len(r[key].split()) <= limit, (slug,key,len(r[key].split()))
    refs.append(r)

add('entra-ldap','Q1','Microsoft Entra','LDAP is a directory protocol',
 'https://learn.microsoft.com/en-us/entra/architecture/auth-ldap',
 'Start with the university’s identity infrastructure. LDAP describes directory communication; it does not by itself provide app access or course membership.',
 'Microsoft describes LDAP applications connecting to directory services. Its Entra example uses Domain Services and a one-way identity synchronization architecture, with networking and directory prerequisites.',
 'Ask IT which directory and sign-in services exist before offering connection mechanisms. Explain authentication, provisioning, permissions, and course membership separately.',
 'Architecture documentation, not a setup flow. The Microsoft topology is one example and does not establish what LearningSpace supports.')

add('okta-ad-scope','Q1','Okta','Select Active Directory users and groups before import',
 'https://help.okta.com/oie/en-us/content/topics/directory/ad-agent-configure-import.htm',
 'Let IT select relevant organizational units and inspect import settings before bringing institutional users into the application.',
 'The AD integration settings separately select user and group OUs, delegated authentication, import schedule, username format, and matching rules. Documentation warns that changed filters can deactivate users or groups.',
 'Show the selected population, shared attributes, and impact of scope changes before enabling a departmental rollout.',
 'AD-specific configuration. Okta’s LDAP feature table separately lists OU/container import filtering as unsupported; these connectors must not be treated as interchangeable.', source_file='okta-ad-import')

add('google-simulation','Q1','Google Cloud Directory Sync','Simulate before the first live synchronization',
 'https://knowledge.workspace.google.com/admin/users/gcds-best-practices',
 'Offer a real simulation before first sync so IT can verify the selected population and resolve existing unmanaged accounts.',
 'Google advises preparing LDAP data, running a simulated sync, and then running the full sync. It also recommends handling existing unmanaged accounts before synchronization and using focused search rules to exclude unwanted data.',
 'Separate a read-only preview from applying changes. Ask IT to review account matches, excluded groups, and proposed removals.',
 'Text guidance only. A simulation does not demonstrate the institution’s authorization to transfer personal data.',source_file='google-practices')

add('entra-on-demand','Q1','Microsoft Entra','Test one user through provisioning diagnostics',
 'https://learn.microsoft.com/en-us/entra/identity/app-provisioning/provision-on-demand',
 'Trace one user through scope, matching, and the resulting action. Label this test clearly because on-demand provisioning can change the target account.',
 'An administrator selects a user and starts provisioning. The result explains imported attributes, scope checks, matching, and action outcomes. A connection-test step appears only on failure. Missing matching attributes have documented recovery guidance.',
 'Provide a representative-user diagnostic with understandable reasons for inclusion, exclusion, matching, and failure.',
 'This is a live provisioning operation, not a dry run. Official illustrations show selection and success, not every failure state.',image_keys=[('entra-on-demand',0),('entra-on-demand',1)])

add('entra-matching','Q2','Microsoft Entra','Configure unique matching attributes and precedence',
 'https://learn.microsoft.com/en-us/entra/identity/app-provisioning/customize-application-attributes#matching-users-in-the-source-and-target-systems',
 'Agree on a stable identity match before creating accounts. Expose ambiguous or missing matches for review instead of assuming email is enough.',
 'Matching attributes connect existing source and target users. Entra evaluates configured attributes in precedence order until a unique match is found. Every user needs a value for at least one matching attribute; the target must support filtering on it.',
 'Record institutional identifiers separately from display email, show matching provenance, and route collisions to an administrator.',
 'This does not prescribe a universal identifier. Ordered matching is not a compound match across several fields; target capabilities must be verified.')

add('atlassian-jit','Q2','Atlassian','Create accounts at first SAML sign-in',
 'https://support.atlassian.com/atlassian-cloud/kb/what-is-just-in-time-provisioning-and-how-to-set-it-up/',
 'Explain whether the account is created before login or at first sign-in. JIT needs explicit domain and policy configuration.',
 'Atlassian documents first-login account creation through SAML SSO, verified-domain automatic claiming, linked domains, and an enforced default authentication policy. It warns that inconsistent IdP username and email settings can create mismatches or duplicates.',
 'Make first-login provisioning a deliberate institutional policy and test how it behaves for an existing account.',
 'Official setup illustrations only; no end-user first-login completion is captured. This article is marked AI-generated by Atlassian. JIT alone does not demonstrate departures or access assignment.',image_keys=[('atlassian-jit',0),('atlassian-jit',1)])

add('github-linking','Q2','GitHub','Inspect and repair a linked SAML identity',
 'https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/viewing-and-managing-a-members-saml-access-to-your-organization',
 'Show which institutional identity is linked to an existing account, with a deliberate repair route when the wrong identity was connected.',
 'GitHub members can link their IdP identity to an existing account. Administrators inspect the SAML identity link and can revoke an incorrect link so the member can retry. Session and credential revocation are separate actions.',
 'Display link provenance and offer supervised relinking without suggesting that signing out or deleting the user is the same operation.',
 'The screenshot is a profile sidebar excerpt. The documented revoke-and-retry path is not visually captured end to end. GitHub’s organization model is an analogy.',image_keys=[('github-linking',1)])

add('atlassian-managed','Q3','Atlassian','Separate directory ownership from application access',
 'https://support.atlassian.com/provisioning-users/docs/understand-user-provisioning/',
 'Mark directory-controlled fields and groups, then explain the local access granted through those groups.',
 'Provisioned users and groups become available for granting app access. Synced groups are read-only in Atlassian and edited in the IdP. App access is granted through group assignment. External accounts have different attribute and deactivation behavior from managed accounts.',
 'Show a source label and a reason beside controlled fields. Keep LearningSpace-specific access rules visible alongside inherited membership.',
 'Product and domain rules vary. The source has architecture diagrams, but no useful managed-profile screenshot was collected; diagram availability is not UI evidence.')

add('github-team-sync','Q3','GitHub','External membership with local resource permissions',
 'https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group',
 'Keep group membership ownership separate from resource permissions: directory teams can supply people while the application controls what the team accesses.',
 'An organization owner connects an existing team to IdP groups. Membership changes then come from the IdP, while repository access stays managed in GitHub. Team synchronization is not generally a service for provisioning new organization members.',
 'Display both the membership source and local access assignments. Explain why a person in a directory group may still lack application access.',
 'GitHub teams are an analogy for LearningSpace groups, not course enrollments. Collected official images only show navigation, so they were omitted.')

add('atlassian-group-conflicts','Q3','Atlassian','Review access changes before replacing conflicting groups',
 'https://support.atlassian.com/provisioning-users/docs/resolve-group-conflicts-when-syncing-users/',
 'Preview added and removed members alongside the access a conflicting group grants before replacing it with the directory version.',
 'When local and IdP groups share a name, Atlassian lists conflicts with app access and membership changes. Administrators review changes, adjust or rename IdP groups, and choose which groups to sync.',
 'Make source conflicts reviewable and show the access consequences before transferring group ownership.',
 'The official image is an annotated table excerpt, not a complete flow. A shared group name should not be assumed to identify the same institutional population.',image_keys=[('atlassian-group-conflicts',0)])

add('canvas-course-roles','Q3','Canvas','Roles belong to course enrollments',
 'https://developerdocs.instructure.com/services/canvas/resources/enrollments',
 'Represent role and status per course. A teaching role in one course should not silently become institution-wide administration.',
 'Canvas Enrollment objects include a user, course and section identifiers, role or role ID, and enrollment state. Its API can list enrollments by course, section, or user.',
 'Store each person’s course relationships separately so the same institutional identity can have different roles in different courses.',
 'API structure establishes feasibility, not a tested UI or LearningSpace permission policy. Canvas custom roles require a validated mapping.',actor='LearningSpace administrator',source_file='canvas-enrollments-api')

add('entra-lifecycle','Q4','Microsoft Entra','Separate disabling, deletion, and return',
 'https://learn.microsoft.com/en-us/entra/identity/app-provisioning/how-provisioning-works',
 'Disable access independently of deleting history, and define how returning users regain their account and memberships.',
 'Entra documents target disabling when users leave scope and deletion behavior depending on target capabilities. Restoring a soft-deleted user can reactivate the target account, while some group memberships need additional reconciliation. Failed individual operations are retried; widespread failures can quarantine the job.',
 'Preserve identity links and learning history through deactivation. Show account state separately from course state and verify memberships on return.',
 'Connector behavior varies. The screenshots show configuration of disable/delete actions, not a completed returning-user journey.',image_keys=[('entra-lifecycle',3),('entra-lifecycle',4)])

add('entra-status','Q4','Microsoft Entra','Show last completed synchronization and quarantine reason',
 'https://learn.microsoft.com/en-us/entra/identity/app-provisioning/check-status-user-account-provisioning',
 'Show the last completed sync, current progress, affected population, and failure reason so administrators can judge whether directory data is current.',
 'The provisioning status area distinguishes current initial or incremental cycles, synchronized user/group totals, last synchronization, and quarantine reasons such as invalid credentials. Logs can be searched using source or target user identifiers.',
 'Separate last attempt from last success, explain stale data, and link operational status to affected records.',
 'The documentation uses an older Azure-branded status screenshot. Its specific timing and counts are illustrative, not service commitments.',image_keys=[('entra-status',0)])

add('entra-logs','Q4','Microsoft Entra','Export operation details for investigation',
 'https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-analyze-provisioning-logs',
 'Make failed provisioning records diagnosable and exportable so an administrator can resolve a specific identity problem with IT.',
 'Microsoft documents provisioning-log filtering and download in CSV or JSON. Recorded information includes identity, source, target, action, status, and diagnostic details; logs support investigating individual failures.',
 'Provide record-level outcomes, error explanations, and a downloadable report that can be shared through the institution’s support process.',
 'Log visibility requires appropriate permissions and may expose personal data. The captured image shows the download control, not every error recovery screen.',image_keys=[('entra-logs',0)])

add('entra-deletion-guard','Q4','Microsoft Entra','Quarantine unexpected mass removals',
 'https://learn.microsoft.com/en-us/entra/identity/app-provisioning/accidental-deletions',
 'Pause unusually large removals and let IT inspect the cause before changes are applied.',
 'Entra lets administrators configure a deletion threshold and notification address. Crossing the threshold quarantines provisioning. Administrators can inspect staged actions, explicitly allow deletes, or repair the source/configuration before restarting.',
 'Treat a sudden reduction in the source population as a reviewable event. Keep last-known data and show why the job paused.',
 'The threshold also covers disables and is evaluated per cycle. This is documentation guidance; no relevant screenshot was collected.')

add('atlassian-sync-actions','Q4','Atlassian','Distinguish resynchronizing from stopping account sync',
 'https://support.atlassian.com/atlassian-cloud/kb/how-to-manage-account-sync-actions-in-atlassian-admin-hub/',
 'Give stale data, wrong identity links, and unavailable recovery actions different explanations and next steps.',
 'Atlassian documents targeted account sync and a separate stop-sync action. Stopping sync unlinks the account and removes SCIM group memberships while the account remains active. Multiple links disable the actions and require support. Success banners distinguish completed actions from failures.',
 'Explain what a repair changes, confirm unlinking consequences, and retain the managed state until successful completion is known.',
 'Text-only evidence. These actions depend on account state and subscription; they do not establish a universally safe unlinking policy.')

add('canvas-export','Q5','Canvas','Export a selected Provisioning CSV from account reports',
 'https://community.instructure.com/en/kb/articles/661600-how-do-i-view-reports-for-an-account',
 'Let an authorized administrator choose Users CSV and relevant enrollment files, then preserve export provenance when importing the snapshot.',
 'Account administrators open Settings → Reports, configure a report, choose CSV categories and optional SIS/deleted-object settings, run it, and download the finished file. A failed report displays an error code. Term selection affects courses and enrollments, not the Users CSV.',
 'Guide the Canvas export choice, record snapshot time, and preview users separately from course memberships before applying a LearningSpace import.',
 'Official illustrations are excerpts from a general reports guide, not one captured Provisioning run. The download example depicts another report. Import validation and error recovery remain separate evidence gaps.',actor='LearningSpace administrator',image_keys=[('canvas-export',2),('canvas-export',7),('canvas-export',15)])

add('canvas-export-fields','Q5','Canvas','Join user identifiers to separate enrollment data',
 'https://community.instructure.com/en/kb/articles/387054-canvas-default-account-reports',
 'Users CSV can supply identifiers, names, email, and status; course access needs separately mapped enrollment records.',
 'The Provisioning report lists user identifiers, names, email and status in Users, and user/course identifiers, roles and status in Enrollments. It exports groups and group memberships only when created through Canvas SIS integration.',
 'Preview identifier mapping and additions versus updates. Validate the enrollment join separately, retain row-level errors, and explain repeat-import behavior.',
 'CSV files are snapshots. Field availability does not prove export permission or that every identifier matches the university directory. The selected generic CSV flows do not prove Canvas-to-LearningSpace identity matching or enrollment import.',actor='LearningSpace administrator',source_file='canvas-reports')

add('canvas-nrps-roster','Q6','Canvas','Retrieve a course roster through LTI NRPS',
 'https://developerdocs.instructure.com/services/canvas/external-tools/lti/file.provisioning',
 'Use Canvas as a course-membership source while matching roster entries to existing institutional accounts.',
 'Canvas documents NRPS for LTI 1.3 tools with a developer key, membership-read scope, installed tool, course context and OAuth client credentials. It can retrieve the course population beyond people who launched the tool. It cannot write enrollments back.',
 'Let administrators select relevant courses and inspect role mapping before matching roster entries to institutional users.',
 'Technical feasibility only. Tool availability, institution authorization and identifier correspondence need validation; a normal LTI launch alone cannot reveal later departures.',actor='LearningSpace administrator',source_file='canvas-roster')

add('canvas-nrps-identifiers','Q6','Canvas','Respect roster identifier and privacy boundaries',
 'https://developerdocs.instructure.com/services/canvas/resources/names_and_role',
 'Preview the identifiers and personal fields Canvas will actually share, and avoid requiring email for every roster match.',
 'NRPS membership objects contain a unique LTI user identifier and roles in the current context. Names, email and SIS identifiers depend on tool privacy settings. The documented course endpoint returns active memberships and supports role or resource-link filtering.',
 'Map namespaced Canvas identifiers to established institutional identities; show unavailable optional fields and allow IT to review ambiguous matches.',
 'An LTI user ID is not automatically the university directory ID. API capability and privacy settings do not establish legal permission for transfer.',actor='university IT',source_file='canvas-nrps')

add('canvas-enrollment-status','Q6','Canvas','Course departure differs from account suspension',
 'https://community.instructure.com/en/kb/articles/387055-canvas-enrollment-status-comparison',
 'Reconcile course membership changes independently of institutional identity and historical work.',
 'Canvas distinguishes active, inactive, concluded and deleted enrollments. Inactive students lose course access while instructors retain submitted work; concluded access is generally read-only subject to settings. Account suspension controls login separately and does not change enrollment status.',
 'Define a course-state mapping and preserve historical work when membership ends. Require a successful complete roster retrieval before interpreting absence as departure.',
 'The final retrieval safeguard is a proposed LearningSpace policy. Canvas status behavior varies with course settings; text documentation does not show the recovery interface.',actor='LearningSpace administrator')

next(r for r in refs if r['id']=='documentation:canvas-export')['boardImageOverrides']={'0': {'width': 855, 'label': 'Reports tab — official documentation excerpt'}, '1': {'width': 280}, '2': {'width': 831, 'label': 'Outcome Export download row — official documentation excerpt'}}

data={'module':'university-identity','title':'University identity, directory sync & user import','schema_extension':'source=documentation is intentional; do not label official documentation as Mobbin or Refero.','references':refs}
(ROOT/'documentation-references.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
print('Wrote',len(refs),'references;',sum(len(r['images']) for r in refs),'selected images')
