// for (let i = 0; i <= 10; i ++) {
//     console.log(`Linha ${i}`);
// }

// for (let i = 0; i <= 10; i +=2) {
//     console.log(`Linha ${i}`);
// }

for (let i = 0; i < 3; i ++) {
    // const par = i % 2 === 0;
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(`Linha ${i} é par? ${par}.`);
}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Abacaxi', 'Banana'];

for (let i = 0; i < frutas.length; i ++) {
    console.log(`Índice ${i}`, frutas[i]);
}