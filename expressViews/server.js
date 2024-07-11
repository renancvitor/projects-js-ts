const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// params === /profiles/id123987
// query === /?chave1=valor1&chave2=valor2
// body === <- deve ser tratado no POST ou PUT e deve ter a declaração app.use com extend:true

app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});