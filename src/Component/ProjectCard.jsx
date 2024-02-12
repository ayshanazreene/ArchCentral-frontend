import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import '../App.css'
function ProjectCard(imgURL) {
    
  return (
    <>
    <Card style={{ width:'90%' }} className='card col rounded-3 mt-3' >
      <Link to='/project' params={{keyValue:'id1'}} style={{textDecoration:'none'}}>
          <Card.Img variant="top" src={imgURL.imgURL} className='image '/>
          </Link>  
          <Card.Body >
            <Card.Title className='middle mt-4'> <div className='ps-3 fw-bolder'> <span>Vibrant Minimalism</span></div></Card.Title>
            <Card.Text >
              <div className='ps-3'>Firm: <a href='#'className='text-dark'>Eminence Architects</a></div>
              <div className='ps-3 '><em>My Role: <span>Chief Architect</span></em></div>
              <div className='middle mt-5'>
              <div className='ps-3'>Category: <span>Residence</span></div>
              <div className='ps-3'>Year: <span>2023</span></div>
              <div className='ps-3'>Location: <span>Calicut,Kerala</span></div>
              <Button variant="secondary" className='m-3'><i class="fa-solid fa-trash "></i></Button>
              <Link to='/project' params={{keyValue:'id1',scroll}} style={{textDecoration:'none',color:'black',fontSize:'1.5rem',textAlign:'center'}}>
              <i className="fa-solid fa-arrow-up-right-from-square p-2"></i>
              </Link>
              </div>
            </Card.Text>
            
          </Card.Body>
          
        </Card>
    </>
  )
}

export default ProjectCard