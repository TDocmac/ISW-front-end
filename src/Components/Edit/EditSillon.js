import React, {Component} from "react";
import {sillonService} from '../../services'
import {Form,Button} from 'react-bootstrap'
import {Link } from 'react-router-dom';
import {patientService} from '../../services';

class EditSillon extends Component{

    constructor(props){
        super(props);
        this.state= {
            sillonID: null,
            sillonEstado:'',
            sillonSala:'',
            sillonPaciente: null,
            pacientes: []
        }

    };

    componentWillMount(){
        this.getSillon();
    }

    getSillon(){
        let id =this.props.match.params.id;
        sillonService.show(id)
        .then(response =>{
            this.setState({
                sillonEstado: response.data.estado,
                sillonSala: response.data.sala,
                sillonPaciente: response.data.paciente,
                sillonID: response.data.id
            })
        });
        patientService.getAll()
            .then(response =>{
                this.setState({
                    pacientes: response.data
                })
            })
    }

    SubmitHandler = (event)=>{
        event.preventDefault()
        //console.log(this.state);
        //simple validation
        let i;
        let encontrado = 0;
        for (i of this.state.pacientes){
            if (this.state.sillonPaciente == i.id) encontrado = 1
        }

        if(this.state.sillonEstado!=='' && this.state.sillonSala !=='' && this.state.sillonPaciente!==null ){
            // alert('axios thing');
            if ( (encontrado !== 0 && this.state.sillonEstado==='Ocupado')||(this.state.sillonEstado==='Disponible'&&this.state.sillonPaciente==='')){
                let date= new Date().toUTCString();

                let data = {
                    id:this.state.sillonID,
                    estado: this.state.sillonEstado,
                    sala: this.state.sillonSala,
                    paciente:this.state.sillonPaciente,
                    //fechaCreacion: date,
                }

                sillonService.update(data.id,data)
                .then((response)=>console.log(response.data))
                .catch(error=> console.log(error));
                alert("Sillón actualizado");
            }
            else if(encontrado !== 0 && this.state.sillonEstado==='Disponible'){
                alert('Sillón no puede estar disponible y con paciente')
            }
            else alert('Paciente no registrado');
        }
        else alert('rellene todos los campos');
    };

    EstadoChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, sillonEstado: event.target.value});
        //console.log(this.state);
    };

    SalaChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, sillonSala: event.target.value});
        //console.log(this.state);
    };
    
    PacienteChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, sillonPaciente: event.target.value});
        //console.log(this.state);
    };

    render(){
        const styles={
            padding:'15px',
            margin: '15px',
            border: '2px solid black',
            textAlign: 'left'

        }
        const form={
            marginBottom: '10px'
        };
        
        return(
            <div style={styles}>
                <Link className="btn btn-primary btn-sm" to="/sillones">Back</Link>
                <h3 style={{textAlign: "center"}}> Modificar sillón</h3>
                <Form style={form} onSubmit={this.SubmitHandler}>
                
                <Form.Group controlId="selectEstado">
                    <Form.Label>Estado del sillon:</Form.Label>
                        <Form.Control as="select" value={this.state.sillonEstado} onChange={this.EstadoChangeHandler}>
                            <option>Disponible</option>
                            <option>Ocupado</option>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId="FormSala" >
                    <Form.Label>Sala a la que pertenece el sillon:</Form.Label>
                    <Form.Control type="text" value={this.state.sillonSala}  onChange={this.SalaChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormPaciente" >
                    <Form.Label>ID del paciente que ocupa el sillon (de estar ocupado):</Form.Label>
                    <Form.Control type= 'text' value={this.state.sillonPaciente} onChange={this.PacienteChangeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default EditSillon;