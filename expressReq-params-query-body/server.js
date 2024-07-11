const express = require('express');
const app = express();

// params === /profiles/id123987
// query === /?chave1=valor1&chave2=valor2
// body === <- deve ser tratado no POST ou PUT e deve ter a declaração app.use com extend:true

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Send</button>
        </form>
    `);
});

app.get('/test/:idUsers?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);
});

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}.`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});