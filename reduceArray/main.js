// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador;
}, 0); // Valor inicial para o acumulador
console.log('');
console.log(total); // A real função do reduce é reduzir um array para um único valor

const total2 = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []);
console.log('');
console.log(total2);

const total3 = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log('');
console.log(total3);
console.log('');

// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 62 },
    { nome: 'Letícia', idade: 63 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    // if (idade > idade) {
    //     valor.push(idade);
    // }
    // return valor;

    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);