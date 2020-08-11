import {api} from '../helpers/api'
const basePath= 'api';

function getAll (){
    return api.get(`${basePath}/sillones`)
};
function show (sillonId){
    return api.get(`${basePath}/id=${sillonId}`)
};
function create (data){
    return api.post(`${basePath}/sillones`,data)
};
function remove (sillonId){
    return api.delete(`${basePath}/sillones/${sillonId}`)
}

export const sillonService ={
    getAll,
    show,
    create,
    remove
};
