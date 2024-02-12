import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as formik from 'formik';
import * as yup from 'yup';
import {  Form } from 'react-bootstrap';
function AddProject(props) {

const { Formik } = formik;
const schema = yup.object().shape({
    projectName: yup.string().required(),
    category: yup.string().required(),
    year: yup.string().required(),
    description: yup.string().required(),
    location: yup.string().required(),
    role: yup.string().required(),
    firm: yup.string().required(),
  
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        projectName: 'Project',
        category: 'Residence',
        year: '',
        description:'',
        location: '',
        role: 'Team Member',
        firm: '',
        
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          
            <Form.Group md="4" controlId="validationFormik01">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                name="projectName"
                value={values.projectName}
                onChange={handleChange}
                isValid={touched.projectName && !errors.projectName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={values.category}
                onChange={handleChange}
                isValid={touched.category && !errors.category}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Year of Completion</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={values.year}
                onChange={handleChange}
                isValid={touched.year && !errors.year}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="6" controlId="validationFormik03">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                name="location"
                value={values.location}
                onChange={handleChange}
                isInvalid={!!errors.location}
              />

              <Form.Control.Feedback type="invalid">
                {errors.location}
              </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group a md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group> */}
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={values.role}
                onChange={handleChange}
                isValid={touched.role && !errors.role}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Firm</Form.Label>
              <Form.Control
                type="text"
                name="firm"
                value={values.firm}
                onChange={handleChange}
                isValid={touched.firm && !errors.firm}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
       
          <Button type="submit" className='m-3'>Submit form</Button>
        </Form>
      )}
    </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default AddProject
