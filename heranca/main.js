// Produto
// Camiseta, caneca, lápis
// Cor e material
// Aumento preço, desconto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

const produto = new Produto('Genérico', 111);
console.log(produto);
console.log('');

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco += quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco *(percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
console.log(camiseta);
console.log('');

const caneca = new Caneca('Com alça', 2.9, 'Porcelana', 5);
caneca.estoque = 100;
console.log(caneca.estoque);
console.log(caneca);