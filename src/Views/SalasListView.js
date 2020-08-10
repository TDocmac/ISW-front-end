import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import SalasList from '../Components/SalasList/SalasList';



function SalasListView(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col><SalasList/></Col>
            </Row>
        </Container>
    );
}

export default SalasListView;