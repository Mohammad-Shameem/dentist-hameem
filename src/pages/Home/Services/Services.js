import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Home/Service/Service';
import dentist from '../../../images/dentist/dentist.jpg'
import './Serivces.css'

const Services = () => {
    const { services } = useServices()
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    return (
        <div id='awesome-services' aria-live="polite"
            aria-atomic="true"
            className=" position-relative"
            style={{ minHeight: '240px' }}
        >
            <ToastContainer position="top-end" className="p-3">
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img style={{ width: "50px", height: "50px" }}
                            src={dentist}
                            className="rounded-circle me-2"
                            alt=""
                        />
                        <strong className="me-auto">Hameem</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>Yaaay ! its going ramadan offer on exclusive cosmetic whitening. </Toast.Body>
                </Toast>
            </ToastContainer>
            <h2 className='awesome-services'>My Awesome Services</h2>

            <div style={{ marginBottom: "100px" }} className='row mx-auto  services'>

                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>)

                }

            </div>
        </div>
    );
};

export default Services;