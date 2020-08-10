import React from 'react';
import SalaForm from '../Components/AdmissionForm/SalaForm';
import { Container,Row,Col } from 'react-bootstrap'


function Page1(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col ><SalaForm/></Col>
            </Row>
        </Container>
    );
}

export default Page1;