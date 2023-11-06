import axios from "./axios";

const LabsDetails =  () => axios.get("labsDetails");
const updateLab = (lab, id) => axios.put("updateLab", lab, { params: { id } });
const reservaLab = (laboratorio, fecha) => axios.get("reservaLab", {params: {laboratorio: laboratorio, fecha: fecha}});


export {
    updateLab,
    LabsDetails,
    reservaLab
};