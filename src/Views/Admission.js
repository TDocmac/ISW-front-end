import React from 'react';
import PatientsList from '../Components/PatientsList/PatientsList';
import { Container,Row,Col } from 'react-bootstrap'


function Page2(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col ><PatientsList/></Col>
            </Row>
        </Container>
    );
}

export default Page2;