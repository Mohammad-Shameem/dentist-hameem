
import React from 'react';
import { FaTwitterSquare } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGrinHearts } from 'react-icons/fa'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';



import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer '>
            <div className='footer-details'>
                <section className="chamber-area pt-5">
                    <h6><small>Chambers</small></h6>
                    <div className='chambers-line'></div>
                    <h6><small>Gulshan/R-no-3__H/no-5</small></h6>
                    <h6><small>Baridara/R-no-3__H/no-5</small></h6>
                    <h6><small>Boshundhara/R-no-3__H/no-5</small></h6>
                    <h6><small>Badda/R-no-3__H/no-5</small></h6>
                    <h6><small>Tongi/R-no-3__H/no-5</small></h6>
                    <h6><small>Motijhil/R-no-3__H/no-5</small></h6>
                </section>
                <section className="more-services pt-5">
                    <h6><small> My More Services</small></h6>
                    <div className='services-line '></div>
                    <h6><small><li>Dazzle Dentistry</li></small></h6>
                    <h6><small><li>Family Smiles Dental Care</li></small></h6>
                    <h6><small><li>Gentle Care Dental</li></small></h6>
                    <h6><small><li>Happy Teeth Dental Clinic</li></small></h6>
                    <h6><small><li>Happy Kids Dentistry</li></small></h6>
                    <h6><small><li>Luminous Dentistry</li></small></h6>
                </section>

                <section className='contacts-area pt-5'>
                    <div className="d-flex align-items-center">
                        {/*   <FaGrinHearts className='mb-3 me-2'></FaGrinHearts> */}
                        <p className='ms-2'><small>  Keep in Touch</small></p>
                    </div>
                    <div className='touch-line'></div>
                    <div className='d-flex align-items-center'>
                        <FaTwitterSquare className='mb-3 me-2'> </FaTwitterSquare>
                        <p><small>Tweet_@hameem</small></p>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaApple className='mb-2 me-2'></FaApple>
                        <p><small>apple_@hameem</small></p>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaFacebookSquare className='mb-3 me-2'></FaFacebookSquare>
                        <p><small>fb_hameem</small></p>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaGithub className='mb-2 me-2'></FaGithub>
                        <p><small>git_@hameem</small></p>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaLinkedinIn className='mb-3  me-2'></FaLinkedinIn>
                        <p><small>LinkedIn_hameem</small></p>

                    </div>
                    <div className='d-flex align-items-center'>
                        <FaPhoneSquareAlt className='mb-3 me-2'></FaPhoneSquareAlt>
                        <p><small>_018-XXXXXXX</small></p>
                    </div>
                </section>
            </div>
            <p><small>Email:- hameem993@email.com</small></p>
            <p className='pb-5'><small><FontAwesomeIcon className='me-2' icon={faCopyright}></FontAwesomeIcon>copyright {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;