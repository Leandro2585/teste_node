const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const china = a => a.pais === 'China'
const genero = b => b.genero === 'F'
const menorSalario = (fun, funAtual) => {
    return fun.salario < funAtual.salario ? fun : funAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data

    const mapeado = funcionarios.filter(china).filter(genero).reduce(menorSalario)
    console.log(mapeado)
})
