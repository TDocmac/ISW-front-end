import axios from 'axios'
export const api= axios.create({
    baseURL: 'https://backend-isw.herokuapp.com/',
    timeout: 20000
})
