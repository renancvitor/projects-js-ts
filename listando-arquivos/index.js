const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        // if(/\.git/g.test(fileFullPath)) continue; // Ignora os arquivos git
        // if(/node_modules/g.)test(fileFullPath)) continue; // Ignora os arquivos node_modules
        // (!/\.css$/g.test(fileFullPath)) continue; // Exibe apenas os arquivos css

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        console.log(file, stats.isDirectory());
    }
}

// Sempre que quiser navegar nas pastas trocar "\" por "/"
readdir('/Users/renan/Documents/ProjetosProgramação/projects-js-ts');