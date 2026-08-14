const escola = 'Coder';
console.log(escola.charAt(3)); //retorna letra na posicao passada
console.log(escola.charAt(10)); //nao da erro se nao achar o final
console.log(escola.charCodeAt(2)); //retorna o valor na tabela Asc
console.log(escola.indexOf('C')); // retorna o indice
console.log(escola.indexOf('3')); // se nao existe retorna -1
console.log(escola.substring(0,2)) //retorna os elementos no intervalos
console.log(escola.substring(2)); // retorna somente o caracter nessa posicao
console.log('escola'.concat('!')); //concatena
console.log(escola.replace('C' ,'e')); // substitui valos por outro
console.log('ana, mario, preda'.split(',')); //substitui por um array