A view is a named, stored query that you can treat like a table. Define your logic once, then reference it from anywhere

```
CREATE VIEW active_customers AS
SELECT id, name, email, created_at
FROM customers
WHERE status = 'active';
```

It doesn't store data itself — it stores the _query_. Every time you `SELECT` from a view, the database runs that underlying query and returns fresh results.