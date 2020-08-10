import React from 'react';

import { Container,Row,Col } from 'react-bootstrap'

function DeletePersonal(){

    return (
        <Container fluid="md" >
            <Row>
                <Col><PersonnelList/></Col>
            </Row>
        </Container>
    );

}

export default DeletePersonal;