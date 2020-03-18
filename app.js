const express = require('express');
const mongoose = require('mongoose');

require('./models/Usuarios');
const Usuarios = mongoose.model('usuarios');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/andes', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }).then(() =>{
    console.log("Conexão com MongoDB realizada com sucesso.")
}).catch((erro) =>{
    console.log("Erro: conexão com o MongoDB não realizada com sucesso." + erro)
});


app.get("/usuarios", (req, res) => {
    res.send('Aprendendo a usar o node.');
});

app.post("/usuarios", (req, res) => {
    var usuario = req.body;
    Usuarios.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Usuário não cadatrado com sucesso!"
        })

        return res.json({
            error: false,
            message: "Usuário cadastrado com sucesso!"
        })
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});