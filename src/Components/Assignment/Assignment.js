import React, { useState } from 'react';
import "@fontsource/nunito";
import './Assignment.css'
import Calendar from 'react-calendar';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// Icons
import { BiCaretLeft } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsFileEarmarkMedical, BsFileEarmarkCheck } from "react-icons/bs";

const Assignment = () => {

    const navigate = useNavigate()
    const [value, setValue] = useState([new Date(2022, 8, 5)]);
    const [active, setActive] = useState(1)


    return (
        <>

            <button onClick={() => navigate('/classroom')} className=' absolute left-10 top-5 border border-red-500 flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' /></button>

            <div className=' flex  max-w-6xl mx-auto  px-10 justify-between mt-10'>

                <div className=' bg-green-50 rounded-lg w-[65%] py-10 text-center px-10 h-[90vh] overflow-x-auto mt-10 example '>

                    <Outlet></Outlet>

                </div>
                <div className=' w-[30%] py-10 '>
                    <div className=' w-full'>
                        <Calendar className='shadow-md pb-2 px-2 rounded-lg react-calendar '
                            value={value}
                        />
                    </div>
                    <nav className=' mt-10'>

                        <NavLink to={'assignment1quiz'}>
                            <div onClick={() => (setActive(1), setValue([new Date(2022, 8, 5)]))} className={`${active == 1 ? "bg-green-100" : "bg-white"} border border-[#a0a09649] shadow-md rounded px-4 py-3 mb-8`}>
                                <h1 style={{ fontFamily: "Nunito" }} className=' text-xl font-semibold text-blue-900 '>Quick Test - 1</h1>
                                <div className=' flex items-center justify-between  mt-3 '>
                                    <div>
                                        <p className=' flex items-center text-sm font-medium '><BiBookBookmark className=' text-blue-900 mr-2 ' />Subject : Bangla</p>
                                        <p className=' flex items-center text-sm font-medium mt-1  '><AiOutlineFieldTime className=' text-blue-900 mr-2 ' />Time: 10:00</p>
                                    </div>
                                    <div>
                                        <p className=' flex items-center text-sm font-medium '><BsFileEarmarkMedical className=' text-blue-900 mr-2 ' />Total mark : 100</p>
                                        <p className=' flex items-center text-sm font-medium  mt-1 '><BsFileEarmarkCheck className=' text-blue-900 mr-2 ' />Pass mark: 70</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>


                        <NavLink to={'assignment2quiz'}>
                            <div onClick={() => (setActive(2), setValue([new Date(2022, 8, 16)]))} className={`${active == 2 ? "bg-green-100" : "bg-white"} border border-[#a0a09649] shadow-md rounded px-4 py-3 mb-8`}>
                                <h1 style={{ fontFamily: "Nunito" }} className=' text-xl font-semibold text-blue-900 '>Quick Test - 2</h1>
                                <div className=' flex items-center justify-between  mt-3 '>
                                    <div>
                                        <p className=' flex items-center text-sm font-medium '><BiBookBookmark className=' text-blue-900 mr-2 ' />Subject : English</p>
                                        <p className=' flex items-center text-sm font-medium mt-1  '><AiOutlineFieldTime className=' text-blue-900 mr-2 ' />Time: 40:00</p>
                                    </div>
                                    <div>
                                        <p className=' flex items-center text-sm font-medium '><BsFileEarmarkMedical className=' text-blue-900 mr-2 ' />Total mark : 100</p>
                                        <p className=' flex items-center text-sm font-medium  mt-1 '><BsFileEarmarkCheck className=' text-blue-900 mr-2 ' />Pass mark: 70</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>


                        <NavLink to={'assignment3quiz'}>
                            <div onClick={() => (setActive(3), setValue([new Date(2022, 8, 28)]))} className={`${active == 3 ? "bg-green-100" : "bg-white"} border border-[#a0a09649] shadow-md rounded px-4 py-3 mb-8`}>
                                <h1 style={{ fontFamily: "Nunito" }} className=' text-xl font-semibold text-blue-900 '>Quick Test - 3</h1>
                                <div className=' flex items-center justify-between  mt-3 '>
                                    <div>
                                        <p className=' flex items-center text-sm font-medium '><BiBookBookmark className=' text-blue-900 mr-2 ' />Subject : English</p>
                                        <p className=' flex items-center text-sm font-medium mt-1  '><AiOutlineFieldTime className=' text-blue-900 mr-2 ' />Time: 40:00</p>
                                    </div>
                                    <div>
                                        <p className=' flex items-center text-sm font-medium '><BsFileEarmarkMedical className=' text-blue-900 mr-2 ' />Total mark : 100</p>
                                        <p className=' flex items-center text-sm font-medium  mt-1 '><BsFileEarmarkCheck className=' text-blue-900 mr-2 ' />Pass mark: 70</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>



                    </nav>
                </div>
            </div></>
    );
};

export default Assignment;