export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    ehSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(11); // Gera uma sequência de mesmo dígito

        // Verifica se o CPF é uma sequência de números iguais
        return sequencia === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        
        // Verifica se é uma sequência inválida
        if (this.ehSequencia()) return false;
        
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
}



// let validacpf = new ValidaCPF('070.987.720-03');

// if (validacpf.valida()) {
//     console.log('CPF válido.');
// } else {
//     console.log('CPF inválido.');
// }