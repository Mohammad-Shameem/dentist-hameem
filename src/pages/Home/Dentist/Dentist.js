import React from 'react';
import dentistLogo from '../../../images/wellcome/wellcome.png'
import dentistImg from '../../../images/dentist/how-to-become-a-dentist.jpg'
import dentist from '../../../images/dentist/dentist.jpg'
import './Dentist.css'


const Dentist = () => {
    return (
        <div id='hameem'>
            <h2 className='my-5' style={{ fontWeight: "800px", fontSize: '50px', color: "#003366" }}> Your Favourite Dentist Site</h2>

            <div className="dentist-info ">
                <div className='dentist-text-div' >
                    <img className='dentist-logo-img rounded-circle' src={dentistImg} alt="" />
                    <div className='all-text'>
                        <div className='dentist-text'>
                            <div>
                                <h2 className='text'>WellCome To <span style={{ color: "orange", fontWeight: "800px" }}> DENTIST HAMEEM SITE </span></h2>
                            </div>
                            <div>
                                <img style={{ width: "100px" }} src={dentistLogo} alt="" />
                            </div>
                        </div>
                    </div>
                    <p> <i>Dentist Hameem is best & leading dental treatment provider in Bangladesh,
                        with a specialized, Dental implant, Endodontic, Pediatric operative, Prosthodontic,
                        oral surgery and Orthodontic Center. The Living legend in Bangladesh dental practice
                        Prof. Dr. Kazi Mehdih Ul Alam establish Kakoli Dental Care in 1977.From that time to
                        till now Kakoli Dental Care is a center of excellence and house of trust in the
                        section of dental practice in Bangladesh. Our philosophy is simple. We provide
                        excellence in dental care, with a focus on patient comfort, satisfaction and
                        dental health, in line with our company’s core value, ‘Creating Happy Smiles’.
                        Here at Dental Aspects, YOU are the number one priority.</i> </p>
                    <button className="author-btn">Contact Author</button>

                </div>

                <div className='dentist'>
                    <img className="rounded-circle" src={dentist} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Dentist;
