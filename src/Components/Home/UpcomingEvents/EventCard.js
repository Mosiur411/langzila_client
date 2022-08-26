import React, { useEffect, useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './EventCard.css'
import { BsCircleFill } from "react-icons/bs";
import { BiCaretLeft } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { TbClock } from "react-icons/tb";
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axios from 'axios';

const EventCard = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const { pathname } = useLocation();
    const [eventInfo, setEventInfo] = useState([]);
    const [userData, setUserData] = useState()
    const [reload, setReload] = useState(false)
    const navigate = useNavigate();
    const email = user?.email


    // Scroll to Top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        fetch('/Event.json')
            .then(res => res.json())
            .then(data => {
                setEventInfo(data)
                setReload(!reload)
            })
    }, [email])


    console.log(eventInfo);

    const selected = eventInfo?.filter(event => (event.id == id));
    const date = selected[0]?.data;
    const newData = date?.split(" ");
    const course = selected[0]?.title;

    console.log(date);

    useEffect(() => {
        fetch(`http://localhost:5000/eventData/${email}/${course}`)
            .then(res => res.json())
            .then(data => {
                console.log(data?.data)
                setUserData(data?.data)
                setReload(true)
            })
    }, [course, reload])



    console.log(userData)
    useEffect(() => {

    }, [reload])




    const handelSubmit = async (e) => {
        e.preventDefault()

        // Check Post Data

        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const country = e.target.country.value;
        const birthDate = e.target.date.value;
        const people = e.target.people.value
        const email = user?.email;
        const useName = user?.displayName;
        const title = selected[0]?.title;
        const time = selected[0]?.time;
        const date = selected[0]?.data;

        // Process Post Data
        const EventData = {
            address: address,
            phone: phone,
            country: country,
            birthDate: birthDate,
            people: people,
            email: email,
            useName: useName,
            course: title,
            time: time,
            date: date,
        }

        if (EventData) {
            try {
                const { data } = await axios.patch(`http://localhost:5000/eventData/${email}`, EventData, {
                    method: 'PATCH'
                });

                if (!data.success) {
                    return toast.error(data.error)
                }
                console.log(data);
                toast.success(data.message);

            } catch (error) {
                toast.error(error.message)
            }
        }

        e.target.address.value = '';
        e.target.phone.value = '';
        e.target.country.value = '';
        e.target.date.value = '';
        e.target.people.value = '';


    }

    console.log(date);

    return (
        <>
            <button button onClick={() => navigate('/')} className=' absolute left-10 top-5 border border-red-500 flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium' > <BiCaretLeft className=' text-xl' /></button >

            <div className=' h-screen max-w-6xl  px-10 flex items-center mx-auto'>
                <div className=' relative bg-sky-100 h-[60vh] w-full ml-60'>

                    <div className=' ml-60 py-5 flex items-center justify-between h-full'>
                        <div >
                            <div className=' flex items-center'>
                                <BsCircleFill className=' text-[8px] text-sky-600 mr-3' />
                                <p className=' text-sm text-gray-600'>Your Upcomming Event</p>
                            </div>
                            <h1 className=' text-3xl mt-2 mb-8 font-semibold text-black'>{selected[0]?.title}</h1>
                            <div className=' mb-8'>
                                {
                                    selected[0]?.data &&
                                    <FlipClockCountdown
                                        to={new Date(selected[0]?.data).getTime() + 24 * 3600 * 1000 + 5000}
                                        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                                        labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', color: 'red' }}
                                        digitBlockStyle={{ width: 35, height: 50, backgroundColor: 'white', color: 'black', fontSize: 30 }}
                                        dividerStyle={{ color: 'white', height: 1 }}
                                        separatorStyle={{ color: 'red', size: '6px' }}
                                        duration={0.5}
                                    >
                                        Finished
                                    </FlipClockCountdown>
                                }
                            </div>
                            <div className=' flex items-center mb-2'>
                                <MdLocationOn className=' text-md text-sky-600 mr-3' />
                                <p className=' text-sm font-medium'>Bonani, Dhaka, Bangladesh.</p>
                            </div>
                            <div className=' flex items-center mb-6'>
                                <TbClock className=' text-md text-sky-600 mr-3' />
                                <p className=' text-sm font-medium'>{selected[0]?.time}</p>
                            </div>
                            <div>
                                <label data-aos="fade-up-left" for="my-modal" class="bg-red-600 py-[6px] px-3 my-2  text-white rounded font-semibold font-mono hover:bg-purple-900">Book Now</label>
                                <input type="checkbox" id="my-modal" class="modal-toggle" />


                                <div class="modal">
                                    <div class="modal-box">
                                        <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2 bg-red-600 border-none text-white">✕</label>
                                        <h3 class="font-bold text-accent text-2xl py-2">Event Booking From</h3>
                                        <form onSubmit={handelSubmit}>
                                            <div className="relative z-0 w-full mb-6 group">
                                                <lebel class='font-bold'>Name</lebel>
                                                <input type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none" value={user?.displayName} />
                                            </div>
                                            <div className="relative z-0 w-full mb-6 group">
                                                <lebel class='font-bold'>Email</lebel>
                                                <input type="email" name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={user?.email} />
                                            </div>

                                            <div className="relative z-0 w-full mb-6 group">
                                                <input type="text" name="address" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                            </div>
                                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="number" name="phone" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="text" name="country" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                    <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City/Country</label>
                                                </div>
                                            </div>
                                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="number" name="people" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                    <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Boocking People</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="date" name="date" id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birth Date</label>
                                                </div>
                                            </div>
                                            <button type='submit' className=' cursor-pointer py-1 px-4 text-md font-medium bg-red-500 rounded text-white' ><label for="my-modal" >{`${userData ? "Update" : "Submit"}`}</label></button>

                                        </form>


                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='  h-full mr-10 py-10'>
                            <div className=' bg-white py-4 px-7'>
                                <div className=' flex items-end'>
                                    <h1 className=' text-sky-400  text-3xl font-bold mr-2'>{newData && newData[1]?.slice(0, -1)}</h1>
                                    <p className=' text-md font-semibold text-stone-500 mr-1'>{newData && newData[0]},</p>
                                    <p className=' text-md font-semibold text-stone-500'>{newData && newData[2]}</p>
                                </div>
                                <p className=' text-xl font-semibold text-black'>{selected[0]?.day}</p>
                            </div>
                        </div>
                    </div>


                    <img className=' absolute top-[13%] left-[-24%]  bg-gray-500 w-[24vw] h-[44vh]' src={selected[0]?.image} alt="image" />


                </div>

            </div>






        </>
    );
};

export default EventCard;