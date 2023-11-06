const express = require("express");
const app = express();
const cors = require("cors");

const morgan = require("morgan");
const cookieParser = require("cookie-parser")

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const labRoutes = require("./routes/lab");
const reservaRoutes = require("./routes/reserva");
const reporteRoutes = require("./routes/reporte");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));


app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", labRoutes);
app.use("/api", reservaRoutes);
app.use("/api", reporteRoutes);

module.exports = app