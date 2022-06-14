import React from 'react'
import banner from '../../images/head-banner.jpg'


const Banner = () => {
    return (

        <div className='bg-cover bg-no-repeat bg-center min-h-16' >
 <img src={banner} alt="" className='w-full'/>
        </div>
    );
};

export default Banner;