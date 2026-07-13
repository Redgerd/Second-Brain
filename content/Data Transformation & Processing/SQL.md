## # History

SQL was **invented in the 1970s** based on the [[Relational Data Model]] It was initially known as the structured English query language (SEQUEL). The term was later shortened to SQL.

Oracle, formerly known as Relational Software, became the first vendor to offer a commercial SQL relational database management system.

> “History of SQL”
> 
> SQL -> Data Mart -> Materialized View -> BI Report -> Traditional OLAP -> BI Dashboard -> Modern OLAP -> dbt tables -> One Big/Wide/Super Table -> Semantic Layer -> Natural Language Queries

## # Different parts of an SQL-Statement

![[Pasted image 20260701004903.png]]
## # SQL Core Concept

| Step | Topic                               | Subtopics                                                    |
| ---- | ----------------------------------- | ------------------------------------------------------------ |
| 1    | [[Indexes]]                         | Query Optimization, Best Practices                           |
| 2    | [[Transactions]]                    | ACID Concepts, Transaction Control                           |
| 3    | [[Data Integrity and Security]]     | Integrity Constraints, Access Control                        |
| 5    | [[Stored Procedures and Functions]] | Reusability, Performance Benefits                            |
| 6    | [[Performance Optimization]]        | Query Tuning, Indexing Strategies                            |
| 7    | [[Advanced SQL]]                    | Window Functions, CTEs, Pivot/Unpivot, Dynamic SQL, Triggers |
## # Advanced SQL Extensions

| Topic | Subtopics |
|------|----------|
| Set Operations | UNION, UNION ALL, INTERSECT, EXCEPT |
| GROUP BY and HAVING | GROUP BY clauses, HAVING filtering |
| Recursive Queries | Hierarchical queries, Recursive CTEs |
| Handling NULLs | IS NULL, IS NOT NULL, COALESCE, NULLIF |
| Transaction Management | COMMIT, ROLLBACK, SAVEPOINT |
| Isolation Levels | READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE |
| SQL vs NoSQL | Differences, Use cases, Trade-offs |
| Execution Plans | EXPLAIN, SHOWPLAN, Query execution analysis |
| Idempotency | Safe re-execution of queries, duplicate prevention |
| Partitioning | Horizontal partitioning, Range/List partitioning |
## # SQL System Design

| Topic | Subtopics |
|------|----------|
| Concurrency & Locking | Locks (row-level, table-level), Deadlocks, MVCC (Multi-Version Concurrency Control) |
| Data Loading / ETL Basics | Bulk insert, COPY commands, CSV/JSON imports, Exporting data |
| Backup & Recovery | Database backups, Restore strategies, Point-in-time recovery |
| Stored Procedures Deep Dive | Functions vs procedures differences, Error handling in SQL (TRY/CATCH) |
## # Further Reading

- https://roadmap.sh/sql
- https://www.geeksforgeeks.org/blogs/sql-roadmap/
