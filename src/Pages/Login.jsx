import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Button, Form  } from 'react-bootstrap';
import { TextField } from '@mui/material';


function Login() {
    const [login, setLogin] = useState(false)
    const [loginerror, setLoginError] = useState(false)

    const [radioValue, setRadioValue] = useState('1');

    const navigate = useNavigate();

    const radios = [
        { name: 'Consumer', value: '1' },
        { name: 'Architect', value: '2' },

    ];

    const responseMessage = (response) => {
        alert("Login Successful!")
        setLogin(true)
        console.log(response);
    };
    const errorMessage = (error) => {
        setLoginError(true)
        console.log(error);
    };

    const loginValidate =()=>{
       
           navigate('/dash',{ state: { key: radioValue } })
       sessionStorage.setItem('userType',radioValue)

    };

    return (

        <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
                
                <div style={{ width: '350px', marginLeft: '30px', marginTop: '100px' }} className='rounded-3 border shadow text-center'>
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
                    
                    <TextField id="outlined-basic" label="Username" variant="outlined" className='m-2'/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" className='m-2' />

                    <div>
                        <Button type='submit' onClick={loginValidate} id='login'>Login</Button>
                    </div>
                    </Form>
                    
                    <div className='ms-5 ps-3 m-3'>
                        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} type='' text='signin-with'/>
                    </div>
                    <div className='m-2'>
                            <Link to='/register'>Register using another Email</Link>
                    </div>
                    
                    
                    {
                        (login &&
                            <Navigate to='/dash' />
                        )}
                    {
                        (loginerror  &&
                            <div className='bg-danger text-light m-2' style={{ width: '50%', height: '20px' }}>Invalid Login Credentials</div>
                        )
                    }

                </div>
                
            </div>
        </div>



    )
}

export default Login