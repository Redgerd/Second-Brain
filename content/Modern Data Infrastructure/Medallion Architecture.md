The **_"databricks"_** medallion architecture divides the data (not really an architecture but more Approach or Pattern) with three data stages: bronze, silver, and gold.

![[Pasted image 20260611212612.png]]

- The **bronze** data stage stores the data in its original (raw) form from source systems. It uses Table Formats for storage, focuses on quick [[Change Data Capture]], and provides historical archiving and data lineage.
- The **silver** data stage contains cleaned and transformed data blended from the bronze stage. It applies “**just enough**” transformations, provides an “Enterprise view” of key business entities, and enables self-service analytics.
- The **gold** data stage implements the analytics model with consumption-ready, project-specific databases ([[Modern Data Infrastructure/Data Mart|Data Mart]]). It uses denormalized, **read-optimized** data models (metric views in case of databricks) and applies final transformations and data quality rules. The data model is usually a **Star Schema**, with Facts (transactional data) and Dimensions (descriptive attributes) typically defined and optimized at this layer.

Data flows through the layers from dirty to clean, normalized to denormalized, and granular to aggregated. The gold layer often represents the final stage of this transformation.

## # A little bit of history

The Medallion Architecture is an evolution of the **_"Classical Architecture of [[Data Warehouse]]"_** but optimized for [[Data Lake]]s (and Lakehouse)

![[Pasted image 20260611212945.png]]

## # Implementation (Databricks)

Databricks provides tools like Delta Live Tables (DLT) that allow users to build data pipelines with Bronze, Silver, and Gold tables using minimal code. These pipelines can be built on Apache Spark Structured Streaming for real-time data processing.
