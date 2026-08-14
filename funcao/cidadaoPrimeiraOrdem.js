// Higher-order-function

//criar de forma literal

function fun1(){}

//Armazenar em variavel
const fun2 = function(){}

//armazenar em um array
const array = [function(a,b){ return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar atributo em um objeto
const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())

//Passar fun;áo como param
function run(fun){
    fun()
}

//poderia tambem
//run(fun(Executando...))
//caso a funçao estivesse declarada
run(function (){ console.log('Executando...')})


//uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

//posso fazer assim
soma(2,3)(4)
//como posso passar ela para uma variavel
const PrimeiraSoma = soma(2,3)
// E depois passar ela com parametros da outra funcao
PrimeiraSoma(4)