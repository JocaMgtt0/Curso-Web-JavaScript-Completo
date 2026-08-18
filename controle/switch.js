const aprovar = () => console.log('aprovado')
const reprovado =  () => console.log('reprovado')
const honra = () => console.log('honra')
const invalid = () => console.log('nota invalida')

const imprime = function imprimirNota(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log(1) 
        case 9:
            honra()
            break
        case 8: case 7: case 6:
            aprovar()
            break
        case 5: case 4: case 3: case 2: case 1: case 0:
            reprovado()
            break
        default:
            invalid()

    }
} 

imprime(10);
imprime(8);
imprime(1);
imprime('2'); //entende que é um numero
imprime(-1) // agora sim imprime invalid