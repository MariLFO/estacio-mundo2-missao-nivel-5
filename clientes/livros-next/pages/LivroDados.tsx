import type { NextPage } from 'next'
import React, {useState} from 'react';
import styles from '../styles/Home.module.css';
import ControleEditora from "@/classes/controle/ControleEditora";
import Livro from "@/classes/modelo/Livro";
import {Menu} from "@/componentes/Menu";
import Head from "next/head";
import {useRouter} from "next/router";
import ControleLivros from "@/classes/controle/ControleLivros";

const LivroDados: NextPage = () => {
    const controleEditora = new ControleEditora();
    const [titulo, setTitulo] = useState('')
    const [resumo, setResumo] = useState('')
    const [autores, setAutores] = useState('')
    const [codEditora, setCodEditora] = useState(0)
    const router = useRouter();
    const controleLivros = new ControleLivros();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }))

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const novoLivro = {
            codigo: "",
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
        } as Livro;

        controleLivros.incluir(novoLivro)
            .then(() => router.push('/LivroLista'));
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />
            <main>
                <h1>Adicionar livro</h1>
                <form onSubmit={incluir}>
                    <div className="form-group" >
                        <label htmlFor="titulo">Título</label>
                        <input id="titulo" className="form-control" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="resumo">Resumo</label>
                        <textarea id="resumo" className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="codEditora">Editora:</label>
                        <select id="codEditora" value={codEditora} onChange={tratarCombo}>
                            {opcoes.map((editora) => (
                                <option key={editora.value} value={editora.value}>
                                    {editora.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="autores">Autores (1 por linha)</label>
                        <textarea id="autores" className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </main>
        </div>
    );
}

export default LivroDados;