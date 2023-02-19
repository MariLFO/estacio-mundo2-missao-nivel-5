const banco = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/livraria';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

banco.set('strictQuery', true)
banco.connect(uri, options)
    .then(db => console.log('Conectado à base de dados.'))
    .catch(e => console.log(`Erro ao contectar ao banco de dados: ${e}`));

module.exports = banco;