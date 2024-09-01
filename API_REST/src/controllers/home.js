import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Renan',
      sobrenome: 'C. Vitor',
      email: 'renan@gmail.com',
      idade: 30,
      peso: 60,
      altura: 1.60,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
