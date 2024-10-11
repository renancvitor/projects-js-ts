-- Considera na consulta dados que estão na tabela da direita, users neste exemplo

SELECT
	u.id as uid, p.id as pid, p.bio, u.first_name
FROM 
	users u
RIGHT JOIN
	profiles p 
ON
	u.id = p.user_id;