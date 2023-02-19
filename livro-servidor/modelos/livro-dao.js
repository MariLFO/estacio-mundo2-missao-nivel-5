const Livro = require('./livro-schema');

module.exports = Livro;

const obterLivros = async () => {
    const livros = await Livro.find();
    return livros;
};