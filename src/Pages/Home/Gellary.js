import React from 'react';
import fectroy1 from '../../images/fectory-1.jpg'
import fectroy2 from '../../images/fectory-2.jpg'
import fectroy3 from '../../images/fectory-3.jpg'
import fectroy4 from '../../images/fectory-4.jpg'

const Gellary = () => {
    const images = [fectroy1, fectroy2, fectroy3, fectroy4]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto  m-2'>

            {

                images.map((img, index) => <div className='m-4 '> <img key={index} src={img} alt='' className='h-full' /></div>)

            }

        </div>
    );
};

export default Gellary;