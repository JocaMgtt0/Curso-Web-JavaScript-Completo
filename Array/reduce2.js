const alunos =[
    {nome: "joao", nota: 7.5, bolsa: true},
    {nome: "Carlos", nota: 8.6, bolsa: false},
    {nome: "Ana", nota: 3.4, bolsa: true},
    {nome: "Joca", nota: 9.5, bolsa: false}
]

// todos sao bolsista ?

const bolsa = alunos
    .map(f => f.bolsa)
    .reduce((acc, prox) =>{
        if(acc === false || prox === false){
            return false
        }
        return true
    })
console.log(bolsa)

// alguem tem bolsa ?
const algumTemBolsa = alunos
    .map(f => f.bolsa)
    .reduce((acc, prox) =>{
        if(acc == true || prox == true){
            return true
        }
        return false
    })
console.log(algumTemBolsa)