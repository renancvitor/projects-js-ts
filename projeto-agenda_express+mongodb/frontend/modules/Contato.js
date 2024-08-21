import validator from "validator";

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.nomeErrorContainer = document.querySelector(`#${formClass}-nome-error`);
        this.emailErrorContainer = document.querySelector(`#${formClass}-email-error`);
        this.telErrorContainer = document.querySelector(`#${formClass}-tel-error`);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telInput = el.querySelector('input[name="tel"]');
        let error = false;

        // Limpar mensagens anteriores
        this.nomeErrorContainer.innerHTML = '';
        this.emailErrorContainer.innerHTML = '';
        this.telErrorContainer.innerHTML = '';
        this.nomeErrorContainer.classList.add('d-none');
        this.emailErrorContainer.classList.add('d-none');
        this.telErrorContainer.classList.add('d-none');

        // Verificação nome
        if(!nomeInput.value) {
            this.nomeErrorContainer.innerHTML = 'Nome é um campo obrigatório.';
            this.nomeErrorContainer.classList.remove('d-none');
            error = true;
        }

        // Verificação e-mail
        if (!validator.isEmail(emailInput.value)) {
            this.emailErrorContainer.innerHTML = 'E-mail inválido.';
            this.emailErrorContainer.classList.remove('d-none');
            error = true;
        }

        // Verificação e-mail e telefone
        if(!emailInput.value && !telInput.value) {
            this.emailErrorContainer.innerHTML = 'Pelo menos um contato precisa ser enviado: e-mail ou telefone.';
            this.emailErrorContainer.classList.remove('d-none');
            this.telErrorContainer.classList.remove('d-none');
            error = true;
        }

        if (!error) el.submit();
    }
}