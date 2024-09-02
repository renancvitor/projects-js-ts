import { Router } from 'express';
import userController from '../controllers/user';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;


/*
index -> lista todos os usuários -> GET
sotre/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> SHOW
update -> atualiza um usuário -> PATCH ou PUT
*/
