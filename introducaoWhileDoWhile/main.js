function random(max, min) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
// let rand = random(1, 50);
let rand = 10;

while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand);
}

console.log('');

do {
    rand = random(1,59);
    console.log(rand);
} while (rand !== 10);