import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://linkExemplo.com.br/'
})

export default Api;