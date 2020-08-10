import React,{Component} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import { faMale,faFemale,faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {patientService} from '../../services'

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
class patientList extends Component{
    constructor(props){
        super(props)
        this.state={
            patients:[]
        }
    }
    componentDidMount(){
        patientService.getAll()
        .then((response)=>{
            // console.log('RESPUESTA GET ALL PACIENTES:');
            // console.log(response.data);
            this.setState({
                ...this.state,
                patients:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
          });
    };

    onChangeHandler = (event)=>{
        patientService.getAll()
        .then((response)=>{
            // console.log('RESPUESTA GET ALL PACIENTES:');
            // console.log(response.data);
            this.setState({
                ...this.state,
                patients:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
          });
        alert('refreshing list')
    };

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

        //list patients (JSX)
        let patients =this.state.patients;
        let patientList;
        //if empty list item saying 'no patients'
        if(patients.length===0)patientList = <ListGroup.Item className='border'><p><strong>No hay pacientes ingresados</strong></p></ListGroup.Item>
        
        //else proper list item 
        else{ patientList = this.state.patients.map(patient =>{
            //default values of the icon set to male
            let color={color:'blue'};
            let icon=faMale;
            //if female change those values to female
            if(patient.sexo ==="f") {
                color={color:'deeppink'};
                icon =faFemale;
                }
            let fecha = new Date(patient.fechaNacimiento).getTime();
            let fechahoy = new Date().getTime();
            let edad= getAge(fecha)
            
            
            return(
            <ListGroup.Item className='border' key={patient.id}>
            <p><strong>Paciente: </strong>{patient.nombre} <FontAwesomeIcon icon={icon} size="lg"  style={color} /></p>
            <p><strong>Edad: </strong>{edad}</p>
            <p><strong>Diagnostico: </strong>{patient.diagnostico}</p>
            </ListGroup.Item>
            )
            });
        }
        return(
            <div style={div}>
                <h3 style={{textAlign: "center"}}>Pacientes ingresados</h3>
                <small>Refresh </small> 
                <Button  className= 'btn btn-light' onClick={this.onChangeHandler} >
                     <FontAwesomeIcon icon={faRedo} size="xs"  /></Button>
                <ListGroup style={listGroup} className='border' >
                {patientList}
                </ListGroup>
            </div>
        )
    }
};

export default patientList;