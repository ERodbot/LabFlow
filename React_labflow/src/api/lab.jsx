import axios from "./axios";

const LabsDetails =  () => axios.get("labsDetails");
const updateLab = (lab, id) => axios.put("updateLab", lab, { params: { id } });


export {
    LabsDetails,
    updateLab
};