import React from 'react';
import DeleteListPersonal from '../Components/DeleteLists/DeleteListPersonal';
import { Container,Row,Col } from 'react-bootstrap'

function DeletePersonal(){

    return (
        <Container fluid="md" >
            <Row>
                <Col><DeleteListPersonal/></Col>
            </Row>
        </Container>
    );

}

export default DeletePersonal;