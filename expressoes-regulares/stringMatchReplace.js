const { texto } = require('./base');

const regExp1 = /(João|Luiz)(, conhecido como Gordo)/gi;

console.log(texto.match(regExp1)); // Encontra e aponta o texto
console.log(texto.replace(/João/gi, 'Carlos')); // Substitui o João por Felipe
console.log(texto.replace(/(João)(Maria)/gi, "$1" ou '<b>$1</b>')); // O JS permite enumerar os grupos "()" para que possa ser possível fazr destaques
console.log(texto.replace(/(João)(Maria)/gi, function(input) {
    return input.toUpperCase(); // Coloca todo o texto em maiúsculo
}));