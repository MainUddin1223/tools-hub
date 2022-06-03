import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Gellary from './Gellary';
import Heros from './Heros';
import Parallox from './Parallox';
import Review from './Review';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Tools></Tools>
            <Parallox></Parallox>
            <Heros></Heros>
            <Gellary></Gellary>

            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;