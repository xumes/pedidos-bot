const axios = require("axios");

exports.verCardapio = async ( msg, params ) => {
	let url = 'https://sheetdb.io/api/v1/uvscf0tab9ti1';
	let cardapio = [];
	let produto = {};
	let retorno = {}


	return await axios
		.get( url )
		.then ( (resultado) => {
			retorno = resultado.data;

			for( let i =0; i<retorno.length; i++) {
				produto = {
					titulo: `Cod: ${retorno[i].Codigo} - ${retorno[i].Nome}`,
					preco: `R$ ${retorno[i].Preco}`,
					url: retorno[i].Imagem
				}

				cardapio.push(produto);
			}

			let resposta = {
				tipo: 'card',
				cardapio
			}
		
			return resposta
		})
		.catch( err => console.log(err) );
}

// 

exports.verStatus = () => {
	let resposta = {
		tipo: 'texto',
		mensagem: 'Calma que já estamos preparando o seu pedido'
	}

	return resposta
}

