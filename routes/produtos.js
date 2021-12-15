const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        Mensagem: 'Usando o get dentro da rota de produtos'
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        Mensagem: 'Usando o get de um produto exclusivo',
        id: id
    });
});

router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };

    res.status(201).send({
        Mensagem: 'Usando post dentro da rota de produtos',
        produto_criado: produto
    });
});

router.patch('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        Mensagem: 'Usando patch dentro da rota produtos para um produto expecifico',
        id: id
    });
});

router.delete('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        Mensagem: 'Usando delete dentro da rota produtos para um produto expecifico',
        id: id
    });
});

module.exports = router