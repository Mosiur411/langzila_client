import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
import "@fontsource/nunito";
// icons
import { BiCaretLeft } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";



const Navbar = ({ show, setShow, theme, setTheme }) => {

    // Declaration
    const navigate = useNavigate()


    const [user] = useAuthState(auth);
    const menuItem = <>
        <NavLink
            to={'/'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0  mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Home</p>
        </NavLink>
        <NavLink
            to={'/about'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0  mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >About Us</p>
        </NavLink>

        <NavLink
            to={'/classroom'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Classroom</p>
        </NavLink>
        <NavLink
            to={'/forum'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Community</p>
        </NavLink>

        <NavLink
            to={'/courses'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Courses</p>
        </NavLink>

        <NavLink
            to={'/playGames'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Play Games</p>
        </NavLink>
        <NavLink
            to={'/voicetotext'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >V to T</p>
        </NavLink>
        <NavLink
            to={'/texttovoice'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >T to V</p>
        </NavLink>
        <NavLink
            to={'/canvas'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Canvas</p>
        </NavLink>

        <NavLink
            to={'/contact'}
            className={({ isActive }) => (` text-md font-medium  my-4 lg:my-0  mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Contact</p>
        </NavLink>


    {
        user&&<NavLink
        to={'/dashboard'}
        className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
    >
        <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
        >Dashboard</p>
    </NavLink>
    }
    </>

    return (
        <>
            {
                <div className={`navbar md:px-[64px]  mx-auto  py-0 my-0  ${show ? 'bg-orange-300' : ''}`}>
                    <div class="navbar  bg-base-100 py-0 my-0 ">
                        <div class="navbar-start  ">
                            <div class="dropdown ">
                                <label tabindex="0" class="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabindex="0" class="bg-white  menu menu-compact dropdown-content mt-3 px-2 py-0 shadow rounded-box w-52">
                                    {
                                        menuItem
                                    }
                                </ul>
                            </div>
                            <NavLink to={'/'} style={{ fontFamily: "Nunito" }} className=" font-bold text-xl text-black"><span className=' text-red-500'>L</span>ang<span className=' text-red-500'>Zil</span>a</NavLink>
                            {/* <button onClick={() => setShow(!show)}>{show ? <CgToggleOn /> : <CgToggleOff />} </button> */}
                        </div>
                        <div class="navbar-center hidden lg:flex">
                            <ul class="menu menu-horizontal p-0 gap-3 ">
                                {
                                    menuItem
                                }
                            </ul>
                        </div>
                        <div className="navbar-end">
                            {
                                user?.uid ? <button style={{ fontFamily: "Nunito" }} onClick={() => signOut(auth)} className=" bg-red-500 text-white font-medium rounded py-[6px] px-5"><Link to=''>Logout</Link></button>
                                    :
                                    <button style={{ fontFamily: "Nunito" }} className=" bg-red-500 text-white font-medium rounded py-[6px] px-5"><Link to='/signIn'>Login</Link></button>
                            }
                        </div>
                    </div>

                </div >

            }
        </>
    );
};

export default Navbar;