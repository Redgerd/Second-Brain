A **subquery** is a query nested inside another SQL query. It is used to retrieve data that is required by the outer query and can appear in the `SELECT`, `FROM`, `WHERE`, or `HAVING` clause.
## # Types of Subqueries

### # 1. Non-Correlated Subquery

A subquery that executes independently of the outer query. It runs once and its result is passed to the outer query.

**Common Use Cases**
- Compare against an aggregate (AVG, MAX, MIN)
- Filter using a list of values (`IN`)
- Retrieve a constant value

```sql
SELECT employee_name
FROM Employees
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees
);
```
### # 2. Correlated Subquery
A subquery that references a column from the outer query. It is executed once for every row processed by the outer query.

**Common Use Cases**
- Compare a row against its group
- Latest record per customer
- Department-wise calculations

```sql
SELECT employee_name
FROM Employees e
WHERE salary >
(
    SELECT AVG(salary)
    FROM Employees
    WHERE department_id = e.department_id
);
```

> `EXISTS` and `NOT EXISTS` are almost always used with correlated subqueries.
# # EXISTS

`EXISTS` returns `TRUE` if the subquery returns at least one row.
It is commonly used to check whether a related record exists.

```sql
SELECT ...
FROM table1 t1
WHERE EXISTS (
    SELECT 1
    FROM table2 t2
    WHERE t2.column = t1.column
);
```

- Customers who placed orders
- Employees who manage someone
- Products that have sales
- Parent records with child records

```sql
SELECT customer_id
FROM Customers c
WHERE EXISTS (
    SELECT 1
    FROM Orders o
    WHERE o.customer_id = c.customer_id
);
```
# # NOT EXISTS

`NOT EXISTS` returns `TRUE` only when the subquery returns no matching rows.
It is commonly used to find missing relationships.

```sql
SELECT ...
FROM table1 t1
WHERE NOT EXISTS (
    SELECT 1
    FROM table2 t2
    WHERE t2.column = t1.column
);
```

- Customers who never ordered
- Employees whose manager left
- Products never sold
- Departments without employees
- Records missing related data

```sql
SELECT customer_id
FROM Customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders o
    WHERE o.customer_id = c.customer_id
);
```