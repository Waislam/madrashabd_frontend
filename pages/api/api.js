import Axios from "axios";

let urls = {
    test: `http://192.168.0.108:8080/`,
    development: 'http://localhost:3333/',
    production: 'https://your-production-url.com/'
};
const api = Axios.create({
    // baseURL: urls[process.env.NODE_ENV],
    // baseURL: "http://127.0.0.1:8000/",
    // baseURL: process.env.API_BASE_URL,

    // baseURL: "http://192.168.0.107:8086/",
    baseURL: "http://192.168.0.108:8080/",

    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;

// export const BASE_URL = 'http://192.168.43.58:8080/'
// export const BASE_URL = 'http://192.168.0.110:8080/'
// export const BASE_URL = 'http://192.168.0.107:8086/'

export const BASE_URL = 'http://192.168.0.108:8080/'


