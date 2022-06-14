import { faFacebookSquare, faLinkedin, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import hero1 from '../../images/hero-1.jpg'
import hero2 from '../../images/hero-3.jpg'
import hero3 from '../../images/hero2.jpg'

const Heros = () => {
    const heros = [
        {
            id: 0,
            img: hero1,
            name: "Alex Markel",
            title: "CEO",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis natus, qui dolor alias dolorum nisi aliquid neque modi laboriosam?',
            fb: 'https://www.facebook.com/',
            twitter: 'https://www.facebook.com/',
            linkedin: 'https://www.facebook.com/'

        },
        {
            id: 1,
            img: hero2,
            name: "Jams Harris",
            title: "HR",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis natus, qui dolor alias dolorum nisi aliquid neque modi laboriosam?',
            fb: 'https://www.facebook.com/',
            twitter: 'https://www.facebook.com/',
            linkedin: 'https://www.facebook.com/'


        },
        {
            id: 2
            , img: hero3,
            name: "Tim William",
            title: "Advisor",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis natus, qui dolor alias dolorum nisi aliquid neque modi laboriosam?',
            fb: 'https://www.facebook.com/',
            twitter: 'https://www.facebook.com/',
            linkedin: 'https://www.facebook.com/'


        },
    ]
    return (
        <div className='my-16 font-sans '>
            <div className='text-center font-bold'>
                <h1 className=' text-4xl py-8'>Our Heros</h1>
                <p className='pb-8 text-xl text-orange-900'>Our heros take our company next level . They are our real hero</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 '>
                {
                    heros.map(hero => <div className=' mx-2  rounded-lg'>
                        <img src={hero.img} alt="" className='w-48 h-48 p-4 rounded-full mx-auto my-8' />
                        <div className='text-center px-4'>
                            <h1 className='text-2xl font-bold'>{hero.name}</h1>
                            <p className='text-xl py-2 text-orange-900'>{hero.title}</p>
                            <p className='text-lg'>{hero.description}</p>
                        </div>
                        <div className='text-center my-4 text-3xl'>
                            <a href={hero.fb} target="_blank" className='mx-2 '><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            <a href={hero.fb} target="_blank" className='mx-2 '><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href={hero.fb} target="_blank" className='mx-2 '><FontAwesomeIcon icon={faTwitterSquare} /></a>

                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Heros;