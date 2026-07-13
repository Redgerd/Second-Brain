An index is a structure within SQL that is used to quickly locate specific rows within a table. It can be useful to imaging an index at the back of a textbook when thinking about SQL indexes. They both serve the same purpose – to find specific information quickly.

> Without an index, the database may perform a **Table Scan**, reading every row.
> With an index, the database can perform an **Index Seek**, reading only the required rows.

## # General Structure

An index is defined on one or more columns, called key columns. The key columns (also referred to as the index key) can be likened to the terms listed in a book index. They are the values that the index will be used to search for. As with the index found at the back of a text book (see figure 1), the index is sorted by the key columns.

![[Pasted image 20260701005022.png]]

> If an index is created with more than one key column, it is known as a **composite index.**

### # B - Tree Structure

Most relational database systems (including SQL Server, MySQL InnoDB, PostgreSQL, and Oracle) implement indexes using a **B+ Tree**, which is a type of balanced tree optimized for disk storage.

The general structure of an index is that of a balanced tree (b-tree).

- The index will have a single **root page**
- Zero or more **Intermediate pages**
- Finally Leaf pages

![[Pasted image 20260701005121.png]]

### # Pages

lets take the example of **SQL server**. SQL Server stores data in **8 KB pages**.
Each page has:

- Page Header
- Data Records
- Page Footer
  Every page is uniquely identified by:
- File ID
- Page Number

### # Leaf Level

The **leaf level** is the lowest level of the B+ Tree.
It contains one entry for every indexed row.
The entries are stored in **logical sorted order** according to the index key.
For a **clustered index**, the leaf level contains the **actual table rows**.
For a **nonclustered index**, the leaf level contains the **index key plus a pointer** to the actual data row.

### # Non-Leaf Levels

The Root and Intermediate pages contain only navigation information.
Each entry contains:

- Lowest key value in a child page
- Pointer to that child page

```
Root

A-M → Page 10

N-Z → Page 11
```

> The database repeatedly follows these pointers until it reaches the appropriate leaf page. \*\*This process requires very few page reads++.

### # Index Depth

The number of levels in a B+ Tree is called its depth.
A smaller depth is generally better because fewer pages need to be read.
Typical **SQL Server indexes** have a depth of only **3–5 levels**, even for millions of row

## # Clustered, Heap and Nonclustered Index

There are two main types of indexes in SQL Server, the clustered index and the nonclustered index'

#### # Clustered indexes

Clustered indexes define the logical order of the table.
The leaf level of the clustered index has the **actual data pages** of the table.

```
Clustered Index

EmployeeID

↓

Actual Table Rows
```

Since the data itself is stored in this order, a table can have **only one clustered index**.

#### # Heap

A table without a clustered index is called a **Heap**.
Rows are stored wherever space is available.
There is no defined ordering.
Searching a heap usually requires a Table Scan unless a nonclustered index exists.

#### # Nonclustered indexes

Nonclustered indexes are separate from the table.
Its leaf level contains:

- Index Key
- Pointer to the actual data row

```
EmployeeName

Ali

↓

Pointer

↓

Actual Employee Row
```

Unlike clustered indexes, multiple nonclustered indexes can exist on the same table.

That pointer is either the clustered index key in the cases where the base table has a clustered index or the RID (Row Identifier) in the cases where the table is a heap. Either way, the each row of a nonclustered index has a reference to the complete data row.

| Clustered Index                        | Nonclustered Index                   |
| -------------------------------------- | ------------------------------------ |
| Defines the logical order of the table | Separate index structure             |
| Leaf level stores actual table rows    | Leaf level stores pointers to rows   |
| Only one per table                     | Multiple allowed                     |
| Faster range queries                   | Faster lookups on indexed columns    |
| Usually the Primary Key                | Used for frequently searched columns |

##### Row Locator

A **Row Locator** is the information stored in the **leaf level of a nonclustered index** that tells SQL Server where the complete data row is located.

> **Important:** A **row locator exists only in nonclustered indexes.** Since a clustered index already stores the actual table rows at its leaf level, it does **not** need a row locator.

The type of row locator depends on whether the base table is a **clustered table** or a **heap**.

##### # Row Locator in a Clustered Table

If the table has a **clustered index**, the row locator stored in the nonclustered index is the **Clustered Index Key**.

```
Clustered Index (Actual Data)

EmployeeID
1
2
3
4
```

```
Nonclustered Index

EmployeeName     Row Locator
------------     -----------
Ali              1
Ahmed            2
John             4
```

When searching for **Ali**, SQL Server:

1. Uses the nonclustered index to find **Ali**.
2. Reads the **clustered index key (EmployeeID = 1)**.
3. Navigates the clustered index to retrieve the complete row.

This process is sometimes called a **Key Lookup**.

##### # Row Locator in a Heap

If the table **does not have a clustered index** (i.e., it is a **Heap**), SQL Server stores a **RID (Row Identifier)** as the row locator.

A **RID** uniquely identifies the physical location of a row in the heap.

A RID consists of:

- **File ID**
- **Page Number**
- **Slot Number**

```
Nonclustered Index

EmployeeName      Row Locator (RID)
------------      -----------------
Ali               (1:245:3)
Ahmed             (1:318:6)
John              (1:402:1)
```

When SQL Server finds **Ali** in the nonclustered index, it uses the RID to directly locate the row in the heap.
### More on Indexes (Later)
- Index Scanning (Index Seek vs Index Scan vs Table Scan)
- Execution Plan (How the query optimizer estimates rows and chooses execution plans)
- SARGability (Writing queries that allow indexes to be used efficiently)