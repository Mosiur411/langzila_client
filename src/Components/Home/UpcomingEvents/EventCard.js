import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './EventCard.css'
import eventimg from '../../assets/Event/event.png'
import { BiCaretLeft } from "react-icons/bi";
const EventCard = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const [eventInfo, setEventInfo] = useState([]);
    const [value, onChange] = useState(new Date());
    const navigate = useNavigate()

    // Scroll to Top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        fetch('/Event.json')
            .then(res => res.json())
            .then(data => setEventInfo(data))
    }, [])


    console.log(value)




    return (
        <>
            <button button onClick={() => navigate('/')} className=' absolute left-10 top-5 border border-red-500 flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium' > <BiCaretLeft className=' text-xl' /></button >

            <div className=' mt-6 max-w-7xl mx-auto  py-10 flex items-center justify-between px-10'>
                <div className='  h-full w-2/3 mr-10'>
                    <h1 className=' text-2xl font-semibold text-center mb-2'>Hay! Let's start</h1>
                    <p className=' text-center'>The monthly quiz event. It helps you to encreage you knowledge.</p>

                    <div >
                        <img className=' w-96 h-96 mx-auto mt-20' src={eventimg} alt="eventimg" />
                    </div>
                    <div className='w-full text-center'>
                        <button className='bg-red-500 py-1 px-3 text-white rounded'>Lets Start</button>
                    </div>

                </div>
                <div className=' w-1/3 h-full ml-10'>
                    <div className=' bg-white'>
                        <Calendar className='w-full bg-red-500' onChange={onChange} value={value} />
                    </div>


                    <div>
                        <div className=' mt-16'>
                            {
                                eventInfo.map(event => <>
                                    <div className='h-20 bg-base-100 shadow-md rounded-md my-2  flex items-center '>
                                        <div className=' h-full mr-6'>
                                            <img className=' rounded-l-md h-20 w-20' src={event.image} alt="image" />
                                        </div>
                                        <div>
                                            <h1 className='text-xs font-semibold '>{event.data}</h1>
                                            <p className=' text-xl font-bold text-red-500'>{event.title}</p>
                                            <p className='text-xs font-semibold '>{event.time}</p>
                                        </div>
                                    </div>

                                </>)
                            }

                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default EventCard;