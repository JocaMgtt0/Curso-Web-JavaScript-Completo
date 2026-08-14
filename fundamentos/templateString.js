const nome = 'carlos';
const concat = 'ola ' + nome + ' !'
const template = `
    ola
    ${nome}!`
console.log(concat, template)

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('olhe')} cuidado`);
