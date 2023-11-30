---
title: Composite Services
description:
---

# {% $markdoc.frontmatter.title %}


A composite service is a type of service in the context of service-oriented architecture (SOA) and web services. In SOA, services are designed to perform specific functions or tasks and are typically accessed over a network, such as the internet. A composite service, on the other hand, is a higher-level service that is created by combining a multiple operations (SOAP and JSON) to achieve a more complex business process or functionality

![Images](/images/Compositehome.png)

The composite service tab has the following fields: service name, operation execution type, operation security level, description, and operation mapping.

**Service Name**: Enter the service name

![Images](/images/Compositeservice.png)

**Operation execution type**: Select the operation execution type from the drop-down 

Operation Execution type has the following field: Composite Sequential

Composite Sequential is a process that could indeed refer to a system where a series of collections take place and each of these collections is composed of multiple operations in SOAP and JSON collections

**Operation Execution Type --> Composite Sequential**


![Images](/images/Compositeoper.png)

**Operation security level**: Select the operation security level from the drop-down 

Operation Security Level has the following field: Version 1.0

The level of operation security is in the first version(1.0) of a product in the context of software development or product release.

**Operation Security Level --> 1.0**

![Images](/images/Compositesecurity.png)

**Description Section**: To provide a brief description of the respective services and their features. In the description section, the character limit is 300 words.

![Images](/images/Compositedesc.png)

**Operation Mapping**: This section serves as a central repository for mapping diverse collections, encompassing operations that have already been mapped. Notably, examples like JSON and SOAP operations are organized under the dedicated category of operation mapping within this section. Users can easily locate and manage these mappings, gaining a comprehensive overview of the relationships within various collections. This structured approach enhances the user's ability to navigate and understand the connections between different operations, facilitating efficient data management and analysis. 
- SOAP Operations
![Images](/images/CompositeSOAP.png)

- JSON Operations
![Images](/images/CompositeJSON.png)

This feature allows users to intuitively arrange operations within a mapping container by employing a drag-and-drop mechanism. Additionally, the functionality extends to seamlessly incorporating existing operations into the mapping container by clicking the ``Add`` button. This user-friendly approach enhances the flexibility and ease of managing operations, providing a convenient and efficient way to structure and augment mappings within the designated container.
- Drag-and-Drop Mechanism
![Images](/images/Compositedrag.png)

- Add Option
![Images](/images/CompositeAdd.png)

**Save and fetch Response**

The user will get an operation response in a detailed view, which helps track and configure the service for the application.

Output response comes in two methods: response log and backlog.

A response log is the information or content that is sent back by a service after processing a request.

The response log tab will be subdivided into two tabs: payload and output.

![Images](/images/Compositesavefetch.png)

**Response Log - Payload**

The payload log refers to the record content that is transmitted within a message, request, or response in the system or network. The payload is the actual data being sent and includes headers, if manually added, metadata, or other control information. It is useful for various purposes, such as troubleshooting, auditing, analysis, or ensuring compliance with data protection regulations.

![Images](/images/CompositeResponse.png)

**Response log - Output**

Service output response refers to the result or data returned by a service after it has processed a request. Service output response is the information or data provided by a service in response to a client's request. Plays a vital role in enabling communication and data exchange between different software systems.

![Images](/images/Compositeoutput.png)

**Backend Log**

Backend logs are an essential tool for monitoring and maintaining the health, performance, and security of software applications. They provide a detailed record of what happens within the backend of a system, which is crucial for identifying and addressing any issues that may arise during operation

Output response is the result or data returned by the service in response to a specific input request and it provides information for the particular action or inquiry.

![Images](/images/Compositebackend.png)

On Clicking ``Save Operation`` , the operation will be saved

![Images](/images/Compositesaveoper.png)