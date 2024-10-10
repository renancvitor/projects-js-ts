/*
 * Usando "WGERE id BETWEEN 119 AND 121", por exemplo, é feito o UPDATE em 3 ids da tabela
 * Tal comando pode fazer algum sentido dependendo da coluna, porém para UPDATE de nomes não faz sentido algum
 */

UPDATE 
	users 
SET 
	first_name = 'Godfrey', last_name = 'Axelord'
WHERE 
	id = 79;



SELECT 
	*
FROM 
	users u 
WHERE 
	id = 79;