import { fa0, fa4 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center align-items-center'>
            <FontAwesomeIcon icon={fa4} className="text-8xl font-bold text-red-500" />
            <FontAwesomeIcon icon={fa0} className="text-8xl font-bold text-red-500" />
            <FontAwesomeIcon icon={fa4} className="text-8xl font-bold text-red-500" />
            <h1 className='text-8xl'>Page not found</h1>
        </div>
    );
};

export default NotFound;