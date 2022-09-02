import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <section className='md:px-10 mb-20 mt-20'>
            <div className='grid  grid-cols-1 md:grid-cols-2 gap-16'>
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
                                <p className='text-xl font-medium text-primary'>about us </p>
                                <h1 className='font-bold py-2 text-3xl text-accent '>We Are Kindergarten & <br />Childhood is Our Passion</h1>
                            </div>
                            <img src={require('../../assets/AboutUs/k-shape7.png')} alt="kindergarten" />
                        </div>
                        <p>This is Awesome website for children. Children can learn and juz them by quiz. they can learn by maney way.</p>
                        <br />
                        <br />
                        <p>We build this awesome website for children. this is awesome website to learn language for children. We focus for user exprience. then can comfort in this website. Children can easyly lean languge in different way, then then can text then by quiz.</p>
                        <div className='flex items-center gap-3 md:gap-16 mb-10'>
                            <div>
                                <p className='flex items-center gap-2 py-4'>
                                    <BsArrowUpRight className='bg-primary text-white font-bold text-2xl p-1 rounded-full' />
                                    <span> Transportation</span>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <BsArrowUpRight className='bg-primary text-white font-bold text-2xl p-1 rounded-full' />
                                    <span> Transportation</span>
                                </p>
                            </div>
                            <div>
                                <p className='flex items-center gap-2 py-4'>
                                    <BsArrowUpRight className='bg-primary text-white font-bold text-2xl p-1 rounded-full' />
                                    <span> Transportation</span>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <BsArrowUpRight className='bg-primary text-white font-bold text-2xl p-1 rounded-full' />
                                    <span> Transportation</span>
                                </p>
                            </div>
                        </div>
                        <button onClick={() => navigate('/about')} className='flex items-center gap-4 SubmitButton py-2'>
                            <IoIosContact className='text-white' />
                            <span>More About Us</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;