const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//passando funcao dentro do foreach
fabricantes.forEach(imprimir)
// outra forma. Passando funcao dentro do foreach
fabricantes.forEach(function (a){
    console.log(a)
})

//mais simples
fabricantes.forEach(a => console.log(a))