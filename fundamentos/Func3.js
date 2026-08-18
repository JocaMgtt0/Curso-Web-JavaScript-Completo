// armazenar funcao em variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


// armazenando uma funcao arrow em uma funcao

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a, b) => a - b //normalmente retorna o resultado da operacao
console.log(subtracao(2,4))

