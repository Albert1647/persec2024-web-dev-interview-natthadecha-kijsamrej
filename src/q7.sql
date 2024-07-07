SELECT 
    YEAR(o.order_date) AS year,
    SUM(od.quantity * p.unit_price * (1 - od.discount)) AS revenue
FROM 
    products p
JOIN 
    order_details od ON p.product_id = od.product_id
JOIN 
    orders o ON od.order_id = o.order_id
WHERE 
    o.ship_region = 'Western Europe'
GROUP BY 
    YEAR(o.order_date)
ORDER BY 
    year;