import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Gellary from './Gellary';
import Parallox from './Parallox';
import Review from './Review';
import ShowOff from './ShowOff';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShowOff></ShowOff>
            <Parallox></Parallox>
            <Summary></Summary>
            <Gellary></Gellary>
            <Tools></Tools>

            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;