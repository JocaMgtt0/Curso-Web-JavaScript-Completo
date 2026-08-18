Array.prototype.filter2 = function (callback){
    const listaAux = []
    for(let i = 0; i < this.length; i ++){

        if(callback(this[i], i, this)){
        listaAux.push(this[i])
        }
    }
    return listaAux
}

const produtos = [
    {nome: 'Notebook', preco: 3200.5, fragil: true},
    {nome: 'iPad', preco: 454.5, fragil: false},
    {nome: 'copo de vidro', preco: 21.3, fragil: true},
    {nome: 'copo de plastico', preco: 43.4, fragil: false}
]

console.log(produtos
    .filter2(f => f.preco >= 45 )
    .filter2(f => f.fragil == true)
)