import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const UpcomingEvents = () => {
    return (
        <div>
            <div className='bg-secondary mb-24'>
                <img className='w-full' src="https://i.ibb.co/4J5w3Jp/events-rectangle1.png" alt="" />
                <img  className='float-right pr-12 mt-5 lg:block hidden covid9' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/07/k-shape17.png" alt="" />
                <div class="text-gray-600 body-font">
                    <div class="container px-5 py-20 mx-auto">
                        <div className='text-center lg:w-[760px] mx-auto'>
                            <h3 className='uppercase text-primary font-semibold'>Events</h3>
                            <h1 className='py-2 text-3xl font-bold text-accent'>Our Upcoming Events</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class="flex flex-wrap lg:px-12 pt-16">
                            <div data-aos="fade-up-right" class="p-4 md:w-1/2 w-full">
                                <div class="card lg:card-side bg-base-100 shadow-md ">
                                    <figure><img className='h-full w-full lg:w-[280px]' src="https://i.ibb.co/yWVMKF4/image.jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <img className='w-48 relative' src="https://i.ibb.co/Rj634cZ/rectangle1.png" alt="" />
                                        <span className='absolute mt-5 px-9 text-white font-bold'>January 25, 2023</span>
                                        <h2 class="card-title py-3 text-accent font-bold">Music Conference</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <div className='flex items-center'>
                                            <span className='text-2xl mr-2 text-primary'><HiOutlineLocationMarker /></span>
                                            <span className='text-lg font-bold'>Vancover, Canada</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up-left" class="p-4 md:w-1/2 w-full">
                                <div class="card lg:card-side bg-base-100 shadow-md">
                                    <figure><img className='h-full w-full lg:w-[280px]' src="https://i.ibb.co/G3mg71H/image4.jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <img className='w-48 relative' src="https://i.ibb.co/0cFPTM5/rectangle2.png" alt="" />
                                        <span className='absolute mt-5 px-10 text-white font-bold'>January 1, 2023</span>
                                        <h2 class="card-title py-3 text-accent font-bold">Paper Plates Art</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <div className='flex items-center'>
                                            <span className='text-2xl mr-2 text-primary'><HiOutlineLocationMarker /></span>
                                            <span className='text-lg font-bold'>Sydney, Australia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up-right" class="p-4 md:w-1/2 w-full">
                                <div class="card lg:card-side bg-base-100 shadow-md">
                                    <figure><img className='h-full w-full lg:w-[280px]' src="https://i.ibb.co/wW1GXkc/image2.jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <img className='w-48 relative' src="https://i.ibb.co/zXXbC00/rectangle3.png" alt="" />
                                        <span className='absolute mt-5 px-5 text-white font-bold'>December 10, 2022</span>
                                        <h2 class="card-title py-3 text-accent font-bold">Imagination Classes</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <div className='flex items-center'>
                                            <span className='text-2xl mr-2 text-primary'><HiOutlineLocationMarker /></span>
                                            <span className='text-lg font-bold'>New York, USA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up-left" class="p-4 md:w-1/2 w-full">
                                <div class="card lg:card-side bg-base-100 shadow-md">
                                    <figure><img className='h-full w-full lg:w-[280px]' src="https://i.ibb.co/c1WkBPC/image3.jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <img className='w-48 relative' src="https://i.ibb.co/brTG4Dm/rectangle4.png" alt="" />
                                        <span className='absolute mt-5 px-10 text-white font-bold'>February 2, 2023</span>
                                        <h2 class="card-title py-3 text-accent font-bold">Number Matching</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <div className='flex items-center'>
                                            <span className='text-2xl mr-2 text-primary'><HiOutlineLocationMarker /></span>
                                            <span className='text-lg font-bold'>Istanbul, Turkey</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='-mt-36 lg:block hidden' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/07/k-shape18.png" alt="" />
                <img className='w-full' src="https://i.ibb.co/0Z6Fpc9/events-rectangle2.png" alt="" />
            </div>
        </div>
    );
};

export default UpcomingEvents;