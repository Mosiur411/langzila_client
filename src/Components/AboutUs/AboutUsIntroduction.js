import React from 'react';
import { SiGoogleclassroom } from 'react-icons/si';
import { VscRemoteExplorer } from 'react-icons/vsc';
import { TbAccessPoint } from 'react-icons/tb';
import { BiUserVoice } from 'react-icons/bi';
import { MdSelfImprovement } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const AboutUsIntroduction = () => {
    const navigate = useNavigate();

    return (
        <section class="mb-12 lg:bg-none bg-secondary">
            <img className='w-full absolute lg:block hidden' src="https://themes.envytheme.com/ecademy/wp-content/themes/ecademy/assets/img/white-bg.jpg" alt="" />
            <div class="relative mx-auto flex pt-12 pb-24 lg:flex-row md:flex-col flex-col items-center px-5 lg:px-20">
                <div class="lg:w-1/2 md:w-full md:mb-4 w-5/6 mb-10">
                    <img class="object-cover object-center rounded lg:pr-12" alt="hero" src="https://i.ibb.co/cJ2kcHk/about.png" />
                </div>
                <div class="lg:flex-grow lg:w-1/2 md:w-full flex flex-col md:items-start md:text-left items-center">
                    <span className='text-primary text-lg uppercase font-bold mb-3 text-center'>About us</span>
                    <h1 class="title-font text-xl lg:text-3xl md:text-2xl mb-4 font-bold text-gray-900 leading-5">Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!
                    </h1>
                    <p class="mb-8 leading-relaxed">We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!​</p>
                    <div class="lg:flex block justify-between text-xl font-bold gap-20 mb-4">
                        <span className='flex lg:mb-0 mb-4'><BiUserVoice className='text-primary font-bold text-2xl mr-3' />Expert Instructors</span>
                        <span className='flex'><TbAccessPoint className='text-primary font-bold text-2xl mr-3' />Lifetime Access</span>
                    </div>
                    <div class="lg:flex block justify-between text-xl font-bold gap-20 mb-6">
                        <span className='flex lg:mb-0 mb-4'><VscRemoteExplorer className='text-primary font-bold text-2xl mr-3' />Remote Learning</span>
                        <span className='flex'><MdSelfImprovement className='text-primary font-bold text-2xl mr-3' />Self Development</span>
                    </div>
                    <button onClick={() => navigate('/classroom')} className='flex items-center px-5 py-2 bg-primary font-bold text-white text-lg rounded-md'><SiGoogleclassroom className='mr-3' />View our Classes</button>
                </div>
            </div>
            <img className='float-right lg:block hidden relative -mt-72 mr-28' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape4.png" alt="" />
            <img className='float-right lg:block hidden relative mr-36 -mt-44' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape3.png" alt="" />
        </section>
    );
};

export default AboutUsIntroduction;