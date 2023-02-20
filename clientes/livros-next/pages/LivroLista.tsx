import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Livro from "@/classes/modelo/Livro";
import {Menu} from '../componentes/Menu'
import {LinhaLivro} from "@/componentes/LinhaLivro";
import ControleLivros from "@/classes/controle/ControleLivros";

const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState(false);
    const controleLivros = new ControleLivros();

    useEffect(() => {
        controleLivros.obterLivros()
            .then(livros => {
                setLivros(livros);
                setCarregado(true);
            })
    }, [carregado])

    const excluir = (codigo: string) => {
        controleLivros.excluir(codigo)
            .then(() => setCarregado(false));
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />
            <main>
                <h1>Catálogo de Livros</h1>
                <table className="table table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                    </thead>
                    <tbody>
                    {livros.map((livro, index) => (
                        <LinhaLivro
                            key={index}
                            livro={livro}
                            excluir={() => excluir(livro.codigo!)}
                        />
                    ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default LivroLista;