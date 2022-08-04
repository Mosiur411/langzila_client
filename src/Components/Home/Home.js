import React from 'react';
import Messnger from '../Messenger/Messnger';
import RouteHelmet from '../RouteHelmet/RouteHelmet';
import AboutUs from './AboutUs/AboutUs';
import Feedback from './Feedback/Feedback';
import Guideline from './Guideline/Guideline';
import Hero from './Hero/Hero';
import Language from './Language/Language';
import LatestBlog from './LatestBlog/LatestBlog';
import Subscribe from './Subscribe/Subscribe';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';


const Home = ({ show, setShow }) => {
    return (
        <>
            <RouteHelmet pages={'Home'}></RouteHelmet>
            <div className='overflow-hidden'>

                <Hero></Hero>
                <Guideline></Guideline>
                <Language />
                <Feedback></Feedback>
                <AboutUs></AboutUs>
                <UpcomingEvents></UpcomingEvents>
                <div className='mb-24'>
                    <LatestBlog></LatestBlog>
                </div>
                <Subscribe></Subscribe>
                <Messnger></Messnger>

            </div>
        </>
    );
};

export default Home;