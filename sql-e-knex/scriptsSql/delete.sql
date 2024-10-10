-- Usando delete para deletar o id 54 da tabela users, e não existe nenhuma maneira de recuperar os dados deletados

DELETE FROM 
	users 
WHERE 
	id = 54;


-- AVISO: usar sempre SELECT para garantir que está apagando os valores corretos da tabela
SELECT 
	*
FROM
	users u 
WHERE
	id BETWEEN 50 AND 60;