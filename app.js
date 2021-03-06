const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false })); // aceita apenas dados simples
app.use(bodyParser.json()); //aceita apenas o formato json

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({ Message:'Ok' });
    };
    next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);


app.use((req, res, next) => {
    const erro = new Error('404 - Not Found.');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            Mensagem: error.message
        }
    });
});

module.exports = app;