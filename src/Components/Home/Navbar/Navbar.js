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
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = ({ show, setShow, theme, setTheme }) => {
    const cart = useSelector((state) => state.courses.totalItem);
    // Declaration
    const navigate = useNavigate()
    const [blear, setblear] = useState(false)


    const [user] = useAuthState(auth);
    const menuItem = <>
        <NavLink
            to={'/'}

            className={({ isActive }) => (` text-md  font-medium my-4 lg:my-0  mx-4 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0  mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Home</p>
        </NavLink>
        <NavLink
            to={'/about'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0  mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >About Us</p>
        </NavLink>

        <NavLink
            to={'/classroom'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
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
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Courses</p>
        </NavLink>

        <NavLink
            to={'/playGames'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Play Games</p>
        </NavLink>
        <NavLink
            to={'/voicetotext'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >V to T</p>
        </NavLink>
        <NavLink
            to={'/texttovoice'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >T to V</p>
        </NavLink>
        <NavLink
            to={'/canvas'}
            className={({ isActive }) => (` text-md font-medium my-4 lg:my-0   mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Canvas</p>
        </NavLink>

        <NavLink
            to={'/contact'}
            className={({ isActive }) => (` text-md font-medium  my-4 lg:my-0  mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
            >Contact</p>
        </NavLink>

        {
            user && <NavLink
                to={'/dashboard'}
                className={({ isActive }) => (` text-md font-medium my-4 lg:my-0  mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
            >
                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
                >Dashboard</p>
            </NavLink>
        }
    </>

    return (
        <>
            {
                <div className={`w-full bg-base-500  mx-auto  ${show ? 'bg-orange-300' : ''} `}>
                    <div className="navbar md:px-20 bg-base-500">
                        <div className="navbar-start  ">
                            <div className="dropdown ">
                                <label onClick={() => setblear(!blear)} tabIndex="0" className="btn btn-ghost z-50  lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex="0" className="bg-white  menu menu-compact dropdown-content mt-3 px-2 py-0 shadow rounded-box w-52">
                                    {
                                       blear&&menuItem
                                    }
                                </ul>
                            </div>
                            <NavLink to={'/'} style={{ fontFamily: "Nunito" }} className=" font-bold text-xl text-black"><span className=' text-red-500'>L</span>ang<span className=' text-red-500'>Zil</span>a</NavLink>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0 gap-3 ">
                                {
                                    menuItem
                                }
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <NavLink
                                to={'/cart'}
                                className={({ isActive }) => (` text-md font-medium  my-4 lg:my-0  mx-2 ${isActive ? 'text-red-500  border-b border-red-500' : 'text-black'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-red-500' : 'text-black'}`)}
                                ><AiOutlineShoppingCart className='text-4xl text-primary relative mr-3' /> <span className='absolute -mt-10 ml-6 bg-primary text-white px-1.5 rounded-full text-sm'>{cart}</span></p>
                            </NavLink>
                            {
                                user?.uid ? <button style={{ fontFamily: "Nunito" }} onClick={() => signOut(auth)} className=" bg-red-500 text-white font-medium rounded py-[6px] px-5"><Link to=''>Logout</Link></button>
                                    :
                                    <button style={{ fontFamily: "Nunito" }} className=" bg-red-500 text-white font-medium rounded py-[6px] px-5"><Link to='/signIn'>Login</Link></button>
                            }
                        </div>
                    </div>

                </div >

            }
            {
                blear && <div onClick={() => setblear(!blear)} className='w-full min-h-full absolute inset-0 mx-auto bg-black bg-opacity-20 z-40  lg:hidden'></div>
            }


        </>
    );
};

export default Navbar;