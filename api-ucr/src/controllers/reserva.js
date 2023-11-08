const Reserva = require('../models/reserva');

const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find({ estado: "Pendiente" });
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
        reserva.reservation = false;
        reserva.save();
        res.json(reserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const crearReserva = async (req, res) => {
    try {
        const { laboratorio, fecha, inicio, final, usuario, sigla_del_curso, nombre_del_curso, grupo, observaciones } = req.body;

        if (!laboratorio || !fecha || !inicio || !final || !usuario || !sigla_del_curso || !nombre_del_curso || !grupo) {
            return res.status(400).json({ message: "Laboratorio, fecha, inicio, final, usuario, sigla_del_curso, nombre_del_curso and grupo are required"});
        }

        if (inicio >= final) {
            return res.status(400).json({ message: "Inicio debe de estar antes de final"});
        }

        const startOfDay = new Date(fecha);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(fecha);
        endOfDay.setHours(23, 59, 59, 999);


        const reservasExistentes = await Reserva.find({
            laboratorio: laboratorio, 
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay
            },
            reservation: true,
            $or: [
                // Reserva empieza durante otra reserva
                { inicio: {$lt: final}, final: {$gt: inicio} },
                // Reserva empieza antes y termina durante otra reserva
                { inicio: {$lt: inicio}, final: {$gt: final} }
            ]
        });

        if (reservasExistentes.length > 0) {
            return res.status(400).json({ message: "Ya existe una reserva en este horario"});
        } else {
            const reserva = new Reserva({ laboratorio, fecha: startOfDay, inicio, final, usuario, sigla_del_curso, nombre_del_curso, grupo, observaciones });
            await reserva.save();
            res.json(reserva);
        }
    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const aceptarReserva = async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "Id is required"});
        }

        const reserva = await Reserva.findById(id);
        reserva.estado = 'Aprobada';
        reserva.save();
        res.json(reserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const rechazarReserva = async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "Id is required"});
        }

        const reserva = await Reserva.findById(id);
        reserva.estado = 'Rechazada';
        reserva.reservation = false;
        reserva.save();
        res.json(reserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getReservasEmail,
    getReservasInfo,
    getReservas,
    cancelReserva,
    crearReserva,
    aceptarReserva,
    rechazarReserva
}