const moduloA = require('../../modulo_A')
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Ola Bom Dia')
    res.end()
}).listen(8080)