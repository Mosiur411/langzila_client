import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";

const UpcomingEvents = () => {


    const navigate = useNavigate();
    const [eventInfo, setEventInfo] = useState([]);

    useEffect(() => {
        fetch('Event.json')
            .then(res => res.json())
            .then(data => setEventInfo(data))
    }, [])



    return (
        <div>
            <div className='bg-secondary  mt-32 pb-20'>
                <img className='w-full' src="https://i.ibb.co/4J5w3Jp/events-rectangle1.png" alt="" />
                <img className='float-right pr-12 mt-5 lg:block hidden covid9' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/07/k-shape17.png" alt="" />
                <div className="text-gray-600 body-font">
                    <div className=" md:px-5 py-20 mx-auto max-w-7xl">
                        <div className='text-center lg:w-[760px] mx-auto'>
                            <h3 className='uppercase text-primary font-semibold'>Events</h3>
                            <h1 className='py-2 text-3xl font-bold text-accent'>Our Upcoming Events</h1>
                            <p>This is monthly events. You can learn by booking an event. You can choose an event and booking it.This will help you to improve your learning language.</p>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-16 py-16">
                            {
                                eventInfo.map(event => <>


                                    <div data-aos="fade-up-left" className="m-5 bg-white  rounded-2xl">
                                        <div className=' flex items-center justify-between'>
                                            <div className='hidden lg:block  bg-slate-400 h-60 w-2/3 rounded-lg '>
                                                <img className='h-full  py-5 w-full rounded-l-2xl ' src={event.image} alt="Movie" />
                                            </div>
                                            <div className="h-full  px-3 py-1 ml-3">
                                                <div className=' w-40 mx-auto relative'>
                                                    <img className='w-40 mt-4  relative' src="https://i.ibb.co/0cFPTM5/rectangle2.png" alt="image" />
                                                    <div className='mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-full text-center text-white font-semibold text-sm'>{event.data}</div>
                                                </div>
                                                <h2 className="text-2xl py-2 font-bold mt-4 text-gray-900">{event.title}</h2>
                                                <p className=' mt-1 text-justify mb-3 text-sm pr-3'>{event.text}</p>
                                                <div className=' flex items-center justify-between pr-3'>
                                                    <div className=' flex items-center'>
                                                        <FaRegClock className=' text-xs mr-2 text-red-500' />
                                                        <h2 className=' text-xs font-medium text-red-500'>{event.time}</h2>
                                                    </div>
                                                    <button onClick={() => navigate(`/eventCrad/${event.id}`)} className=' border-red-600 border py-[3px] px-2 rounded-md text-sm text-red-600'>Start Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </>)
                            }
                        </div>
                    </div>
                </div>
                <img className='-mt-36 lg:block hidden' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/07/k-shape18.png" alt="" />
                {/* <img className='w-full' src="https://i.ibb.co/0Z6Fpc9/events-rectangle2.png" alt="image" /> */}
            </div>
        </div>
    );
};

export default UpcomingEvents;