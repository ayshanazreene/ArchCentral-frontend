import React from 'react'
import Header from '../Component/Header'
import SideMenu from '../Component/SideMenu'
import '../App.css'
import { Badge, Carousel, Stack, Table } from 'react-bootstrap'
import Projects from '../Component/Projects'
import { Link } from 'react-router-dom'

function ProjectDetails() {

   const headingArray=["Element","Brand"]
  return (
    <div className='container-fluid p-0 m-0'>
      <Header />
      <SideMenu />
      <div className='text-center '>
        <div className='title-style fw-bolder text-light theme-color  w-100 m-0 p-0 position-absolute' style={{ height: '120px' }}></div>
        <div className='fw-bolder text-light theme-color d-flex align-items-center justify-content-center position-absolute w-100 m-0 p-0' style={{ height: '120px', opacity: '.3' }} ></div>
        <div className='d-flex justify-content-center'>
          <h1 className='position-relative pt-3 fw-bolder' style={{ fontSize: '4rem' }}>Vibrant Minimalism | Residence </h1>
          <Stack direction="horizontal" style={{ zIndex: '6' }}  >
            <Badge bg="dark" className=' rounded-circle'>
              <img src="https://cdn4.iconfinder.com/data/icons/education-flat-9/614/1052_-_Award-1024.png" alt="" style={{ width: '60px', height: '60px', padding: '0px' }} />
            </Badge>
          </Stack>
        </div>
      </div>
      <div className="mt-5 row">
        <div className="col-lg-5 ">
          <h4 className='text-center m-3'>Project Summary</h4>
          <p style={{ fontSize: '1rem', textAlign: 'center' }}>A spacious house with maximum natural lighting and ventilation with no solid doors between the rooms with a clear budget.</p>
          <ul>
            <li className='mt-4'>Project Category: Residence</li>
            <li className='mt-4'>Project Location: Panayikulam, Ernakulam, Kerala</li>
            <li className='mt-4'>Client: Basheer AA</li>
            <li className='mt-4'>Site Area: 8.18 Cents (Including the old house)</li>
            <li className='mt-4'>Area: 1980 Sqft</li>
            <li className='mt-4'>Year of Completion: December 2018</li>
          </ul>
        </div>
        <div className="col-lg-7 text-center">
          <Carousel>
            <Carousel.Item>
              <img style={{ height: '450px' }} src="https://www.eminencearchitects.com/wp-content/uploads/2020/02/01-2.jpg" alt="" />

            </Carousel.Item>
            <Carousel.Item>
              <img style={{ height: '450px' }} src="https://www.eminencearchitects.com/wp-content/uploads/2020/02/04-2.jpg" alt="" />

            </Carousel.Item>
            <Carousel.Item>
              <img style={{ height: '450px' }} src="https://www.eminencearchitects.com/wp-content/uploads/2020/02/08-1.jpg" alt="" />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>
      
      <div className="mt-5 row p-0 m-0">
        <div className="col-lg-9">
        <p>The site is located in the suburb of Ernakulam, Kerala. The rectangular plot was with the road to the south-east, a vacant land on the south-west, a house that abuts the boundary on the north-east and the client’s previous house at the back. It was difficult to know if it was day or night, while inside the client’s previous house. A minimal requirement was stated by the client “A spacious house with maximum natural lighting and ventilation with no solid doors between the rooms with a clear budget”.
          <br />
          The land available was about 4 cents after leaving the previous house and the pathway. The ground floor was designed with a sit-out, a living space, a dining space, a kitchen and a courtyard between the kitchen and living space. The spaces were separated with walls with bigger opening and no doors in between. The whole area acts as a single space with maximum window openings. The cut-out to skylight above the courtyard and the large wall size sliding windows at the north end of the courtyard brings in maximum amount of available natural lighting. The cut-outs above courtyard and the dining space make sure a minimum temperature is maintained at the lower level with the hot air rising upwards.
          <br />
          A colour palette of “Vibrant Minimalism” was followed all through the project. The beige matt finish floor tiles spread all through, the courtyard with steel grey stone finish floor tiles and a glass floor filled with white pebbles, the sit-out and the staircase finished with black lapotra granite constitute the main material palette. The interior furnishings are designed with a combination of vibrant colours and a base shade. Every space is segregated with different shades, which makes the space vibrant within the minimalist colour palette.
          <br />

          A minimal landscape along the sides of courtyard and the front yard complements the aesthetic character of interior and exterior spaces.
        </p>
        </div>
        <div className="col-lg-3 border rounded-2 shadow p-0">
        <div className='theme-color text-light text-center pt-2' style={{height:'60px'}}><h3>Product Spec Sheet</h3></div>
        <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {headingArray.map((_, index) => (
            <th key={index}>{headingArray[index]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          {Array.from({ length: 2 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 2 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 2 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr> */}

      <tr>
        <td>1</td>
        <td>Floor and Wall Covering</td>
        <td><Link to='/brand'>Portbello</Link></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Slated Wood</td>
        <td><Link to='/brand'>Arkos Systems</Link></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Curtains and Blinds</td>
        <td><Link to='/brand'>Hunter Douglas</Link></td>
      </tr>
      </tbody>
    </Table>
    </div>
      </div>
    </div>
  )
}

export default ProjectDetails