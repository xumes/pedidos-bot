exports.verCardapio = ( msg, params ) => {
	let resposta = {
		tipo: 'imagem',
		url: 'http://lorempixel.com/output/food-q-c-640-480-10.jpg'
	}

	return resposta
}

// 

exports.verStatus = () => {
	let resposta = {
		tipo: 'texto',
		mensagem: 'Calma que já estamos preparando o seu pedido'
	}

	return resposta
}

