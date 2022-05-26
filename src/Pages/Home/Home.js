import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Gellary from './Gellary';
import Review from './Review';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gellary></Gellary>
            <Tools></Tools>
            <Summary></Summary>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;