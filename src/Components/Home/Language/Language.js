import React from 'react';
import "@fontsource/nunito";
import BookImg1 from '../../assets/QuizImg/bookimg1.png'
import BookImg2 from '../../assets/QuizImg/bookimg2.png'
import BookImg3 from '../../assets/QuizImg/bookimg3.png'
import { useNavigate } from "react-router-dom";
// import { quiz } from '../../../public/Quiz.json'

const Language = () => {

    const navigate = useNavigate();




    return (
        <div className='xl:px-10 py-10 bg-red-100 text-center'>
            <div>
                <h2 className=' text-lime-600 font-semibold'>OUR SERVICES</h2>
                <h1 style={{ fontFamily: "Nunito" }} className="text-4xl font-bold my-3">Best Services for Kids</h1>
                <p className=' xl:w-1/3 w-3/4 mx-auto text-gray-600'>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
            </div>
            <div className='  mt-20 xl:px-20'>
                <div className='lg:flex justify-center items-center'>

                    <div className=' bg-white xl:w-96 xl:mx-10 mx-5 shadow-xl rounded-md mb-20 lg:mb-0'>
                        <img className=' w-full lg:h-[300px] ' src={BookImg1} alt="Book Image" />
                        <h1 style={{ fontFamily: "Nunito" }} className="text-2xl font-bold my-3 text-lime-800">Bangla</h1>
                        <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>
                        <button onClick={() => navigate('/bangla/easy')} style={{ fontFamily: "Nunito" }} className=' px-10 py-1 bg-lime-200 rounded font-semibold text-lg mt-5 mb-7'>Start Now</button>
                    </div>

                    <div className=' bg-white xl:w-96 xl:mx-10 mx-5 shadow-xl rounded-md mb-20 lg:mb-0'>
                        <img className=' w-full lg:h-[300px]  ' src={BookImg2} alt="Book Image" />
                        <h1 style={{ fontFamily: "Nunito" }} className="text-2xl font-bold my-3 text-lime-800">English</h1>
                        <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>
                        <button style={{ fontFamily: "Nunito" }} className=' px-10 py-1 bg-lime-200 rounded font-semibold text-lg mt-5 mb-7'>Start Now</button>
                    </div>

                    <div className=' bg-white xl:w-96 xl:mx-10 mx-5 shadow-xl rounded-md mb-20 lg:mb-0'>
                        <img className=' w-full lg:h-[300px]  ' src={BookImg3} alt="Book Image" />
                        <h1 style={{ fontFamily: "Nunito" }} className="text-2xl font-bold my-3 text-lime-800">Hindi</h1>
                        <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>
                        <button style={{ fontFamily: "Nunito" }} className=' px-10 py-1 bg-lime-200 rounded font-semibold text-lg mt-5 mb-7'>Start Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Language;