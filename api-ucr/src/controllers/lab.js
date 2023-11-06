const Lab = require("../models/lab")

const labsDetails = async (req, res) => {
    try {
        const labs = await Lab.find({}, 'nombre ubicacion mantenimiento')
                                .sort({ nombre: 'asc' });
        res.json(labs);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    labsDetails
}