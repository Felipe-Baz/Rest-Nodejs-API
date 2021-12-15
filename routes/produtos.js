const express = require('express')
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM produtos;',
            (error, resultado, fields) => {
                conn.release();

                if (error) {
                    res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(200).send({
                    Mensagem: '200 - Consulta realizada com sucesso.',
                    response: resultado
                });
            }
        )
    });
});

router.get('/:id_produto', (req, res, next) => {

    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM produtos WHERE id_produto = ?;',
            [req.params.id_produto],
            (error, resultado, fields) => {
                conn.release();

                if (error) {
                    res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(200).send({
                    Mensagem: '200 - Consulta realizada com sucesso.',
                    response: resultado
                });
            }
        )
    });
});

router.post('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {

        if (error){ return res.status(500).send({ error: error }) }

        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
                conn.release();

                if (error) {
                    res.status(500).send({
                        error: error,
                        Mensagem: null
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

router.delete('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        Mensagem: 'Usando delete dentro da rota produtos para um produto expecifico',
        id: id
    });
});

module.exports = router