const mongoose = require('mongoose');

const Sobre = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
});
mongoose.model('sobre', Sobre);