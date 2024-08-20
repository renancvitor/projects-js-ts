import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

// import './assets/css/style.css';

/* Simulação de importação do arquivo promise.js que resolveria a
funcionalidade do sistema em navegadores antigos como Internet Explorer

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import executa from './modules/promise.js';
executa();

*/