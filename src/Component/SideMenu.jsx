import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function SideMenu({name}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className='position-absolute m-4' style={{top:'0',float:'left',zIndex:'5'}}>
 

    <Button variant="" onClick={handleShow} className='fs-5' style={{backgroundColor:'white'}}>
    <i className="m-3 fa-solid fa-bars"></i>
    </Button>

    <Offcanvas show={show} onHide={handleClose} style={{width:'250px'}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Welcome <span>{name}</span>!</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/dash">Home</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#projects">Projects</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/firms">Firms</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/brand">Products</Navbar.Brand>
        </Container>
      </Navbar>
 
      
     
      </Offcanvas.Body>
    </Offcanvas>

      </div>
    );
  
}

export default SideMenu