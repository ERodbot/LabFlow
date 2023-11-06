const mongoose = require('mongoose');

// Define the schema
const reporteSchema = new mongoose.Schema({
  laboratorio: { type: String, required: true, trim: true },
  problema: { type: String, required: true, trim: true },
  descripcion: { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Reporte', reporteSchema);
