SELECT o.customer_id,
       o.total_sales,
       p.total_payments
FROM (
    SELECT customer_id,
           SUM(amount) AS total_sales
    FROM Orders
    GROUP BY customer_id
) o
JOIN (
    SELECT customer_id,
           SUM(amount) AS total_payments
    FROM Payments
    GROUP BY customer_id
) p
ON o.customer_id = p.customer_id;