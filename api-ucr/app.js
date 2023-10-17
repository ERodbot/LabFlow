const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;

const usuarioRoutes = require('./routes/usuario');

app.use("/api", usuarioRoutes);