function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        if (typeof msg !== 'string') {
            reject(false);
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promisse');
            return;
        }, tempo);
    });    
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promisses = [
    // 'Primeiro valor',
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 500), // Primeiro valor a ser resolvido - menor tempo
    esperaAi('Promisse 3', 1000),
    // esperaAi(1000, 1000),
    // 'Outro valor'
];

function baixarPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em Cache');
    }
    else {
        return esperaAi('Baixei a página.', 3000);
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));

console.log();

Promise.race(promisses) // É literalmente uma ocrrida -> entrega apenas o PRIMEIRO valor resolvido (qualquer um)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });

console.log();

Promise.all(promisses) // Apenas resolve as promises em ordem, como se fosse uma corrente - se uma der erro rejeita todas
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });