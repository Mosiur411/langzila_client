import React, { } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
const NotFound = () => {


    const navigate = useNavigate()

    return (
        <>
            <div className=' max-w-7xl mx-auto ' >
                <div className='w-full flex justify-center items-center h-screen'>
                    <div className=' xl:w-1/3 w-1/2 flex items-center'>
                        <h1 className=' text-red-500 font-medium text-xl'>404</h1>
                        <div className=' h-16 mx-3  border border-r-black' ></div>
                        <div>
                            <p className=' text-sm'>The page you are looking for doesn't exist anymore.</p>
                            <button onClick={() => navigate(-1)} className='w-20 mt-3 border border-red-500  py-[3px] rounded-3xl flex justify-center pr-2 items-center text-xs font-medium uppercase text-red-500 '>
                                <IoIosArrowBack className='font-bold mr-1 text-xs' />
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;