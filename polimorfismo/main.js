// Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
        // this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Agência/Conta: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    );
};

const conta1 = new Conta(11, 22, 10.0);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(31);

console.log('');

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// ContaPoupanca.prototype.sacar = function(valor) {  // Não vamos subscrever o método de sacar, pois não há necessidade
//     if (valor > (this.saldo + this.limite)) {
//         console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
//         return;
//     }

//     this.saldo -= valor;
//     this.verSaldo();
// };

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);

console.log();

const contaPoupanca = new ContaPoupanca(12, 33, 0);
contaPoupanca.depositar(10);
contaPoupanca.sacar(10);
contaPoupanca.sacar(0);