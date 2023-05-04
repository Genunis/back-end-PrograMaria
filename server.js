const porta = 3333

const express = require("express")
const app = express()

function mostraPorta(){
    console.log("Servidor criao e rodando na porta: ", porta)
}

app.listen(porta, mostraPorta)