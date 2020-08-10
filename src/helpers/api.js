import axios from 'axios'
export const api= axios.create({
    baseURL: 'https://isw-front-end.herokuapp.com/',
    timeout: 20000
})
