import axios from "./axios";

const registerRequest = (user) => axios.post(`/register`, user);
const loginRequest = (user) => axios.post("/login", user);
const verifyToken = (token) => axios.get("/verifyToken", token);

export {
    registerRequest,
    loginRequest,
    verifyToken
};