import React from 'react';
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import fectroy2 from '../../images/fectory-2.jpg'
import fectroy4 from '../../images/fectory-4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';



const Gellary = () => {
    const images = [fectroy2, fectroy4];

    return (
        <div className='my-16'>
            <h1 className='text-center text-5xl py-4 font-bold'>Our Battle Ground</h1>
            <p className='text-center text-2xl py-4'>Our Heros have been working here to provide you best product</p>
            <div className="photo-container w-3/4 md:w-2/4 mt-8 mx-auto ">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={fectroy2} alt="" className='w-full ' /></SwiperSlide>
                    <SwiperSlide><img src={fectroy4} alt="" className='w-full' /></SwiperSlide>
                    <SwiperSlide><img src={fectroy2} alt="" className='w-full' /></SwiperSlide>
                    <SwiperSlide><img src={fectroy4} alt="" className='w-full' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Gellary;