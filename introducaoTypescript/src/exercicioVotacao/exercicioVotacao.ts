type VotationOption = {
  numberOfVotes: number,
  option: string,
};

export class Votation {
  addVotation(votation1: Votation) {
    throw new Error("Method not implemented.");
  }
  showVotation() {
    throw new Error("Method not implemented.");
  }
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log();
      console.log();
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação preferida?');
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0});
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0});
votation1.addVotationOption({ option: 'Javascript', numberOfVotes: 0});
votation1.addVotationOption({ option: 'Java', numberOfVotes: 0});
votation1.vote(4);

const votationApp = new VotationApp();
votation1.addVotation(votation1);

votation1.showVotation();
