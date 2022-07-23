import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import LatestBlog from './LatestBlog/LatestBlog';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Feedback></Feedback>
            <AboutUs></AboutUs>
            <div className='mb-24'>
                <LatestBlog></LatestBlog>
            </div>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;