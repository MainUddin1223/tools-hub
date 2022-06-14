import React from 'react';
import * as Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const Scrol = () => {
    let scroll = Scroll.animateScroll;
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <div>
             <FontAwesomeIcon className='text-accent fixed right-0 text-4xl z-50 m-4 bottom-5' onClick={scrollToTop} icon={faArrowAltCircleUp} />
        </div>
    );
};

export default Scrol;