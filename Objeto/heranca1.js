const ferrari ={
    modelo: 'F40',
    velMax: 300
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function meuOb(){}

console.log(typeof Object, typeof meuOb)
console.log(Object.prototype, meuOb.prototype)
