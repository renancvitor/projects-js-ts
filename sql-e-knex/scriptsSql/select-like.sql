-- like representa "parecido" ou "como"
/*
	% usado no começo para indicar que não se importa com nada que esteja no começo do dado e
	usado no final para dizer que não se importa com nada que esteja no final do dado, apenas o seu começo
	% % e também pode ser usado para dizer que nada que está no começo ou no fim é importante, podendo trazer dados
	que comecem ou terminem com a letra - por exemplo - determinada
	_ representa um caracter
*/
select
	*
from
	users
where
	first_name like '%b'
or
	first_name like 'b%'
or
	first_name like '%b%';