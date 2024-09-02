import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      await User.sync({ alter: true });
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
