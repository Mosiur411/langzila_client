import React, { useState } from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInbox } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { MdAddIcCall } from "react-icons/md";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();



    return (
        <>
            <section className='px-2 md:px-20 pt-20 bg-[#212529] text-white mt-9' >
                {/* <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='grid grid-cols-1 md:grid-cols-4 gap-10  '> */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10  '>
                    {/* ================== 1======================  */}

                    <div>
                        <h1 className='text-2xl font-bold pb-5'>LangZila</h1>
                        <p>Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!</p>
                        <div className='flex gap-2 mt-6'>
                            <FaFacebook className='text-primary text-2xl' />
                            <AiFillTwitterCircle className='text-primary text-2xl' />
                            <SiInstagram className='text-primary text-2xl' />
                            <FaLinkedin className='text-primary text-2xl' />
                        </div>
                    </div>
                    {/* ================== 1======================  */}

                    <div>
                        <h1 className='text-2xl font-bold pb-5'>Resources</h1>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Become A Teacher</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Instructor/Student Profile</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Courses</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>LP Checkout</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Terms & Conditions</h1>
                        </div>
                    </div>
                    {/* ================== 1======================  */}
                    <div>
                        <h1 className='text-2xl font-bold pb-5'>Explore</h1>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Home</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Blog</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Privacy Policy</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Become A Teacher</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='w-2 h-2 bg-primary'></div>
                            <h1>Courses</h1>
                        </div>
                    </div>
                    {/* ================== 1======================  */}
                    <div>
                        <h1 className='text-2xl font-bold pb-5'>Address</h1>
                        <div className='flex  items-center gap-4'>
                            <HiOutlineLocationMarker className='text-primary text-xl' />
                            <h1>Dhaka,Bangladesh</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <MdAddIcCall className='text-primary text-xl' />
                            <h1>+8801901830272</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <HiOutlineMail className='text-primary text-xl' />
                            <h1>hello@ecademy.com</h1>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <FiInbox className='text-primary text-xl' />
                            <h1>+8801318140516</h1>
                        </div>
                    </div>
                </div>
                <div className='mt-10 py-2'>
                    <hr />
                    <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-10 '>
                        <h1>© {year} LangZila is Proudly Crafted by <span className='text-primary'>TeamDevSixer</span></h1>
                        <h1>Privacy Policy | Terms & Conditions</h1>
                    </div>
                </div>


            </section>

        </>
    );
};

export default Footer;