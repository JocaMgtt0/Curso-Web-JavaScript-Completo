const num = [1,2,3,4,5]
//gera um array novo
let novo = num.map(f => f * 2)
console.log(num.map(f => f * 2))

const soma10 = e => 2 + 10
const triploh = e => e * 3
const Money = e => `RS ${parseFloat(e).toFixed(3).replace('.', ',')}`

novo = num.map(soma10).map(triploh).map(Money)
console.log(novo)