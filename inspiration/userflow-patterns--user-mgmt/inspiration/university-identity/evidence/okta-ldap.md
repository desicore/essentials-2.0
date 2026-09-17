This table lists the features that are available with an Okta LDAP integration.

| Feature | Supported | Description |
| --- | --- | --- |
| Delegated Authentication | Yes | Ability to authenticate user credentials through LDAP for access into Okta. |
| Just-in-Time (JIT) Authentication | Yes | Ability to authenticate user credentials through LDAP for access into Okta, and update group memberships and profile information before access.  The username format is used to authenticate LDAP sourced users. If you use a custom expression to format the Okta username, the last selected and saved non-custom username is used for authentication. The UID is the default, non-custom username. |
| Instance-level JIT and Delegated Authentication | No | Ability to delegate authentication on a per LDAP-instance level to support more granular authentication scenarios. |
| User import from Directory | Yes | Ability to import user and group details from the directory into Okta. |
| Import filter - OU/container selection | No | Ability to filter users and groups based by specifying an LDAP filter and selecting OUs. |
| Provision to Directory | Yes | Ability to provision user details to LDAP. |
| Self-Service PW Reset | Yes | Ability to reset LDAP password in Okta. For more information, see [Manage users](https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-people.htm) and [About self-service registration](https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-self-service.htm). |
| Group Password Policy | Yes | Group Password Policy functionality lets you define password policies and associated rules to enforce password settings at the group level. This functionality is available on these directories: Active Directory Lightweight Directory Services (AD LDS), eDirectory, IBM, OpenDJ, OpenLDAP, Oracle Directory Server Enterprise Edition (ODSEE), and Oracle Unified Directory (OUD). See [Supported LDAP directories](https://help.okta.com/en-us/Content/Topics/Directory/ldap-agent-supported-directories.htm). |

Password reset

This table lists the password reset options that are available with Okta LDAP integrations.

| Feature | Supported | Description |
| --- | --- | --- |
| Self-service recovery options: Email | Yes | Ability to reset the password through email. For more information, see Factor Type Overview and Configuration in [Multifactor Authentication (MFA)](https://help.okta.com/en-us/Content/Topics/security/mfa/mfa-home.htm). |
| Self-service recovery options: SMS | Yes | Ability to reset the password through a code sent through text message. For more information, see Enable end user self-service password reset using SMS in [Manage users](https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-people.htm). |
| Self-service recovery options: Voice Call | No | Ability to reset the password through a code sent through voice call. |
| Reset, Unlock recovery emails are valid for < X > minutes | No | Ability to configure how long recovery email tokens are valid for. |
| Additional self-service recovery option: Secret questions | No | Ability to reset the password through security questions. |

Infrastructure

This table lists the infrastructure features that are available with Okta LDAP integrations.

| Feature | Supported | Description |
| --- | --- | --- |
| Multiple agent polling threads | Yes | Ability to increase polling threads on the agent. Increases how many requests the agent can handle per second per thread. See [Change the number of Okta LDAP agent threads](https://help.okta.com/en-us/Content/Topics/Directory/ldap-agent-threads.htm). |