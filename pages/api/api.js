import Axios from "axios";

let urls = {
    test: `http://127.0.0.1:8000`,
    development: 'http://localhost:3333/',
    production: 'https://your-production-url.com/'
}
const api = Axios.create({
    // baseURL: urls[process.env.NODE_ENV],
    // baseURL: "http://127.0.0.1:8000/",
    baseURL: process.env.API_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;