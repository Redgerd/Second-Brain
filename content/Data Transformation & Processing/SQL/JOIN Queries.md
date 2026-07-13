Some import joins

###  #  Natural Join

A Natural Join is a type of **INNER JOIN** that automatically joins two tables based on columns with the same name and data type. It returns only the rows where the values in the common columns match.

- It joins tables using common columns with the same name.
- It returns only rows where values in those columns match.
- The common column appears only once in the result.

```
SELECT   
    Emp_name,  
    Dept_name  
FROM Employee  
NATURAL JOIN Department;
```

###  #  Cartesian Join or Cross Join

A Cartesian Join or CROSS JOIN returns the **Cartesian product** of two tables, meaning each row from the first table is combined with every row from the second table. This type of join does not require any specific condition or matching column between the two tables.

In the absence of a **WHERE** condition the **CARTESIAN JOIN** will behave like a CARTESIAN PRODUCT . i.e., the number of rows in the result-set is the product of the number of rows of the two tables. In the presence of WHERE condition this JOIN will function like a INNER JOIN.

```
SELECT Student.NAME, Student.AGE, StudentCourse.COURSE_ID  
FROM Student  
CROSS JOIN StudentCourse;
```

###  #  Self Join

A Self Join is a join where a table is **joined with itself**. This type of join can be useful when we need to **compare rows within the same table**, such as when we want to join records from the same table based on some condition. In a self join, we use table aliases (e.g., a and b) to differentiate between the two instances of the same table.\

```
SELECT a.ROLL_NO , b.NAME  
FROM Student a, Student b  
WHERE a.ROLL_NO < b.ROLL_NO;
```

In this self join example, the **Student** table is joined with itself. The query compares the **`ROLL_NO`** of two instances (aliased as `a` and `b`), and for each row, it returns the **`ROLL_NO`** of one record and the `NAME` of another record where **`a.ROLL_NO < b.ROLL_NO`**. This allows us to pair each student with other students that have a higher **`ROLL_NO`**.