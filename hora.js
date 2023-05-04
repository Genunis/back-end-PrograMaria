const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraHora(request, response){
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-br')
    response.send(hora)
}

function mostraPorta(){
    console.log("Servidor criao e rodando na porta: ", porta)
}

app.use(router.get('/hora',mostraHora))
app.listen(porta, mostraPorta)