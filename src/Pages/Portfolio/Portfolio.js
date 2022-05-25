import { faCode, faEnvelope, faLocationDot, faSchool, faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Portfolio = () => {
    return (
        <div className='lg:w-3/4 md:w-3/4 w-full mx-auto my-8 shadow'>
            <h1 className='text-4xl font-bold text-center pt-4'>MD. MAIN UDDIN</h1>
            <p className='text-xl font-bold my-4 text-center'>Jr React Developer</p>
            <div className="md:flex">
                <div className='flex-1'>
                    <img src="https://i.ibb.co/frwVvSV/ukuu.jpg" alt="" className='max-w-xs m-2' />
                </div>
                <div className='mt-24 m-2 flex-1'>

                    <p className='text-xl uppercase'><span className='mr-4 text-xl'><FontAwesomeIcon icon={faLocationDot} /></span>Chottagram , Bangladesh</p>
                    <p className='text-xl my-4 mr-4'><FontAwesomeIcon icon={faEnvelope} /> 2021md.main@gmail.com </p>
                    <p className='text-xl my-4'><span className='text-xl mr-4'><FontAwesomeIcon icon={faSquarePhoneFlip} /></span> +8801852902208</p>
                    <p className='text-xl my-4'><span className='text-xl mr-4'><FontAwesomeIcon icon={faSchool} /></span> Bachelor Of Social Science,NU</p>
                    <div>
                        <FontAwesomeIcon icon={faCode} className='text-xl' />
                        <p className='text-lg font-semibold'>
                            HTML , CSS , Bootstrap5,Tailwind,Daisyui, Javascript , React ,Node.js , Express.js, MongoDB
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
            </div>
        </div>
    );
};

export default Portfolio;