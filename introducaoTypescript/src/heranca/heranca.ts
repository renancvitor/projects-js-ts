export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do aluno' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Renan', 'C. Vitor', 30, '000.000.000-00');
const aluno = new Aluno('Renan', 'C. Vitor', 30, '000.000.000-00');
const cliente = new Cliente('Renan', 'C. Vitor', 30, '000.000.000-00');

console.log(pessoa);
console.log(aluno);
console.log(cliente);
