const escola = [
    {
        nome: 'turma 1',
        alunos: [
            { nome: 'Pedro', nota: 0.1 },
            { nome: 'jao', nota: 70 }
        ]
    },
    {
        nome: 'turma 2',
        alunos: [
            { nome: 'Jair', nota: 34 },
            { nome: 'ana', nota: 80 }
        ]
    }
]

const getNotaAluno = a => a.nota
const getNotas = turma => turma.alunos.map(getNotaAluno)

const not1 = escola.map(getNotas)
console.log(not1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotas)
console.log(notas2)