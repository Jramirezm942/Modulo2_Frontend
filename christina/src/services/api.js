import axios from "axios";

const URL = "http://localhost:3000/api";

axios.default.withCredentials = true;

export const _axios = axios.create({
    baseURL: URL,
    timeout:10000
})
