import React, {Component} from 'react'
import {Form,Button,FormCheck,} from 'react-bootstrap'
import {sillonService} from '../../services'

class SillonForm extends Component{

    constructor(props){
        super(props);
        this.state= {
            sillonEstado:'',
            sillonSala:'',
            sillonPaciente: null
        }

    };

    SubmitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
        //simple validation
        if(this.state.sillonEstado!=='' && this.state.sillonSala !=='' && this.state.sillonPaciente!==null ){
            // alert('axios thing');
            let date= new Date().toUTCString();
            
            let data = {
                estado: this.state.sillonEstado,
                sala: this.state.sillonSala,
                paciente:this.state.sillonPaciente,
                //fechaCreacion: date,
            }
            console.log(data)
            sillonService.create(data)
            .then((response)=>console.log(response.data))
            .catch(error=> console.log(error));
            alert("Sillón ingresado");
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
                <h3 style={{textAlign: "center"}}> Ingreso de sillon</h3>
                <Form style={form} onSubmit={this.SubmitHandler}>
                
                <Form.Group controlId="Estado" >
                    <Form.Label>Estado del sillon:</Form.Label>
                    <Form.Control type="text" onChange={this.EstadoChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormSala" >
                    <Form.Label>Sala a la que pertenece el sillon:</Form.Label>
                    <Form.Control type="text"  onChange={this.SalaChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormPaciente" >
                    <Form.Label>ID del paciente que ocupa el sillon (de estar ocupado):</Form.Label>
                    <Form.Control type= 'text'  onChange={this.PacienteChangeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }

};


export default SillonForm;