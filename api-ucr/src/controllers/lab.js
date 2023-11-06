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
    labsDetails,
    reservaLab
}