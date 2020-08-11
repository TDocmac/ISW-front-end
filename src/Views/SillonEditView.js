import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import EditSillon from '../Components/Edit/EditSillon';


function Page1(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col ><EditSillon/></Col>
            </Row>
        </Container>
    );
}

export default Page1;