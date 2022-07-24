import React from 'react';
import kid from '../../assets/GuidelineImage/kid.png'
import { BsCheckCircleFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { AiFillSmile } from "react-icons/ai";

const Guideline = () => {
    return (
        <div className='bg-[#EEE8DF] font-nunito pt-10 pb-10'>
            <div className='text-center'>
                <h3 className='text-4xl font-bold text-[#221638]'>Join With us</h3>
                <h2 className='text-2xl text-[#FE4A55]'>Guideline</h2>
            </div>
            <div className='md:flex lg:flex justify-center items-center'>
                <div>
                    <img src={kid} alt="" />
                </div>
                <div>
                    <h2 className='font-black text-3xl text-[#221638] py-4'>Find Out Why You Should <br /> Learn With Verbalizer</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-white md:w-80 lg:w:80 p-4 rounded-md'>
                            <div className='flex items-center'>
                                < BsCheckCircleFill className='text-[#FE4A55] mr-2' />
                                <h3 className='font-bold text-[#221638]'>Create Account</h3>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consecte nadipiscing elit</h4>
                        </div>
                        <div className='bg-white md:w-80 lg:w:80 p-4 rounded-md'>
                            <div className='flex items-center'>
                                < BsFillBookmarkPlusFill className='text-[#FE4A55] mr-2' />
                                <h3 className='font-bold text-[#221638]'>Select Course</h3>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consecte nadipiscing elit</h4>
                        </div>
                        <div className='bg-white md:w-80 lg:w:80 p-4 rounded-md'>
                            <div className='flex items-center'>
                                < FaSignal className='text-[#FE4A55] mr-2' />
                                <h3 className='font-bold text-[#221638]'>Learn Your Skill</h3>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consecte nadipiscing elit</h4>
                        </div>
                        <div className='bg-white md:w-80 lg:w:80 p-4 rounded-md'>
                            <div className='flex items-center'>
                                < AiFillSmile className='text-[#FE4A55] mr-2' />
                                <h3 className='font-bold text-[#221638]'>Success Story</h3>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consecte nadipiscing elit</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Guideline;