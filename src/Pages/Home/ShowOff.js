import React from 'react';
import human from '../../images/warker-removebg-preview.png'
import human2 from '../../images/worker-2-removebg-preview.png'
import wave from '../../images/wave.png'

const ShowOff = () => {
    return (
        <div className='relative bg-cover bg-no-repeat  p-4 pb-16 m-0 place-items-center ' >
            <div className=' '>
                <div className='w-96 absolute -bottom-32 -left-32 -z-10'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#BAE6FD" d="M59,-4.1C59,23,29.5,46.1,0.6,46.1C-28.2,46.1,-56.4,23,-56.4,-4.1C-56.4,-31.2,-28.2,-62.5,0.6,-62.5C29.5,-62.5,59,-31.2,59,-4.1Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className='w-96 absolute -top-64 -right-32 -z-10'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#BAE6FD" d="M59,-4.1C59,23,29.5,46.1,0.6,46.1C-28.2,46.1,-56.4,23,-56.4,-4.1C-56.4,-31.2,-28.2,-62.5,0.6,-62.5C29.5,-62.5,59,-31.2,59,-4.1Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ShowOff;