import {api} from '../helpers/api-externos'

const basePath= 'v1';

function getAll (){
    return api.get(`${basePath}/pacientes`)
};
function show (pacienteId){
    return api.get(`${basePath}/paciente/id?id=${pacienteId}`)
};
function create (data){
    return api.post(`${basePath}/paciente`,data)
};

export const patientService ={
    getAll,
    show,
    create
};
