// const nome = 'Renan Vitor';
const nome = ['Renan', 'Clayton', 'Noemia'];

for (let i = 0; i < nome.length; i ++) { // não funciona com objetos - geralmente usado com interáveis (arrays ou strings)
    console.log(nome[i]);
}

console.log('');

for(let i in nome) {  // grande vantagem é que retorna o índice - funciona com objetos - retorna índices ou chaves (string, arrays, objetos)
    console.log(nome[i]);
}

console.log('');

for (let i of nome) { // grande vantagem que retorna o valor de forma simples - não funciona com objetos - retorma p vaçpr e, so
                                                                                                // (interáveis, arrays, strings)
    console.log(i);
}

console.log('');

nome.forEach(function(elemento, i, array) {
    console.log(elemento, i, array);
})

console.log('');
console.log('Testando pular linha..'); // funcionou!! kkkk