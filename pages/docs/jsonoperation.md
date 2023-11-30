## How to create JSON Operation?

From the saved collection list, on clicking on the JSON collection name, it will display the created JSON collection details screen.

The user can edit the JSON collection name, version number, and description fields. The type field and base URL field are not editable; only the user can recreate them.

Next to the collection tab, there will be a plus "**+**" icon. On clicking on it, a new tab will be opened to create the new operation. 



![Images](/images/slide600.png)




**New operation will be created under the  tree of Json collection name.**

The new operation screen consists of fields such as

Operation name: Textbox (The operation name should be unique to the project)

Security: Dropdown (has the security method of authenticated API users, which helps to run the application with a unique key for the session)

Taget URL: non-editable field (target URL value will be auto-populated from the created collection)

Route Name: Text box (to enter the named route on the target URL)

Description: Text Area (To provide background on the operation)

Method: Dropdown (To opt for the service method for the operation POST, GET, PUT, DELETE)

Request Input: It helps to enter the manual input values for the operation to check from the JSON method service response.

![Images](/images/2001.png) 
 
  
  ## Request input tab:
  
 Request input has two tabs: body and header, to pass the manual input to the service.

The Body and Header come in table format.

User input values to be entered in a table format initially will display an empty row. After entering the values, the next line will be auto-added dynamically, and it will display in a scroll view.


Response input tab field Body and Header table fields are:
   
Name: Textbox (To enter the key name)

Value: Textbox (to enter the value for the key name)

Datatype: dropdown (values are strings, dates, numbers, or booleans).

Scope: (Request, URL, Query)

Encode: checkbox (To enable and disable the value encoded.)

Description: Textbox (to provide details about the key name)

Enable the pass-through input header check box for the user to share the client request headers with the backend as they are.
  
On each row, a hover will show a delete icon in the description column, which allows the user to delete a specific row upon delete confirmation. 

![Images](/images/2000.png) 




  ## Response output tab:

Reply to the output tab to set the path for the respective key names.

On clicking Save & Fetch Response, the path-set action will perform the API response, status, and request input entered. The key value path will be placed automatically; external action is not required.

In case any modification is needed, we have allowed users to edit the repose table field values.

Response output table field values are:

Name: Textbox (to update the key name)

Path: Textbox (to update the path)

Scope Textbox (to update the scope)

Data Type: Textbox (To update the data type.)

Collection ID: Textbox (to set the collection ID)

Record ID: Textbox (to update the record ID)

Description: Textbox (to provide key notes)

Enable the pass-through input header check box for the user to share the client request headers with the backend as they are.
![Images](/images/slide1010.png)  
On each row, a hover will show a delete icon in the description column, which allows the user to delete a specific row upon delete confirmation.

The operation page has three buttons to perform actions, and the buttons are Cancel, Save, and Fetch Response.

![Images](/images/slide1000.png)
![Images](/images/slide1001.png)


On clicking the save button, the operation will be saved successfully.

![Images](/images/slide703.png)

And on clicking the Save & Fetch Response button, the respective JSON operation response will be derived from it. 

## Save & Fetch Response:

The user will get an operation response in a detailed view, which helps track and configure the service for the application.

Output response comes in two methods: response log and backlog.

A **Response Log** is the information or content that is sent back by a service after processing a request.

The response log tab will be subdivided into three tabs: payload and output.


## Response Log - Payload

 The payload log refers to the record content that is transmitted within a message, request, or response in the system or network. The payload is the actual data being sent; it includes headers, if added manually, metadata, or other control information. It is useful for various purposes, such as troubleshooting, auditing, analysis, or ensuring compliance with data protection regulations.

- Payload log interface

![Images](/images/slide1002.png)

## Response Log - Output

Service output response refers to the result or data returned by a service after it has processed a request. Service output response is the information or data provided by a service in response to a client's request. Plays a vital role in enabling communication and data exchange between different software systems.

- Output log interface

![Images](/images/slide1003.png)

  
   
## Backend log

Backend logs are an essential tool for monitoring and maintaining the health, performance, and security of software applications. They provide a detailed record of what happens within the backend of a system, which is crucial for identifying and addressing any issues that may arise during operation.

Backlog delivers the response in four segments: frontend request, integration service request, integration service response, and output response.

## Frontend Request

User's actions to communicate with the backend server, retrieve data, submit data, or perform other operations. The backend server then processes these requests and sends back an appropriate response, which is subsequently handled by the frontend to update the UI or perform other actions as necessary.

- Frontend Request log interface

![Images](/images/slide1004.png)

## Integration Service Request

An integration service request is a formalized request submitted by an organization or entity to initiate the process of integrating one application or service with another. It serves as a structured means of communicating integration requirements and details to the teams responsible for managing the integration.

- Integration Service Request log interface

![Images](/images/slide1005.png)


   ### Integration service Response

   An integration service response is a formalized reply or acknowledgment given by the team responsible for managing the integration in response to an integration service request. It is a structured means of communicating the outcome related to the integration process.

   - Integration Service Request log interface

![Images](/images/slide1005.png)


   ### Output Response

    Output response is the result or data returned by the service in response to a specific input request and it provides information for the particular action or inquiry.

    - Output Response log interface

    ![Images](/images/slide1006.png)

 ### Delete Json Operation

The user is able to delete the created JSON operation. On clicking on a specific collection name in a tree view, it will display the existing operation list. On hover, it will display the delete icon on the specific operation name row.   

![Images](/images/2002.png) 

 On clicking the delete icon, it will display the delete confirmation popup. With a click of the Yes button, the operation will be permanently removed.

![Images](/images/2003.png) 

