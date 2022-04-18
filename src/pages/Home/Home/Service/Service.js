import React from 'react';
import { Badge, Card, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    const navigate = useNavigate()
    return (
        <div className='g-5 col-sm-12 col-md-4 service'>


            <Badge className='badge' bg="danger">Exclusive</Badge>

            <Card className="border-0">
                <Card.Img className='' style={{ widht: "250px", height: "300px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Trt cost:-{price}</Card.Title>
                    <Card.Text>

                        {description.length > 30 ? <p>{description.slice(0, 180)}{"....."}</p> : <p>{description}</p>}

                    </Card.Text>
                    <button onClick={() => navigate("/checkout")} className='serial-button'>Book Serial</button>
                </Card.Body>

            </Card>


        </div>
    );
};

export default Service;