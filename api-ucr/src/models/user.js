const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    admin: {type: Boolean, required: true, default: false},
    estado: { type: String, enum: ['Pendiente', 'Aprobado'], required: true, default: 'Pendiente' }
});

module.exports = mongoose.model('User', userSchema);