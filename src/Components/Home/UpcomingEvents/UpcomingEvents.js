import React from 'react';

const UpcomingEvents = () => {
    return (
        <div>
             <div className='bg-[#EEE8DF]'>
                <img className='w-full' src="https://i.ibb.co/4J5w3Jp/events-rectangle1.png" alt="" />
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div className='text-center'>
                            <h3 className='uppercase text-rose-500'>Events</h3>
                            <h1 className='py-2 text-3xl font-bold'>Our Upcoming Events</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class="flex flex-wrap -m-4 px-20 pt-20">
                            <div class="p-4 md:w-1/2 w-full">
                                <div class="card card-side bg-base-100 shadow-xl">
                                    <figure><img className='h-full' src="https://i.ibb.co/yWVMKF4/image.jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <img className='w-48 relative' src="https://i.ibb.co/Rj634cZ/rectangle1.png" alt="" />
                                        <span className='absolute mt-5 px-10 text-white font-bold'>January 1, 2021</span>
                                        <h2 class="card-title py-3 text-black">Music Conference</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <p className='text-lg font-bold'>Vancover, Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/2 w-full">
                                <div class="card card-side bg-base-100 shadow-xl">
                                    <figure><img src="https://i.ibb.co/yWVMKF4/image.jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <img className='w-48 relative' src="https://i.ibb.co/0cFPTM5/rectangle2.png" alt="" />
                                        <span className='absolute mt-5 px-10 text-white font-bold'>January 1, 2021</span>
                                        <h2 class="card-title py-3 text-black">Music Conference</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <p className='text-lg font-bold'>Vancover, Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/2 w-full">
                                <div class="card card-side bg-base-100 shadow-xl">
                                    <figure><img src="https://i.ibb.co/yWVMKF4/image.jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <img className='w-48 relative' src="https://i.ibb.co/zXXbC00/rectangle3.png" alt="" />
                                        <span className='absolute mt-5 px-10 text-white font-bold'>January 1, 2021</span>
                                        <h2 class="card-title py-3 text-black">Music Conference</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <p className='text-lg font-bold'>Vancover, Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/2 w-full">
                                <div class="card card-side bg-base-100 shadow-xl">
                                    <figure><img src="https://i.ibb.co/yWVMKF4/image.jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <img className='w-48 relative' src="https://i.ibb.co/brTG4Dm/rectangle4.png" alt="" />
                                        <span className='absolute mt-5 px-10 text-white font-bold'>January 1, 2021</span>
                                        <h2 class="card-title py-3 text-black">Music Conference</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <p className='text-lg font-bold'>Vancover, Canada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='w-full' src="https://i.ibb.co/0Z6Fpc9/events-rectangle2.png" alt="" />
            </div>
        </div>
    );
};

export default UpcomingEvents;