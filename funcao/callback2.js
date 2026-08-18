const notas = [7.7, 4.5 ,4.1, 10.0, 3.4, 8.1]

// Sem callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


//Com callback
notasBaixas2 = notas.filter(function(nota){
    return nota <=7
})
console.log(notasBaixas2)


//outra forma com arrow
const notasBaixas3 = notas.filter(nota => nota <= 7)
console.log(notasBaixas3)

//mais simples ainda, garante reuso da funçao notasMenorQue7 em outros locais 
// do codigo
const notasMenorQue7 = nota => nota <= 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)