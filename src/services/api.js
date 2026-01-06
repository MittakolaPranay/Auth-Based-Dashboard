import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
});

api.interceptors.request.use(
    ( config ) => {
        const token = localStorage.getItem("token");

        if(token) {
            config.headers.Authorization = `Rearer ${token}`
        } 

        return config
    },
    ( error ) => Promise.reject(error)
);

export default api;