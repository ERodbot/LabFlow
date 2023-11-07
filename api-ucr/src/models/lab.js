const mongoose = require("mongoose");

// Define a schema for the maintenance information
const maintenanceSchema = new mongoose.Schema({
  interval: { type: String, enum: ['dia', 'semana', 'mes', 'año'], required: true },
  amount: { type: Number, required: true }
});

// Define a schema for the laboratorio information
const laboratorioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
  mantenimiento: maintenanceSchema,
});

module.exports = mongoose.model('Laboratorio', laboratorioSchema);
