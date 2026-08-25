const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 12132,
    desconto: 0.25
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})