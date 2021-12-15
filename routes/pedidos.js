const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        Mensagem: 'Usando o get dentro da rota de pedidos'
    });
});

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        Mensagem: 'Usando o get de um pedido exclusivo',
        id: id
    });
});

router.post('/', (req, res, next) => {

    const pedido_criado = {
        nome: req.body.nome,
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };

    res.status(201).send({
        Mensagem: 'Usando post dentro da rota de pedidos',
        pedido_Criado: pedido_criado
    });
});

router.patch('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        Mensagem: 'Usando patch dentro da rota pedidos para um pedido expecifico',
        id: id
    });
});

router.delete('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        Mensagem: 'Usando delete dentro da rota pedidos para um pedido expecifico',
        id: id
    });
});

module.exports = router