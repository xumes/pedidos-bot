const express = require("express");
const bodyParser = require("body-parser");

const app = express( );

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.send("Olá Cópia do projeto");
})

app.get('/pergunta', (req, res) => {
  msg=req.query.pergunta;
  res.send("você perguntou: " + msg);
})

app.get('/mensagem/:tipo/:id', (req, res) => {
  msg=req.params.tipo;
  cod=req.params.id;
  res.send("você quer editar o id #" + cod);
})

app.post('/pedido', (req, res) => {
  console.log(req);
  const produto = req.body.produto;
  const qtd = req.body.quantidade;
  const pagto = req.body.tipoPagamento;
  const bebida = req.body.bebida;

  const pedido = {
    produto,
    qtd,
    pagto,
    bebida
  }

  res.json(pedido);
})


app.listen(3000, '127.0.0.1', () => {
  console.log('Servidor rodando');
})
