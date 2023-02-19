const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelos/livro-dao');
const LivroDAO = require('../dao/livro-dao');

router.get('/', async (req, res) => {
    const livros = await LivroDAO.obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    const livro = req.body;
    try {
        await LivroDAO.incluir(livro);
        res.status(201).json({ mensagem: 'Livro adicionado com sucesso.' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao adicionar livro.' });
    }
});