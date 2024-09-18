export class Empresa {
  public readonly nome: string; // public não obrigatório
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);

    }
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string,) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
console.log(empresa1);
console.log(empresa1.nome);

const colaborador1 = new Colaborador('Renan', 'C. Vitor');
empresa1.adicionaColaborador(colaborador1);
console.log(empresa1);
empresa1.mostrarColaboradores();
