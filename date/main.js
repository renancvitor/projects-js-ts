// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); //marco ZERO  
// const data = new Date(2019, 0, 9, 23, 23, 3, 533); // ano, mês, dia, hora, Minuto, segundo, milésimo de segundo

// const data = new Date('1994-04-09 23:23:03'); // '1994-04-09T23:23:03.953' para exibir os milésimos de segundos
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Milésimo de segundo', data.getMilliseconds()); // semana começa do zero - domingo = zero
// console.log('Dia da semana', data.getDay());
// console.log(Date.now())
// console.log(data.toString());

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);