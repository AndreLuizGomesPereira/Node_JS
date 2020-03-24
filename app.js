const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/Usuarios');
const Usuarios = mongoose.model('usuarios');

require('./models/Sobre');
const Sobre = mongoose.model('sobre');

const app = express();

app.use(express.json());


mongoose.connect('mongodb://localhost/andes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso.")
}).catch((erro) => {
    console.log("Erro: conexão com o MongoDB não realizada com sucesso." + erro)
});

//Visualizar todos os cadastrados
app.get("/usuarios", (req, res) => {
    Usuarios.find({}).then((usuarios) => {
        return res.json(usuarios);
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum usuário encontrado."
        });
    });
});

//Listar um por um
app.get("/usuarios/:id", (req, res) => {
    Usuarios.findOne({ _id: req.params.id }).then((usuario) => {
        return res.json(usuario);
    }).catch((err) => {
        return res.status(400).json({
            error: true.value,
            message: "Nenhum usuário encontrado!"
        });
    });
});

//Editar no banco de dados
app.put("/usuarios/:id", (req, res) => {
    Usuarios.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: usuário não editado com sucesso!"
        });
        return res.json({
            error: false,
            message: "Usuário editado com sucesso!"
        });
    });
});

//Deletar no Banco de dados
app.delete("/usuarios/:id", (req, res) => {
    Usuarios.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Usuário não apagado!"
        });
        return res.json({
            error: false,
            message: "Usuário apagado com sucesso!"
        });
    });
});

//Gravação no banco MongoDB
app.post("/usuarios", (req, res) => {
    var usuario = req.body;
    Usuarios.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Usuário não cadatrado com sucesso!"
        })

        return res.json({
            error: false,
            message: "Usuário cadastrado com sucesso!"
        })
    });
});

// CRUD da página Sobre.

// Cadastrar da página Sobre
app.post("/sobre", (req, res) => {
    var sobre = req.body;
    Sobre.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Página Sobre não Encontrada!"
        })

        return res.json({
            error: false,
            message: "Usuário cadastrado com sucesso!"
        })
    });
});

// Visualizar da página Sobre.
app.get("/sobre", (req, res) => {
    Sobre.findOne({}).then((sobre) => {
        return res.json(sobre);
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum conteúdo Sobre encontrado!"
        });
    });
});

app.listen(8080, () => {
        console.log("Servidor iniciado na porta 8080: http://localhost:8080")
    });