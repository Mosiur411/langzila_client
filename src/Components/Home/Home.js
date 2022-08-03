import React from 'react';
// import Messnger from '../Messenger/Messnger';
import RouteHelmet from '../RouteHelmet/RouteHelmet';
import AboutUs from './AboutUs/AboutUs';
import CountsUp from './CountsUp/CountsUp';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Guideline from './Guideline/Guideline';
import Hero from './Hero/Hero';
import Language from './Language/Language';
import LatestBlog from './LatestBlog/LatestBlog';
import Navbar from './Navbar/Navbar';
import Subscribe from './Subscribe/Subscribe';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = ({ show, setShow }) => {
    return (
        <>
            <RouteHelmet pages={'Home'}></RouteHelmet>
            <div className='overflow-hidden'>
                <Navbar show={show} setShow={setShow} ></Navbar>
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
                <MessengerCustomerChat
                    pageId="103900041968134"
                    appId="752337902642851"
                />
                {/* <Messnger></Messnger> */}
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;