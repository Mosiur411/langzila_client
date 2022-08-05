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
        <div className='xl:px-10 py-10 bg-white text-center '>
            <div>
                <h2 style={{ fontFamily: "Nunito" }} className=' text-red-600 font-semibold text-xl'>Our Services</h2>
                <h1 style={{ fontFamily: "Nunito" }} className="text-4xl font-bold text-black">Best Services for Kids</h1>
                <p className=' xl:w-1/3 w-3/4 mx-auto text-gray-600'>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
            </div>
            <div className='max-w-7xl mx-auto  mt-20 xl:px-20 md:px-10  '>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  '>


                    <div className=' bg-cyan-200 p-3 relative rounded-lg mx-8 shadow-lg w-[280px] mb-20'>
                        <h1 className=' text-sm font-semibold text-gray-500 font-mono absolute left-3 top-3'>L A N G A G E</h1>
                        <div className=' relative '>
                            <img className=' w-64 h-64' src={Image1} alt="Image1" />
                            <div className=' w-12 h-8 rounded overflow-hidden bg-stone-700 absolute right-[-8%] top-[-8%] flex items-center justify-center'>
                                <img className=' w-12 h-12 ' src={bdFlag} alt="bdFlag" />
                            </div>
                        </div>
                        <h1 className=' text-xl font-mono text-blue-700 font-medium'>Bangla Language</h1>
                        <button onClick={() => navigate('/bangla/easy')} style={{ fontFamily: "Nunito" }} className=' px-4 py-1  bg-red-500 rounded font-medium text-white text-md mt-2 mb-1'>Start Now</button>
                    </div>



                    <div className=' bg-green-200 p-3 relative rounded-lg mx-8 shadow-lg w-[280px] mb-20'>
                        <h1 className=' text-sm font-semibold text-gray-500 font-mono absolute left-3 top-3'>L A N G A G E</h1>
                        <div className=' relative '>
                            <img className=' w-64 h-64' src={Image3} alt="Image1" />
                            <div className=' w-12 h-8 rounded overflow-hidden bg-stone-700 absolute right-[-8%] top-[-8%] flex items-center justify-center'>
                                <img className=' w-12 h-12 ' src={indianFlag} alt="bdFlag" />
                            </div>
                        </div>
                        <h1 className=' text-xl font-mono text-blue-700 font-medium'>Hindi Language</h1>
                        <button onClick={() => navigate('/bangla/easy')} style={{ fontFamily: "Nunito" }} className=' px-4 py-1  bg-red-500 rounded font-medium text-white text-md mt-2 mb-1'>Start Now</button>
                    </div>




                    <div className=' bg-blue-200 p-3 relative rounded-lg mx-8 shadow-lg w-[280px] mb-20'>
                        <h1 className=' text-sm font-semibold text-gray-500 font-mono absolute left-3 top-3'>L A N G A G E</h1>
                        <div className=' relative '>
                            <img className=' w-64 h-64' src={Image2} alt="Image1" />
                            <div className=' w-12 h-8 rounded overflow-hidden bg-stone-700 absolute right-[-8%] top-[-8%] flex items-center justify-center'>
                                <img className=' w-12 h-12 ' src={americanFlag} alt="bdFlag" />
                            </div>
                        </div>
                        <h1 className=' text-xl font-mono text-blue-700 font-medium'>English Language</h1>
                        <button onClick={() => navigate('/bangla/easy')} style={{ fontFamily: "Nunito" }} className=' px-4 py-1  bg-red-500 rounded font-medium text-white text-md mt-2 mb-1'>Start Now</button>
                    </div>





                </div>

            </div>
        </div>
    );
};

export default Language;