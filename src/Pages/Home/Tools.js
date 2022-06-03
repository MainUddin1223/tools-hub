import { faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import useTools from '../Hooks/useTools';
import Spinner from '../Spinner/Spinner';
import tagBanner from '../../images/tag_banner-removebg-preview.png'
import { Swiper, SwiperSlide } from 'swiper/react';

const Tools = () => {
    const [user, loading] = useAuthState(auth);
    const email = user?.email;
    const [isAdmin] = useAdmin(email)
    const [tools, isFetching, isLoading] = useTools();
    if (loading || isFetching || isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h1 className=' text-5xl my-8 ml-8 py-8 font-serif'>Available Products</h1>

            <div className="w-3/4 mx-auto">
                <Swiper
                    spaceBetween={50}

                    breakpoints={{
                        400: {
                            width: 400,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 4,
                        },
                    }}
                >
                    {tools.map((tool) =>
                        <SwiperSlide className=' relative  m-4  text-gray p-4 shadow-sm hover:shadow-xl bg-sky-200 rounded-xl'>
                            <Link to={`/preview/${tool._id}`}>
                                <div className='absolute -top-8 right-0 z-0'>
                                    <p className='absolute text-orange-900 top-8 right-4 pt-4 z-1 font-bold '>Available: {tool.quantity}</p>
                                    <img src={tagBanner} alt="" className='mt-0 w-56 h-28' />
                                </div>
                                <div className='p-4'>
                                    <img src={tool?.img} alt="" className='w-48 h-48 mt-16' />
                                    <div className='font-bold text-orange-900'>
                                        <h1 className='text-2xl '>{tool?.name}</h1>
                                        <p className='text-lg'>$ {tool?.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>)}
                </Swiper>
            </div>
            <div className='mx-auto py-8 px-8'>
                <Link to='/tools' className='  block mx-auto  my-8 text-2xl text-center text-white'><span className='bg-primary py-2 px-8 rounded'>Explore more <FontAwesomeIcon icon={faArrowRight} /></span></Link>
            </div>
        </div>

    );
};

export default Tools;