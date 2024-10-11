-- INSERT aleatório de dados na tabela para gerar conteúdo

INSERT INTO 
	users_roles (user_id, role_id)
SELECT
	id,
(SELECT
	id
FROM
	roles
ORDER BY
	RAND()
LIMIT
	1) AS randomvalues
FROM 
	users;
	

-- Novo INSERT aleatório, desta vez ignorando erros e permitindo que tenham dois ou mais roles pode user

INSERT IGNORE INTO 
	users_roles (user_id, role_id)
SELECT
	id,
(SELECT
	id
FROM
	roles
ORDER BY
	RAND()
LIMIT
	1) AS randomvalues
FROM 
	users
ORDER BY
	RAND()
LIMIT
	20;