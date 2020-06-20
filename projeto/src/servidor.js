const porta = 8888
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./database')

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())// converter para JSON
})
app.get('/produtos/:id', (req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log((`Servidor rodando na porta ${porta}.`))
})