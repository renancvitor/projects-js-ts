const pessoa = { 
    nome: 'Renan',
    sobrenome: 'Vitor',
    idade: 30
}

for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`);
}

console.log(pessoa.nome); // primeira forma de acessar o nome num array
console.log(pessoa['nome']); // segunda forma de acessar o nome num array

// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i ++) {
//     console.log(frutas[i]);
// }

// for (let i in frutas) {
//     // console.log(i);
//     console.log(frutas[i]);
// }