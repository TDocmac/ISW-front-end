import React, {Component} from "react";
import {salaService} from '../../services'
import {Form,Button} from 'react-bootstrap'
import {Link } from 'react-router-dom';

class EditSala extends Component{

    constructor(props){
        super(props);
        this.state= {
            salaID:null,
            salaNombre:'',
            salaCapacidad:null
        }

    };

    componentWillMount(){
        this.getSala();
    }

    getSala(){
        let id =this.props.match.params.id;
        salaService.show(id)
        .then(response =>{
            this.setState({
                salaNombre: response.data.nombre,
                salaCapacidad: response.data.capacidad,
                salaID: response.data.id
            })
        })
    }

    SubmitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
        //simple validation
        if(this.state.salaNombre!=='' && this.state.salaCapacidad !==null ){
            // alert('axios thing');
            
            
            let data = {
                id:this.state.salaID,
                nombre: this.state.salaNombre,
                capacidad: this.state.salaCapacidad,
                //fechaCreacion: date,
            }
            console.log(data)
            console.log(data.id)
            
            salaService.update(data.id,data)
            .then((response)=>console.log(response.data))
            .catch(error=> console.log(error));
            alert("Sala actualizada");
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
        
    
        return(
            <div style={styles}>
                <h3 style={{textAlign: "center"}}> Ingreso de sala</h3>
                <Form style={form} onSubmit={this.SubmitHandler}>
                
                <Form.Group controlId="Nombre" >
                    <Form.Label>Nombre de la sala:</Form.Label>
                    <Form.Control type="text" value={this.state.salaNombre} onChange={this.NombreChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormCapacidad" >
                    <Form.Label>Capacidad de la sala:</Form.Label>
                    <Form.Control type="text" value={this.state.salaCapacidad}  onChange={this.CapacidadChangeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default EditSala;