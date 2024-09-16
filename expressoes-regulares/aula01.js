// g -> global (encontra todas as ocorrências)
// i -> insensitive (não verifica maiúsculas e minúsculas)
// () -> grupo
// | -> ou

const { texto } = require('./base');

const regExp1 = /(João|Luiz)(, conhecido como Gordo)/gi;