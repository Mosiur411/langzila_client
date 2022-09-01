import React from 'react';
import { useNavigate } from 'react-router-dom';
import Quizimg from '../../../assets/QuizImg/Quiz2.png'

const Medium = () => {
    const navigate = useNavigate()
    return (
        <div className=' max-w-7xl mx-auto my-10'>
            <div className=' pt-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center'>

                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-blue-500'>1</span></h1>
                        <button onClick={() => navigate('/medium/mediumquiz1')} className=' py-[5px] px-4 rounded-3xl text-black border border-white bg-white hover:border hover:border-black hover:bg-transparent  text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>

                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-blue-500'>2</span></h1>
                        <button onClick={() => navigate('/medium/mediumquiz2')} className=' py-[5px] px-4 rounded-3xl text-black border border-white bg-white hover:border hover:border-black hover:bg-transparent  text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>

                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-blue-500'>3</span></h1>
                        <button onClick={() => navigate('/medium/mediumquiz3')} className=' py-[5px] px-4 rounded-3xl text-black border border-white bg-white hover:border hover:border-black hover:bg-transparent  text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-blue-500'>4</span></h1>
                        <button onClick={() => navigate('/medium/mediumquiz4')} className=' py-[5px] px-4 rounded-3xl text-black border border-white bg-white hover:border hover:border-black hover:bg-transparent  text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-blue-500'>5</span></h1>
                        <button onClick={() => navigate('/medium/mediumquiz5')} className=' py-[5px] px-4 rounded-3xl text-black border border-white bg-white hover:border hover:border-black hover:bg-transparent  text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden relative'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-blue-500'>6</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-black border border-white bg-white hover:border hover:border-black hover:bg-transparent  text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                    <div className='h-full w-full bg-black bg-opacity-60 absolute top-0 left-0 bottom-0 right-0'>
                        <h1 className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-xl text-white'>UpComing . . .</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Medium;