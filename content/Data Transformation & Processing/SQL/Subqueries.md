A subquery in SQL is a query nested inside another SQL query. It allows complex filtering, aggregation and data manipulation by using the result of one query inside another. They are an essential tool when we need to perform operations like:

- Filter rows based on results from another query.
- Apply aggregate functions like SUM, COUNT, or AVG dynamically.
- Update data using values from other tables.
- Delete rows based on conditions returned by another query.
## # Types of Subquery Implementations

| Type | Returns | Typical Use Case |
|------|---------|------------------|
| Subquery in SELECT | Single value | Display calculated values alongside each row |
| Correlated Subquery in SELECT | Single value per row | Row-by-row calculations |
| Subquery in WHERE/HAVING (Single Value) | One value | Compare against an aggregate or specific value |
| Subquery in WHERE (Multiple Values) | Multiple rows | Filter using `IN`, `ANY`, `ALL`, `EXISTS` |
| Derived Table (Subquery in FROM) | Table | Join aggregated or transformed results |
## # 1. Subquery in SELECT

A non-correlated subquery inside the `SELECT` list.
### Characteristics
- Returns a single value.
- Executed once.
- Same value appears for every row.
### When to use
- Global aggregates
- Constants
- Overall statistics

```sql
SELECT Employee_ID,
       Employee_Name,
       (
           SELECT AVG(Salary)
           FROM Employee
       ) AS AvgSalary
FROM Employee;
```
## # 2. Correlated Subquery in SELECT

References columns from the outer query.
### Characteristics
- Returns one value per row.
- Executed once for each outer row.
### Whn to use
- Department average
- Customer order count
- Employee project count

```sql
SELECT Employee_ID,
       Employee_Name,
       (
           SELECT AVG(Salary)
           FROM Employee e2
           WHERE e2.Dept_ID = e1.Dept_ID
       ) AS AvgDeptSalary
FROM Employee e1;
```
## # 3. Subquery in WHERE/HAVING (Single Value)

Returns exactly one value.
### Characteristics
- Uses operators such as:
  - =
  - >
  - <
  - >=
  - <=
### When to use
- Compare with MAX()
- Compare with AVG()
- Compare with MIN()

```sql
SELECT *
FROM Employee
WHERE Salary >
(
    SELECT AVG(Salary)
    FROM Employee
);
```
## # 4. Subquery in WHERE (Multiple Values)

Returns multiple rows.
### Characteristics
- Uses
  - IN
  - NOT IN
  - ANY
  - ALL
  - EXISTS
  - NOT EXISTS
### When to use
- Membership checks
- Parent-child relationships
- Multiple matching values

```sql
SELECT *
FROM Employee
WHERE Dept_ID IN
(
    SELECT Dept_ID
    FROM Department
);
```
## 5. Derived Table (Subquery in FROM)

The subquery behaves like a temporary table.
### Characteristics
- Can return multiple columns.
- Usually joined with another table.
- Often replaces correlated subqueries for better performance.
### When to use
- Aggregated results
- Pre-filtered datasets
- Complex joins

```sql
SELECT e.Employee_Name,
       d.AvgSalary
FROM Employee e
JOIN
(
    SELECT Dept_ID,
           AVG(Salary) AS AvgSalary
    FROM Employee
    GROUP BY Dept_ID
) d
ON e.Dept_ID = d.Dept_ID;
```
# Which One Should I Use?

| Scenario                               | Best Choice             |
| -------------------------------------- | ----------------------- |
| Need one global value                  | Subquery in SELECT      |
| Need one calculated value for each row | Correlated Subquery     |
| Compare against a single value         | WHERE (Single Value)    |
| Filter using many values               | WHERE (Multiple Values) |
| Join aggregated results                | Derived Table           |
