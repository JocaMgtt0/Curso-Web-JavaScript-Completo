const valores = [2.4 , 2.3 ,4, 32]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[10]= 10
console.log(valores)
console.log(valores.length) //retorna o a quantidade de valores

//arrays é multi elementos, ou seja, aceita varios elementos diferentes 

valores.push({id: 3}, false, null, 'treste') //adicione outros elementos
// o id: 3 é um objeto
console.log(valores)

console.log(valores.pop()) //retira e retorna o ultimo elemento tirado do array

delete valores[0] //retira o elemento do indice

console.log(valores)
console.log(typeof valores)