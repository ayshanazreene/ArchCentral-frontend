import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import AddProject from './AddProject'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Firm() {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(true);
  useEffect(()=>{
    if(sessionStorage.getItem('userType')==1)
      setShow(false)

  },[])
  return (
    <>
      
        <div className='fw-bolder text-light theme-color d-flex align-items-center justify-content-center w-100 m-0 p-0' style={{ height: '80px' }}>
          <h1>Firms</h1>
          <Button id='addProject' hidden={!show} className='text-light theme-color border-0 fw-bolder' style={{ fontSize: '1.5rem' }} onClick={() => setModalShow(true)}><i className="fa-solid fa-plus"></i> </Button>
          <AddProject
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

        
      </div>
      <h3 className='m-2'></h3>
      <div className="ps-3 d-flex justify-content-between">
        <div className=''>
          {/* <ProjectCard imgURL='https://www.eminencearchitects.com/wp-content/uploads/2020/02/01-2.jpg' /> */}
          {/* Firm Card */}
          <Card style={{ width:'80%',height:'100px' }} className='card col rounded-3 mt-3' >
      <Link to='https://www.eminencearchitects.com/' params={{keyValue:'id1'}} style={{textDecoration:'none'}}>
          <Card.Img variant="top" src='https://www.eminencearchitects.com/wp-content/uploads/2020/02/eminence_dlogo1.png' className='image '/>
          </Link>  
          <Card.Body >
            <Card.Title className='middle mt-4'> <div className='ps-3 fw-bolder'> </div></Card.Title>
            <Card.Text >
              <div className='ps-3'>Firm: <a href='#'className='text-dark'>Eminence Architects</a></div>
              
              <div className='middle mt-5'>
             
              </div>
            </Card.Text>
            
          </Card.Body>
          
        </Card>
        </div>
        
      </div>

    </>
  )
}

export default Firm