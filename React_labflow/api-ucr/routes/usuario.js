const express = require('express');
const usuarioController = require('../controllers/usuario');

const api = express.Router();

api.get('/holaMundo', usuarioController.holaMundo);
api.post('/createUsuario', usuarioController.createUsuario);
api.get('/getUsuarios', usuarioController.getUsuarios);
api.get('/getUsuariosFiltered', usuarioController.getUsuariosFiltered);

module.exports = api;