import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import EditSillon from '../Components/Edit/EditSillon';


function SillonEditView(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col ><EditSillon/></Col>
            </Row>
        </Container>
    );
}

export default SillonEditView;