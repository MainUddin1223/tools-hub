import { faAngleDoubleUp, faArrowUp, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import React from 'react';
import graph from '../../images/graph.png'
import safety from '../../images/safety.jpg'

const Summary = () => {
    return (
        <div>
            <div className='md:w-3/4 mx-2 md:mx-auto  my-16 mt-32 font-sans'>
                <h1 className='text-center text-5xl py-8'>Our Business Statics</h1>
                <img src={graph} alt="" className='mx-auto' />
                <div className="stats w-full ">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FontAwesomeIcon icon={faArrowUp} className="text-5xl font-bold" />
                        </div>
                        <div className="stat-title text-xl ">Total Customer</div>
                        <div className="stat-value text-primary flex">
                            <CountUp start={0} end={850} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>K</div>
                        <div className="stat-desc text-xl">Increase rate 15%</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FontAwesomeIcon icon={faBasketShopping} className="text-5xl font-bold" />
                        </div>
                        <div className="stat-title text-xl">Total Products</div>
                        <div className="stat-value text-secondary">
                            <CountUp start={0} end={550} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp></div>
                        <div className="stat-desc text-xl">1.5M items produced / day</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="stat-figure text-primary">
                                <FontAwesomeIcon icon={faAngleDoubleUp} className="text-5xl font-bold" />
                            </div>
                        </div>
                        <div className="stat-value flex">
                            <CountUp start={0} end={75} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            %</div>
                        <div className="stat-title text-xl">Repeat Orders</div>
                        <div className="stat-desc text-primary font-bold text-xl">Consistently Increasing</div>
                    </div>

                </div>
            </div >
            <div className=' relative h-20'>
                <img src={safety} className=" absolute right-0 w-full md:w-2/4 " alt="" />
            </div>
        </div>

    );
};

export default Summary;