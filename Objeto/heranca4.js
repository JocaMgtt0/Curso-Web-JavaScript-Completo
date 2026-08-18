function meeObjeto(){}
console.log(meeObjeto.prototype)

const obj1 = new meeObjeto
const obj2 = new meeObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meeObjeto.prototype === obj1.__proto__)

meeObjeto.prototype.nome = 'anonimo'
meeObjeto.prototype.falar = function(){
    console.log('Bom dia, meu nome é: ' + this.nome)
}

obj1.falar()
obj2.nome = 'rafa'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meeObjeto.prototype
obj3.nome ='Obj3'

obj3.falar()

console.log((new meeObjeto).__proto__ === meeObjeto.prototype)
console.log(meeObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)