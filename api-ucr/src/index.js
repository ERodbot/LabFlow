const app = require("./app")
const mongoose = require('mongoose');
const config = require("./config")

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log("Conectado a la base de datos");
        app.listen(config.PORT, () => {
            console.log(`Server running on port ` + config.PORT);
        });
    })
    .catch((err) => {
        console.error("Error al conectar a la base de datos: " + err);
    });