A **data vault** is a data modeling design pattern used to build a [[Data Warehouse]] for enterprise-scale analytics. The data vault has three types of entities: **hubs,** **links,** and **satellites.**

**Hubs** represent core business concepts, **links** represent relationships between hubs, and **satellites** store information about hubs and relationships between them.

It is especially suited for the **Silver layer** in the [[Medallion Architecture]] in the [[[[Data Lakehouse]]]] paradigm, where raw data is transformed into structured, business-ready models. The data vault is a data model that is well-suited to organizations that are adopting the 

![[Pasted image 20260611212440.png]]

## # Features

Data Vault separates data into small, flexible components to avoid breaking the model when new data sources or changes are introduced. It focuses on **capturing raw data as-is** and preserving full history. Recently, there has been a significant shift towards using Data Vaults as governed [[Data Lake]]s. This shift addresses the key challenges we’ve identified in Data Warehousing:

- Adapting to changing business environments
- Handling massive data sets
- Reducing the complexities of [[Data Warehouse]] design
- Enhancing accessibility for business users by modeling close to the business domain
- Allowing seamless integration of new data sources without affecting the existing architecture

### # Layers

- Lanzing Zone (LZN)
- Raw Data Vault (RDV)
- Business Data Vault (BDV)
- Universal Data Model (UDM)

### # Raw vs. Business Vault

Raw Vault is the first layer where data is loaded from source systems, following strict Data Vault modeling principles:

- It maintains full **history** and **auditability** of source data
- Data is stored in its original form without business transformations
- Uses Hubs (unique business keys), Links (relationships), and Satellites (descriptive attributes)
- Focuses on capturing and preserving source data exactly as received

Business Vault serves as a transformation layer that:

- Can be a **Logical Data Model**, not physical database objects
- Contains derived business rules and calculations
- Implements data quality rules and business definitions
- May combine data from multiple Raw Vault entities
- Creates business-friendly views and structures
- Can include Point-in-Time (PIT) and Bridge tables for easier querying
- Sometimes implements slowly changing dimensions (SCD) logic

## # Data Vault 2.0?

Data Vault 2.0 is an **enhanced and standardized version of the original Data Vault modeling approach** designed for modern data engineering.

It keeps the same core structure—**Hubs, Links, and Satellites**—but adds **clear implementation rules, performance improvements, and support for modern platforms** like cloud [[Data Warehouse]]s and distributed systems.

## # Difference between 1.0 and 2.0

Data Vault 1.0, introduced by Dan Linstedt in the early 2000s, established the core principles:

- Hub, Link, and Satellite structure
- Business keys in Hubs
- Relationships captured in Links
- Descriptive data in Satellites
- Focus on historical tracking and auditability

Data Vault 2.0, released around 2013, built upon 1.0 by adding:

- Integration with big data platforms and NoSQL databases
- Support for unstructured and semi-structured data
- Advanced **hash key** implementation for performance
- More emphasis on parallel loading and scalability
- Incorporation of virtualization concepts
- Methodologies for handling real-time data streams
- Introduction of point-in-time and bridge tables as first-class citizens
- More formal governance and documentation requirements

## # Differences

### # [[Dimensional Modeling]] vs. Data Vault

![](https://www.ssp.sh/brain/img_Data%20Vault_1763285905456.webp)
