import {api} from '../helpers/api'

const basePath= 'v1';

function getAll (){
    return api.get(`${basePath}/personal`)
};
function show (personalId){
    return api.get(`${basePath}/id=${personalId}`)
};
function create (data){
    return api.post(`${basePath}/personal`,data)
};

export const personnelService ={
    getAll,
    show,
    create
};
