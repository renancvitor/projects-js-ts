const pessoa = {
    nome: 'Luiz', // Chamados de chave
    sobrenome: 'Otávio' // Chamados de chave
};
console.log(pessoa.nome);
console.log(pessoa['nome']); // Outra forma de imprimir objetos
console.log(pessoa.sobrenome);

console.log('');

const pessoa1 = new Object();
pessoa1.nome = 'Renan';
pessoa1.sobrenome = 'Anaboliky';
pessoa1.idade = 30;
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log('');

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

delete pessoa2.nome;
console.log(pessoa2);

pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome!`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
pessoa1.falarNome();
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

console.log('');

// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1 = criaPessoa('Renan', 'Anabolky');
console.log(p1.nomeCompleto());

// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Trava todas as alterações da função
}

const p2 = new Pessoa('Luiz', 'Otávio');
const p3 = new Pessoa('Renan', 'Anaboliky');
Object.freeze(p3); // Impede que o valor de p3 seja alterado - trava o objeto/valor
delete p2.nome; // Não funciona, pois o this foi travado e nenhuma alteração na função Pessoa será aceita!!
console.log(p2);
console.log(p3);