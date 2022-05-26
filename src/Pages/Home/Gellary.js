import React from 'react';
import image1 from '../../images/download (1).jpg'
import image2 from '../../images/download.jpg'
import image3 from '../../images/images (1).jpg'
import image4 from '../../images/images.jpg'

const Gellary = () => {
    return (
        <div>
            <div>
                <div class=" ">
                <h1 className='text-4xl text-center my-8'>Gallery</h1>
                    <div class=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='m-4'>
                        <img src={image1} className='w-full max-h-96' />
                        </div>
                        <div className='m-4 '>
                        <img src={image2} className='w-full max-h-md max-h-96'  />
                        </div>
                    </div>
                    <div class=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='m-4'>
                        <img src={image3} className='w-full max-h-96' />
                        </div>
                        <div className='m-4'>
                        <img src={image4} className='w-full max-h-96' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gellary;