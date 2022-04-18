import React from 'react';
import notFound from '../../images/error/constructing404.gif'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;