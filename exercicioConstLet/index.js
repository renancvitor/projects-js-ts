/*
Renan Vitor tem 30 anos, pesa 65 kg
tem 1.69 de altura e seu IMC é de 19,23076923076923.
*/
const nome = 'Renan';
const sobrenome = 'Vitor';
const idade = 30;
const peso = 65;
const altura = 1.69;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg');
console.log('tem ', altura, 'de altura e seu IMC é de ', imc);
console.log(nome, 'nasceu em ', anoNascimento + '.');