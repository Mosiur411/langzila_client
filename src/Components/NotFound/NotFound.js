import React, { } from 'react';
import {BsChevronDoubleLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
const NotFound = () => {
   

    return (
        <>
            <div >
                <img className='w-full h-[100vh]' src={require('../assets/404.gif')} alt="" />
                <Link to='/'  className='flex items-center gap-6 absolute top-4 left-4 text-3xl font-bold '>
                    <BsChevronDoubleLeft className='text-3xl font-bold m-5' />
                    <span >Back</span>
                </Link>
            </div>
        </>
    );
};

export default NotFound;