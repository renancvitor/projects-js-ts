import multer from 'multer';
import multer from '../config/multer';

import Foto from '../models/Foto';

const upload = multer(multer).single('arquivo');

class FotoController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if(err) {
        return res.status(400).json({
          error: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Foto.create({ originalname, filename, aluno_id });

      return res.json(foto);
    })
  }
}

export default new FotoController();
