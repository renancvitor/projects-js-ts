// const HomeModel = require('../models/HomeModels');

// HomeModel.create({
//     titulo: 'Um OUTRO título de testes',
//     descricao: 'Uma OUTRA descrição de testes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};