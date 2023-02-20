import Livro from "../modelo/Livro";

const livros : Array<Livro> = [{
    codigo: 1,
    codEditora: 1,
    titulo: "Título 1",
    resumo: "Resumo 1",
    autores: ["Autor 1", "Autor 2", "Autor 3"]
},{
    codigo: 2,
    codEditora: 2,
    titulo: "Título 2",
    resumo: "Resumo 2",
    autores: ["Autor 1", "Autor 2", "Autor 3"]
},{
    codigo: 3,
    codEditora: 3,
    titulo: "Título 3",
    resumo: "Resumo 3",
    autores: ["Autor 1", "Autor 2", "Autor 3"]
}];

export default class ControleLivro {
    incluir(livro: Livro) {
        livro.codigo = livros.length > 0
            ? livros.at(-1)!.codigo + 1
            : 1;
        livros.push(livro);
    }

    excluir(codigo: number) {
        const index = livros.findIndex(livro => livro.codigo == codigo);
        livros.splice(index, 1);
    }

    obterLivros() {
        return livros;
    }
}