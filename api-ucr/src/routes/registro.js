const express = require("express");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();
const registroController = require("../controllers/registro.js");

router.get("/obtenerRegistros", registroController.getRegistro);

module.exports = router;