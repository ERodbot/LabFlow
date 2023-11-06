const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: Date, required: true },
  inicio: { type: String, required: true, match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/ },
  final: { type: String, required: true, match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/ },
  usuario: { type: String, required: true },
  sigle_del_curso: { type: String, required: true },
  nombre_del_curso: { type: String, required: true },
  grupo: { type: String, required: true },
  observaciones: String,
  estado: { type: String, enum: ['Pendiente', 'Aprobada', 'Rechazada', 'Cancelada'], required: true, default: 'Pendiente' },
  reservation: {type: Boolean, required: true, default: true}
});

module.exports = mongoose.model('Reserva', reservaSchema);