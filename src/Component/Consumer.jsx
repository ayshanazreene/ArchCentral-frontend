
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Projects from './Projects';
import Search from './Search';

function Consumer({name}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container-fluid'>
      {/* navbar */}
      <div style={{height:'100px'}} className='bg-dark'>
      
      {/* menu */}
      <div className="text-center">
        <div className='position-absolute m-4' style={{ top: '0', float: 'left', zIndex: '5' }}>


          <Button variant="" onClick={handleShow} className='fs-5' style={{ backgroundColor: 'white' }}>
            <i className="m-3 fa-solid fa-bars"></i>
          </Button>

          <Offcanvas show={show} onHide={handleClose} style={{ width: '250px' }}>
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
                  <Navbar.Brand href="/dash">Projects</Navbar.Brand>
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
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="/plan">Plans</Navbar.Brand>
                </Container>
              </Navbar>



            </Offcanvas.Body>
          </Offcanvas>

        </div>
      </div>
      </div>
            <img src="https://www.arch2o.com/wp-content/uploads/2016/11/Arch2O-architectural-sketching-10-architecture-sketch-tips.jpg" alt="" className='' style={{ width: '100%', height: '300px', top: 0 }} />
      <div className="row ">

        <div className="col pe-0">
          <div style={{ height: '120px' }}>
            <div className='position-absolute d-flex' style={{ top: '0', float: 'left', marginTop: '295px' }}>
              <img src="https://cdn2.vectorstock.com/i/1000x1000/26/01/young-executive-woman-profile-icon-vector-9692601.jpg" alt="" style={{ width: '150px', height: '150px' }} className='ms-5' />
              <div className="fw-bolder ms-1 mt-5" style={{ top: '0', float: 'left' }}>

                <div style={{ fontSize: '1.7rem' }}>{name}</div>
                <div style={{ fontSize: '1rem' }}><em>Founder/Co-Founder</em> at
                  <span style={{ fontSize: '1rem' }}> Eminence Architect</span> </div>
              </div>
            </div>
          </div>
          
        </div>
        {/* <div className="col-lg-3 border p-0" style={{ height: '500px' }}>
          <Notify />
        </div> */}
      </div>
<Search type='projects'/>
<Projects />
    </div>
  )
}

export default Consumer