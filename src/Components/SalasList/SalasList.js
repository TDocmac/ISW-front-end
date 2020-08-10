import React,{Component} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import {salaService} from '../../services'

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
            </ListGroup.Item>
            )
            });
        }
        return(
            <div style={div}>
                <h3 style={{textAlign: "center"}}>Salas ingresadas</h3>
                <small>Refresh </small> 
                <Button  className= 'btn btn-light' onClick={this.onChangeHandler} >
                     </Button>
                <ListGroup style={listGroup} className='border' >
                {salaList}
                </ListGroup>
            </div>
        )
    }
};

export default salasList;