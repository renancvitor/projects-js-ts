function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} ${this.sobrenome} está falando.`);
        },
        comer() {
            console.log(`${this.nome} ${this.sobrenome} está comendo.`);
        },
        beber() {
            console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
        },
    };

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });

    // Object.create(pessoaPrototype);
    // pessoaPrototype.prototype.constructor = pessoaPrototype;
}
    
    

const pessoa1 = criaPessoa('Luiz', 'Otávio');
const pessoa2 = criaPessoa('Renan', 'Vitor');
console.log(pessoa2);

pessoa2.falar();