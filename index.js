const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Olá Chatbot");
})

app.post('/webhook', (req, res) => {
  console.log("Cheguei no webhook");
})

const porta = process.env.PORT || 3000;
const hostname = "127.0.0.1"

app.listen(porta, () => {
  console.log(`servidor rodando em http://${hostname}:${porta}`);
})