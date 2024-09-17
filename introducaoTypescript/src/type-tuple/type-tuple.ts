const dadoCliente1: [number, string] = [1, 'Renan'];
const dadoCliente2: [number, string, string] = [1, 'Renan', 'Alberto'];
const dadoCliente3: [number, string, string?] = [1, 'Luiz'];
const dadoCliente4: [number, string, ...string[]] = [1, 'Luiz'];

dadoCliente1[0] = 100;
dadoCliente1[1] = 'Carlos';

console.log(dadoCliente1);
