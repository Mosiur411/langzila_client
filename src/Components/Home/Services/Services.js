import React from 'react';
import Slider from './Slider';
import './Service.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
  return (
    <div className="full-app ">

      <div className="App">
        <section className='text-section'>
          <h4 className='sm-tittle font-black text-xl text-[#ee0c0c] py-1'>Our Services</h4>
          <h1 className='tittle text-4xl font-bold text-[#221638]'>Best Services for Kids</h1>
          <h4 className='py-2'>

            Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</h4>
        </section>
        <section className='slide-section'>
          <Slider></Slider>
        </section>
      </div>

      <img className='back-img w-100  mt-[-20%] md:mt-[-5%] ml-[10%] animate-fade' src={require('../../assets/Servicsimg/kidsbg.png')} alt="assets" />
    </div>
  );
};

export default Services;