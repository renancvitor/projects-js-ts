/* eslint-disable */
let nome: string = 'Renan'; // '', "", ``
let idade: number = 30; // float e int, não faz distinção de tipos de números (tudo é number)
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // símbolos
// let bigest: bigint = 10n;


// Arrays
let arraysNum: Array<number> = [1, 2, 3];
let arraysNum2: number[] = [1, 2, 3];
let arraysString: Array<string> = ['a', 'b', 'c'];
let arraysString2: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = { // O ? indica que o valor boolean é opcional, podendo ou não ser usado
  idade: 30,
  nome: 'Renan'
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
