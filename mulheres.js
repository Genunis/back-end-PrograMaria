const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://www.projetodraft.com/wp-content/uploads/2020/02/01-face-ianachan.jpg.webp',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://doispontos.vteximg.com.br/arquivos/ids/174662-1000-1000/image-1.jpg?v=637699229122030000',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request,response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criao e rodando na porta: ", porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)