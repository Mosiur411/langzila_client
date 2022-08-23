import React from 'react';
import { GiBrain, GiWorld } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdPublishedWithChanges } from 'react-icons/md';

const EducationForEveryone = () => {
    return (
        <section class="lg:px-20 mt-96 lg:mt-0">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mx-auto mb-[60px] max-w-[610px]">
                    <span class="font-semibold text-md uppercase text-primary mb-3 block">
                        EDUCATION FOR EVERYONE
                    </span>
                    <h2 class=" font-bold text-3xl text-gray-900 mb-4 " >
                        Affordable Online Courses and Learning Opportunities
                    </h2>
                    <p>Finding your own space and utilize better learning options can result in faster than the traditional ways. Enjoy the beauty of eLearning!</p>
                </div>
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 lg:w-1/4 md:w-1/2 w-full h-80">
                        <div class="shadow-lg border-l-4 border-l-primary px-5 py-6 rounded-lg h-[270px]">
                            <GiBrain className='text-6xl mx-auto text-primary mb-4' />
                            <h2 class="title-font font-bold text-xl mb-2 text-accent">Learn the Latest Top Skills</h2>
                            <p class="leading-relaxed">Learning top skills can bring an extra-ordinary outcome in a career.</p>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                        <div class="shadow-lg border-l-4 border-l-primary px-5 py-6 rounded-lg h-[270px]">
                            <SiGoogleclassroom className='text-6xl mx-auto text-primary mb-4' />
                            <h2 class="title-font font-bold text-xl mb-2 text-accent">Learn in Your Own Pace</h2>
                            <p class="leading-relaxed">Everyone prefers to enjoy learning at their own pace & that gives a great result.</p>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                        <div class="shadow-lg border-l-4 border-l-primary px-5 py-6 rounded-lg h-[270px]">
                            <MdPublishedWithChanges className='text-6xl mx-auto text-primary mb-4' />
                            <h2 class="title-font font-bold text-xl mb-2 text-accent">Learn From Industry Experts</h2>
                            <p class="leading-relaxed">Experienced teachers can assist in learning faster with their best approaches!</p>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                        <div class="shadow-lg border-l-4 border-l-primary rounded-lg px-5 py-6 h-[270px]">
                            <GiWorld className='text-6xl mx-auto text-primary mb-4' />
                            <h2 class="title-font font-bold text-xl mb-2 text-accent">Enjoy Learning From Anywhere</h2>
                            <p class="leading-relaxed">We are delighted to give you options to enjoy learning from anywhere in the world.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default EducationForEveryone;