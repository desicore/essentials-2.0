Here's how to troubleshoot problems you might have while configuring Google Cloud Directory Sync (GCDS).

## Try the Log Analyzer

This tool can identify most issues within a few moments of submission.

- Submit your trace logs (as uncompressed or ZIP files) to the [Google Admin Toolbox Log Analyzer](https://toolbox.googleapps.com/apps/loganalyzer/).
- For advanced log analysis, submit uncompressed files to [Log Analyzer 2](https://toolbox.googleapps.com/apps/loggershark/).

Get details on [how to enable trace-level logging](https://support.google.com/admin/users/what-gcds-information-do-i-need-before-contacting-support#trace).

## Setup & configuration

#### Troubleshoot a configuration using Configuration Manager

If you're having trouble getting a synchronization to run properly, confirm that the configuration information is correct in Configuration Manager and note which tests fail:

1. In **Configuration Manager**, open the XML file you're using to configure the synchronization.
2. On the **LDAP Connections** page, click **Test Connections** to confirm you can connect to your LDAP server.
3. On the **Notifications** page, click **Test Notification** to confirm you can send a test notification.
4. On the **Sync** page, click **Simulate Sync** to confirm you have completed all the required fields and to confirm that the synchronization runs.

#### How do I turn on full HTTP logging for API requests?

In rare cases, support might ask you to turn on full HTTP logging in addition to turning on trace-level logging in GCDS. Full HTTP logging is used to see the exact API request made by GCDS and the response provided by the Google APIs.

**Important**: Full HTTP logs can contain highly sensitive information. Remove any sensitive information (such as current refresh\_token or access\_token fields) before sending the logs to support.

To turn on full HTTP logging:

1. Make sure GCDS isn't running with either sync-cmd or Configuration Manager.
2. Navigate to the GCDS installation folder.
3. Edit the file **jre/lib/logging.properties**.
4. Add the following lines to the end of the file:
	**java.util.logging.FileHandler.pattern = %h/gcdshttp%u.%g.log  
	java.util.logging.FileHandler.limit = 5000000  
	java.util.logging.FileHandler.count = 100  
	java.util.logging.FileHandler.formatter = java.util.logging.SimpleFormatter  
	handlers = java.util.logging.FileHandler  
	com.google.api.client.http.level = CONFIG  
	  
	com.google.gdata.client.http.HttpGDataRequest.level = ALL  
	sun.net.www.protocol.http.HttpURLConnection.level = ALL**
5. Save the file.
6. Run another GCDS sync (with logging set to **Trace**).
	Log files named **gcdshttp\*.log** are created in homedir (Linux) or profile folder (Microsoft Windows). Archive these files together, because they can be quite big.
7. Delete the lines added in step 4 to prevent large log files being created in the future.
8. Provide the following files to support:
	- XML file
		- Trace-level logs and the **gcdshttp\*.log** files from the latest sync

TIP: If you want to enable logging for a new class, append a line in the form of `class.fqdn.level = ALL`, no need to duplicate the whole setup block.

**Use a debugging proxy**

Logged request and response bodies are each limited to a size of 16 KB. If you see a log entry that's truncated because it's exceeding that limit, use a debugging proxy, such as Fiddler.

To enable Fiddler, follow these steps:

Restart GCDS for the changes to take effect.

If you're using GCDS on Linux, you can't use the Windows trusted certificate store, so you need to import the Fiddler root certificate into GCDS's Java trust store. For details on these steps, go to [Troubleshoot certificate-related problems](https://support.google.com/admin/users/troubleshoot-certificate-related-problems).

1. Go to the path where GCDS is installed, for example, `C:\Program Files\Google Cloud Directory Sync`.
2. Add the following flags to the `.vmoptions` files (for example, config-manager.vmoptions or sync-cmd.vmoptions) to turn off the CRL checks:
	> `-Dcom.sun.security.enableCRLDP=false`
	> 
	> `-Dcom.sun.net.ssl.checkRevocation=false`
	1. Configure Fiddler as a proxy in your Google domain configuration's proxy settings. In the hostname field, add the local IP address `127.0.0.1`. The default port is `8888`, but you can confirm this by opening Fiddler, going to Options > Connections, and checking the value in the "Fiddler Classiclistens on port" field.

#### Problem setting up the SMTP relay host

If you're having issues setting up the SMTP relay host for your notifications, try the following troubleshooting steps.

**Connection failed & unknown SMTP host message**

1. Open a command prompt.
2. To check if the configured host name of the SMTP server resolves to an IP address, enter the following command:
	**nslookup *smtp-host-name*.com**

**Connection failed & could not connect to SMTP host message**

Check if the server running GCDS can connect to the SMTP host.

1. To check the connection, from the Windows command line or terminal, enter the following command:
	**telnet smtp.gmail.com 587**
2. If the host can't connect, check the ingress firewall rules of the SMTP server and egress firewall rules of the GCDS server.
3. Make sure that you have allowed traffic on the SMTP port.

**Could not convert socket to TLS error in logs**

Turn off certificate revocation list (CRL) checks. For details, go to [How GCDS checks certificate revocation lists](https://support.google.com/admin/users/troubleshoot-certificate-related-problems#crlcheck).

#### How do I open an XML file saved on a different machine or as a different user?

See [Work with configuration files](https://support.google.com/admin/users/work-with-configuration-files#copyxml) for instructions on how to open an XML file that was saved on a different machine, or as a different user on the same machine.

#### How do I export data from the LDAP directory?

If the LDAP data in the GCDS trace-level logs doesn't match what you expect to read on the LDAP server (for example, a user isn't found or an attribute doesn't have the correct value), export the data from the LDAP directory in LDIF format. Support can compare the data with the LDAP data from the GCDS logs.

When you export the data, use an LDAP query tool such as **ldapsearch** (Linux) or **ldifde** (Windows) and simulate the same conditions that GCDS is running with:

- Use the same connection settings as the ones that GCDS is configured to use.
- Run the query tool from the same machine that GCDS is running on.
- Use the same username for GCDS LDAP authentication.

**Example**

Your GCDS logs don't show the **mail** attribute of your users, and your GCDS search rule settings are:

- Base DN: **ou=Ireland,dc=altostrat,dc=com**
- Scope: **Subtree**
- Search filter: **(&(objectCategory=person)(objectClass=user))**
- Server: **dc01.altostrat.com**
- Port: **636**
- Protocol: **LDAP+SSL**
- Authentication user DN: **cn=GCDS,ou=Users,dc=altostrat,dc=com**

Use these commands:

- **Linux:** `ldapsearch -v -b "ou=Ireland,dc=altostrat,dc=com" -s sub -h dc01.altostrat.com -p 636 -x -Z -D "cn=GCDS,ou=Users,dc=altostrat,dc=com" "(&(objectCategory=person)(objectClass=user))" mail givenname uniqueidentifier sn > out.ldif` (You might need to modify the command depending on your system.)
- **Windows:** `ldifde -f out.ldif -s dc01.altostrat.com -v -t 636 -d "ou=Ireland,dc=altostrat,dc=com" -r "(&(objectCategory=person)(objectClass=user))" -p SubTree -l mail,givenname,uniqueidentifier,sn -a "cn=GCDS,ou=Users,dc=altostrat,dc=com" *PASSWORD*` (Replace *`PASSWORD`* with the password of the LDAP user set in GCDS.)

If the output (out.ldif) does not contain the **mail** attribute for an affected user, there's a problem with the LDAP infrastructure. It might be related to the permissions of the user that you're using to access the LDAP (for example, both OpenLDAP and Active Directory allow setting attribute-level permissions). Or the attribute might not be replicated to the Global Catalog, if you're using a Global Catalog port such as 3268 or 3269.

If the output does contain the **mail** attribute for an affected user, provide the following details to Google Workspace support:

- The **out.ldif** file
- A screenshot of the command prompt or terminal window where you ran the command  
	(Make sure to remove the password first.)
- The GCDS trace-level log

#### GCDS doesn't update the configuration file when you delete a users search query

**Description**: The issue is seen with Google Cloud Directory Sync (GCDS) version 5.0.22 when you complete the following steps:

1. In Configuration Manager, click **Google Domain** and then **Configuration Exclusion Rules**.
2. For **Users Search Query**, enter a user's search query and save the configuration file.
3. Delete the same query and save the configuration file.
4. Compare the configuration file in step 2 with the file in step 3.
	The configuration file is the same. The deleted query wasn't saved to the file.

**Workaround**: Open the configuration file and manually delete the setting.

## Simulations & syncs

#### Do I need a notification server to run a simulated sync?

To run a simulated synchronization, you need a server capable of sending mail. If you're running GCDS on a mail server machine, you can use the IP address 127.0.0.1 for your mail server. Otherwise, contact your mail administrator for the correct mail information.

#### Why isn't GCDS running a sync from the command line?

If you're using the command line to run a sync and the sync doesn't start, check whether you used the **\-o** or **\--oneinstance** argument in the command line.

If you use one of those arguments, GCDS creates a LOCK (.lock) file associated with the XML configuration file. And, if another LOCK file is found on the same server, GCDS won't run the sync to prevent multiple instances of GCDS running simultaneously.

If there's no other instance of GCDS running, check for another LOCK file on the server. Delete the file manually and try running the sync again.

#### My sync was incomplete. Could it be an API issue?

If your sync was incomplete, for example, the full membership of a group didn't sync, the Directory API could have an issue. To verify whether the issue relates to an API rather than the GCDS product, manually call the Directory API and review the results. To manually call the API, choose one of 2 options.

**Option 1: Use the API reference page**

1. Go to [Admin SDK API reference overview](https://developers.google.com/admin-sdk/reference-overview).
2. On the left, click **Directory API**, then, for **REST Resources**, go to the REST Resource you want to query.
3. On the right, click the method you want to try and click **Try it**.
	If the API reference page doesn't show **Try it**, go to Option 2: Use the OAuth 2.0 Playground.
4. Enter the admin credentials that you used to authorize GCDS.
	For details, go to [Define your Google domain settings](https://support.google.com/admin/users/set-up-your-sync-with-configuration-manager#googleapps).
5. Review the information to ensure that the API responded as expected.

**Option 2: Use the OAuth 2.0 Playground**

1. Open the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/).
2. Choose an option:
	- Select a scope from the list.
		- Copy a scope from the **Authorization scopes** list on the API reference page. Then, paste the scope in the **Input your own scopes** field.
3. Click **Authorize APIs**.
4. Enter the admin credentials that you used to authorize GCDS.
	For details, go to [Define your Google domain settings](https://support.google.com/admin/users/set-up-your-sync-with-configuration-manager#googleapps).
5. Click **Exchange authorization code for tokens**.
	If the process is successful, you're redirected to **Step 3: Configure request to API**.
6. Complete the requested information.
	**Tip**: You can find most of the information on the API method reference webpage.
7. Click **Send the request**.
8. Review the information to ensure that the API responded as expected.

#### GCDS doesn't correctly sync license after a user's primary email is changed

**Description**: The issue is seen with Google Cloud Directory Sync (GCDS). If you change a user's primary email on the LDAP server, the rename isn't taken into account when GCDS syncs the user's license. GCDS tries to add the license to the renamed user and you get a 412 error.

#### GCDS doesn't sync re-created users

**Description**: Google Cloud Directory Sync (GCDS) uses a unique identifier to link users between Google Workspace and your external directory. Microsoft Active Directory users have an ObjectGUID identifier, and Microsoft Azure Active Directory users have an Object ID.

If you re-create a user in your external directory, the new user gets an original ObjectGUID or Object ID identifier. But because the new user's email address is already linked to the deleted user in Workspace, the sync fails.

**Workaround**: If you plan to re-create a user with the same email address, save the user's ObjectGUID or Object ID in your external directory. Or, rename or delete the user's email address in Workspace so GCDS can link the new user account to the new user in your external directory.

## Errors

#### What causes EntityDoesNotExist/EntityExists errors or conflicts?

In your XML configuration file, set the **useDynamicMaxCacheLifetime** option. This option configures GCDS to cache data for a maximum of 8 days, and clear the cache more frequently in small-to-medium data sets to reduce the chance of cached data growing stale or conflicting with new data. The **useDynamicMaxCacheLifetime** option is automatic in configurations created with GCDS 3.2.1 and above.

**Note:** These errors usually occur when modifications are done directly in your Google domain. When using GCDS to sync, you should avoid making changes to your Google domain directly. Instead, make changes to users, groups, and other entities in your LDAP directory. Then, use GCDS to sync these changes to your Google domain.

#### Why does GCDS keep returning an error when the cache is turned off?

The issue might be caused by a configuration issue, such as an exclusion rule misconfiguration. This type of misconfiguration can be hidden by GCDS caching.

GCDS keeps a cache of data for your Google service (such as Google Workspace or Cloud Identity) for a maximum of 8 days. GCDS might clear the cache more frequently, depending on the cached data size. However, if the cache isn't cleared, you might not see your updates for up to 8 days.

For example, you sync your LDAP data and create a new group for your Google service (such as Google Workspace or Cloud Identity). You then create an exclusion rule to exclude that group from subsequent syncs. The exclusion rule is misconfigured and will fail. However, the subsequent sync calls on cached data and the group remains in your Google service. When you sync again with clear cache, the misconfiguration causes the group to be removed from your Google service.

To manually clear the cache:

- Run a sync from Configuration Manager and select the option to clear the cache when performing a sync.
- Run a sync from the command and use the argument **\-f** to force a flush of the cache.
- Modify the XML config file to set the maxCacheLifetime value to 0.

**Important**: Forcing a flush of cache can dramatically increase synchronization time.

## Users & groups

#### Why is GCDS trying to create Google users that already exist?

If you get the error **409: Entity already exists**, GCDS is trying to create Google users that already exist. If you don't see the error in subsequent syncs, it's likely that the GCDS cache was out-of-date and it's safe to ignore the error.

If the issue occurs every sync or every several days, the most likely reasons are:

- A Google user exclusion rule is too broad—the rule matches some Google users that also exist in the LDAP directory.
- A query is too narrow—the query doesn't match some Google users that also exist in the LDAP directory.

Both scenarios can cause GCDS to ignore Google users that already exist. If those users exist in the LDAP user search rule results, GCDS tries to create them in your Google Account.

To resolve the issue, adjust the exclusion rule or search query. Or, if you want GCDS to completely ignore the users in your LDAP directory, adjust your LDAP user search rule or create an LDAP user exclusion rule. For details, go to [Omit data with exclusion rules & queries](https://support.google.com/admin/users/omit-data-with-exclusion-rules-and-queries).

#### Why are some custom schema attributes not syncing?

Sometimes your custom schema attributes, particularly newly created ones, might not sync from your LDAP directory to your Google users. When this happens, the attribute fields for your Google users remain empty, even after a successful sync.

Possible causes include:

- The authorized user for the LDAP server, which is configured in Google Cloud Directory Sync (GCDS), doesn't have Read access to those specific attributes in your LDAP directory.
- If you use the Global Catalog server (port 3268 or 3269) and didn't check the **Replicate this attribute to the Global Catalog** box from the Active Directory Schema, your custom schema attributes won't be found on the Google Cloud server during the sync.

To make sure your custom schema attributes sync, try the following steps:

1. Work with your LDAP administrator to ensure that the user configured in GCDS for LDAP authentication has Read access to all the attributes that are failing to sync.
2. Using the same machine that's running GCDS, use an LDAP browser to connect to your LDAP server. When you connect, make sure to authenticate with the same user that GCDS uses. Find one of the affected users and check that you can view the values for the attributes that aren't syncing.
3. After you confirm that the permissions are correct, clear the GCDS cache and run a sync.

If your custom schema attributes still don't sync, gather your GCDS information and contact support. For details, go to [What GCDS information do I need before contacting support?](https://support.google.com/admin/users/what-gcds-information-do-i-need-before-contacting-support)

#### Why are some users not synced as group members?

To synchronize group members separately from the results of any user search rules, GCDS turns on INDEPENDENT\_GROUP\_SYNC by default. If you're using member-reference attributes for group synchronizations, GCDS tries to resolve the email address of every user in the LDAP directory, regardless of any user search rules.

To synchronize group members based on only the results of user search rules, remove INDEPENDENT\_GROUP\_SYNC from your configuration XML file. GCDS:

- Uses the results of the user search rules to resolve group membership
- Only syncs as group members those users included in your user sync
- Executes user search rules, even if you turn off user account sync in **General Settings**
	(However, the results don't sync to Google as users but as group members, if the eligible users also qualify as group members.)

Typically, this isn't how you want your sync to run, particularly if you're syncing shared contacts and have group members that are contacts. In this case, the contacts won't synchronize as group members.

#### Why are some users or groups being re-created with every sync?

This issue happens when the LDAP attribute configured as the Group Name Attribute doesn't contain a full email address. To resolve this issue, check your Group Search rules and make sure that GCDS uses a full email address for the group names. Use one of the following methods:

- Set the Group Name Attribute to a different LDAP attribute that specifies a full email address for each group, such as mail.
- Turn on **Replace domain names in LDAP email addresses** in the Google Domain Settings, so that your Group Name Attribute matches the Google-side group names.
- Add the domain name to the group name by specifying a Group Name Suffix in your Group Search Rule.

#### Groups with over 1,500 members in Active Directory aren't syncing correctly

Make sure you have selected **MS Active Directory** in the server type field of the **LDAP Configuration** section.

#### How do I use "Replace domain names in LDAP email addresses"?

This option (shown as SUPPRESS\_DOMAIN in the XML file) is used if the email addresses in the LDAP directory are in a different domain than your Google domain. When you turn it on, GCDS strips the domain part off all of the email addresses it reads.

Any processing is done without the domain name. If you use exclusion rules based on email addresses, you need to consider only the local part of the email address for the exclusion rule.

For example, if you have **Replace domain names in LDAP email addresses** turned off, and you're creating an Exact Match exclusion rule, enter **luka@example.com** as the user's email address to match. If you've turned on **Replace domain names in LDAP email addresses**, use **luka**. Trying to match **luka@example.com** won't work, because **@example.com** is stripped prior to the comparison.

#### Can I nest static & dynamic groups?

When provisioning groups using GCDS, you can't nest dynamic groups underneath static groups (or static groups underneath dynamic groups). GCDS requires static groups to be queried separately from dynamic groups; however all nested groups have to be a part of the same query.

Find a way to implement dynamic groups as static groups, possibly by automating a task that periodically queries every dynamic group to populate static groups in the directory. GCDS can then use the static groups (as created from the dynamic groups) for provisioning and not provision the dynamic group.

#### Why did I get unexpected results from my LDAP query?

Results for LDAP queries depend on Configuration Manager settings and the LDAP server. Use these troubleshooting tips if your LDAP search rule returns an unexpected result. Make sure:

- **The LDAP query is set up correctly in Configuration Manager** —When you set up a search rule, click **Test LDAP Query** to verify. For details, go to [Use LDAP search rules to synchronize data](https://support.google.com/admin/users/use-ldap-search-rules-to-synchronize-data).
- **Multiple queries don't contradict each other** —Check that you haven't set up a search or exclusion rule that changes the result of a query.
- **The authorized user for the LDAP server has sufficient permissions** —Make sure that the administrator used to authenticate the LDAP server can use the command line on the same server. Try the query on the LDAP server and verify the results.

#### Group could not be created error

You might encounter the error message **Group... could not be created**. **Message: Not Authorized to access this resource/api** in the GCDS logs.

To troubleshoot, check that the Active Directory (AD) attribute that contains the domain for user and group email addresses matches the domain that your super admin account uses.

#### GCDS deletes a group & creates a new one

The issue can happen with Google Cloud Directory Sync (GCDS) in 2 situations.

**Situation 1**: You rename a group email address in Microsoft Active Directory (AD) after the group synced to Google Workspace. Following a sync, GCDS deletes the current group and creates a new group with the new email address.

**Workaround 1**: Don't change the group email address in AD.

**Workaround 2**: Manually change the group email address in both AD and Google Workspace so that they match.

**Situation 2**: The issue happens when:

1. Your group email address contains special characters (such as!#$%&'\*+/=?^\_\`).
2. The group synced to Google Workspace using a GCDS version earlier than 5.0.20.
3. You upgrade GCDS to version 5.0.20 or later.
4. Following a sync, GCDS tries to delete the group and create it again using the special characters.

**Workaround 1**: Remove the special characters from the AD group email address.

**Workaround 2**: Add the special characters to the email address in Google Groups.

## Contacts & calendars

#### Why do I see duplicate contacts in my domain directory after syncing with GCDS?

This issue usually happens if you're syncing shared contacts and the search rules are built incorrectly.

There are 2 types of relevant objects that you can sync with GCDS:

- **User profiles** —Users in your Google domain with additional data such as a phone number or address. You can sync a profile only for a user that exists in your domain.
- **Shared contacts** —Contacts of external parties that users in your domain need to contact.

To resolve this issue, correct your shared contact search rules to exclude users in your own domain. On the next sync, GCDS attempts to delete the redundant contacts. You might need to adjust the shared contact deletion limit for that first sync.

#### Why don't some users see their main work location in Google Calendar?

In some circumstances, users don't see their main work location in Google Calendar when scheduling or arranging meetings.

If you see this issue, make sure that the location type and area attributes are set to "desk."

## Rules

#### Why is a search rule not finding anything?

If you're having problems with search results, check:

- The scope of the rule. You might need to set the scope to **Sub-tree**.
- The search rule that you're using is correct.
- The attributes that are used exist and are visible.
- Your LDAP query. Verify that the query on your LDAP server uses the admin username that's configured in GCDS.

For more details, go to [Use LDAP search rules to synchronize data](https://support.google.com/admin/users/use-ldap-search-rules-to-synchronize-data).

#### When creating an exception rule, why can't I see the OK button?

You might be using a font that is too large for the screen. The dialog box does not work with large or extra large fonts. Change your font size or edit your XML file directly.

#### Why does my LDAP user search rule return partial results?

If your search imports only 1,000 available users (or the default LDAP page size), the LDAP Host name setting in Configuration Manager might be set to a generic or forest root domain that issues referrals for objects in your base DN.

To fix this issue, update Configuration Manager so that the Host name setting matches the Base DN setting. Or, use a domain controller (for example, dc01.example.com) that holds the user account objects in the base DN.

## Related topic

[Google Workspace Known Issues](https://support.google.com/admin/support/troubleshooting/google-workspace-known-issues)

*Google, Google Workspace, and related marks and logos are trademarks of Google LLC. All other company and product names are trademarks of the companies with which they are associated.*