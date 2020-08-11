import React,{Component} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import { faMale,faFemale,faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {personnelService} from '../../services'

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
class personnelList extends Component{
    constructor(props){
        super(props)
        this.state={
            personnels:[]
        }
    }
    componentDidMount(){
        personnelService.getAll()
        .then((response)=>{
            console.log('RESPUESTA GET ALL PACIENTES:');
            console.log(response.data);
            this.setState({
                ...this.state,
                personnels:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
          });
    };

    onChangeHandler = (event)=>{
        personnelService.getAll()
        .then((response)=>{
            // console.log('RESPUESTA GET ALL PACIENTES:');
            console.log(response.data);
            this.setState({
                ...this.state,
                personnels:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
          });
        alert('refreshing list')
    };

    deleteByID=(ID)=>{
        personnelService.remove(ID)
        .then((response)=>{
            //console.log(ID);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        alert('Personal eliminado')
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

        //list personnels (JSX)
        let personnels =this.state.personnels;
        let personnelList;
        //if empty list item saying 'no personnels'
        if(personnels.length===0)personnelList = <ListGroup.Item className='border'><p><strong>No hay personal ingresado</strong></p></ListGroup.Item>
        
        //else proper list item 
        else{ personnelList = this.state.personnels.map(personnel =>{
            //default values of the icon set to male
            let color={color:'blue'};
            let fecha = new Date(personnel.fechaNacimiento).getTime();
            let fechahoy = new Date().getTime();
            let edad= getAge(fecha)
            
            
            return(
            <ListGroup.Item className='border' key={personnel.id}>
            <p><strong>Personal: </strong>{personnel.nombre} </p>
            <p><strong>RUT: </strong>{personnel.RUT}</p>
            <p><strong>Fecha de Nacimiento: </strong>{personnel.fechaDeNacimiento}</p>
            <p><strong>Dirección: </strong>{personnel.direccion}</p>
            <p><strong>Telefono: </strong>{personnel.telefono}</p>
            <p><strong>Especialidad: </strong>{personnel.especialidad}</p>
            <p><strong>Turnos: </strong>{personnel.turnos}</p>
            <p><strong>Cargo: </strong>{personnel.cargo}</p>
            <Button className= "btn btn-danger btn-sm m-2"
            onClick={()=>{
                this.deleteByID(personnel.id);
                window.location.reload(true);
            }}
            >Eliminar</Button>
            </ListGroup.Item>
            )
            });
        }
        return(
            <div style={div}>
                <h3 style={{textAlign: "center"}}>Personal ingresado</h3>
                <small>Refresh </small> 
                <Button  className= 'btn btn-light' onClick={this.onChangeHandler} >
                     </Button>
                <ListGroup style={listGroup} className='border' >
                {personnelList}
                </ListGroup>
            </div>
        )
    }
};

export default personnelList;
