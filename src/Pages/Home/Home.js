import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Gellary from './Gellary';
import Heros from './Heros';
import Review from './Review';
import Summary from './Summary';
import Tools from './Tools';
import * as Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    let scroll = Scroll.animateScroll;
    const scrolled = document.documentElement.scrollTop;
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <div className='relative'>
            <Banner></Banner>
           <FontAwesomeIcon className='text-accent fixed right-0 text-4xl z-50 m-4 bottom-5' onClick={scrollToTop} icon={faArrowAltCircleUp} />
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