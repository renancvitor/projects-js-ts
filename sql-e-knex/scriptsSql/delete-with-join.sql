-- SELECT e DELETE de dados na tabela profiles usando JOINs

DELETE
	p, u
FROM 
	users AS u
INNER JOIN
	profiles AS p
ON
	p.user_id = u.id
WHERE
	u.first_name = 'Igor';
	

SELECT
	u.first_name, p.bio
FROM
	users u 
INNER JOIN
	profiles AS p
ON
	p.user_id = u.id
WHERE
	u.first_name = 'Godfrey';