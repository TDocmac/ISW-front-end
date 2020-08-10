import {api} from '../helpers/api'

const basePath= 'v1';

function getAll (){
    return api.get(`${basePath}/sillons`)
};
function show (sillonId){
    return api.get(`${basePath}/id=${sillonId}`)
};
function create (data){
    return api.post(`${basePath}/sillon`,data)
};

export const sillonService ={
    getAll,
    show,
    create
};
