function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        if (typeof msg !== 'string') reject('Bad value...');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });    
}

esperaAi('Conexão com banco de dados', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3)); //'Tratando os dados da base'
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('Error.', e);
    });

    console.log('O JavaScript não espera as Promisses(), ele executa o que tem para executar independentemente ou não das Promisses()');