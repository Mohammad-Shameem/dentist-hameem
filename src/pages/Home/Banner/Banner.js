import React from 'react';
import { Carousel } from 'react-bootstrap';
import dentistDay from '../../../images/banner/national day.webp'
import specialDentis from '../../../images/banner/dental specialist.jpg'
import assistant from '../../../images/banner/dentist assistant.jpg'


const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img style={{ height: "563px" }}
                    className="d-block w-100"
                    src={dentistDay}
                    alt=""
                />
                <Carousel.Caption>
                    <h5 style={{ color: "salmon" }}>Very Happy National Dentist Day</h5>
                    <p>We wish you a very happy Nationl Dentist Day From <span style={{ color: "orange" }}>Dentist Care</span>.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={specialDentis}
                    alt=""
                />
                <Carousel.Caption>
                    <h5 style={{ color: "salmon" }}>Get in touch with world class Dentist</h5>
                    <p>Your Teeth is being Your <span style={{ color: "orange" }}> Nightmare !!! Get our Special Dentist 24/7</span></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: "563px" }}
                    className="d-block w-100"
                    src={assistant}
                    alt=""
                />
                <Carousel.Caption>
                    <h5 style={{ color: "salmon" }}>Caring Assistants</h5>
                    <p>We have such a lot caring Assitant in our <span style={{ color: 'orange' }}>Dentist Care</span> </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;