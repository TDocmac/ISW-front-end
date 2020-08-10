import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import PersonnelList from '../Components/PersonnelList/PersonnelList';



function PersonnelListView(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col><PersonnelList/></Col>
            </Row>
        </Container>
    );
}

export default PersonnelListView;