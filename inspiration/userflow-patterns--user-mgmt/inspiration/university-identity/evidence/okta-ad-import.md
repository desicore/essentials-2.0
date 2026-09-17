When you install the Okta AD agent or the needs of your business change, you define how and when user data is imported. Defining the username format is a critical part of this process. The username is used to associate the user in Active Directory (AD) to Okta. It's important to choose the correct username format as this affects how your users sign in to Okta.

By default Okta uses the Okta user profile username during delegated authentication. For example, if the AD app-user username is samAccountName and the Okta user profile username (login field) is UPN, then Okta use UPN to sign the user in.

If your AD domain functional level is 2003, your AD usernames must have a UPN that includes a domain.name format.

Okta uses GUIDs to uniquely identify objects such as Organizational Units (OUs). GUIDs are used when reading and matching OUs. For example, suppose that you delete an OU in AD and create an OU that has the same name. Okta treats them as different OUs because they have separate GUIDs.

1. In the Admin Console, go to Directory \> Directory Integrations.
2. Click Active Directory and then click the Provisioning tab.
3. Click Integration in the Settings list and in the Import Settings area, complete these fields:
	- User OUs connected to Okta: Add or remove the OUs used to import users.
		Early Access release
		- User Filter: Create a syntax query to selectively import users matching the criteria that you specify. The default is `sAMAccountType=805306368`.
		Changing the default filter queries can result in deprovisioning or deactivating users. To avoid unintended results, Okta strongly recommends that you test these filters in your directory environment to make sure that the results match your expectations.
		- Group OUs connected to Okta: Add or remove the OUs used to import groups.
		Early Access release
		- Group Filter: Create a syntax query to selectively import groups matching the criteria that you specify. The default is `objectCategory=group`.
		Changing the default filter queries can result in deprovisioning or deactivating groups. To avoid unintended results, Okta strongly recommends that you test these filters in your directory environment to make sure that the results match your expectations.
		Back-linked attributes, such as `memberOf`, are computed attributes and aren't stored in your AD database. As a result, changes to the user object aren't visible to Okta and an import operation isn't performed when changes occur. Avoid the use of computed attributes as mapped attributes, especially if you require changes in downstream systems as a result of attribute changes. The use of computed attributes as mapped attributes can lead to inconsistent data between your on-premises Active Directory instance and Universal Directory. For more information, see [Constructed Attributes](https://msdn.microsoft.com/en-us/library/cc223384.aspx).
