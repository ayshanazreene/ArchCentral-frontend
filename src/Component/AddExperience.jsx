import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as formik from 'formik';
import * as yup from 'yup';
import {  Form } from 'react-bootstrap';

function AddExperience(props) {

const { Formik } = formik;
const schema = yup.object().shape({
    firm: yup.string().required(),
    position: yup.string().required(),
    term: yup.string().required(),
    skills: yup.string().required(),
   
  
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
        firm: 'Firm',
        position: 'Jr.',
        term: '',
        skills:'',
      
        
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          
            <Form.Group md="4" controlId="validationFormik01">
              <Form.Label>Firm Name</Form.Label>
              <Form.Control
                type="text"
                name="firm"
                value={values.firm}
                onChange={handleChange}
                isValid={touched.firm && !errors.firm}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Job Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={values.position}
                onChange={handleChange}
                isValid={touched.position && !errors.position}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Term</Form.Label>
              <Form.Control
                type="number"
                name="term"
                value={values.term}
                onChange={handleChange}
                isValid={touched.term && !errors.term}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                name="skills"
                value={values.skills}
                onChange={handleChange}
                isValid={touched.skills && !errors.skills}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          <Button type="submit" className='m-3'>Add</Button>
        </Form>
      )}
    </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default AddExperience