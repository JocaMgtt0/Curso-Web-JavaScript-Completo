const aprovados = ['joca', 'pedro', 'Jao']
//para ter acesso ao indice tem que colocar no minimo dois elementos, pois o indice é o segundo elemento do foreach
// elemento, indice, proprio array, ...params
aprovados.forEach(function (nome, i){
    console.log(`${i + 1}) ${nome} `)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)