import { fa0, fa4 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen text-center pt-48 text-center'>
            <FontAwesomeIcon icon={fa4} className="text-8xl font-bold text-red-500" />
            <FontAwesomeIcon icon={fa0} className="text-8xl font-bold text-red-500" />
            <FontAwesomeIcon icon={fa4} className="text-8xl font-bold text-red-500" />
            <br />
            <h1 className='text-8xl m-16'>Page not found</h1>
        </div>
    );
};

export default NotFound;