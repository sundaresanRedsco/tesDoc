---
title: Collections
description: Attributes are used to pass data to tags in Markdoc.
---

# {% $markdoc.frontmatter.title %}

Collections are the fundamental concepts of the API matrix.


Collections are created under the chain flow of **Workspace -> Project - > Collection**


Collection is defined to create the Soap and Json methods.

 # How to Create a Collection?

In the project overview screen on the top right corner, there is a New button to create collections.

![Images](/images/slide3.png)

Clicking the New icon will redirect you to a slider screen for selecting the collection type, where you can create SOAP and JSON methods.  

 ![Images](/images/collectiondropdownjsonsoap.png)

Irrespective of the selection of soap or Json method selection collection type, fields get varies.


When the **selection type is Soap** create collection type slider screen consists of:


  Collection name: Textbox (Collection name should be unique to the project,30-character limit)
Type: Dropdown (Has the field values of Soap and Json to select)
version: Dropdown (To choose the version number)
  Enter Base URL - Textbox (To enter the service URL,)
  Enter WSDL URL - Textbox (To enter the service URL, use wsdl.)
  Add global header key - Table (To set the custom header and bearer token from the table)
Encode: checkbox (To enable and disable the value encode)
Description: Text Area (To provide a briefing about the collection,300-character limit)


Featured to submit  save and Save & Add Operations button to add Soap collection.

  ![Images](/images/slide100.png)

  When the **selection type is Json**  create collection type slider screen consists of;

  When the **selection type is Json**  create collection type slider screen consists of:


  Collection name: Textbox
Type: Dropdown (Has the field values of Soap and Json to select)
version: Dropdown (To choose the version number)
 Enter Base URL - Textbox (To enter the service URL,)
 Add global header key - Table (To set the custom header and bearer token from the table)
Encode: checkbox (To enable and disable the value encode)
Description: Text Area (To provide a briefing about the collection)


Featured to submit with save button to add Json collection.
 
 ![Images](/images/slide101.png)
 
  **Global Header Key**: It will configure a header parameter that will be included in the headers of all requests made within that specific environment.
 
  ![Images](/images/globalheader.png)

  Global Header key has the following fields: Key, Value, Type, Encode and Description

   **Key** :  It refers to the name of a header in an HTTP request or response.

  **Value**: It refers to the information associated with a specific header key in an HTTP request or response

  **Type**: The type has two options, Custom_header and Bearer_Token. Custom_Header represents the key and Bearer_Token represents the value.

  **Encode** : It refers to the way special characters in the header values are represented.'

  **Description**: It is an optional field where you can provide additional information or comments about a specific header in your HTTP request.

  ![Images](/images/globalheaderr.png)
 
 If a user attempts to create a collections with a name that already exists, an error will be displayed: 

**Collection name is already used. Please use different name**.

![Images](/images/Collectionlimit.png)




 

