### # Delete Table
The `DELETE` statement removes rows from a table. You specify which table to remove data from and can use a `WHERE` clause to filter which rows should be deleted based on specific conditions. If no `WHERE` clause is provided, all rows in the table will be deleted.
### # Truncate Table
Truncate Table is a command in SQL used to remove all rows from a table. It's like resetting the table to its initial, empty state. The table structure itself (columns, data types, constraints) remains intact. `TRUNCATE TABLE` is generally faster than `DELETE` because it deallocates the data pages used by the table, rather than individually logging each row deletion.
### # Drop Table

The `DROP TABLE` statement removes a table and its data entirely from a database. It's a permanent operation; once a table is dropped, its structure and all the data it contained are lost unless you have a backup. This command should be used with caution, as it can have significant consequences for your database.

| Feature            | DELETE                                      | TRUNCATE TABLE                              | DROP TABLE                                      |
|--------------------|---------------------------------------------|---------------------------------------------|-------------------------------------------------|
| Purpose            | Removes specific or all rows                | Removes all rows                            | Deletes entire table                            |
| WHERE Clause       | Supported                                  | Not supported                               | Not applicable                                  |
| Table Structure    | Remains intact                              | Remains intact                              | Completely removed                              |
| Data Removal       | Row-by-row                                  | All rows at once                            | Table + data removed                            |
| Speed              | Slower (logs each row deletion)             | Faster (deallocates data pages)             | Very fast                                       |
| Logging            | Fully logged                                | Minimal logging                             | Minimal logging                                 |
| Rollback           | Possible (in transactions)                  | DB-dependent                                | Not possible in most cases                      |
| Auto Increment     | Not reset                                   | Reset (in most DBs)                         | Removed with table                              |
| Triggers           | Fires triggers                              | Does NOT fire triggers                      | Not applicable                                  |
| Space Handling     | Space not fully released immediately        | Frees table data space                      | Frees table + structure completely              |
| Use Case           | Delete specific rows                        | Quickly clear entire table                  | Remove table permanently                        |
### # Alter Table

The `ALTER TABLE` statement in SQL is used to modify the structure of an existing table. This includes adding, dropping, or modifying columns, changing the data type of a column, setting default values, and adding or dropping primary or foreign keys.
