const url = 'https://viacep.com.br/ws/01001000/json/'
const axios = require('axios')



axios.get(url).then(f => {

    const funcionarios =  f.data
    console.log(funcionarios)
})
