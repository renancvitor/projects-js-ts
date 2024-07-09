// const nome = 'Renan';
// const sobrenome = 'C. Vitor';

// const falanome = () => {
//     console.log(nome, sobrenome);
// };

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falanome = falanome;

// // Atalha para o código acima:
// exports.nome = nome; 
// exports.sobrenome = sobrenome;
// exports.falanome = falanome;
// this.anything = 'Wanna wanna';

// console.log(module.exports); // A palavra "this." também entra dentro do module.exports

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Renan';
const sobrenome = 'C. Vitor';

// IMPORTANTE: ao utilizar o module.exports como objeto, todos os exports são subscrevidos
// ficando assim sem funcionalidade de importação
module.exports = { // Não funcionará usndo apenas 'exports' sem o 'module.' precedendo a code line
    nome, sobrenome, Pessoa
};

// exports.Pessoa = Pessoa;