module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], // add o "@babel/polyfill" para trabalhar com async/await no navegador e depois especifique qual o arquivo principal
    output: { // pra qual arquivo deve enviar o codigo convertido
        path: __dirname + '/public', // variavel global, que se refere ao diretorio do arquivo webpack.config.js que está na raiz.
        filename: 'bundle.js', // nome do arquivo
    },
    devServer: {
        contentBase: __dirname + '/public'// O caminho para onde deve ser abrido o servidor da aplicação.
    },
    module: {
        // Toda vez q a aplicação importar um novo arquivo.js para dentro do main.js ele vai executar o babel sozinho no arquivo criado.  
        // dessa forma não precisamos ficar rodando o babel
        rules: [
            {
                test: /\.js$/, // busca os arquivos que terminal com a extensão .js
                exclude: /node_modules/, // exclui a pasta node_modules, vai fazer o babel executar os arquivo.js apenas da nossa aplicação e não os do node
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};