import React from 'react';
import './Feedback.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Feedback = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }

    return (
        <section>
            <div  className='bg-[#6dbbbd] w-100 h-100 py-20'>
                <div className='text-center relative text-white mb-10'>
                    <div data-aos="fade-down" >
                        <p className='font-medium'>TESTIMONIALS</p>
                        <h1 className='font-bold py-2 text-3xl '>Our Guardian Feedback</h1>
                        <p>We always give extra care to our student's skills improvements and feel excited to</p>
                        <p>share our latest research and learnings!</p>
                    </div>
                    <div className='absolute top-0 right-14 hidden md:block covid9'>
                        <img src={require('../../assets/vairas.png')} alt="assets"  />
                    </div>
                </div>
                {/* =================== slider assets ====================  */}
                <div>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        className='text-center'>
                        {/* ================== user 1  */}
                        <div>
                            <div className='comment text-center pl-[80px] pr-[50px] py-16'>
                                <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                            <div className='w-[400px]'>
                                <img src={require('../../assets/user1.jpg')} alt="assets" className='w-16 rounded-full mx-auto border-orange-500 border-2' />
                                <h1 className='text-xl font-medium text-white'>Mosiur Islam</h1>
                            </div>
                        </div>
                        {/* ================== user 2  */}
                        <div>
                            <div className='comment text-center pl-[80px] pr-[50px] py-16'>
                                <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                            <div className='w-[400px]'>
                                <img src={require('../../assets/user1.jpg')} alt="assets" className='w-16 rounded-full mx-auto border-orange-500 border-2' />
                                <h1 className='text-xl font-medium text-white'>Mosiur Islam</h1>
                            </div>
                        </div>
                        {/* ================== user 3  */}
                        <div>
                            <div className='comment text-center pl-[80px] pr-[50px] py-16'>
                                <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                            <div className='w-[400px]'>
                                <img src={require('../../assets/user1.jpg')} alt="assets" className='w-16 rounded-full mx-auto border-orange-500 border-2' />
                                <h1 className='text-xl font-medium text-white'>Mosiur Islam</h1>
                            </div>
                        </div>
                        <div>
                            <div className='comment text-center pl-[80px] pr-[50px] py-16'>
                                <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                            <div className='w-[400px]'>
                                <img src={require('../../assets/user1.jpg')} alt="assets" className='w-16 rounded-full mx-auto border-orange-500 border-2' />
                                <h1 className='text-xl font-medium text-white'>Mosiur Islam</h1>
                            </div>
                        </div>
                    </Carousel>

                </div>
            </div>
            <img src={require('../../assets/Pakhi.png')} alt="assets" className='w-40  mt-[-20%] md:mt-[-5%] ml-[10%] animate-bounce' />
        </section>
    );
};

export default Feedback;