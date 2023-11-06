import axios from "./axios";

const LabsDetails =  () => axios.get("labsDetails");
const reservaLab = (laboratorio, fecha) => axios.get("reservaLab", {params: {laboratorio: laboratorio, fecha: fecha}});


export {
    LabsDetails,
    reservaLab
};