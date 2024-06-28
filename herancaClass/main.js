class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

// const dispositivo1 = new DispositivoEletronico('Smartphone');
// // dispositivo1.ligar();
// // dispositivo1.ligar();
// // dispositivo1.desligar();
// console.log(dispositivo1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const tablet1 = new Tablet('Samsung', 'Dourado', 'Galaxy Tab 11');
tablet1.ligar();
console.log(tablet1);

console.log();

const smartphone1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
smartphone1.ligar();
smartphone1.desligar();
smartphone1.desligar();

console.log(smartphone1);