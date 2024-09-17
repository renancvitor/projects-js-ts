function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}

const pessoa ={
  nome: 'Renan',
  sobrenome: 'C. Vitor',

  exibirNome(): void {
    console.log(this.nome + '' + this.sobrenome);
  },
};

semRetorno('Renan', 'C. Vitor');
pessoa.exibirNome();

export { pessoa };
