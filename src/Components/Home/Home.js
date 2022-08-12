import React from 'react';
import Messnger from '../Messenger/Messnger';
import RouteHelmet from '../RouteHelmet/RouteHelmet';
import AboutUs from './AboutUs/AboutUs';
import CountsUp from './CountsUp/CountsUp';
import Feedback from './Feedback/Feedback';
import Guideline from './Guideline/Guideline';
import Hero from './Hero/Hero';
import Language from './Language/Language';
import LatestBlog from './LatestBlog/LatestBlog';
import Navbar from './Navbar/Navbar';
import Subscribe from './Subscribe/Subscribe';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';


const Home = ({ show, setShow }) => {
    return (
        <>
            <RouteHelmet pages={'Home'}></RouteHelmet>
            <div className='overflow-hidden'>
                <Navbar show={show} setShow={setShow} />
                <Hero></Hero>
                <Guideline></Guideline>
                <Language />
                <AboutUs></AboutUs>
                <UpcomingEvents></UpcomingEvents>
                <CountsUp></CountsUp>
                <Feedback></Feedback>
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