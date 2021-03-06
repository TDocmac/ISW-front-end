import React,{Component} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {salaService} from '../../services'
import { Link } from 'react-router-dom'

class salasList extends Component{
    constructor(props){
        super(props)
        this.state={
            salas:[]
        }
    }
    componentDidMount(){
        salaService.getAll()
        .then((response)=>{
            // console.log('RESPUESTA GET ALL PACIENTES:');
            // console.log(response.data);
            this.setState({
                ...this.state,
                salas:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
          });
    };

    onChangeHandler = (event)=>{
        salaService.getAll()
        .then((response)=>{
            // console.log('RESPUESTA GET ALL PACIENTES:');
            // console.log(response.data);
            this.setState({
                ...this.state,
                salas:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
          });
        alert('Actualizar lista')
    };

    deleteByID=(ID)=>{
        salaService.remove(ID)
        .then((response)=>{
            //console.log(ID);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        alert('Sala eliminada')
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

        //list salas (JSX)
        let salas =this.state.salas;
        let salaList;
        //if empty list item saying 'no salas'
        if(salas.length===0)salaList = <ListGroup.Item className='border'><p><strong>No hay salas ingresadas</strong></p></ListGroup.Item>
        
        //else proper list item 
        else{ salaList = this.state.salas.map(sala =>{
            //default values of the icon set to male
            let color={color:'blue'};
            let fechahoy = new Date().getTime();
            
            
            return(
            <ListGroup.Item className='border' key={sala.id}>
            <p><strong>Nombre: </strong>{sala.nombre} </p>
            <p><strong>Capacidad: </strong>{sala.capacidad}</p>
            <Link className="btn btn-primary btn-sm" to={`/salas/edit/${sala.id}`}>Modificar</Link>
            <Button className= "btn btn-danger btn-sm m-2"
            onClick={()=>{
                this.deleteByID(sala.id);
                window.location.reload(true);
            }}
            >Eliminar</Button>
            </ListGroup.Item>
            )
            });
        }
        return(
            <div style={div}>
                <h3 style={{textAlign: "center"}}>Salas ingresadas</h3>
                <Button  className= 'btn btn-light' onClick={this.onChangeHandler} >
                     <FontAwesomeIcon icon={faRedo} size="xs"  /></Button>
                <ListGroup style={listGroup} className='border' >
                {salaList}
                </ListGroup>
            </div>
        )
    }
};

export default salasList;