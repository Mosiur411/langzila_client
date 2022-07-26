import React from 'react';
import { GiBrain, GiWorld } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdPublishedWithChanges } from 'react-icons/md';

const EducationForEveryone = () => {
    return (
        <section className=" lg:px-20 mt-96 lg:mt-0">
            <div className="px-5 py-24 mx-auto">
                <div className="text-center mx-auto mb-[60px] max-w-[610px]">
                    <span className="font-semibold text-md uppercase text-primary mb-3 block">
                        EDUCATION FOR EVERYONE
                    </span>
                    <h2 className=" font-bold text-3xl text-gray-900 mb-4 " >
                        Affordable Online Courses and Learning Opportunities
                    </h2>
                    <p>Finding your own space and utilize better learning options can result in faster than the traditional ways. Enjoy the beauty of eLearning!</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center overflow-hidden">
                    <div className="p-4 lg:w-1/4 md:w-1/2 w-full h-80">
                        <div className="shadow-lg border-l-4 border-l-primary px-5 py-6 rounded-lg h-[270px] overflow-hidden">
                            <GiBrain className='text-6xl mx-auto text-primary mb-4' />
                            <h2 className="title-font font-bold text-xl mb-2 text-accent">Learn the Latest Top Skills</h2>
                            <p className="leading-relaxed">Learning top skills can bring an extra-ordinary outcome in a career.</p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full ">
                        <div className="shadow-lg border-l-4 border-l-primary px-5 py-6 rounded-lg h-[270px] overflow-hidden">
                            <SiGoogleclassroom className='text-6xl mx-auto text-primary mb-4' />
                            <h2 className="title-font font-bold text-xl mb-2 text-accent">Learn in Your Own Pace</h2>
                            <p className="leading-relaxed">Everyone prefers to enjoy learning at their own pace & that gives a great result.</p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                        <div className="shadow-lg border-l-4 border-l-primary px-5 py-6 rounded-lg h-[270px] overflow-hidden">
                            <MdPublishedWithChanges className='text-6xl mx-auto text-primary mb-4' />
                            <h2 className="title-font font-bold text-xl mb-2 text-accent">Learn From Industry Experts</h2>
                            <p className="leading-relaxed">Experienced teachers can assist in learning faster with their best approaches!</p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                        <div className="shadow-lg border-l-4 border-l-primary rounded-lg px-5 py-6 h-[270px] overflow-hidden">
                            <GiWorld className='text-6xl mx-auto text-primary mb-4' />
                            <h2 className="title-font font-bold text-xl mb-2 text-accent">Enjoy Learning From Anywhere</h2>
                            <p className="leading-relaxed">We are delighted to give you options to enjoy learning from anywhere in the world.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default EducationForEveryone;