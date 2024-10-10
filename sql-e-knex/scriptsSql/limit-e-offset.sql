-- Para limitar quantidade de valores é usado o limit
-- offset (ignora os valores determinados) é usado para paginação combinado com limit, deslocando o cursor para exibir resultados

SELECT 
	id, first_name, email as usemail
FROM
	users
WHERE
	id BETWEEN 50 AND 150
ORDER BY
	id ASC
LIMIT 
	2
OFFSET
	2;