const port = 3000;
const app = require('./app');
const mongoose = require('mongoose');
const urlMongodb = "mongodb+srv://user:1234@cluster0.uxrqdmd.mongodb.net/apiucr";


mongoose.connect(urlMongodb)
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(port, () => {
      console.log(`Server running on port ` + port);
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos: " + err);
  });



