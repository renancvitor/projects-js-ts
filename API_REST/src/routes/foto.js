import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/foto';
import multer from '../config/multer';

const upload = multer(multer);

const router = new Router();

router.post('/',upload.single('arquivo'), fotoController.store);

export default router;
