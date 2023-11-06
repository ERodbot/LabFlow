import axios from "./axios";

const LabsDetails =  () => axios.get("labsDetails");


export {
    LabsDetails
};