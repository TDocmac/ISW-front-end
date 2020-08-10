import React from 'react';
import PersonnelForm from '../Components/AdmissionForm/PersonnelForm';
import { Container,Row,Col } from 'react-bootstrap'


function Page1(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col ><PersonnelForm/></Col>
            </Row>
        </Container>
    );
}

export default Page1;