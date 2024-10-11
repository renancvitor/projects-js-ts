-- Consulta "grande" com JOINs

SELECT 
	u.id AS uid, u.first_name, p.bio, r.name AS role_name
FROM
	users u
LEFT JOIN
	profiles p 
ON
	u.id = p.user_id
INNER JOIN 
	users_roles ur 
ON
	u.id = ur.user_id
INNER JOIN 
	roles AS r
ON
	ur.role_id = r.id
ORDER BY 
	uid ASC;