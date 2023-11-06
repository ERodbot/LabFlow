import axios from "./axios";

const enviarReporte = (reporte) => axios.post("enviarReporte", reporte);

export {
    enviarReporte
};