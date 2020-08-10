import React from 'react';
import SillonForm from '../Components/AdmissionForm/SillonForm';
import { Container,Row,Col } from 'react-bootstrap'


function Page1(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col ><SillonForm/></Col>
            </Row>
        </Container>
    );
}

export default Page1;