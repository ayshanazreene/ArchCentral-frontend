import { Button, Table } from "react-bootstrap"
import Header from "./Header"
import Notify from "./Notify"
import Projects from "./Projects"
import SideMenu from './SideMenu'
import AddExperience from "./AddExperience"
import { useState } from "react"


function Architect(firstName) {
  console.log(firstName.firstName);
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>

      <Header />
      <img src="https://www.arch2o.com/wp-content/uploads/2016/11/Arch2O-architectural-sketching-10-architecture-sketch-tips.jpg" alt="" className='' style={{ width: '100%', height: '300px', top: 0 }} />
      <div className="row ">

        <div className="col pe-0">
          <div style={{ height: '120px' }}>
            <div className='position-absolute d-flex' style={{ top: '0', float: 'left', marginTop: '295px' }}>
              <img src="https://cdn2.vectorstock.com/i/1000x1000/26/01/young-executive-woman-profile-icon-vector-9692601.jpg" alt="" style={{ width: '150px', height: '150px' }} className='ms-5' />
              <div className="fw-bolder ms-1 mt-5" style={{ top: '0', float: 'left' }}>

                <div style={{ fontSize: '1.7rem' }}>{firstName.firstName}</div>
                <div style={{ fontSize: '1rem' }}><em>Founder/Co-Founder</em> at
                  <span style={{ fontSize: '1rem' }}> Eminence Architect</span> </div>
              </div>
            </div>
          </div>
          <div>
            <Projects />
          </div>
        </div>
        {/* <div className="col-lg-3 border p-0" style={{ height: '500px' }}>
          <Notify />
        </div> */}
      </div>

      <div className="row mt-4 ms-2">
        <div className="col-lg-8 border rounded-3 shadow pt-3 w-50 me-4" style={{ height: '450px' }}>
          <div className='theme-color text-light text-center rounded-5 pb-2' style={{ height: '40px' }}>
            <h3>Professional Experience</h3>
            <Button className='text-light theme-color border-0 fw-bolder' style={{ fontSize: '1.5rem' }} onClick={() => setModalShow(true)}><i className="fa-solid fa-plus"></i> </Button>
            <AddExperience
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>

          {/* Sample experience */}
          <div className="mt-5 ps-1">
            <h5>Firm: <span>Eminence Architects</span></h5>
            <div>Position: <span>Founder Director</span></div>
            <div>Term: <span>2008-Present</span></div>
            <div>Skills: <span>Team Management|Eco friendly projects|Extreme Renovation</span></div>
            <hr />
          </div>
        </div>
        <div className="col-lg-4  rounded-3 border shadow pt-3">
          <h3 className='theme-color text-light text-center rounded-5' style={{ height: '40px' }}>Contact Details</h3>
          <Table className='border-0 mt-5' responsive>
            <tbody>
              <tr>
                <td className="border-0 w-25 fs-5 text-center p-3"><i class="fa-solid fa-location-dot"></i></td>
                <td className="border-0 w-50">
                  No. 18/264, G-2,
                  2nd Floor, Vembanad Heights,
                  S.N.Junction, Thrippunithura,
                  Kochi, Kerala 682301
                </td>
              </tr>
              <tr>
                <td className="border-0 w-25 fs-5 text-center p-3"><i class="fa-solid fa-phone"></i></td>
                <td className="border-0 w-50 pt-3">
                  +91 99999 12345
                </td>
              </tr>
              <tr>
                <td className="border-0 w-25 fs-5 text-center p-3"><i class="fa-solid fa-envelope"></i></td>
                <td className="border-0 w-50 pt-3">
                  info@eminencearchitects.com
                </td>
              </tr>
            </tbody>


          </Table>
        </div>
      </div>


      <SideMenu name="Job Martin" />




    </div>
  )
}

export default Architect