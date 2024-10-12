-- 1. Insira 5 usuários
INSERT INTO 
	users (
	first_name,
	last_name,
	email,
	password_hash,
	salary
	)
VALUES (
	"Joaquim",
	"Guimaraes",
	"joaquim@email.com",
	"JG123",
	1200.03
),
(
	"Priscila",
	"da Silva",
	"priscila@email.com",
	"PdS123",
	1300.07
),
(
	"Gustavo",
	"Fonseca",
	"gustavo@email.com",
	"GF123",
	1400.09
),
(
	"Daniela",
	"Carla",
	"daniela@email.com",
	"DC123",
	2000.01
),
(
	"Vanessa",
	"de Souza",
	"vanessa@email.com",
	"VDS123",
	2100.06
);

-- 2. Insira 5 profiles para os novos users
INSERT INTO 
	profiles (bio, description, user_id)
SELECT
	CONCAT("Bio de ", first_name),
	CONCAT("Description de ", first_name),
	id
FROM
	users AS u
WHERE 
	u.id IN (107, 108, 109, 110, 111);

-- 3. Insira 5 roles para os novos users
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
	users AS u
WHERE 
	u.id IN (107, 108, 109, 110, 111)
ORDER BY 
	RAND();

-- 4. Selecionar os 5 últimos users por ordem decrescente
SELECT 
	first_name AS name
FROM 
	users AS u
ORDER BY
	name DESC
LIMIT 5;

-- 5. Atualização do último usuário inserido
SELECT 
	id, email 
FROM 
	users AS u
ORDER BY
	id DESC
LIMIT 2;

UPDATE
	users AS u
SET
	last_name = "Marika"
WHERE 
	id = 111;

-- 6. Remover permissão de algum usuário
SELECT
	user_id, COUNT(role_id) AS total
FROM
	users_roles ur
GROUP BY
	user_id 
ORDER BY 
	total DESC;

DELETE FROM 
	users_roles
WHERE 
	user_id = 9
	AND role_id = 1;

-- 7. Remover um usuário com a permissão PUT
SELECT
	u.id AS uid, u.first_name, r.name
FROM
	users AS u
INNER JOIN
	users_roles AS ur
ON
	u.id = ur.user_id 
INNER JOIN	
	roles AS r
ON
	ur.role_id = r.id 
WHERE
	r.name = 'PUT';

DELETE
	u
FROM
	users AS u
INNER JOIN
	users_roles AS ur
ON
	u.id = ur.user_id 
INNER JOIN	
	roles AS r
ON
	ur.role_id = r.id 
WHERE
	r.name = 'PUT'
AND 
	u.id = 9;

-- 8. Selecione usuários com perfis e permissões - obrigatório
SELECT
	u.id as uid, u.first_name, r.name, p.bio
FROM
	users AS u
INNER JOIN
	users_roles AS ur
ON
	u.id = ur.user_id
INNER JOIN 
	roles AS r
ON
	ur.role_id = r.id 
INNER JOIN 
	profiles AS p 
ON
	p.user_id = u.id;

-- 9. Selecione usuários com perfis e permissões - opcional
SELECT
	u.id as uid, u.first_name, r.name, p.bio
FROM
	users AS u
LEFT JOIN
	users_roles AS ur
ON
	u.id = ur.user_id
LEFT JOIN 
	roles AS r
ON
	ur.role_id = r.id 
LEFT JOIN 
	profiles AS p 
ON
	p.user_id = u.id;

-- 10. Selecione usuários com perfís e permissões ordenando por salário
SELECT
	u.id as uid, u.first_name, u.salary, r.name, p.bio
FROM
	users AS u
INNER JOIN
	users_roles AS ur
ON
	u.id = ur.user_id
INNER JOIN 
	roles AS r
ON
	ur.role_id = r.id 
INNER JOIN 
	profiles AS p 
ON
	p.user_id = u.id
ORDER BY 
	u.salary DESC;


















