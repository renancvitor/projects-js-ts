/*
	Ordenar dados pela ordem ASC que representa crescente
	Ordenar dados pela ordem DESC que representa decrescente
*/
SELECT 
	id, first_name, email as usemail
FROM
	users
WHERE
	id BETWEEN 50 AND 150
ORDER BY
	id ASC, first_name DESC;
	
-- No exemplo "id ASC, first_name DESC" é priorizado a ordem do id