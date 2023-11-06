const express = require("express");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();
const reporteController = require("../controllers/reporte.js");

router.post("/enviarReporte", reporteController.sendReporte);
router.get("/obtenerReportes", reporteController.getReportes);

module.exports = router;