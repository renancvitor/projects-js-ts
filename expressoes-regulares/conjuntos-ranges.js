const { alfabeto } = require('./base');

// [] -> Conjunto [^] -> Negação
// [0-9] -> Min e Max

console.log(alfabeto);

console.log(alfabeto.match(/[^abc123]/g)); // Negando o conteúdo

console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-kA-Z0-7]+/g)); // Combinando ranges - Não encontra letras acentuadas, apenas letras do range