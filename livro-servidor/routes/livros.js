const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelos/livro-dao');
const LivroDAO = require('../dao/livro-dao');

router.get('/', async (req, res) => {
    const livros = await LivroDAO.obterLivros();
    res.json(livros);
});
