-- Considera na consulta dados que estão na tabela da esquerda, users neste exemplo

SELECT
	u.id as uid, p.id as pid, p.bio, u.first_name
FROM 
	users u
LEFT JOIN
	profiles p 
ON
	u.id = p.user_id;