-- Fazendo SELECT em mais de uma tabela

SELECT
	u.id as uid, p.id as pid, p.bio, u.first_name
FROM 
	users u, profiles p
WHERE 
	u.id = p.user_id;