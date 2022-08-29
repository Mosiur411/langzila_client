import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import { AiOutlineMenuUnfold, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineRateReview, MdOutlineLeaderboard } from 'react-icons/md';
import { RiAdminFill, RiQuestionAnswerFill } from 'react-icons/ri';
import { GiAchievement } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { BsBookmarkCheckFill } from "react-icons/bs";
import Navbar from '../Home/Navbar/Navbar';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = ({ show, setShow }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <Navbar show={show} setShow={setShow} />
            <div className='px-12 mx-auto pt-10'>
                <div className="drawer drawer-mobile w-full z-50 p-8 ">
                    <input id="dashboard-sidebar" type="checkbox" className="bg-green-300 drawer-toggle" />
                    <div className="drawer-content">
                        <div className="lg:hidden flex items-center">
                            <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                                <AiOutlineMenuUnfold className='text-2xl' />
                            </label>
                            <h2 className='text-2xl font-bold'>LangZila</h2>
                        </div>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side rounded-lg shadow">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-56 border border-gray-100">
                            <li className='font-bold text-2xl py-4 text-primary'>Dashboard</li>
                            {user && <>
                                {/* <li><Link to="/dashboard"><AiOutlineHome className='text-2xl text-primary'/>Dashboard</Link></li> */}

                                <li><Link to="/dashboard"><BiUserCircle className='text-2xl text-primary' />Profile</Link></li>
                                <li><Link to="/dashboard/ask"><RiQuestionAnswerFill className='text-2xl text-primary' />Ask Question</Link></li>
                                <li><Link to="/dashboard/review"><MdOutlineRateReview className='text-2xl text-primary' />Add Reviews</Link></li>
                                <li><Link to="/dashboard/achievements"><GiAchievement className='text-2xl text-primary' />Achievements</Link></li>
                                <li><Link to="/dashboard/leaderboard"><MdOutlineLeaderboard className='text-2xl text-primary' />Leaderboard</Link></li>
                                <li><Link to="/dashboard/myboocking"><BsBookmarkCheckFill className='text-2xl text-primary' />My Boocking</Link></li>
                               
                            </>}
                            {
                                admin && <>
                                 <li><Link to='/dashboard/alluser'><RiAdminFill className='text-2xl text-primary' /> Make Admin</Link></li>
                                
                                
                                
                                </>
                            }
                        </ul>
                    </div>
                </div></div>
        </div >
    );
};

export default Dashboard;