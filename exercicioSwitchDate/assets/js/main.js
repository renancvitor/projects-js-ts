// const h1 = document.querySelector('.container h1');

// const data = new Date();
// let diaSemana = data.getDay();
// const diaSemanaTexto = gettDay(diaSemana);

// function gettDay(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'sábado';
//             return diaSemanaTexto
//         default:
//             diaSemanaTexto = '';
//             return diaSemanaTexto;
//     }
// }

// const mes = getMonth();

// function gettMonthName(mes) {
//     let nomeMes

//     switch (mes) {
//         case 0:
//             nomeMes = 'janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'março';
//             return nomeMes;
//         case 3:
//             nomeMes = 'abril';
//             return nomeMes;
//         case 4:
//             nomeMes = 'maio';
//             return nomeMes;
//         case 5:
//             nomeMes = 'junho';
//             return nomeMes;
//         case 6:
//             nomeMes = 'julho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'agosto';
//             return nomeMes;
//         case 8:
//             nomeMes = 'setembro';
//             return nomeMes;
//         case 9:
//             nomeMes = 'outubro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'novembro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'dezembro';
//             return nomeMes;
//         default:
//             nomeMes = '';
//             return nomeMes;
//     }
// }

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function createDate(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDiaSemana = gettDay(diaSemana);
//     const nomeMes = gettMonthName(numeroMes);

//     return `${nomeDiaSemana}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
//     `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}:${zeroEsquerda(data.getSeconds())}.`;
// }

// h1.innerHTML = createDate(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short' CURIOSAMENTE NÃO FUNCIONA QUANDO USO timeStyle...
// };

h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' });