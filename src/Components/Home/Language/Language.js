import React from 'react';
import "@fontsource/nunito";
import { useNavigate } from "react-router-dom";

// Image
import Image1 from '../../assets/QuizImg/3d1.png'
import Image2 from '../../assets/QuizImg/3d2.png'
import Image3 from '../../assets/QuizImg/3d3.png'
import bdFlag from '../../assets/QuizImg/bangladesh.png'
import indianFlag from '../../assets/QuizImg/india.png'
import americanFlag from '../../assets/QuizImg/austallia.png'




const Language = () => {

    const navigate = useNavigate();


    return (
        <div className='xl:px-10 py-10 bg-secondary text-center '>
            <div>
                <h2 style={{ fontFamily: "Nunito" }} className=' text-red-600 font-semibold text-xl'>Our Services</h2>
                <h1 style={{ fontFamily: "Nunito" }} className="text-4xl font-bold text-black">Best Services for Kids</h1>
                <p className=' xl:w-1/3 w-3/4 mx-auto text-gray-600'>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
            </div>
            <div className='mx-auto mt-20  '>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  '>
                    <div data-aos="fade-right" className=' bg-white relative rounded-lg shadow-lg w-[380px] mb-20 mx-auto'>
                        <h1 className=' text-sm font-semibold text-gray-500 font-mono absolute left-3 top-3'>L A N G U A G E</h1>
                        <div className=' relative '>
                            <div className='relative'>
                                <img className=' w-full bg-gray-200' src={Image1} alt="Image1" />
                                <img className='absolute -mt-16 w-full' src="https://themes.envytheme.com/ecademy/wp-content/themes/ecademy/assets/img/shape-style1.png" alt="" />
                            </div>
                            <div className=' w-12 h-8 rounded overflow-hidden bg-stone-700 absolute right-[1%] top-[1%] flex items-center justify-center'>
                                <img className=' w-12 h-12 ' src={bdFlag} alt="bdFlag" />
                            </div>
                        </div>
                        <h1 className=' text-xl font-mono text-blue-700 font-medium'>Bangla Language</h1>
                        <button onClick={() => navigate('/bangla/easy')} id='#start' style={{ fontFamily: "Nunito" }} className=' px-4 py-1  bg-red-500 rounded font-medium text-white text-md mt-2 mb-12'>Start Now</button>
                    </div>


                    <div data-aos="zoom-in-up" className=' bg-white relative rounded-lg shadow-lg w-[380px] mb-20 mx-auto'>
                        <h1 className=' text-sm font-semibold text-gray-500 font-mono absolute left-3 top-3'>L A N G U A G E</h1>
                        <div className=''>
                            <div className='relative'>
                                <img className=' w-full bg-gray-200' src={Image3} alt="Image1" />
                                <img className='absolute -mt-16 w-full' src="https://themes.envytheme.com/ecademy/wp-content/themes/ecademy/assets/img/shape-style1.png" alt="" />
                            </div>
                            <div className=' w-12 h-8 rounded overflow-hidden bg-stone-700 absolute right-[1%] top-[1%] flex items-center justify-center'>
                                <img className=' w-12 h-12 ' src={indianFlag} alt="bdFlag" />
                            </div>
                        </div>
                        <h1 className=' text-xl font-mono text-blue-700 font-medium'>Hindi Language</h1>
                        <button onClick={() => navigate('/bangla/easy')} style={{ fontFamily: "Nunito" }} className=' px-4 py-1  bg-red-500 rounded font-medium text-white text-md mt-2 mb-12'>Start Now</button>
                    </div>


                    <div data-aos="fade-left" className=' bg-white relative rounded-lg shadow-lg w-[380px] mb-20 mx-auto'>
                        <h1 className=' text-sm font-semibold text-gray-500 font-mono absolute left-3 top-3'>L A N G U A G E</h1>
                        <div className=''>
                            <div className='relative'>
                                <img className=' w-full bg-gray-200' src={Image2} alt="Image1" />
                                <img className='absolute -mt-16 w-full' src="https://themes.envytheme.com/ecademy/wp-content/themes/ecademy/assets/img/shape-style1.png" alt="" />
                            </div>
                            <div className=' w-12 h-8 rounded overflow-hidden bg-stone-700 absolute right-[1%] top-[1%] flex items-center justify-center'>
                                <img className=' w-12 h-12' src={americanFlag} alt="bdFlag" />
                            </div>
                        </div>
                        <h1 className=' text-xl font-mono text-blue-700 font-medium'>English Language</h1>
                        <button onClick={() => navigate('/bangla/easy')} style={{ fontFamily: "Nunito" }} className=' px-4 py-1  bg-red-500 rounded font-medium text-white text-md mt-2 mb-12'>Start Now</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Language;