export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('Renan', 'C. Vitor', 30, '123.456.789-00');
pessoa.cpf = '123.456.789-00';
console.log(pessoa.cpf);
