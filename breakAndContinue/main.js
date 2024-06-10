const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros) {

    if (i === 2 || i === 5) {
        continue; // continua para próxima interação
    }

    console.log(i);

    if (i === 7) {
        console.log('');
        console.log(`Número ${i} encontrado, saindo..`);
        break; // sai do laço de repetição
    }
}