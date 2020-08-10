import axios from 'axios'
export const api= axios.create({
    baseURL: 'https://proyectoisw.herokuapp.com/',
    timeout: 20000
})
