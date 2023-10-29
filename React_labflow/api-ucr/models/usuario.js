const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    correo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido1: {
        type: String,
        required: true
    },
    apellido2: {
        type: String,
        required: true
    },
    
    contrasenna: {
        type: String,
        required: true
    },
    confirmacionC: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);