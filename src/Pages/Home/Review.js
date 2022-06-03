import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Swiper, { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

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
    return (
        <div className='mx-8 my-12'>
            <h1>hello</h1>
            <h1 className='text-4xl text-center my-8 '>Customer Feedback</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
                {
                    updatedReviews.map(updatedReview =>
                        <div key={updatedReview._id} class="card  bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                {!updatedReview.img && <FontAwesomeIcon icon={faUser} className="text-5xl text-white bg-accent p-4 rounded-full" />}
                            </figure>
                            <div class="card-body items-center text-center">
                                {updatedReview.name ? <h2 class="card-title">{updatedReview.name}</h2> :
                                    <h2 class="card-title">User</h2>}
                                <p className='text-lg'>Rating : {updatedReview.rating}</p>
                                <p>{updatedReview.description}</p>

                            </div>
                        </div>

                    )
                }

            </div>

            {/* <Swiper
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
                modules={[Pagination]}
                className="mySwiper"
            >
                {updatedReviews.map = (review => <SwiperSlide key={review._id}>


                </SwiperSlide>)}
            </Swiper> */}
        </div>
    );
};

export default Review;