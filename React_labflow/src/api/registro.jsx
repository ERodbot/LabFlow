import axios from "./axios";

const getRegistros = () => axios.get("obtenerRegistros");

export {
    getRegistros
};
