"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _user = require('../controllers/user'); var _user2 = _interopRequireDefault(_user);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveriam existir
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

// Função real
router.post('/',_user2.default.store);
router.put('/:id', _loginRequired2.default, _user2.default.update);
router.delete('/:id', _loginRequired2.default, _user2.default.delete);

exports. default = router;


/*
index -> lista todos os usuários -> GET
sotre/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> SHOW
update -> atualiza um usuário -> PATCH ou PUT
*/
