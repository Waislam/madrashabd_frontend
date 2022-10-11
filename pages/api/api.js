import axios from "axios";

let urls = {
    test: `http://192.168.0.108:8080/`,
    development: 'http://localhost:3333/',
    production: 'https://your-production-url.com/'
};
const api = axios.create({
    // baseURL: urls[process.env.NODE_ENV],
    // baseURL: "http://127.0.0.1:8000/",
    // baseURL: process.env.API_BASE_URL,

    // baseURL: "http://192.168.0.107:8086/",
    baseURL: "http://192.168.0.108:8087/",
    // baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    // baseURL: "http://178.128.94.215:1337/",


    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

    }

});


export default api;

// export const BASE_URL = "http://127.0.0.1:8000/"
// export const BASE_URL = 'http://192.168.0.110:8080/'
export const BASE_URL = 'http://192.168.0.108:8087/'

// export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL


