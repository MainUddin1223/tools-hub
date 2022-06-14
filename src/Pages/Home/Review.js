import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';

const Review = () => {
    const [review, setReview] = useState([]);
    const updatedReviews = [...review].reverse()
    useEffect(() => {
        fetch('https://nameless-tor-88457.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    console.log(updatedReviews);
    const ratingStar = [faStar, faStar, faStar, faStar, faStar]
    return (
        <div className='mx-8 my-12 font-sans mt-16'>
            <h1 className='text-5xl my-16 text-center font-bold'>Our happy customers</h1>
            
            <div className='w-3/4 mx-auto'>

                <Swiper
                    spaceBetween={30}

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
                    {updatedReviews.map((tool) =>
                        <SwiperSlide key={tool._id} className=' m-4  text-gray p-4 shadow-sm hover:shadow-xl bg-sky-100 rounded-xl'>
                            <div className='h-96'>
                                {tool?.img ? <img src={tool.img} alt='' className='rounded-full mx-auto' /> : <FontAwesomeIcon icon={faUser} className=" mx-auto block text-5xl text-white bg-accent p-4 rounded-full" />}
                                <div className='text-center my-4'>
                                    {tool?.name ? <h2 class="text-2xl text-center py-4">{tool?.name}</h2> :
                                        <h2 class="text-2xl text-center py-4">User</h2>}
                                    <p className='text-lg flex justify-center text-orange-500 my-2'>
                                        {
                                            (ratingStar.slice(0, tool.rating)).map((star, index) => <FontAwesomeIcon key={index} icon={star} className='flex ' />)

                                        }
                                    </p>
                                    <p className='mt-4'>{tool?.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Review;