// Função recursiva abaixo !!!
function recursividade(max) { // função de repetição(loop) - tem um limite que pode ser de 1.000 loops
    console.log(max); // para iniciar do 0
    if (max >= 5) return;
    max++;
    // console.log(max);
    recursividade(max);
}
recursividade(0);

console.log('');

// Função geradora abaixo !!!
function* geradora1() { // praticamente um código que pode ser pausado
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

console.log(''); // para exibir a variável g1 no output deve-se comentar os console.log acima - vice versa

// for (let valor of g1) {
//     console.log(valor);
// }

function* geradora2() {
    let i = 0;
    
    while (true) {
        yield i;
        i ++;
    }
}

console.log('');

const g2 = geradora2();
console.log(g2.next().value); // infinito, se eu fizer 10.000 consoles como este irá gerar 10.000 valores
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('');

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

console.log('');

function* geradora5() {
    yield function() {
        console.log('Vim do yield1');
    };

    // ... não é possível usar return entre um yield e outro, pois iria encerrar o código sim para o último yield
    
    yield function() {
        console.log('Vim do yield2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

