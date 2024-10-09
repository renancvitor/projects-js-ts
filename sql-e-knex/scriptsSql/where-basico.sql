-- where filtra registros
-- =igaul <menor que <=menos ou igual que >maior que >=maior ou igual que <>diferente !=diferente
-- Operadores lógicos "and" e "or"
select * from users
where id=3;

select * from users where first_name<>"Renan";

select * from users where id > 1 and first_name <> "Carlos";

-- Para uso de "and" e "or" a lógica é a mesma do "if", "and" só retornar valores precisos enquanto "or" pode ser mais abrangente