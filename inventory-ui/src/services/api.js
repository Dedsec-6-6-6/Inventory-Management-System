import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost:7235/api",
});

API.interceptors.request.use((config) => {
    console.log("Request URL:", config.baseURL + config.url);
    return config;
});

export default API;
export const deleteProduct = (id) => API.delete(`/Products/${id}`);