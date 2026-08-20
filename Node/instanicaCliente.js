const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//como ele retorna uma funcao e eu quero o objeto, eu preciso
// invocar com o () na frente a funcao para me trazer o objeto
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)