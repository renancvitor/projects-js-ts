exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        Sobrenome: <input type="texte" name="sobrenome">
        <button>Send</button>
        </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send(
        'Ei, sou sua nova rota de POST'
    );
};