import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { BiCaretLeft } from "react-icons/bi";


const Bangla = () => {

    const navigate = useNavigate()
    return (
        <div>
            <div className=' h-screen text-center '>
                <button onClick={() => navigate('/')} className=' absolute left-10 top-5 border border-red-500 flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' /></button>

                <div className='  py-16 '>
                    <div data-aos="fade-down" className=' bg-gray-100 rounded-lg xl:w-1/3 w-1/2 mx-auto  px-2'>
                        <nav className='flex  md:justify-center justify-between px-2 md:px-0 mb-12 md:mb-0 h-full'>
                            <NavLink
                                to={'easy'}
                                className={({ isActive }) => (` text-md font-medium my-6 mx-4 ${isActive ? 'text-orange-500 border-b  border-orange-500' : 'text-black'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Easy</p>
                            </NavLink>


                            <NavLink
                                to={'medium'}
                                className={({ isActive }) => (` text-md font-medium my-6 mx-4  ${isActive ? 'text-orange-500  border-b border-orange-500' : 'text-black'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Medium</p>
                            </NavLink>

                            <NavLink
                                to={'hard'}
                                className={({ isActive }) => (` text-md font-medium my-6  mx-4 ${isActive ? 'text-orange-500  border-b border-orange-500' : 'text-black'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Hard</p>
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

export default Bangla;

