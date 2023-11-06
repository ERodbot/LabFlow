import axios from "./axios";

const reservaEmail =  (user) => axios.get("reservaEmail", {params: {email: user}});
const reservaInfo = (id) => axios.get("reservaInfo", {params: {id: id}});
const cancelReserva = (id) => axios.put("cancelarReserva", null, {params: {id: id}});
const getReservas = () => axios.get("reservas");

export {
    reservaEmail,
    reservaInfo,
    cancelReserva,
    getReservas,
};