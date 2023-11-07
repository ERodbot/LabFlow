const Lab = require("../models/lab")
const Reserva = require('../models/reserva');

const labsDetails = async (req, res) => {
    try {
        const labs = await Lab.find({}, 'nombre ubicacion mantenimiento')
                                .sort({ nombre: 'asc' });
        res.json(labs);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateLab = async (req, res) => {
    const { id } = req.query; 
    const { nombre, ubicacion, mantenimiento } = req.body; 
    if (!nombre || !ubicacion || !mantenimiento) {
        return res.status(400).json({ message: "Se requieren nombre, ubicacion y mantenimiento" });
    }

    try {
        const updatedLaboratorio = await Lab.findByIdAndUpdate(id, {
            nombre,
            ubicacion,
            mantenimiento
        },); 

        if (!updatedLaboratorio) {
            return res.status(404).json({ message: "Laboratorio no encontrado" });
        }

        res.json(updatedLaboratorio);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el laboratorio", error: error.message });
    }
};



const reservaLab = async (req, res) => {
    try {
        const { laboratorio, fecha} = req.query;

        if (!laboratorio || !fecha) {
            return res.status(400).json({ message: "Laboratorio and fecha are required"});
        }

        const fechaISO = new Date(fecha);

        fechaISO.setHours(0, 0, 0, 0);
        const endOfDay = new Date(fechaISO);
        endOfDay.setHours(23, 59, 59, 999);


        const reserva = await Reserva.find({ laboratorio: laboratorio,
            fecha: 
            {
                $gte: fechaISO,
                $lte: endOfDay
            }
        });
        res.json(reserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    updateLab,
    reservaLab,
    labsDetails
}