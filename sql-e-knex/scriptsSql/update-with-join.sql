-- SELECT e UPDATE de dados na tabela profiles usando JOINs

UPDATE
	users AS u
INNER JOIN
	profiles AS p
ON
	p.user_id = u.id
	SET p.bio = CONCAT(p.bio, ' atualizado') 
WHERE
	u.first_name = 'Godfrey';
	

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