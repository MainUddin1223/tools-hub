import { faAngleDoubleUp, faArrowUp, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <div className='w-3/4 mx-auto shadow-2xl my-16 mt-32 font-mono'>
            <h1 className='text-center text-5xl py-8'>Our Business Statics</h1>
            <div class="stats w-full ">

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <FontAwesomeIcon icon={faArrowUp} className="text-5xl font-bold" />
                    </div>
                    <div class="stat-title text-xl ">Total Customer</div>
                    <div class="stat-value text-primary">250K</div>
                    <div class="stat-desc text-xl">Increase rate 15%</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faBasketShopping} className="text-5xl font-bold" />
                    </div>
                    <div class="stat-title text-xl">Total Products</div>
                    <div class="stat-value text-secondary">100</div>
                    <div class="stat-desc text-xl">1.5M items produced / day</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="stat-figure text-primary">
                            <FontAwesomeIcon icon={faAngleDoubleUp} className="text-5xl font-bold" />
                        </div>
                    </div>
                    <div class="stat-value">75%</div>
                    <div class="stat-title text-xl">Repeat Orders</div>
                    <div class="stat-desc text-primary font-bold text-xl">Consistently Increasing</div>
                </div>

            </div>
        </div>

    );
};

export default Summary;