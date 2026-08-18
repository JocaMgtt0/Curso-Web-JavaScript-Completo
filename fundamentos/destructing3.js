function rand({min = 0, max= 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 59, max: 22}
console.log(rand(obj))
console.log(rand({min: 344}))
console.log(rand({}))
console.log(rand())