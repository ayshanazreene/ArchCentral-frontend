import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import AddProject from './AddProject'
import ProjectCard from './ProjectCard';
import { useState } from 'react';

function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(true);
  useEffect(()=>{
    if(sessionStorage.getItem('userType')==1)
      setShow(false)

  },[])
  return (
    <>
      
        <div id='projects' className='fw-bolder text-light theme-color d-flex align-items-center justify-content-center w-100 m-0 p-0' style={{ height: '80px' }}>
          <h1>Projects</h1>
          <Button id='addProject' hidden={!show} className='text-light theme-color border-0 fw-bolder' style={{ fontSize: '1.5rem' }} onClick={() => setModalShow(true)}><i className="fa-solid fa-plus"></i> </Button>
          <AddProject
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

        
      </div>
      <h3 className='m-2'> Completed Projects</h3>
      <div className="ps-3 d-flex justify-content-between">
        <div className=''>
          <ProjectCard imgURL='https://www.eminencearchitects.com/wp-content/uploads/2020/02/01-2.jpg' />
        </div>
        <div className=''>
          <ProjectCard imgURL='https://www.eminencearchitects.com/wp-content/uploads/2020/02/01-1.jpg' />
        </div>
        <div className=''>
          <ProjectCard imgURL='https://www.eminencearchitects.com/wp-content/uploads/2020/02/01-3.jpg' />
        </div>
        <div className=''>
          <ProjectCard imgURL='https://www.eminencearchitects.com/wp-content/uploads/2020/07/01.jpg' />
        </div>
      </div>

    </>
  )
}

export default Projects