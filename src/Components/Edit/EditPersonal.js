import React, {Component} from "react";
import {personnelService} from '../../services'
import {Form,Button} from 'react-bootstrap'
import {Link } from 'react-router-dom';

class EditPersonal extends Component{

    constructor(props){
        super(props);
        this.state= {
            personnelID: null,
            personnelName:'',
            personnelRut:'',
            personnelAge: null,
            personnelBirth: '',
            personnelAddress:'',
            personnelNumber:'',
            personnelEspecialidad:'',
            personnelShifts:'',
            personnelPassword: '',
            personnelCargo: ''
        }

    };

    componentWillMount(){
        this.getpersonnel();
    }

    getpersonnel(){
        let id =this.props.match.params.id;
        personnelService.show(id)
        .then(response =>{
            this.setState({
                personnelID: response.data.id,
                personnelName: response.data.nombre,
                personnelRut: response.data.rut,
                personnelAge: response.data.edad,
                personnelBirth: response.data.fechaDeNacimiento,
                personnelAddress:response.data.direccion,
                personnelNumber:response.data.telefono,
                personnelEspecialidad:response.data.especialidad,
                personnelShifts:response.data.turnos,
                personnelPassword: response.data.pass,
                personnelCargo: response.data.cargo
            })
        })
    }

    SubmitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
        //simple validation
        if(this.state.personnelName!=='' && this.state.personnelRut !==''
            && this.state.personnelBirth!=='' && this.state.personnelAddress !=='' && this.state.personnelNumber !=='' && this.state.personnelEspecialidad!=='' 
            && this.state.personnelShifts!=='' && this.state.personnelPassword!=='' && this.state.personnelCargo!==''){
            // alert('axios thing');
            
            let data = {
                id:this.state.personnelID,
                nombre: this.state.personnelName,
                rut: this.state.personnelRut,
                edad:this.state.personnelAge,
                fechaDeNacimiento: this.state.personnelBirth,
                direccion: this.state.personnelAddress,
                telefono: this.state.personnelNumber,
                //fechaCreacion: date,
                especialidad: this.state.personnelEspecialidad,
                turnos: this.state.personnelShifts,
                pass: this.state.personnelPassword,
                cargo: this.state.personnelCargo
            }
            console.log(data)
            console.log(data.id)
            personnelService.update(data.id,data)
            .then((response)=>console.log(response.data))
            .catch(error=> console.log(error));
            alert("Personal actualizado");
        }
        else alert('rellene todos los campos');
    };

    NameChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelName: event.target.value});
        //console.log(this.state);
    };

    RutChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelRut: event.target.value});
        //console.log(this.state);
    };

    BirthChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelBirth: event.target.value});
        //console.log(this.state);
    };

    AddressChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelAddress: event.target.value});
        //console.log(this.state);
    };

    NumberChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelNumber: event.target.value});
        //console.log(this.state);
    };
    
    EspecialidadChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelEspecialidad: event.target.value});
        //console.log(this.state);
    };

    ShiftsChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelShifts: event.target.value});
        //console.log(this.state);
    };
    
    PasswordChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelPassword: event.target.value});
        //console.log(this.state);
    };
    
    CargoChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, personnelCargo: event.target.value});
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
        let date= new Date()
        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
        
            return [year, month, day].join('-');
        }
        let today=formatDate(date)
        return(
            <div style={styles}>
                <p>{today}</p>
                <h3 style={{textAlign: "center"}}> Ingreso de personal</h3>
                <Form style={form} onSubmit={this.SubmitHandler}>
                
                <Form.Group controlId="Name" >
                    <Form.Label>Nombre del personal:</Form.Label>
                    <Form.Control type="text" value={this.state.personnelName} onChange={this.NameChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormRut" >
                    <Form.Label>Rut del personal:</Form.Label>
                    <Form.Control type="text" value={this.state.personnelRut} onChange={this.RutChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormBirth" >
                <Form.Label>Fecha de Nacimiento del personal:</Form.Label>
                <Form.Control type="date" max={today} value={this.state.personnelBirth} onChange={this.BirthChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormAddress" >
                    <Form.Label>Direccion del personal:</Form.Label>
                    <Form.Control type="text" value={this.state.personnelAddress} onChange={this.AddressChangeHandler} />
                </Form.Group>
            
                <Form.Group controlId="FormNumber" >
                    <Form.Label>Numero de telefono del personal:</Form.Label>
                    <Form.Control type="text" value={this.state.personnelNumber} onChange={this.NumberChangeHandler} />
                </Form.Group>
            

                <Form.Group controlId="FormEspecialidad" >
                    <Form.Label>Especialidad del personal:</Form.Label>
                    <Form.Control type="text" value={this.state.personnelEspecialidad} onChange={this.EspecialidadChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormShifts" >
                    <Form.Label>Turnos de trabajo del personal:</Form.Label>
                    <Form.Control type="text" value={this.state.personnelShifts} onChange={this.ShiftsChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormPassword" >
                    <Form.Label>Password del personal:</Form.Label>
                    <Form.Control type="password" value={this.state.personnelPassword} onChange={this.PasswordChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormCargo" >
                    <Form.Label>Cargo del personal:</Form.Label>
                    <Form.Control type="text" value={this.state.personnelCargo} onChange={this.CargoChangeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default EditPersonal;