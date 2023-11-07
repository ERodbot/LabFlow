const express = require("express");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();
const reservaController = require("../controllers/reserva.js");

router.get("/reservaEmail", reservaController.getReservasEmail);
router.get("/reservaInfo", reservaController.getReservasInfo);
router.put("/cancelarReserva", reservaController.cancelReserva);
router.post("/crearReserva", reservaController.crearReserva);

module.exports = router;