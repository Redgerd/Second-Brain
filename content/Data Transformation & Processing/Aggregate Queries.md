Aggregate Functions allow summarizing large sets of data into meaningful results, making it easier to analyze patterns and trends across many records. They return a single output value after processing multiple rows in a table.

- Perform calculations like totals, averages, minimum or maximum values on data.
- Ignore NULL values in most functions except COUNT(*), improving result accuracy.
- Work with clauses such as GROUP BY, HAVING and ORDER BY for analysis.

## # Aggregate Functions in SQL

Below are the most frequently used aggregate functions in SQL.
### # Count()

It is used to count the number of rows in a table. It helps summarize data by giving the total number of entries.

- **COUNT(*)**: Counts all rows.  
- **COUNT(column_name)**: Counts non-NULL values in the specified column.  
- **COUNT(DISTINCT column_name)**: Counts unique non-NULL values in the column.  
### # SUM()

It is used to calculate the total of a numeric column by adding all non-NULL values.

- **SUM(column_name)**: Adds all non-NULL values in the column.  
- **SUM(DISTINCT column_name)**: Adds only unique non-NULL values, ignoring duplicates.  
### # AVG()

It is used to calculate the average value of a numeric column.

- **AVG(column_name)**: Calculates average of all non-NULL values.  
- **AVG(DISTINCT column_name)**: Calculates average using only unique non-NULL values.  
### # MIN() and MAX()

These functions return the smallest and largest values from a column.

- **MIN(column_name)**: Returns the lowest non-NULL value.  
- **MAX(column_name)**: Returns the highest non-NULL value.  