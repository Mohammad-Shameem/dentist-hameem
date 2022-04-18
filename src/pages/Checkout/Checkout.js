import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import dentistLogo from '../../images/dentist/how-to-become-a-dentist.jpg'
import paypal from '../../images/payment-logo/paypal.png'
import amazon from '../../images/payment-logo/amazon.png'
import mastercard from '../../images/payment-logo/mastercard.jpg'
import skrill from '../../images/payment-logo/skrill.jpg'
import visa from '../../images/payment-logo/visa.jpg'
import nogod from '../../images/payment-logo/nogod.jpg'
import './Checkout.css'

const Checkout = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const [agree, setAgree] = useState(false)



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const proceedPayment = () => {
        handleShow()
    }

    return (
        <div className='checkout mt-2'>
            <h2 className='mb-5'>Verify  Payment <span style={{ fontWeight: "600", fontSize: "45px", color: "#0B0B45" }} > {user?.displayName}</span></h2>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control type="email" value={user.email} readOnly />   {/* cant edit the field.so readOnly in bootstrap input field is optional if you use value in it.. */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" value={user.displayName} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="A/c no" required />
                    <Form.Label>we take Fee in advance for make sure your Booking</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="phone Number" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                    <Form.Label>verify its you</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className='d-flex'>
                        <Form.Check className="me-3" onClick={() => setAgree(!agree)} type="checkbox" />

                        <p className={agree ? "text-success" : ""}> check the left Box if you sure Booking serial.you cant undo Booking.</p>

                    </div>
                </Form.Group>
                <input
                    onClick={proceedPayment}
                    disabled={!agree}
                    className='submit-button w-50'
                    type="submit" value="Proceed Booking" />
            </Form>
            <div className='d-flex align-items-center justify-center w-50 mx-auto '>
                <div className='signup-line1'></div>
                <p className='mt-2 ps-2 pe-2 '>or</p>
                <div className='signup-line2'></div>
            </div>
            <h2 style={{ color: "#0B0B45" }} className='mt-3 '>You Can Also Pay With</h2>
            <div className='payment-area'>
                <img style={{ borderRadius: "30px" }} src={paypal} alt="" />
                <img style={{ borderRadius: "30px" }} src={amazon} alt="" />
                <img style={{ borderRadius: "30px" }} src={mastercard} alt="" />
                <img style={{ borderRadius: "30px" }} src={skrill} alt="" />
                <img style={{ borderRadius: "30px" }} src={visa} alt="" />
                <img style={{ borderRadius: "30px" }} src={nogod} alt="" />
            </div>

            <Modal
                onClick={() => navigate('/home')}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <img style={{ width: "70px", height: "70px", border: "2px solid #0B0B45" }} className="rounded-circle me-2" src={dentistLogo} alt="" />
                    <Modal.Title>Dentist Hameem</Modal.Title>
                </Modal.Header>
                <h6 className='p-5'>  Thanks For Booking,we will call you soon. <br />
                    keep in Touch....</h6>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal>
        </div>
    );
};

export default Checkout;