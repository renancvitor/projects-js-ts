import { Router } from 'express';
import userController from '../controllers/user';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

// Função real
router.post('/', userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;


/*
index -> lista todos os usuários -> GET
sotre/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> SHOW
update -> atualiza um usuário -> PATCH ou PUT
*/
