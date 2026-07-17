A Data Warehouse (DWH), also known as an Enterprise Data Warehouse (EDW), represents the traditional approach to data collection, **a practice established over 30 years ago**. The DWH is crucial for integrating data from numerous sources, serving as **a single source of truth**, and managing data through processes such as cleaning, historical tracking, and data consolidation. It facilitates enhanced executive insight into corporate performance through management dashboards, reports, or ad-hoc analyses.

Data Warehouses are instrumental in analyzing various types of business data. Their importance is particularly evident when analytic demands clash with the performance of operational databases. Running complex queries on a database necessitates a temporary fixed state, which can disrupt transactional databases. In such scenarios, a data warehouse is utilized to perform the analytics, allowing the transactional database to continue handling transactions efficiently.

Another key characteristic of DWHs is their capability to analyze data from diverse origins (for example, combining Google Analytics with CRM data). This is possible due to the data being heavily transformed and structured through the ETL (Extract, Transform, Load) process.
## # Definition of a Data Warehouse

There are two definitions of a data warehouse.

> A data warehouse is a subject-oriented, integrated, time-variant and non-volatile collection of data in support of management’s decision making process. **Bill Inmon, 1990** (sources: NUS Computing, and later in, 1992 the book _Building the Data Warehouse_) ^e6fbe3

> A data warehouse is a copy of transaction data specifically structured for query and analysis. **Ralph Kimball, 1996** (_The Data Warehouse Toolkit_, now in its 3rd edition, 2013)

Find more on [[Inmon vs. Kimball – Data Warehousing Approaches]]

# # Classical Architecture of Data Warehouse

This is the classical data warehouse architecture goes from `Staging -> Cleansing -> Core -> Marts`

![[Pasted image 20260718030648.png]]

## # Further Reads

- [[Inmon vs. Kimball – Data Warehousing Approaches]]
- Architectures:
  - [[Data Lake]]
  - [[Data Lakehouse]]
