// const HomeModel = require('../models/HomeModels');

// HomeModel.create({
//     titulo: 'Um OUTRO título de testes',
//     descricao: 'Uma OUTRA descrição de testes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};