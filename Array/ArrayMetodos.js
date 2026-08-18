const pilotos = ['Vette', 'Senna', 'Hamilton']
pilotos.pop() //QUebrou a ferrari do Hamillton
console.log(pilotos)

pilotos.push('Verstappen') //add no final da lista
console.log(pilotos)

pilotos.shift() //remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Leclerc')  //add no inicio da lista
console.log(pilotos)

// splice pode adicinar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //massa saiu
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do elemento no parametro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array contando do inicio ao fim

console.log(algunsPilotos2)