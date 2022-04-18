import React from 'react';
import laodingBird from '../../../images/loading/bird-loading.gif'
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <img src={laodingBird} alt="" />
        </div>
    );
};

export default Loading;