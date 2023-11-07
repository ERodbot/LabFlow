import axios from "./axios";

const reservaEmail =  (user) => axios.get("reservaEmail", {params: {email: user}});
const reservaInfo = (id) => axios.get("reservaInfo", {params: {id: id}});
const cancelReserva = (id) => axios.put("cancelarReserva", null, {params: {id: id}});
const getReservas = () => axios.get("reservas");
const crearReserva = (reserva) => axios.post("crearReserva", reserva);
const aceptarReserva = (id) => axios.put("aceptarReserva", null, {params: {id: id}});
const rechazarReserva = (id) => axios.put("rechazarReserva", null, {params: {id: id}});

export {
    reservaEmail,
    reservaInfo,
    cancelReserva,
    getReservas,
    crearReserva,
    aceptarReserva,
    rechazarReserva
};