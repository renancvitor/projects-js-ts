function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        // buttonClear: document.querySelector('.button-clear'),

        incia() {
            this.clickBotoes();
            this.pressionaEnter();
        },        
        
        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
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
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        clickBotoes() {
            document.addEventListener('click', event => {
                const element = event.target;

                if (element.classList.contains('button-num')) {
                    this.buttonParaDisplay(element.innerText);
                }

                if (element.classList.contains('button-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('button-del')) {
                    this.deleteOne();
                }

                if (element.classList.contains('button-eq')) {
                    this.realizaConta();
                }
            });
        },

        buttonParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.incia();