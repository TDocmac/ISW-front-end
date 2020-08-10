import {api} from '../helpers/api'

const basePath= 'v1';

function getAll (){
    return api.get(`${basePath}/salas`)
};
function show (salaId){
    return api.get(`${basePath}/id=${salaId}`)
};
function create (data){
    return api.post(`${basePath}/sala`,data)
};

export const salaService ={
    getAll,
    show,
    create
};
