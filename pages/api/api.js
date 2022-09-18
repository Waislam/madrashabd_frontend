import Axios from "axios";

let urls = {
    test: `http://127.0.0.1:8000`,
    development: 'http://localhost:3333/',
    production: 'https://your-production-url.com/'
};
const api = Axios.create({
    // baseURL: urls[process.env.NODE_ENV],
    // baseURL: "http://127.0.0.1:8000/",
    // baseURL: process.env.API_BASE_URL,
<<<<<<< HEAD
    baseURL: "http://192.168.0.108:8000/",
=======
    baseURL: "http://192.168.0.112:8086/",
>>>>>>> 83de1b90a7ffa99ae3cb47caa09092f2709133b9
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;

// export const BASE_URL = 'http://192.168.43.58:8080/'
<<<<<<< HEAD
export const BASE_URL = 'http://192.168.0.108:8080/'
=======
// export const BASE_URL = 'http://192.168.0.110:8080/'
export const BASE_URL = 'http://192.168.0.112:8086/'
>>>>>>> 83de1b90a7ffa99ae3cb47caa09092f2709133b9
