const Registro = require("../models/registro.js")

const getRegistro = async (req, res) => {
    try {
        const registros = await Registro.find({estado: "Pendiente"});
        res.json(registros);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getRegistro
}