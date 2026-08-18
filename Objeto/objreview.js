// Colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'sa',
    idade: 54,

    proprietario: {
        endereco: {
            cidade: 'Marinfa'
        }
    },

    condutor: [{
        nome: 'Pedro',
        idade: 19
        }, 
        {
            nome: 'Ana ',
            idade: 12
        }
    ],
    calcularValor: function(){

    }
}
carro.proprietario.endereco.cidade = 'casa'
carro['proprietario']['endereco']['cidade'] = 'guaiapo'
console.log(carro)
delete carro.condutor
delete carro.proprietario.endereco
delete carro.calcularValor
console.log(carro)
console.log(carro.condutor)
//console.log(carro.condutor.length) erro