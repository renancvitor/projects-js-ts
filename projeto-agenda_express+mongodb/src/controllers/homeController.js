// const HomeModel = require('../models/HomeModels');

// HomeModel.create({
//     titulo: 'Um OUTRO título de testes',
//     descricao: 'Uma OUTRA descrição de testes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.index = (req, res) => {
    res.render('index');
};
