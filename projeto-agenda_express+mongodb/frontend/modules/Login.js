import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        // Adicionar IDs de erro específicos para cadastro e login
        this.emailErrorContainer = document.querySelector(`#${formClass}-email-error`);
        this.passwordErrorContainer = document.querySelector(`#${formClass}-password-error`);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        // Limpar mensagens anteriores
        this.emailErrorContainer.innerHTML = '';
        this.passwordErrorContainer.innerHTML = '';
        this.emailErrorContainer.classList.add('d-none');
        this.passwordErrorContainer.classList.add('d-none');

        // Verificação de e-mail
        if (!validator.isEmail(emailInput.value)) {
            this.emailErrorContainer.innerHTML = 'E-mail inválido.';
            this.emailErrorContainer.classList.remove('d-none');
            error = true;
        }

        // Verificação de senha
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.passwordErrorContainer.innerHTML = 'Senha precisa ter entre 3 e 50 caracteres.';
            this.passwordErrorContainer.classList.remove('d-none');
            error = true;
        }

        if (!error) el.submit();
    }
}
