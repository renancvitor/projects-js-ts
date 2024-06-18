// Filter -> Sempre vai retornar um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores do que 10:
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Abaixo várias formas reduzidas de se fazer o filter

// function callbackFilter(valor, indice, array) {
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(function(valor) {
//     return valor > 10;
// });

// const numerosFiltrados = numeros.filter((valor) => {
//     return valor > 10;
// });

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

// Utilizando indice e array:

const numerosFiltrados2 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});
console.log(numerosFiltrados2);

// ~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~
// IMPORTANTE
// ~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(function(objeto) {
    return objeto.nome.length >= 5;
})
console.log(pessoasComNomeGrande);

const pessoasMaisVelhas = pessoas.filter(objeto2 => objeto2.idade > 50);
console.log(pessoasMaisVelhas);

const pessoasNomeTerminaA = pessoas.filter(objeto3 => objeto3.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeTerminaA);