import {api} from '../helpers/api'

const basePath= 'api/personal';

function getAll (){
    return api.get(`${basePath}`)
};
function show (personalId){
    return api.get(`${basePath}/id=${personalId}`)
};
function create (data){
    return api.post(`${basePath}`,data)
};
function remove (personalId){
    console.log(personalId);
    return api.delete(`${basePath}/id=${personalId}`)
}

export const personnelService ={
    getAll,
    show,
    create,
    remove
};
