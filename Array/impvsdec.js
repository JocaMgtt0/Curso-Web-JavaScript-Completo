const alunos =[
    {nome: "joao", nota: 7.5, bolsa: true},
    {nome: "Carlos", nota: 8.6, bolsa: false},
    {nome: "Ana", nota: 3.4, bolsa: true},
    {nome: "Joca", nota: 9.5, bolsa: false}
]

// imperativo
let total = 0
for(let i = 0; i< alunos.length; i++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

//declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota). reduce(soma)
console.log(total2 / alunos.length)
