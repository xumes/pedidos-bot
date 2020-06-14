const axios = require("axios");

exports.verCardapio = async ( msg, params ) => {
	let url = 'https://sheetdb.io/api/v1/uvscf0tab9ti1';
	let produto = {};

	return await axios
		.get( url )
		.then ( (resultado) => {
			console.log(resultado.data[0]);
			produto = resultado.data[0];

			let resposta = {
				tipo: 'imagem',
				url: produto.Imagem
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

