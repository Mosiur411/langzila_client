import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BiCaretLeft } from "react-icons/bi";
import { MdOutlineSwitchLeft } from "react-icons/md";


const Video = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className=' text-center '>
                <button onClick={() => navigate('/classroom')} className=' absolute left-10 top-5 border border-red-500 flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' /></button>

                <div className='py-12 '>
                    <div data-aos="fade-down" className=' bg-fuchsia-900 text-white rounded-lg xl:w-1/3 w-1/2 mx-auto  px-2'>
                        <nav className='flex  md:justify-center justify-between px-2 md:px-0 mb-12 md:mb-0 h-full'>
                            <NavLink
                                to={'banglavideo'}
                                className={({ isActive }) => (` text-md font-medium my-6 mx-4 ${isActive ? 'text-yellow-300' : 'text-white'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-white text-sm font-semibold  context uppercase ${isActive ? 'text-yellow-300' : 'text-white'}`)}
                                >Bangla</p>
                            </NavLink>


                            <NavLink
                                to={'hindivideo'}
                                className={({ isActive }) => (` text-md font-medium my-6 mx-4  ${isActive ? 'text-yellow-300' : 'text-white'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-white text-sm font-semibold  context uppercase ${isActive ? 'text-yellow-300' : 'text-white'}`)}
                                >Hindi</p>
                            </NavLink>

                            <NavLink
                                to={'englishvideo'}
                                className={({ isActive }) => (` text-md font-medium my-6  mx-4 ${isActive ? 'text-yellow-300' : 'text-white'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-white text-sm font-semibold  context uppercase ${isActive ? 'text-yellow-300' : 'text-white'}`)}
                                >English</p>
                            </NavLink>
                        </nav>
                    </div>
                    <div className=' w-full md:px-6 px-3'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;