function criarProduto(nome, preco){
    return{
        nome, preco, desconto: 0.2
    }
}

console.log(criarProduto('not', 2999))
console.log(criarProduto('Ipad', 123.2))