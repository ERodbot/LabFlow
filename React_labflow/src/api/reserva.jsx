import axios from "./axios";

const reservaEmail =  (user) => axios.get("reservaEmail", {params: {email: user}});
const reservaInfo = (id) => axios.get("reservaInfo", {params: {id: id}});

export {
    reservaEmail,
    reservaInfo
};