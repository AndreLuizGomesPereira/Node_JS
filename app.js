const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/andes', { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>{
    console.log("Conexão com MongoDB realizada com sucesso.")
}).catch((erro) =>{
    console.log("Erro: conexão com o MongoDB não realizada com sucesso.")
});


app.get("/usuarios", (req, res) => {
    res.send('Aprendendo a usar o node.');
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});