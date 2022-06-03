import React from 'react';
import banner from '../../images/banner.png'
import banner2 from '../../images//elegant-blue-banner-removebg-preview.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                <div class="hero-content flex-col lg:flex-row-reverse" >
                    <img src={`https://i.ibb.co/mSPHqWk/bg-banner-2.jpg`} alt='banner' class="max-w-2xl w-9/12 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-bold">Welcome to <br /><span>HM ELECTRONICS</span></h1>
                        <p class="py-6">We produce and provide micro electronics products.
                            You can order and get our products within a short span of time.We have our personal EPZ and transport service.So,feel free to contact with us</p>
                        <button class="btn btn-primary">Explore more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;