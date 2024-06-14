function Calculadora() {
    this.display = document.querySelector('.display');

    this.clickButton = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('button-num')) this.addNumDisplay(element);
            if (element.classList.contains('button-clear')) this.clearDisplay(element);
            if (element.classList.contains('button-del')) this.deleteOne(element);
            if (element.classList.contains('button-eq')) this.realizaConta(element);
        });
    };

    this.addNumDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    }


    this.clearDisplay = () => this.display.value = '';
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    };

    this.inicia = () => {
        this.clickButton();
        this.pressionaEnter();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();