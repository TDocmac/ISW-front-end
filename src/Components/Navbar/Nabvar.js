import React from 'react';


import { Navbar,Nav } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'


function MyNavbar(){
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand href="#home">Quimioterapia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to='/home'><Nav.Link >Home</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/admission'><Nav.Link >Ingresar Personal</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/personal'><Nav.Link >Ver Personal</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/admissionS'><Nav.Link >Ingresar sillon</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/sillones'><Nav.Link >Ver sillones</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/admissionSala'><Nav.Link >Ingresar sala</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/salas'><Nav.Link >Ver salas</Nav.Link> 
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        );
}

export  default MyNavbar; 