const fs = require('fs')

const caminho = __dirname + '/arquivo.json' 

// sincrono
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

// assincrona
fs.readFile(caminho, 'UTF-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.bd.host}:${config.db.port}`)
})

fs.readdir(__dirname, (err, arquivos) => {
    console.log(`Conteudo da pasta...`)
    console.log(arquivos)
})