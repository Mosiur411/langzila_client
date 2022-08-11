import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({ show, setShow, theme, setTheme }) => {
    const [user] = useAuthState(auth);
    const menuItem = <>
        <li className=' rounded-lg className={"hover:text-white hover:bg-[#FE4A55]"}'>   <NavLink
            to="/"
            style={({ isActive }) => ({
                color: isActive ? 'white' : '#606060',
                background: isActive ? '#FE4A55' : 'white',

            })}
        >Home</NavLink></li>
        <li tabindex="0">
            <a className='hover:text-white hover:bg-[#FE4A55] rounded-lg'>
                Start Quiz
                <HiOutlineChevronDown />
            </a>
            <ul class="p-2 bg-base-100 text-black">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li>
        <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg' tabIndex="0">
            <Link to='/Contact'> Contact Us

            </Link>
        </li>
        <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg' tabIndex="0">
            <Link to='/dashboard'> Dashboard

            </Link>
        </li>
    </>
    return (
        <div className={`navbar md:px-[68px] mx-auto ${show ? 'bg-orange-300' : ''}`}>
            {/* <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">LangZila</Link>
                <button onClick={() => setShow(!show)}>{show ? <CgToggleOn /> : <CgToggleOff />} </button>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 ">
                    <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg'><Link to='/'>Home</Link></li>
                    <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg' tabIndex="0">
                        <Link to='/Contact'> Pages
                            <HiOutlineChevronDown />
                        </Link>
                    </li>
                    <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg' tabIndex="0">
                        <Link to='/'>
                            Coures
                            <HiOutlineChevronDown />
                        </Link>
                        <ul className="p-2 bg-base-100 text-black">
                            <li><Link to='/'>Submenu 1</Link></li>
                            <li><Link to='/'>Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg' tabIndex="0">
                        <Link to='/'>
                            Event
                            <HiOutlineChevronDown />
                        </Link>
                        <ul className="p-2 bg-base-100 text-black">
                            <li><Link to='/'>Submenu 1</Link></li>
                            <li><Link to='/'>Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg' tabIndex="0">
                        <Link to='/'>
                            Shop
                            <HiOutlineChevronDown />
                        </Link>
                        <ul className="p-2 bg-base-100 text-black">
                            <li><Link to='/'>Submenu 1</Link></li>
                            <li><Link to='/'>Submenu 2</Link></li>
                        </ul>
                    </li>
                    {
                        user?.uid ? <button onClick={() => signOut(auth)} className="SubmitButton"><Link to=''>Logout</Link></button>
                            :
                            <button className="SubmitButton"><Link to='/signIn'>Login</Link></button>
                    }
                </ul>
            </div> */}
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItem
                            }
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl font-bold">Langzila</a>
                    {/* <button onClick={() => setShow(!show)}>{show ? <CgToggleOn /> : <CgToggleOff />} </button> */}
                </div>

                <div class="navbar-end">
                    <ul class="menu menu-horizontal p-0 gap-3 ">
                        {
                            menuItem
                        }
                    </ul>

                    {
                        user?.uid ? <button onClick={() => signOut(auth)} className="SubmitButton p-3"><Link to=''>Logout</Link></button>
                            :
                            <button className="SubmitButton p-3"><Link to='/signIn'>Login</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;