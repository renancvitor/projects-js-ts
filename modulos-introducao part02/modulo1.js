module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome; 
    }

    latir() {
        console.log(`${this.nome} está latindo: au au`);
    }
};

console.log(__filename); // Navegar entre arquivos
console.log(__dirname); // Navegar entre pastas

