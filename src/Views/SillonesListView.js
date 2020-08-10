import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import SillonesList from '../Components/SillonesList/SillonesList';



function SillonesListView(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col><SillonesList/></Col>
            </Row>
        </Container>
    );
}

export default SillonesListView;