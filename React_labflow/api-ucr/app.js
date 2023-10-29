const express = require('express');
const cors = require("cors");
const app = express();
const whitelist = ['http:/localhost:3000']

app.use(cors({
    origin: whitelist 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;

const usuarioRoutes = require('./routes/usuario');

app.use("/api", usuarioRoutes);