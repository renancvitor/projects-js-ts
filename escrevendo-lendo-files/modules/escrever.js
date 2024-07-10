const fs = require('fs').promises;

// fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a' }); // Usar 'w' na flag para sempre apagar o que já estiver 
                                                          // no arquivo
                                                          // Usar 'a' na flag para sempre adicionar 
                                                          // no arquivo existente

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
}