import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Plans() {
    const navigate = useNavigate();
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Basic', value: '1' },
        { name: 'Intermediate', value: '2' },
        { name: 'Premium', value: '3' },
    ];


    return (
        <div>

            <ButtonGroup className='m-2'>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx == radioValue ? 'outline-success' : 'outline-primary'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        className='border shadow m-4'
                    >

                        <Card style={{ width: '14rem', height: '250px' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title className='mt-5'>{radio.name}</Card.Title>
                                <Card.Text>
                                    <div>Free Acces to all website content</div>
                                    <div>5 Contact Details</div>
                                    <div>1 Coupon Code</div>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <div className='text-center'>
            <Button variant="primary" onClick={() => navigate("/dash")}>Confirm Plan</Button>
            </div>
        </div>
    )
}

export default Plans