4. Click Save.
5. Optional. In the Delegated Authentication section, select Enable delegated authentication to Active Directory if you want AD to authenticate your users when they sign in to Okta.
6. Click Save.
7. Click To Okta in the Settings list, click Edit, and in the General area, complete these fields:
	- Schedule Import: Select the frequency for importing users from AD to Okta.
		Following a successful import, under specific conditions Okta automatically sends an email to designated administrators. The email details the number of users and groups scanned, added, updated, or removed during the import. Okta only sends the email if the scan detects any new users or groups, or changes to any existing user profile or group membership.
		- Okta username format: The username format that you select must match the format you used when you first imported users. Changing the value can cause errors for existing users. Choose one of the following options:
		- User Principal Name (UPN): Select this option to use the UPN from AD to create the Okta username.
				- Email address: Select this option to use an email address for the Okta username.
				- SAM Account name: Select this option to combine the SAM Account Name and the AD domain to generate the Okta username. For example, if the SAM Account Name is jdoe and the AD domain is mycompany.okta.com, then the Okta username is jdoe@mycompany.okta.com.
				- Custom: Select this option to use a custom username to sign in to Okta. Enter the Okta Expression Language to define the Okta username format. To validate your mapping expression, enter a username and click View.
		> [!primary] Primary
		> Note:
		> 
		> All Okta users can sign in by entering the alias part of their usernames as long as it maps to a single user in your org. For example, jdoe@mycompany.okta.com could sign in using jdoe.
		- JIT Provisioning: Select Create and update users on login to automatically create Okta user profiles the first time a user authenticates with AD Delegated Authentication. When an AD sourced user profile exists in Okta, the existing user profile is updated when the user signs in, or when an admin views the profile.
	The security groups to which the user belongs are also imported if the group belongs to a selected OU. If a user who's signing in doesn't belong to a selected OU, their sign-in attempt fails. If you enable Just-In-Time (JIT) provisioning, you must also enable Delegated Authentication. This option can be used with or without scheduled imports. For details about JIT and AD domain scenarios, see [Active Directory integration FAQ](https://help.okta.com/oie/en-us/content/topics/directory/directory_faq_okta_and_ad_groups.htm).
	> [!primary] Primary
	> Note:
	> 
	> There are membership inconsistencies that can occur between "regular" imports and JIT provisioning. These membership anomalies can occur when using nested groups. During regular imports, a child group that is outside the scope of an AD OU or LDAP object filter can't be detected. If a parent group is within an OU/object filter scope but its child groups aren't, the parent group membership is incorrectly resolved during import. JIT provisioning would correctly resolve these memberships to the parent group because its function only detects "flat" memberships.
	- USG support: Select Universal Security Group Support to ignore domain boundaries when importing group memberships for your users. This assumes that the relevant domains are connected in Okta. You must also deploy an AD agent for every domain in your forest that contains the USG object that you want to sync with Okta. Each connected domain then imports its groups. When a user's group memberships match any groups that were imported (from any connected domain in the forest), Okta syncs the memberships for the user to each group. Only groups from connected domains are imported. This setting can't be selected unless Update users on sign-in is selected first.
		- Do not import users: Select Skip users during import to keep user profiles and groups synchronized without importing new users from your directory. Use this option when you want to use import functionality to synchronize groups, but want to create Okta users using Just-In-Time (JIT) provisioning.
		Groups are imported when Skip users during import is selected, but group memberships aren't updated until a user import is completed.
		When Skip users during import is selected, all imports are run as full imports.
		- Activation emails: Select this option to prevent Okta from sending an activation email to new users. Admins can activate users.
		Okta recommends that you select not to send activation emails while you're doing the initial AD integration and configuration in your Preview environment. This prevents end users from receiving activation emails before you're ready for them to begin enrolling in and using Okta.
		- Imports with DirSync: Select this option to use DirSync when performing AD imports. After enabling this feature for an AD integration, the next import performed is a full import. This is necessary to allow DirSync to use incremental imports, which offers delta imports with AD that significantly improves performance. Similarly, when you disable DirSync for an AD integration, the next import is a full import.
		> [!primary] Primary
		> Note:
		> 
		> This feature can't be enabled on orgs that have an Office 365 app instance with Universal Sync enabled for this AD instance.
		Early Access release. See [Enable self-service features](https://help.okta.com/okta_help.htm?type=oie&id=ext_Manage_Early_Access_features).
8. Click Save.
9. In the User Creation & Matching section, click Edit and select the conditions under which to identify imported users as matching existing Okta users.
	Matching rules are used in the import of users from all apps and directories that allow importing. If there's an existing Okta account, AD allows you to import and confirm users automatically. AD, OPP, and all provisioning-enabled apps support automatic importation and confirmation of users into Okta. Establishing matching criteria (or rules) allows you to specify how an imported user should be mapped to an existing Okta user. Clearly defining rules for matching helps to prevent multiple instances for the same user from being created.
	> [!primary] Primary
	> Note:
	> 
	> This feature doesn't apply to CSV-imported user lists.
	Imported user is an exact match to an Okta user if: Choose one of the following options:
	- Okta username format matches
	- Email matches
	- The following required attributes match: Select from the list of options to establish your criteria. For the new imported user to be considered an exact match, each option that you select must be true.
	- The following attributes match: Select from the list of options to establish your criteria. For the new imported user to be considered an exact match, each option that you select must be true.
	- Allow partial matches: Select this option to allow a match when the first and last name of an imported user match an existing Okta user, but the user's username or email address don't match.
		- Confirm matched users: Select Auto-confirm exact matches or Auto-confirm partial matches to automatically confirm exact or partial matches. If you don't select an option, matches are confirmed manually after the matching status is established and users are activated on the People page (Directory \> People).
		- Confirm new users: Select Auto-confirm new users or Auto-activate new users to automatically confirm or activate new users when the matching criteria is met. If you don't select an option, new users are confirmed or activated manually on the People page (Directory \> People).
10. Click Save.
11. To define your Profile & Lifecycle Sourcing settings, click Edit and complete the following settings:
	- Allow Active Directory to source Okta users: This option is enabled by default. Profile sourcing makes AD the identity authority for connected users. When enabled, user profiles aren't editable in Okta and changes are synced to Okta during provisioning events. You can disable this option to have AD treated as a normal application. If you disable this feature, user updates you perform in AD aren't pushed back to the user profile in Okta. For example, if you change a user's name in AD, the change doesn't affect the Okta user. However, users can reset their AD passwords in Okta using self-service password reset as long as Delegated Authentication is enabled.
		- When a user is deactivated in the app: Specify what action Okta should take if the user's account is deactivated in Okta.
		- Do nothing: No action is taken.
				- Deactivate: Deactivates the user's LDAP account when they're unassigned in Okta or their Okta account is deactivated. Accounts can be reactivated if the app is reassigned to a user in Okta.
				- Suspend: Suspends the user's LDAP account when they're unassigned in Okta or their Okta account is deactivated. Accounts can be reactivated if the app is reassigned to a user in Okta.
	When a user is reactivated in the app: Specify what action Okta should take if the user's account is reactivated in Okta.
	- Reactivate suspended Okta users: Reactivate suspended Okta users if they're reactivated in LDAP.
	- Reactivate deactivated Okta users: Reactivate deactivated Okta users if they're reactivated in LDAP.
12. Click Save.
13. Optional. To define the Import Safeguard settings, click Edit and complete the following:
	- App unassignment safeguard: Select Enabled to enable import safeguards, or select Disabled to disable import safeguards.
		- is the threshold for unassignments from any app: Enter the percentage of allowable app or org unassignments, or select Set to default to set the percentage to the default value.
		- Org-wide unassignment safeguard: Select Enabled to enable import safeguards for the entire org, or select Disabled to disable import safeguards for the entire org.
		- is the threshold for unassignments across the org: Enter the percentage of allowable app or org unassignments for the org, or select Set to default to set the percentage for the org to the default value.
14. Click Save.