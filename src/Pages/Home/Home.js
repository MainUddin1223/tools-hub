import React from 'react';
import Scrol from '../Shared/Scroll';
import Banner from './Banner';
import Contact from './Contact';
import Gellary from './Gellary';
import Heros from './Heros';
import Review from './Review';
import Summary from './Summary';
import Tools from './Tools';


const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Banner></Banner>
            <Scrol></Scrol>
            <Gellary></Gellary>
            <Summary></Summary>
            <Tools></Tools>
            <Heros></Heros>

            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;