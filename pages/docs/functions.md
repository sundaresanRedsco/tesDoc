---
title: Permission
description: Functions let you extend Markdoc to run custom code.
---

# {% $markdoc.frontmatter.title %}

From the side menu bar on click of the permission menu option it will be redirected to the permission overview screen. 

You can view all your workspaces members invited by you and your team members to over all environment & its projects. Featured with to manage the members permission irrespective of worksapce and its project acess.enabled to audit logs check and download.

The Permission Interface has three tabs such as Overview, Roles, Users

## Overview

Overview interface is utilized to display information about member activites in terms of  workpace and its project invite and accept.

**Select workspace --> Select Project ---> Select Specific dates --> Click Apply**

![Images](/images/abc1.png)

Information displayed with a table view and its fields are Workspace, Project, Status, Email and Activity  - Enabled user to view and download the records. 

And also the page has a common terms refresh key button, workspace keyword search option, table has special Dropdown filter for workspace and its project, Calender filter option to view specific duration record, and to download all the logs. 
 

## Roles
Roles interface to view all the the users role available in the NXT  api matrix. The system consists of three roles Owner, Admin and Member.

- **Owner** - Owner user has the full access to the Workspace and it's Project to view all the workspace and project logs and data.
- **Admin** - Admin user has the full access to the Workspace and Project logs and data where the admin role is assigned to.
- **Member** - Member user can only create & modify projects in workspace, Create & modify collections in projects.

![Images](/images/permissionroles.png)

## Users

 The User Interface is used to view all the users role available in the system. The Owner and admin can manage  and monitor the members activity and their permissions. 

 ![Images](/images/permissionuser.png)

 

 From the left side workspace tree on click of the workpace name it wll be filtered on the user windows also the user can directly access te workspace dropown menu on click of the  workspace name respective project auto fetch on the project dropdown the choosing it and on click of filter button it will auto populate the information through which admin can review the active members of the workspace and its project.

 Result tab displayed in a format of,

 
 ![Images](/images/Z1a.jpg)



 Result will be displayed with a member email id and its workpace/project access and their role of it. 


![Images](/images/abc2.png)

## User Lists

User lists typically refer to collections of user profiles or accounts in our NXT API matrix. These lists can serve various purposes and are often used for organizational, management or communication reasons.

![Images](/images/permissionuserlist.png)

User Lists has the following fields : Name, Email, Role, Last Login and Actions

**Name**: It displays the respective names of users.

**Email**: It displays the respective email of users.

**Role**: It shows the user's respective roles as owner, admin and member.

**Last Login**: It displays the last date and time when a user is authenticated with a username and password. If the "-" icon is shown, it indicates that the user is currently active but has not yet logged in.

**Action**: This action is used to view the workspace and project created by the users.


By clicking the ``View`` button, it shows the workspace and project created by the users.
![Images](/images/permissionuserlistview.png)

![Images](/images/PermissionUserListt.png)

## Member permission removal

On hovering the result grid it will display with the cancel icon ** "X" ** on click of x icon it will populate the delete confirmation popup to remove the user permission  on click of "NO" button delete popup will get dismissed and by proceeding with "Yes" button member role will be removed for the project .

![Images](/images/abc3.png)

## Permission removed member acess

By proceed with permission removal member workspace/project access will get restricted depends on the removal.

Here after the member permission removal of the project, The user can login the NXT api matrix system can acess to access other projects and  the workspaces if the user tries to acess it from home recently visted workspace or recent activity on hover of the project name dispalay the message as Access Restricted on click of it user wont navigate it from the workspace tree view also the project will be removed to the specific user.

Access restriction in Recently visited workpspace interface:

![Images](/images/abc4.png)

Access restriction in Recent activity  interface:

![Images](/images/abc5.png)

Access in restriction in Workpspace menu interface:

![Images](/images/abc6.png)




