const express = require("express");
const bodyParser = require("body-parser");

const Model = require("./model");

const app = express( );

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send("Olá Chatbot");
})

app.post('/webhook', async (req, res) => {
  const mensagem = req.body.queryResult.queryText;
  const intencao = req.body.queryResult.intent.displayName;
  const parametros = req.body.queryResult.parameters;
  let responder = ""

  switch(intencao) {
    case 'VerCardapio': 
      resposta = await Model.verCardapio( mensagem, parametros );
      break;
    case 'verStatus':
      resposta = Model.verStatus( mensagem, parametros );
      break;
    default: 
      resposta = {tipo: 'texto', mensagem: 'Sinto muito, não entendi o que você quer'}
  }


  let meuCardapio = [];
  let menuItem = {};

  for (let i=0; i<resposta.cardapio.length; i++) {
    menuItem = {
        "card": {
          "title": resposta.cardapio[i].titulo,
          "subtitle": resposta.cardapio[i].preco,
          "imageUri": resposta.cardapio[i].url,
        }
    }
    meuCardapio.push(menuItem)
  }


if ( resposta.tipo == 'texto') {
  responder = {
    "fulfillmentText": "Resposta do Webhook",
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            resposta.mensagem
          ]
        }
      }
    ],
    "source": "",
  }
} else if ( resposta.tipo == 'imagem' ) {
  responder = {
    "fulfillmentText": "Resposta do Webhook",
    "fulfillmentMessages": [
      {
        "image": {
          "imageUri": resposta.url,
        }
      }
    ],
    "source": "",
  }
} else if ( resposta.tipo == 'card' ) {
  responder = {
    "fulfillmentText": "Resposta do Webhook",
    "fulfillmentMessages":  meuCardapio,
    "source": "",
  }
}

console.log("resposta final", responder)

  res.send(responder);
})

const porta = process.env.PORT || 8080;
const hostname = "127.0.0.1"

app.listen(porta, () => {
  console.log(`servidor rodando em http://${hostname}:${porta}`);
})











// app.get('/pergunta', (req, res) => {
//   msg=req.query.pergunta;
//   res.send("você perguntou: " + msg);
// })

// app.get('/mensagem/:tipo/:id', (req, res) => {
//   msg=req.params.tipo;
//   cod=req.params.id;
//   res.send("você quer editar o id #" + cod);
// })

// app.post('/pedido', (req, res) => {
//   console.log(req);
//   const produto = req.body.produto;
//   const qtd = req.body.quantidade;
//   const pagto = req.body.tipoPagamento;
//   const bebida = req.body.bebida;

//   const pedido = {
//     produto,
//     qtd,
//     pagto,
//     bebida
//   }

//   res.json(pedido);
// })