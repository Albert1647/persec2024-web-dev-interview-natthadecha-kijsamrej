WITH TopProducts2016 AS (
    SELECT 
        p.product_name, 
        SUM(od.quantity) AS total_quantity
    FROM 
        products p
    JOIN 
        order_details od ON p.product_id = od.product_id
    JOIN 
        orders o ON od.order_id = o.order_id
    WHERE 
        o.order_date BETWEEN '2016-01-01' AND '2016-12-31'
    GROUP BY 
        p.product_name
    ORDER BY 
        total_quantity DESC
    LIMIT 5
),
TopProducts2017 AS (
    SELECT 
        p.product_name, 
        SUM(od.quantity) AS total_quantity
    FROM 
        products p
    JOIN 
        order_details od ON p.product_id = od.product_id
    JOIN 
        orders o ON od.order_id = o.order_id
    WHERE 
        o.order_date BETWEEN '2017-01-01' AND '2017-12-31'
    GROUP BY 
        p.product_name
    ORDER BY 
        total_quantity DESC
    LIMIT 5
)
SELECT 
    tp2016.product_name
FROM 
    TopProducts2016 tp2016
JOIN 
    TopProducts2017 tp2017 ON tp2016.product_name = tp2017.product_name;