const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


axios.get(url).then(response => {
    const funcionarios = response.data
    const pais = funcionarios.filter(f => f.pais == 'China' )
    const genero = pais.filter(f => f.genero == 'F')
    const MenorSalario = genero.reduce((acc, prox) => {
        if(acc.salario < prox.salario){
            return acc
        }
        return prox
    })
    console.log(MenorSalario)
})


// OUTRA FORMA DE FAZER

const chines = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios.filter(chines)
                 .filter(mulheres)
                 .reduce(menorSalario)
    console.log(func)
})









