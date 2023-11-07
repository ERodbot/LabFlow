const Reporte = require('../models/reporte');

const sendReporte = async (req, res) => {
    try {
        const { laboratorio, problema, descripcion } = req.body;

        if (!laboratorio || !problema || !descripcion) {
            return res.status(400).json({ message: "Laboratorio, problema and descripcion are required"});
        }

        const reporte = new Reporte({ laboratorio, problema, descripcion });
        await reporte.save();
        res.json(reporte);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find({});
        res.json(reportes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


module.exports = {
    sendReporte,
    getReportes
}