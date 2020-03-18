const express = require('express');
const app = express();

app.get("/usuarios", (req, res) => {
    res.send('Aprendendo a usar o node.');
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});