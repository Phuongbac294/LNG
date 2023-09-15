import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'content-type': 'application/json'}
})

module.exports = {axiosClient}