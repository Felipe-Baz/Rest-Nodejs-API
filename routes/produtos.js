const express = require('express')
const router = express.Router();
const mysql = require('../mysql').pool;

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

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
                conn.release();

                if (error) {
                    res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send({
                    Mensagem: '201 - Produto inserido com sucesso.',
                    id_produto: resultado.insertId
                });
            }
        )
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