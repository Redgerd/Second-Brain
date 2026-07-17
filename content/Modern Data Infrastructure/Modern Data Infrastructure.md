This section tracks the technological and philosophical shifts in how data is stored and managed.

![[Pasted image 20260511222240.png]]

## # 1980s - 1990s: The Era of Centralization

Driven by leaders like Bill Inmon and Ralph Kimball ([[Inmon vs. Kimball – Data Warehousing Approaches]]), organizations focused on highly structured, relational data for business intelligence.

- [[Data Warehouse]]
- Data Mart
- **Paradigm:** ETL (Extract, Transform, Load)

## # 2000s - 2010s: The Big Data Explosion

The rise of Hadoop and cloud storage. Companies began storing massive amounts of raw, unstructured data on low-cost hardware.

- [[Data Lake]]
- **Paradigm:** ELT (Extract, Load, Transform) & Schema-on-Read

## # 2020s: The Convergence

Technology like Delta Lake and Apache Iceberg allowed for "Warehouse" features (ACID transactions, governance) to run directly on top of "Lake" storage.

- [[Data Lakehouse]]
- **Key Tech:** Open Table Formats (Delta, Iceberg, Hudi)

## # Present & Beyond: The Paradigm Shift

A move from purely technical storage solutions toward architectural frameworks that manage complexity and organizational ownership.

- Data Fabric — Using metadata to automate data integration.
- Data Mesh — Moving to a decentralized, domain-driven ownership model where data is treated as a product.

## # Modern Data Architecture (Leaving this for later)

The evolution of data infrastructure continues beyond storage technologies into the architectural patterns and design principles that power modern data platforms. Today's systems are designed not only to store data, but also to process it efficiently, govern it effectively, and make it accessible at scale.

The following topics explore the architectures, patterns, and concepts that define modern data engineering.

| Category                 | Topics                                                            |
| ------------------------ | ----------------------------------------------------------------- |
| Architecture Patterns    | Lambda Architecture vs Kappa Architecture, Medallion Architecture |
| Analytics Architecture   | Metrics Layer vs Semantic Warehouse vs Data Virtualization        |
| Data Modeling            | Data Modeling vs Dimensional Modeling                             |
| Business Metrics         | Metrics, Key Performance Indicator (KPI)                          |
| Performance Optimization | Push-Downs vs Rollup                                              |
| Data Governance          | Data Contracts                                                    |
