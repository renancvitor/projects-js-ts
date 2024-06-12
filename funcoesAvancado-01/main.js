(function(idade, peso, altura) { // função anônima, fora do escopo global
    const sobrenome = 'Farhafauler';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Emmy'));
    }

    falaNome();
    console.log(idade, peso, altura); // valores declarados abaixo no parênteses

})(30, 70, 1.75); // idade, peso, altura

console.log('');

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function um(callback) {
    setTimeout(function() {
        console.log('One');
        if (callback) callback();
    }, rand());
}

function dois(callback) {
    setTimeout(function() {
        console.log('Two');
        if (callback) callback();
    }, rand());
}

function tres(callback) {
    setTimeout(function() {
        console.log('Three');
        if (callback) callback();
    }, rand());
}

um(function() { // usando callback podemos ordenar as funções independentemente do tempo predefido para execução, como neste caso
                // as funções estavam sendo executadas com time aleatorio e implicava na ordem que eu gostaria que fossem executadas
                // o callback serviu para ajustar isso e ordenar do meu jeito
    dois(function () {
        tres(function () {
            console.log('Hello world!');
        });
    });
});
