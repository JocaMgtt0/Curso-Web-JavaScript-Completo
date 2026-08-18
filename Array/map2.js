const carrinho = [
    '{"nome": "Borracha", "preco": 3.24}',
    '{"nome": "Caderno", "preco": 13.99}',
    '{"nome": "Kit de Lapis", "preco": 42.44}',
    '{"nome": "Caneta", "preco": 7.97}'
]

//retorne um array apenas com os precos

let soPreco = carrinho
    .map(f =>JSON.parse(f))
    .map(i => i.preco)

console.log(soPreco)


//testes e erross
//let valor =['{"nome": "Caneta", "preco": 7.97}', '{"nome": "Caneta", "preco": 7.97}']

/*

let lista2 = valor.map(f => JSON.parse(valor).preco)
console.log(lista2)
*/



/*
let result = f => {
   let algo = JSON.parse(valor)
   console.log(algo.push(algo.map(f => f.preco)))
}
*/

/*
let algo = JSON.parse(valor)


console.log(algo.preco)
let lista = []
lista.push(algo.preco)
console.log(lista)
*/
