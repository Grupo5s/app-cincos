import axios from 'axios';

const api = axios.create({
    baseURL: 'https://e5sapi-producao.azurewebsites.net/api/',
    //baseURL: 'https://e5sapi.azurewebsites.net/api/'
});


export default api;