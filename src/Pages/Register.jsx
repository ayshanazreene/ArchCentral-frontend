import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Button, Form  } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { useState } from 'react';

function Register() {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
      { name: 'Consumer', value: '1' },
      { name: 'Architect', value: '2' },

  ];
  return (
    <div style={{ width: '350px', marginLeft: '50px', marginTop: '10px' }} className='rounded-3 border shadow text-center'>
    <h2 className='m-2 fw-bolder'>Arch Central Login</h2>
    <div className='m-2'>Welcome to Arch Central!</div>
    
    <Form>
    <ButtonGroup className='m-2'>
        {radios.map((radio, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
                {radio.name}
            </ToggleButton>
        ))}
    </ButtonGroup>
    
    <TextField id="outlined-basic" label="Username" variant="outlined" className='m-2' autoComplete='off' />
    <TextField id="outlined-basic" label="First Name" variant="outlined" className='m-2' />
    <TextField id="outlined-basic" label="Last Name" variant="outlined" className='m-2' />
    <TextField id="outlined-basic" label="Email" variant="outlined" className='m-2' type='email'/>
    <TextField id="outlined-basic" label="Password" variant="outlined" className='m-2' type='password' />

    <div className='m-2'>
        <Button type='submit'>Register</Button>
    </div>
    </Form>
    
    
    
    
   

</div>
  )
}

export default Register