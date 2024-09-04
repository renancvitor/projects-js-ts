import multer from 'multer';
import multer from '../config/multer';

const upload = multer(multer).single('arquivo');

class FotoController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if(err) {
        return res.status(400).json({
          error: [err.code],
        });
      }

      return res.json(req.file);
    })
  }
}

export default new FotoController();
