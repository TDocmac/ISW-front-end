import React, {Component} from 'react'
import {Form,Button,FormCheck,} from 'react-bootstrap'
import {salaService} from '../../services'

class salaForm extends Component{

    constructor(props){
        super(props);
        this.state= {
            salaNombre:'',
            salaCapacidad:null
        }

    };

    SubmitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
        //simple validation
        if(this.state.salaNombre!=='' && this.state.salaCapacidad !==null ){
            // alert('axios thing');
            let date= new Date().toUTCString();
            
            let data = {
                nombre: this.state.salaNombre,
                capacidad: this.state.salaCapacidad,
                //fechaCreacion: date,
            }
            console.log(data)
            salaService.create(data)
            .then((response)=>console.log(response.data))
            .catch(error=> console.log(error));
        }
        else alert('rellene todos los campos');
    };

    NombreChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, salaNombre: event.target.value});
        //console.log(this.state);
    };

    CapacidadChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, salaCapacidad: event.target.value});
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
                <h3 style={{textAlign: "center"}}> Ingreso de sala</h3>
                <Form style={form} onSubmit={this.SubmitHandler}>
                
                <Form.Group controlId="Estado" >
                    <Form.Label>Nombre de la sala:</Form.Label>
                    <Form.Control type="text" onChange={this.EstadoChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormCapacidad" >
                    <Form.Label>Capacidad de la sala:</Form.Label>
                    <Form.Control type="text"  onChange={this.SalaChangeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }

};


export default salaForm;