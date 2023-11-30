 
 ## What is Soap Collection?

  SOAP is widely used in enterprise-level applications, especially in situations where strict messaging standards and reliable communication are crucial. It has been a fundamental protocol for web services and integration between different software systems. SOAP provides WSDL to list the operations it provides.
 
 # How to create a Soap Collection?


The project overview screen on the top right corner has the New button to create collections.

  ![Images](/images/collectionmenu.png)

When **Selecting SOAP** option as the communication protocol, the collection screen offers various fields for configuration. These fields typically include Collection Name *(a Textbox, 30-character limit), Type *(a Dropdown), Version *(a Dropdown), Enter Base URL *(a Textbox), Enter WSDL URL *(a Textbox), Add Global Header Key *(a Table), Encode *(a Checkbox), and Description *(a Text Area, 300-character limit)

 

On clicking the Save or Save & Add Operations button, the soap collection gets created.

  ![Images](/images/slide300.png)
  ![Images](/images/slide301.png)
  
 
    On clicking the save button, a soap collection gets created with a confirmation toast message.

  ![Images](/images/slide302.png)

  If a user attempts to create a collections with a name that already exists, an error will be displayed: 

**Collection name is already used. Please use different name**.

![Images](/images/Collectionlimit.png)
 
 When you click the 'Save & Add Operations' button, you will be redirected to the SOAP operation slider screen to configure the operation.


![Images](/images/slide303.png)

### Delete SOAP Collection

The user can delete the created SOAP collection. On clicking a specific collection name in a tree view, it will display the existing operation list. On hovering, it will display the delete icon on the specific collection name row.

![Images](/images/soapdelete.png)
On click of the delete icon, it will display the delete confirmation popup. On click of the Yes button, the operation will be permanently removed.

![Images](/images/wpjsdeletepopup.png)
   
