function imprimirSoma(a, v){
    console.log(a + v)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN
imprimirSoma(2,10,2,4) //usa os dois primeiros valores
imprimirSoma() //NaN

function soma(a, b = 10){
    return a + b
}

console.log(soma(2,3)) //usa os dois parametros passado e ignora o padrao
console.log(soma(2)) //usa o valor padrao definido na funcao

console.log(soma())