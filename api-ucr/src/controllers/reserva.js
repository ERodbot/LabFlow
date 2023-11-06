const Reserva = require('../models/reserva');

const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find({});
        res.json(reservas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getReservasEmail = async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ message: "Email is required"});
        }

        const reservas = await Reserva.find({ usuario: email });
        res.json(reservas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getReservasInfo = async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "Id is required"});
        }

        const reserva = await Reserva.findById(id);
        res.json(reserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const cancelReserva = async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "Id is required"});
        }

        const reserva = await Reserva.findById(id);
        reserva.estado = 'Cancelada';
        reserva.save();
        res.json(reserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getReservasEmail,
    getReservasInfo,
    cancelReserva,
    getReservas
}