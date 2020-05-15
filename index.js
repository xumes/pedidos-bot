const express = require("express");
const app = express( );


app.get('/', (req, res) => {
  res.send("Olá Chatbot");
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
  console.log(req.body);
  res.send("pedido recebida");
})


app.listen(3000, '127.0.0.1', () => {
  console.log('Servidor rodando');
})
