function fizzbuzz(numero) {
    if (typeof numero !== 'number') {
        // console.log(numero);
        return numero;
    }
    else if (numero % 3 === 0 && numero % 5 === 0) {
        // console.log('FizzBuzz');
        return 'FizzBuzz';
    }
    else if (numero % 3 === 0) {
        // console.log('Fizz');
        return 'Fizz';
    }
    else if (numero % 5 === 0) {
        // console.log('Buzz');
        return 'Buzz';
    }
    else {
        // console.log(numero);
        return numero;
    }
}

for (let i = 0; i <= 100; i ++) {
    console.log(i, fizzbuzz(i));
}