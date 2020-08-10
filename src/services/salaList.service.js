import {api} from '../helpers/api'

const basePath= 'api';

function getAll (){
    return api.get(`${basePath}/salas`)
};
function show (salaId){
    return api.get(`${basePath}/id=${salaId}`)
};
function create (data){
    return api.post(`${basePath}/salas`,data)
};

export const salaService ={
    getAll,
    show,
    create
};
