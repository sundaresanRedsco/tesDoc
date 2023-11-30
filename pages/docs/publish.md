---
title: Publish
description:
---
## Publish  

User is able to publish the Project/Application. Each project has a seperate publish button.  

After configured all the required services for the project/app, it needs to be published. Publishing allows your app to start using the NXT Api matrix service in real-time. After an app is published, nxt generates the code that you can integrate with platform SDKs.

To navigates project publish in two ways.

From the side menu bar on click of the workspace menu it will redirects to the workspace orverview screen from the left section on click of it + icon in tree view it will display its project list. On click of the individual project it will display the project details screen which has publish button 

![Images](/images/f1.png)

And the same page has Go to Project button on click it will redirect to the project overview screen there also user will get the publish button to proceed.  

Project over screen has the field and values and the details are,

About: showcases about the project details which is given by the user while creating the project name. 

Published On: Project published date and time will be displayed here in a case of project is not published  date and time value will be empty.

Publish by: In indicates which user has published the project refers by there email id in a case of project is not published value will be empty.

Release notes:Input field  (Text area)- Its a mandatory field for publish button. 

Publish log: Published log history will be updated here. 

Developer base URL: URL will get auto generated after only publish and single click copy function to copy & paste.  

![Images](/images/developerbaseurl.png)

Keys:  Keys are unique to the Project it vaires from project to project. Keys get generated only after the publish in case of project is not published primary and sencond key fields values will be empty.

Download Keys button: on click of it will download the primary and secondary keys in a zip file.

Primary Keys & Secondary keys: These are keys has unique keys for the project it will be configured on the developer system to sychroize with the NXT api system. 
 
Publish Button: Each project has a seperate publish button.
Firstly to proceed publish it should have the created collections and is its operation and to do proceed relase notes field is mandatory.

when user tries to publish without added the collection will display a toast message as "Record not available to Publish".


![Images](/images/publishscreenempty.png)

![Images](/images/publisherrortoast.png)

After added the collection and its operation when user tries to publish without adding the release notes fields text area background will be highlighted with red colour box.

![Images](/images/emptypublish.png)

And lastly by adding the collections and relase notes for the project and on click of Publish button 
 an alert popup will appear, reqeust for confirmation to publish.

 ![Images](/images/publish1time.png)

![Images](/images/alertpublishpopup.png)

 In the popup on click of publish button project will get pusblished sucessfully.

![Images](/images/publishsuccesstoast.png)

After the sucessful publish: Publish screen non editable fields values will be auto populated for Published on, Published by, Developer base url, Primary keys and Secondary Keys. 

![Images](/images/publish1timesuccess.png)

## Published Log

Next to publish button we have publish log on click Published log  it will open the publish log slider screen displayed with auto populated activity history with the key elements of Published on with date and time, Publish by with user work email, release notes message and  Calender filter option to track the activity of specific duration.

![Images](/images/publish1timelog.png)

 Project Publish life-cycle supports the Incremental Publish feature, which is an Incremental Publish of an Project. An Incremental Publish will deploy only new operations that have been modified/added to the project since the last publish to this environment.

 Allow user to proceed the project publish by **" n "** number of times irrespective of modification to the collections & Operations.

Another project publish acitvity:

Same as pervious acivity by change in collections or porject adding new relase notes for the change and on click of Publish button an alert popup will appear, reqeust for confirmation to publish by proceed with publish button project will be published again.

![Images](/images/publish2time.png)

on click of Publish button  an alert popup will appear, reqeust for confirmation to publish.

![Images](/images/alertpublishpopup.png)

 In the popup on click of publish button project will get pusblished sucessfully.

![Images](/images/publishsuccesstoast.png)

Publish log acvitivty slider will be updated with new publish activity and its incremental irrespective of new publishes.

![Images](/images/publish2timelog.png)


