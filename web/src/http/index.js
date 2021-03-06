import axios from "axios";
import provedor from "../store";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json',
    }
});

// Intercepta e passa o token
http.interceptors.request.use(
    function (config) {
        //const token = localStorage.getItem('token');
        const token = provedor.state.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    });

export default http;
