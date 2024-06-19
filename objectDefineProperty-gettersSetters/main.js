// defineProperty - defineProperties -> Getters and Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        // value: estoque, // Mostra os valores
        // writable: false, // Permite alteração valores ou não
        configurable: true, // Pode apagar a chave ou reconfigurar
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                //console.log('Bad value');
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('Any', 'Every'); // Substituindo
            nome = valor;
        }
    };
}

// const produto1 = new Produto('Camiseta', 20, 3);

// produto1.estoque = 500;
// console.log(produto1.estoque);

const produto2 = criaProduto('Camiseta');
produto2.nome = 'Anything' // Settando valor
console.log(produto2.nome);