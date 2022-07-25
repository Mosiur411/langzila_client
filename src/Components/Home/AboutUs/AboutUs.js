import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
const AboutUs = () => {
    return (
        <section className='md:px-10 mb-40 mt-10'>
            <div className='grid  grid-cols-1 md:grid-cols-2 gap-5'>
                {/* ================== left bar ================= */}
                <div className='flex-1 relative'>
                    <img data-aos="fade-right" className='w-[350px] mx-auto z-40' src={require('../../assets/AboutUs/kindergarten-aboutpng.png')} alt="kindergarten" />
                    <img data-aos="fade-left" className='w-[300px] md:absolute top-40 right-0 mx-auto  mt-10 md:mt-0' src={require('../../assets/AboutUs/kindergarten22222.png')} alt="kindergarten" />
                    {/* =================  */}
                    <img className='w-[150px] absolute top-0 right-0 z-30 hidden md:block' src={require('../../assets/AboutUs/kite1.png')} alt="kindergarten" />
                    <img className='w-[120px] absolute left-0 bottom-0 hidden md:block' src={require('../../assets/AboutUs/k-shape8.png')} alt="kindergarten" />

                </div>
                {/* ================== Right bar ================= */}
                <div data-aos="fade-left" className='flex-1 px-5'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-xl font-medium text-red-500'>about us </p>
                                <h1 className='font-bold py-2 text-3xl '>We Are Kindergarten & <br />Childhood is Our Passion</h1>
                            </div>
                            <img src={require('../../assets/AboutUs/k-shape7.png')} alt="kindergarten" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <br />
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <div className='flex items-center gap-3 md:gap-16 mb-10'>
                            <div>
                                <p className='flex items-center gap-2 py-4'>
                                    <BsArrowUpRight className='bg-red-500 text-white font-bold text-2xl p-1 rounded-full' />
                                    <span> Transportation</span>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <BsArrowUpRight className='bg-red-500 text-white font-bold text-2xl p-1 rounded-full' />
                                    <span> Transportation</span>
                                </p>
                            </div>
                            <div>
                                <p className='flex items-center gap-2 py-4'>
                                    <BsArrowUpRight className='bg-red-500 text-white font-bold text-2xl p-1 rounded-full' />
                                    <span> Transportation</span>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <BsArrowUpRight className='bg-red-500 text-white font-bold text-2xl p-1 rounded-full' />
                                    <span> Transportation</span>
                                </p>
                            </div>
                        </div>
                        <button  className='flex items-center gap-4 SubmitButton py-2'>
                            <IoIosContact className='text-white'/>
                            <span>More About Us</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;