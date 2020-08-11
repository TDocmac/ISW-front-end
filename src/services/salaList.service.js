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
function remove (salaId){
    return api.delete(`${basePath}/salas/${salaId}`)
}

export const salaService ={
    getAll,
    show,
    create,
    remove
};
