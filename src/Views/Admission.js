import React from 'react';
import AdmissionForm from '../Components/AdmissionForm/AdmissionForm';
import { Container,Row,Col } from 'react-bootstrap'


function Page2(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col ><AdmissionForm/></Col>
            </Row>
        </Container>
    );
}

export default Page2;