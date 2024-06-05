const data = new Date('1994-04-09 23:23:03');
let diaSemana = data.getDay();
const diaSemanaTexto = gettDay(diaSemana);

function gettDay(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break
//     default:
//         diaSemanaTexto = '';
// }

console.log(diaSemanaTexto);