// Para criar o arquivo package.json, digite o comando npm init -y no terminal do vs code
// LEMBRANDO que é importante navegar através da pasta do projeto utilizando cd NOMEPASTAPROJETO
// Caso contrário o package.json será criado na pasta raíz

// Instalando as extensões do babel js e webpack:
// Digite no terminal: npm install --save-dev @babel/cli @babel/preset-env @babel/core babel-loader webpack webpack-cli regenerator-runtime core-js@2

const path = require('path'); // CommonJS - padrão do Node.Js

module.exports = {
    mode: 'production', // É possível alternar entre modo development e production
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map'
};