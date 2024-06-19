// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra os valores
        writable: false, // Permite alteração valores ou não
        configurable: false // Pode apagar a chave ou reconfigurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Mostra os valores
            writable: false, // Permite alteração valores ou não
            configurable: false // Pode apagar a chave ou reconfigurar
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Mostra os valores
            writable: false, // Permite alteração valores ou não
            configurable: false // Pode apagar a chave ou reconfigurar
        },
    });
}

const produto1 = new Produto('Camiseta', 20, 3);
produto1.estoque = 5000; // Enquanto o writable retornar true será possível alterar o estoque
delete produto1.estoque; // Como o configurable está retornando false, não permitirá esta configuração
console.log(produto1);
console.log('');

console.log(Object.keys(produto1)); // Como o enumerable está retornando true, é possível ver a chave 'estoque' neste console

for (let i in produto1) { // Como o enumerable está retornando true, é possível ver a chave 'estoque' neste console
    console.log(i);
}