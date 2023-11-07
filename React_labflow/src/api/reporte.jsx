import axios from "./axios";

const enviarReporte = (reporte) => axios.post("enviarReporte", reporte);
const getReportes = () => axios.get("obtenerReportes");

export {
    enviarReporte,
    getReportes,
};