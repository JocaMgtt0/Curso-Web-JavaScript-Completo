const alunos =[
    {nome: "joao", nota: 7.5, bolsa: true},
    {nome: "Carlos", nota: 8.6, bolsa: false},
    {nome: "Ana", nota: 3.4, bolsa: true},
    {nome: "Joca", nota: 9.5, bolsa: false}
]

const resultado = alunos
    .map(a => a.nota)
    .reduce((acc, atual) =>{
        console.log(acc, atual)
        return acc + atual
    })
console.log(resultado)