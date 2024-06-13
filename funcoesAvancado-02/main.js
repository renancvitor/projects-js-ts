function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter        
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`; // this.nome é a mesma coisa que chamar pessoa1.nome no console.log abaixo
                                                    // lembrando que o this está atrelado ao método fala, sendo assim ele
                                                    // chamará somente a variável que se comunicar com o método
        },

        altura,
        peso,

        get imc() { //Getter
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const pessoa1 = criaPessoa('Renan', 'Vitor', 1.7, 65);
console.log(pessoa1.imc);
pessoa1.nomeCompleto = 'Renan Craldino Vitor';
console.log(pessoa1.nomeCompleto);
console.log(pessoa1.fala('falando sobre JS'));

console.log('');

const pessoa2 = criaPessoa('Júlia', 'Heringer', 1.6, 60);
// console.log(pessoa2.imc()); como foi colocado um get à frente da função imc, não é mais possível chamá-la desta forma, 
// somente como foi chamado na pessoa1 - logo acima
console.log(pessoa2.fala('falando sobre makeup'));