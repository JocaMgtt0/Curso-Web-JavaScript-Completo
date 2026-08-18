const notas = [1,2,3,4,2]
for(i in notas){
    console.log(i + " = ", notas[i])
}

const pessoa ={
    nome: 'ana',
    sobrenome: 'silva',
    idade: 12,
    peso: 1
}

for(i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}