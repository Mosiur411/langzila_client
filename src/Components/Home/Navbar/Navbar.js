import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({ show, setShow, theme, setTheme }) => {
    const [user] = useAuthState(auth);
    return (
        <div className="navbar md:px-[68px]">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">LangZila</Link>
                {/* =================== Night Mode Start ===================== */}
                {/* <div>
                    {!show && (
                        <div onClick={() => setShow(!show)}>
                            <CgToggleOff className="text-2xl cursor-pointer" />
                        </div>
                    )}
                    {show && (
                        <div onClick={() => setShow(!show)}>
                            <CgToggleOn className="text-2xl cursor-pointer" />
                        </div>
                    )}
                </div> */}

                {/* =================== Night Mode Start ===================== */}
            </div>
            {/* ===================== search start=================== */}
            {/* <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div> */}
            {/* ===================== search start=================== */}
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 ">
                    <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg'><Link to='/'>Home</Link></li>
                    <li className='hover:text-white hover:bg-[#FE4A55] rounded-lg' tabIndex="0">
                        <Link to='/'>
                            Pages
                            <HiOutlineChevronDown />
                        </Link>
                        <ul className="p-2 bg-base-100 text-black">
                            <li><Link to='/'>Submenu 1</Link></li>
                            <li><Link to='/'>Submenu 2</Link></li>
                        </ul>
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
            </div>
        </div>
    );
};

export default Navbar;