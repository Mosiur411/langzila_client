import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Guideline from './Guideline/Guideline';
import Hero from './Hero/Hero';
import LatestBlog from './LatestBlog/LatestBlog';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import Subscribe from './Subscribe/Subscribe';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';

const Home = ({ show, setShow, theme, setTheme }) => {
    return (
        <div className='overflow-hidden'>
            <Navbar show={show} setShow={setShow} them={theme} setTheme={setTheme}></Navbar>
            <Hero></Hero>
            <Guideline></Guideline>
            <Services></Services>
            <Feedback></Feedback>
            <AboutUs></AboutUs>
            <UpcomingEvents></UpcomingEvents>
            <div className='mb-24'>
                <LatestBlog></LatestBlog>
            </div>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;