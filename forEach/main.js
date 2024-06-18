const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of a1) {
    console.log(i);
}

console.log('');

a1.forEach(function(valor, indice, array) {
    console.log(valor, indice);
});

console.log('');

let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total);