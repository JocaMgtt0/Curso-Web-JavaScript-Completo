Array.prototype.map2 = function(callback){
    const ListaAux = []

    for(let i = 0; i < this.length; i++){
        ListaAux.push(callback(this[i], i, this))
    }

    return ListaAux
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.24}',
    '{"nome": "Caderno", "preco": 13.99}',
    '{"nome": "Kit de Lapis", "preco": 42.44}',
    '{"nome": "Caneta", "preco": 7.97}'
]

//retorne um array apenas com os precos

let soPreco = carrinho
    .map2(f =>JSON.parse(f))
    .map2(i => i.preco)

console.log(soPreco)