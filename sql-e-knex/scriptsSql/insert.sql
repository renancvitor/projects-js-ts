-- Aponta a base de dados que deseja visualizar (caso tenha mais de uma)
use base_de_dados;
-- Mostra as tebelas da base
show tables;
-- Descreve as colunas da tabela
describe users;
-- Inserir registros na base de dados
insert into users
(first_name, last_name, email, password_hash) values
("Igor", "Canavaro", "igor@email.com","a_hash");
-- Exemplo de insert multiplo:
-- insert into users
-- (first_name, last_name, email, password_hash) values
-- ("Edgar", "Almeida", "edgar@email.com","c_hash"),
-- ("Paula", "Danuza", "paular@email.com","d_hash"),
-- ("Helena", "Souza", "helena@email.com","e_hash");
