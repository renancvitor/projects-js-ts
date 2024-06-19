/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescription(o, 'prop')
... (spread)

Já vimos:
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProporties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = {     // Famoso spread
//     ...produto,
//     material: 'porcelana'
// };

// const caneca = Object.assign({}, produto, { material: 'por semana' });

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Varinha'
});

console.log(Object.values(produto));
console.log(Object.entries(produto));
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outra coisa';
delete produto.nome;
console.log(produto);

for (let i of Object.entries(produto)) {
    console.log(i);
}