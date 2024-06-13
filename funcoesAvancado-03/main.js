function Pessoa(nome, sobrenome) {
    
    const ID = 12345; // privado - não é acessível fora da função

    const metodoInterno = function() { // privado - não é acessível fora da função

    };

    this.nome = nome; // públidco - acessa de fora da função
    this.sobrenome = sobrenome; // públidco - acessa de fora da função

    this.metodo = function() { // públidco - acessa de fora da função
        console.log(this.nome + ': sou um método');
    };
}

const pessoa1 = new Pessoa('Renan', 'Vitor');
const pessoa2 = new Pessoa('Júlia', 'Heringer');

pessoa1.metodo();