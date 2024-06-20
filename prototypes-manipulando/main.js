// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
};

// Não é recomendado usar a propriedade '__proto__', caso queira acessar o proto de um objeto, utilize:
// Object.getPrototypeOf(colocarNomeDoObjeto);

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // Settando o 'objA' como pai do 'objB', ou seja, dentro do prototype 'objB' existe o 'objA'
                                   // e dentro do 'objA' está o proto Object
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);

console.log('');

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100.0));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100.0));
};

const produto1 = new Produto('Camiseta', 50.0);
produto1.desconto(4);
produto1.aumento(3)

console.log(produto1);

// Literal
const produto2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(produto2, Produto.prototype);
produto2.aumento(10);

console.log(produto2);

console.log('');

const produto3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113.4
    },
});
produto3.aumento(10);
console.log(produto3);