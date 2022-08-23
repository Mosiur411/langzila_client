import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BiCaretLeft } from "react-icons/bi";
import { MdOutlineSwitchLeft } from "react-icons/md";


const Audio = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className=' h-screen  text-center '>
                <button onClick={() => navigate('/classroom')} className=' absolute left-10 top-5 border border-red-500 flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' /></button>

                <div className='py-16 flex items-center h-full max-w-6xl mx-auto px-10'>
                    <div data-aos="fade-down" className=' bg-purple-900 rounded-lg w-40 py-10  mx-auto  px-2'>
                        <nav className=''>
                            <NavLink
                                to={'search'}
                                className={({ isActive }) => (` text-md font-medium flex items-center my-6 mx-4 ${isActive ? 'text-green-400 ' : 'text-white'}`)}
                            ><MdOutlineSwitchLeft className={({ isActive }) => (`text-yellow-400 ${isActive ? 'text-red-400 mr-2  ' : 'text-yellow-400'}`)} />
                                <p className={({ isActive }) => (` absolute mt-[4px] text-white  text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-white'}`)}
                                >Search</p>
                            </NavLink>


                            <NavLink
                                to={'banglaaudio'}
                                className={({ isActive }) => (` text-md font-medium flex items-center my-6 mx-4 ${isActive ? 'text-green-400 ' : 'text-white'}`)}
                            ><MdOutlineSwitchLeft className={({ isActive }) => (`text-yellow-400 ${isActive ? 'text-red-400 mr-2  ' : 'text-yellow-400'}`)} />
                                <p className={({ isActive }) => (` absolute mt-[4px] text-white  text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-white'}`)}
                                >Bangla</p>
                            </NavLink>


                            <NavLink
                                to={'hindiaudio'}
                                className={({ isActive }) => (` text-md font-medium flex items-center my-6 mx-4 ${isActive ? 'text-green-400 ' : 'text-white'}`)}
                            ><MdOutlineSwitchLeft className={({ isActive }) => (`text-yellow-400 ${isActive ? 'text-red-400 mr-2  ' : 'text-yellow-400'}`)} />
                                <p className={({ isActive }) => (` absolute mt-[4px] text-white  text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-white'}`)}
                                >hindi</p>
                            </NavLink>

                            <NavLink
                                to={'englishaudio'}
                                className={({ isActive }) => (` text-md font-medium flex items-center my-6 mx-4 ${isActive ? 'text-green-400 ' : 'text-white'}`)}
                            ><MdOutlineSwitchLeft className={({ isActive }) => (`text-yellow-400 ${isActive ? 'text-red-400 mr-2  ' : 'text-yellow-400'}`)} />
                                <p className={({ isActive }) => (` absolute mt-[4px] text-white  text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-white'}`)}
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

export default Audio;