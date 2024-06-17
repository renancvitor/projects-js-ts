const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3); - removendo como o pop
// ***POP***
//const removidos = nomes.splice(-2, 1); // removendo valores
// const removidos2 = nomes.splice(3, 0, 'Luiz'); // adicionando valor
// const removidos3 = nomes.splice(3, 1, 'Luiz'); // substituindo valores valor

// ***SHIFT***
// const removidos = nomes.splice(0, 1); // adiciona no índice ZERO do array - começo
// console.log(nomes, removidos);

// ***PUSH***
// nomes.splice(nomes.length, 0, 'Claudio');
// console.log(nomes);

// ***UNSHIFT***
nomes.splice(0, 0, 'Claudio');
console.log(nomes);