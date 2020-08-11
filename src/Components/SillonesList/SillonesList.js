import React,{Component} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import {sillonService} from '../../services'
import { Link } from 'react-router-dom'

class sillonesList extends Component{
    constructor(props){
        super(props)
        this.state={
            sillons:[]
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
            <Link to={`/sillones/edit/${sillon.id}`}>Modificar</Link>
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