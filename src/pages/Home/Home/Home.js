import React from 'react';
import Banner from '../Banner/Banner';
import Dentist from '../Dentist/Dentist';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dentist></Dentist>
            <Services></Services>
        </div>
    );
};

export default Home;