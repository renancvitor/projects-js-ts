import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

import Contato from './modules/Contato';

const nome = new Contato('.form-nome');
const email = new Contato('.form-email');
const tel = new Contato('.form-tel');
nome.init();
email.init();
tel.init();

import Home from './modules/Home';

