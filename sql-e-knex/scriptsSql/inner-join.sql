-- Considera na consulta o que realmente tem relacionamento entre as tabelas

SELECT
	u.id as uid, p.id as pid, p.bio, u.first_name
FROM 
	users u
INNER JOIN
	profiles p 
ON
	u.id = p.user_id
WHERE
	u.first_name
LIKE
	'%a'
ORDER BY
	u.first_name DESC
LIMIT
	10;