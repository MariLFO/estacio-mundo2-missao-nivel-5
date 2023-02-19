const Livro = require('./livro-schema');

module.exports = Livro;

const obterLivros = async () => {
    const livros = await Livro.find();
    return livros;
};

const incluir = async (livro) => {
    const novoLivro = await Livro.create(livro);
    return novoLivro;
};