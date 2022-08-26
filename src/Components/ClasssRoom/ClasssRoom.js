import React from 'react';
import "@fontsource/nunito";
import Navbar from '../Home/Navbar/Navbar';
import './ClassRoom.css'
import { useNavigate } from "react-router-dom";

// Image
import boy3d from '../assets/ClassRoom/boy3d.png'
import boy3d2 from '../assets/ClassRoom/boy3d2.png'
import boy3d3 from '../assets/ClassRoom/boy3d3.png'
import boy3d5 from '../assets/ClassRoom/boy3d5.png'

const ClasssRoom = ({ show, setShow }) => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar show={show} setShow={setShow} />

            <div className=' '>

                <div className=' flex items-center max-w-6xl py-10 mx-auto justify-between px-10'>
                    <div className=' w-[40%] text-center'>
                        <div data-aos="fade-down" className=' pl-10'>
                            <img className='floating h-72  mx-auto ' src={boy3d3} alt="boy3d3" />
                        </div>
                        <div data-aos="fade-down-right">
                            <h1 className=' text-2xl font-bold text-purple-900 '>Hello Learner!</h1>
                            <h3>Select your favorite learning process and learn very effective and interesting way. </h3>
                            <div className=' w-full text-center mt-3'>
                                <button onClick={() => navigate('/assignment/assignment1quiz')} className=' text-center mx-auto bg-purple-900 text-sm font-medium py-1 px-3 rounded text-white'>Quick Test</button>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[60%]'>

                        <div data-aos="fade-down" className=' bg-purple-900 my-10 w-[410px] p-2 mx-auto h-[170px] rounded flex items-center relative'>
                            <img className=' h-40' src={boy3d} alt="boy3d" />
                            <div >
                                <h4 style={{ fontFamily: "Nunito" }} className=' uppercase  text-xs font-medium text-white opacity-30 absolute top-1 left-[115px]'>L <span className=' ml-2'>e</span> <span className=' ml-2'>a</span> <span className=' ml-2'>r</span> <span className=' ml-2'>n</span>  <span className=' ml-5'> B </span> <span className=' ml-2'>y</span></h4>
                                <h1 className=' text-center text-xl my-1 text-yellow-300 font-bold'>AUDIO</h1>
                                <p className=' text-sm text-justify px-2 text-gray-300'>You can learn any language by Audio. This will help to listining and learning.</p>
                                <div className=' w-full text-center mt-3'>
                                    <button onClick={() => navigate('/audio/search')} className=' text-center mx-auto bg-yellow-300 text-sm font-semibold py-1 px-3 rounded text-purple-900'>Learn Now</button>
                                </div>
                            </div>
                        </div>


                        <div data-aos="zoom-out-left" className=' bg-pink-900 my-10 w-[410px] p-2 mx-auto h-[170px] rounded flex items-center relative'>
                            <img className='ml-[-5px] h-40' src={boy3d2} alt="boy3d2" />
                            <div>
                                <h4 style={{ fontFamily: "Nunito" }} className=' uppercase  text-xs font-medium text-white opacity-30 absolute top-1 left-[115px]'>L <span className=' ml-2'>e</span> <span className=' ml-2'>a</span> <span className=' ml-2'>r</span> <span className=' ml-2'>n</span>  <span className=' ml-5'> B </span> <span className=' ml-2'>y</span></h4>
                                <h1 className=' text-center text-xl my-1 text-yellow-300 font-bold'>SUPPORT</h1>
                                <p className=' text-sm text-justify px-2 text-gray-300'>You can learn any language by Google Meet. This will help to listining, Specking and learning.</p>
                                <div className=' w-full text-center mt-3'>
                                    <button onClick={() => navigate('/support')} className=' text-center mx-auto bg-yellow-300 text-sm font-semibold py-1 px-3 rounded text-purple-900'>Learn Now</button>
                                </div>
                            </div>
                        </div>


                        <div data-aos="fade-up" className=' bg-fuchsia-900 my-10 w-[410px] p-2 mx-auto h-[170px] rounded flex items-center relative'>
                            <img className=' h-40 mb-[-10px] ml-[-5px]' src={boy3d5} alt="boy3d5" />
                            <div>
                                <h4 style={{ fontFamily: "Nunito" }} className=' uppercase  text-xs font-medium text-white opacity-30 absolute top-1 left-[115px]'>L <span className=' ml-2'>e</span> <span className=' ml-2'>a</span> <span className=' ml-2'>r</span> <span className=' ml-2'>n</span>  <span className=' ml-5'> B </span> <span className=' ml-2'>y</span></h4>
                                <h1 className=' text-center text-xl my-1 text-yellow-300 font-bold'>VIDEO</h1>
                                <p className=' text-sm text-justify px-2 text-gray-300'>You can learn any language by Video. This will help to listining and learning.</p>
                                <div className=' w-full text-center mt-3'>
                                    <button onClick={() => navigate('/video/banglavideo')} className=' text-center mx-auto bg-yellow-300 text-sm font-semibold py-1 px-3 rounded text-purple-900'>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
};

export default ClasssRoom;