import React,{Component} from 'react'
import {ListGroup, Button,Form} from 'react-bootstrap'
import {sillonService} from '../../services'
import { Link } from 'react-router-dom'

class sillonesList extends Component{
    constructor(props){
        super(props)
        this.state={
            sillons:[],
            sillonEstado:'',
            sillonSala:'',
            sillonPaciente: null
        }
    }
    componentDidMount(){
        sillonService.getAll()
        .then((response)=>{
            // console.log('RESPUESTA GET ALL PACIENTES:');
            // console.log(response.data);
            this.setState({
                ...this.state,
                sillons:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
          });
    };

    onChangeHandler = (event)=>{
        sillonService.getAll()
        .then((response)=>{
            // console.log('RESPUESTA GET ALL PACIENTES:');
            // console.log(response.data);
            this.setState({
                ...this.state,
                sillons:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
          });
        alert('refreshing list')
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
            alert("Sillón ingresado");
            sillonService.create(data)
            .then((response)=>console.log(response.data))
            .catch(error=> console.log(error));
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

    deleteByID=(ID)=>{
        sillonService.remove(ID)
        .then((response)=>{
            //console.log(ID);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        alert('Sillon eliminado')
    }

    editByID=(ID, data)=>{
        const styles={
            padding:'15px',
            margin: '15px',
            border: '2px solid black',
            textAlign: 'left'

        }
        const form={
            marginBottom: '10px'
        };

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

        /*sillonService.post(ID,data)
        .then((response)=>{
            //console.log(ID);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        alert('Sillon actualizado')*/
    }

    render(){
        //sytles
        const div={
            padding:'15px',
            margin: '15px',
            textAlign: 'left',
            border: '2px solid black'
            
        };
        const  listGroup={
            marginBottom: '10px',
            overflowY:'scroll',
            height: '420px'
        };

        //list sillons (JSX)
        let sillons =this.state.sillons;
        let sillonList;
        //if empty list item saying 'no sillons'
        if(sillons.length===0)sillonList = <ListGroup.Item className='border'><p><strong>No hay sillones ingresados</strong></p></ListGroup.Item>
        
        //else proper list item 
        else{ sillonList = this.state.sillons.map(sillon =>{
            //default values of the icon set to male
            let color={color:'blue'};
            let fechahoy = new Date().getTime();
            
            
            return(
            <ListGroup.Item className='border' key={sillon.id}>
            <p><strong>Estado: </strong>{sillon.estado} </p>
            <p><strong>Sala: </strong>{sillon.sala}</p>
            <p><strong>Paciente: </strong>{sillon.paciente}</p>
            <Button className= "btn btn-primary btn-sm"
            onClick={()=>{
                this.editByID(sillon.id,sillon)
                window.location.reload(true);
            }}
            >Modificar</Button>
            <Button className= "btn btn-danger btn-sm m-2"
            onClick={()=>{
                this.deleteByID(sillon.id);
                window.location.reload(true);
            }}
            >Eliminar</Button>
            </ListGroup.Item>
            )
            });
        }
        return(
            <div style={div}>
                <h3 style={{textAlign: "center"}}>Sillones ingresados</h3>
                <small>Refresh </small> 
                <Button  className= 'btn btn-light' onClick={this.onChangeHandler} >
                     </Button>
                <ListGroup style={listGroup} className='border' >
                {sillonList}
                </ListGroup>
            </div>
        )
    }
};

export default sillonesList;