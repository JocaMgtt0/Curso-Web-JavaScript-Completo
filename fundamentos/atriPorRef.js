const a = {nome: 'um'}
console.log(a)
//a e b aponta para o mesmo local de memoria
const b = a

//b mudou o 'nome' que esta apontando na memoria
b.nome = 'outro'
//por consequencia o a aponta para o memso valor, logo ela muda tb

console.log(a)
console.log(b)

//diferenca  de null para undefined
let valor // nao inicializada
console.log(valor)

valor = null //variavel aponta para nada
console.log(valor)

const produto = {}
console.log(produto.preco) //nao foi definido o preco
console.log(produto)

produto.preco = 3
console.log(produto)

produto.preco = undefined //evitar usar essa atribuicao direta
console.log(!!produto.preco)
console.log(produto )

produto.preco = null // sem preco agr

console.log( 'deleta o preco, por iss retorna: ' + !!produto.preco)
console.log(produto)
