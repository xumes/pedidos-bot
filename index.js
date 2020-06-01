const express = require("express");
const bodyParser = require("body-parser");

const app = express( );

app.use(bodyParser.urlencoded({extended: true}));


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

app.post("/webhook", (req,res) => {
  console.log("received a post request");
  console.log("pergunta", req.body)
  console.log("queryResult", req.body.queryResult)
  console.log("queryText", req.body.queryResult.queryText)

  console.log("intencao", req.body.queryResult.intent.name)

  const resposta = {
    "fulfillmentText": " ",
    "fulfillmentMessages": [
      {
        "card": {
          "title": "card title",
          "subtitle": "card text",
          "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
          "buttons": [
            {
              "text": "button text",
              "postback": "https://assistant.google.com/"
            }
          ]
        }
      }
    ],
    "source": ""
  }

  return res.json(resposta)
})

const porta = process.env.PORT || 3000;
const hostname = "127.0.0.1"

app.listen(porta, () => {
  console.log(`servidor rodando em http://${hostname}:${porta}`);
})
