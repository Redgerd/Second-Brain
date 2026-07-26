## # History

SQL was **invented in the 1970s** based on the [[Relational Data Model]] It was initially known as the structured English query language (SEQUEL). The term was later shortened to SQL.

Oracle, formerly known as Relational Software, became the first vendor to offer a commercial SQL relational database management system.

> “History of SQL”
> 
> SQL -> Data Mart -> Materialized View -> BI Report -> Traditional OLAP -> BI Dashboard -> Modern OLAP -> dbt tables -> One Big/Wide/Super Table -> Semantic Layer -> Natural Language Queries

## # Different parts of an SQL-Statement

![[Pasted image 20260701004903.png]]

## # SQL Core Concepts

| Step | Topic                           | Subtopics                                             |
| ---- | ------------------------------- | ----------------------------------------------------- |
| 1    | SQL Fundamentals                | SELECT, WHERE, ORDER BY, DISTINCT, LIMIT              |
| 2    | Joins                           | INNER, LEFT, RIGHT, FULL, CROSS, SELF                 |
| 3    | Aggregations                    | GROUP BY, HAVING, COUNT, SUM, AVG, MIN, MAX           |
| 4    | [[Subqueries]]                  | Scalar, Correlated, EXISTS, IN                        |
| 5    | Common Table Expressions (CTEs) | Basic CTEs, Recursive CTEs                            |
| 6    | Window Functions                | ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD()     |
| 7    | [[Indexes]]                     | B+ Trees, Clustered vs Nonclustered, Covering Indexes |
| 8    | [[Transactions]]                | ACID Properties, COMMIT, ROLLBACK, SAVEPOINT          |
| 9    | [[Performance Optimization]]    | Query Tuning, Execution Plans, Indexing Strategies    |
| 10   | Advanced SQL                    | PIVOT/UNPIVOT, Dynamic SQL, Triggers                  |
## # Advanced SQL Extensions

| Topic | Subtopics |
|------|----------|
| Set Operations | UNION, UNION ALL, INTERSECT, EXCEPT |
| Date & Time Functions | DATEADD, DATEDIFF, DATE_TRUNC, EXTRACT |
| String Functions | CONCAT, SUBSTRING, REPLACE, TRIM, UPPER, LOWER |
| GROUP BY & HAVING | Aggregate Filtering, Multi-column Grouping |
| Recursive Queries | Hierarchical Queries, Recursive CTEs |
| Handling NULLs | IS NULL, IS NOT NULL, COALESCE, NULLIF |
| Constraints | PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, DEFAULT |
| Views | Standard Views, Materialized Views |
| Stored Procedures & Functions | User-defined Functions, Stored Procedures |
| Transaction Management | COMMIT, ROLLBACK, SAVEPOINT |
| Isolation Levels | READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE |
| Execution Plans | EXPLAIN, SHOWPLAN, Query Execution Analysis |
| Partitioning | Range, Hash, List Partitioning |
| Idempotency | Safe Re-execution, Duplicate Prevention |
| SQL vs NoSQL | Differences, Use Cases, Trade-offs |
## # SQL Interview Practice

| Category            | Example Questions                                                       |
| ------------------- | ----------------------------------------------------------------------- |
| Basic Queries       | Filtering, Sorting, DISTINCT                                            |
| Joins               | Customer Orders, Missing Records, Self Joins                            |
| Aggregations        | Sales by Department, Revenue Analysis, Grouped Metrics                  |
| Ranking             | Second Highest Salary, Nth Highest Salary, Top N per Group              |
| Duplicates          | Find Duplicates, Remove Duplicates, Keep Latest Record                  |
| Latest Record       | Latest Order per Customer, First Purchase, Most Recent Login            |
| Window Functions    | Running Totals, ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD()       |
| Consecutive Records | Consecutive Logins, Gap & Island Problems, Longest Streak               |
| Date Problems       | Monthly Revenue, Rolling 7-Day Average, Year-over-Year Growth           |
| String Problems     | Split Strings, Extract Substrings, Replace Characters                   |
| NULL Handling       | Replace NULLs, Count NULLs, Handle Missing Values                       |
| Subqueries          | [[EXISTS, NOT EXISTS, Correlated Subqueries]], [[Aggregate Comparison]] |
| Business Cases      | Customer Retention, Churn Analysis, Funnel Analysis, Repeat Customers   |
| Data Engineering    | Deduplication, Incremental Loads, MERGE, SCD Type 1 & Type 2            |
| Optimization        | Query Tuning, Execution Plans, Index Usage                              |
## # SQL System Design

| Topic | Subtopics |
|------|----------|
| Concurrency & Locking | Row Locks, Table Locks, Deadlocks, MVCC |
| Data Modeling | Normalization, Denormalization, Keys, Relationships |
| Data Warehousing | Fact Tables, Dimension Tables, Star Schema, Snowflake Schema |
| Data Loading / ETL | Bulk Inserts, COPY Commands, Import/Export, Staging Tables |
| Backup & Recovery | Full, Incremental, Differential, Point-in-Time Recovery |
| Replication | Master-Replica, Read Replicas, High Availability |
| Partitioning & Sharding | Horizontal Partitioning, Vertical Partitioning, Database Sharding |
| Stored Procedures Deep Dive | Procedures vs Functions, Error Handling (TRY/CATCH) |
## # Further Reading

- https://roadmap.sh/sql
- https://www.geeksforgeeks.org/blogs/sql-roadmap/
