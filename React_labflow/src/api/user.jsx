import axios from "./axios";

const getUsers =  () => axios.get("users");

export {
    getUsers,
};