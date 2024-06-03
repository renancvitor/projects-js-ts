const pessoa1 = {
    nome: 'Renan',
    sobrenome: 'Vitor',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi... Ele tem ${this.idade} anos de idade.`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaUdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaUdade();
pessoa1.fala();

// function criaPessoa (nome, sobrenome, idade) { // nome, sobrenome e idade são parâmetros
//     return {
//         nome, sobrenome, idade,
//     };
// }

// const pessoa1 = criaPessoa('Renan', 'Vitor', 30); // Renan, Vitor e 30 são argumentos dos parâmetros acima
// const pessoa2 = criaPessoa('Maria', 'Miranda', 25);
// const pessoa3 = criaPessoa('João', 'Moreira', 32);
// const pessoa4 = criaPessoa('Junior', 'Costa', 44);
// const pessoa5 = criaPessoa('Jean', 'Silva', 59);
// console.log(pessoa1.nome, pessoa2.nome);

// const pessoa1 = {
//     nome: 'Renan',
//     sobrenome: 'Vitor',
//     idade: 30
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenomenome);
// console.log(pessoa1.idade);