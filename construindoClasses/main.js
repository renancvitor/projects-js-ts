class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} ${this.sobrenome} está falando.`)
};

const pessoa1 = new Pessoa('Renan', 'Vitor');
const pessoa2 = new Pessoa2('Júlia', 'Heringer');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.falar();
pessoa1.comer();
pessoa1.beber();