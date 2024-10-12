-- Agrupando dados repetidos com GROUP BY

SELECT 
	first_name, COUNT(id) 
AS
	total
FROM
	users u 
GROUP BY
	first_name 
ORDER BY
	total DESC;