const nome = 'Renan';
const sobrenome = 'Vitor';
const idade = 30;

export default function soma(x, y) {
    return x + y;
}

export { nome, sobrenome as sobrenome1, idade };

export class Pessoa {
    constructor(nome2, sobrenome2) {
        this.nome2 = nome2;
        this.sobrenome2 = sobrenome2;
    }
}