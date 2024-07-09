// const modulo1 = require('./modulo1'); // Importando o módulo completo
// console.log(modulo1); // Chamando todo o modulo exportado

// // const falanome = modulo1.falanome; // -> Importando somente uma das funções exportadas
// // console.log(falanome()); // -> Chamando apenas a função exportada

// // Fazendo associação por desustruturação
// const { nome, sobrenome, falanome } = require('./modulo1');
// console.log(nome, sobrenome); 
// console.log(falanome());

const path = require('path');
const axios = require('axios');

const { Pessoa } = require('./modulo1');



// const pessoa1 = new Pessoa('Renan');
// console.log(pessoa1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));