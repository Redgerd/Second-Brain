---
title: "[[Data Lakehouse]]"
alias:
  - "Lakehouse Architecture"
---

A [[Data Lakehouse]] is an innovative data management architecture that seamlessly integrates the flexibility, cost-efficiency, and scalability of [[Data Lake]]s with the robust data management features and [[ACID Transactions]] typical of [[Data Warehouse]]s. It leverages [[[[Data Lake]] Table Format]] to facilitate Business Intelligence

## # Databricks Lakehouse Platform

The Databricks Lakehouse Platform merges the best aspects of [[Data Lake]]s and warehouses, offering the reliability, robust [[Data Governance]], and performance of warehouses alongside the openness and flexibility of lakes. This unified approach streamlines your data stack, reducing silos across data engineering, analytics, BI, data science, and machine learning. Built on open source and standards, it ensures maximum flexibility, with a common approach to data management, security, and governance that enhances efficiency and innovation.

### # Databricks Lakehouse Use-Cases

Let’s delve into some Delta Lake on Databricks examples, highlighting three key use cases for a [[Data Lakehouse]]:

- **Unified ML and Analytics:** Utilize Collaborative Notebooks (Notebooks) over operational/relational databases, bypassing the initial efforts typically required with a [[Data Warehouse]].
- **Handling semi or unstructured data:** The Lakehouse’s capacity for querying such data with distributed engines like Apache Spark, Presto, Trino, or Photon Engine is enhanced by features like security, high transparency, and governance.
- **Analytics on historical data:** Address the challenge of overwriting historical data in operational databases ([[Data Engineering Foundations/OLAP vs OLTP|OLTP]]). With Databricks, sync this data into the Lakehouse and utilize time-travel features for querying historical data.

- Schema-on-Read + Schema-on-Write hybrid
- ACID Table Modeling
- Incremental / Merge-based Modeling
- Unified Data Modeling (single source for BI + ML)
- Open Table Format Modeling
  - Delta Lake
  - Apache Iceberg
  - Apache Hudi
- Medallion Architecture (Bronze/Silver/Gold)
