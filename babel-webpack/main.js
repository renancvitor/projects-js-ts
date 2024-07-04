
// Comando TERMINAL para converter códigos modernos para navegadores antigos:
// npx babel main.js -o bundle.js --presets@babel/env
//           NOME-ARQUIVO.extensão e NOME-NOVO-ARQUIVO.extensão

// Para fazer isso de forma automática, vá até o arquivo packge.json:
// Logo abaixo da linha de código iniciada com "text" coloque uma vírgula e 
// insira: "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"
// então digite no terminal npm run babel

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}