/*
	insert e select para criação de dados de outra tabela usando inclusive concat
*/
INSERT INTO
	profiles (bio, description, user_id)
SELECT
	CONCAT('Bio de ', first_name),
	CONCAT('Description de ', first_name),
	id
FROM
	users;
	

-- usado para limpar a tabela profiles antes do insert acima
DELETE FROM profiles;