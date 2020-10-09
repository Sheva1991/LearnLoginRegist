import axios from "axios";

const API = axios.create({
    baseURL: 'https://lrvl-demo.herokuapp.com/api'
});

API.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default API







