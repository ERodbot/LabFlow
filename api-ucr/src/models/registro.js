const mongoose = require('mongoose');


const registroSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  primer_apellido: {
    type: String,
    required: true,
    trim: true
  },
  segundo_apellido: {
    type: String,
    required: true,
    trim: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  estado: {
    type: String,
    enum: ['Pendiente', 'Rechazada', 'Aprobada'],
    required: true,
    default: 'Pendiente'
  }
}, { timestamps: true });

module.exports = mongoose.model('Registro', registroSchema);
