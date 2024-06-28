class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de Instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método Estático
    static trocaPilha() {
        console.log('Ok, vamos trocar');
    }
}

const controle1 = new ControleRemoto('LG', 0);
controle1.aumentarVolume(); // acessando métodos instanciados
controle1.aumentarVolume(); // acessando métodos instanciados
controle1.aumentarVolume(); // acessando métodos instanciados

console.log(controle1);
ControleRemoto.trocaPilha(); // acessando método estático