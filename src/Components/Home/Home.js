import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner';
import Slide from './Slide';
import Footer from '../Shared/Footer'
import Animation2 from './Animation2/Animation2';

const Home = ({ reference }) => {
    return (
        <div className='overflow-x-hidden'>
            <Slide></Slide>
            {/* <div className="divider"></div> */}
            {/* <Animation></Animation> */}
            <Animation2 />
            {/* <div className="divider"></div> */}
            <Banner></Banner>
            <div className="divider"></div>
            <Contact reference={reference}></Contact>
            <Footer />
        </div>
    );
};

export default Home;