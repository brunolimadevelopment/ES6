import axios from 'axios';

// cria uma config. do axios
const api = axios.create({
    baseURL: 'https://api.github.com', // definimos uma baseURL, ou seja todas as requisições vão partir desse endereço.
});

export default api;