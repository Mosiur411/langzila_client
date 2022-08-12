import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BiEdit } from 'react-icons/bi';
import auth from '../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});

    const email = user.email;
    console.log(email)
    useEffect(() => {
        fetch(`http://localhost:5000/userProfile/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserInfo(data.data)
            })

    }, [])

    const updateMyProfile = event => {
        console.log(event);
        event.preventDefault();
        const updateProfile = {
            name: user.displayName,
            email: user.email,
            desc: event.target.desc.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
            country: event.target.country.value,
            age: event.target.age.value,
            date: event.target.date.value,
        }

        const email = user.email
        const url = `http://localhost:5000/userProfile/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Update Successfully');
                event.target.reset();
            })

    };

    return (
        <div>
            <div className='mx-12 shadow-md border border-gray-100 lg:w-[900px] rounded-lg'>
                <div className='lg:flex flex-wrap justify-between'>
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex flex-col items-center text-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{user?.displayName}</h2>
                            <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                            <p class="text-base">
                                <lebel class='font-bold'>Describe Yourself</lebel>
                                <p>{user?.desc}</p>
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-2/3  pr-6 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                        <div className='flex justify-between items-center '>
                            <h1 className='mb-5 font-bold text-2xl'>Personal Information</h1>
                            <label for="my-modal" class="flex items-center -mt-14 text-primary modal-button mb-2 font-medium text-lg w-full sm:w-auto text-center">Edit<BiEdit className='ml-1' /></label>
                        </div>
                        <hr className='py-3' />
                        <div className="relative z-0 w-full mb-6 group">
                            <lebel class='font-bold'>Email</lebel>
                            <p>{user?.email}</p>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <lebel class='font-bold'>Address</lebel>
                            <p>{userInfo?.address}</p>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <lebel class='font-bold'>Phone Number</lebel>
                            <p>{userInfo?.phone}</p>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <lebel class='font-bold'>Country</lebel>
                            <p>{userInfo?.country}</p>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <lebel class='font-bold'>Age</lebel>
                            <p>{userInfo?.age}</p>
                        </div>
                        <div className="relative z-0 w-full group mb-1">
                            <lebel class='font-bold'>Birth Date</lebel>
                            <p>{userInfo?.date}</p>
                        </div>
                    </div>

                </div>

            </div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />

            <div class="modal">
                <div class="modal-box">
                    <form onSubmit={updateMyProfile}>
                        <div className="relative z-0 w-full mb-6 group">
                            <lebel class='font-bold'>Name</lebel>
                            <input type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none" value={user?.displayName} />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <lebel class='font-bold'>Email</lebel>
                            <input type="email" name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={user?.email} />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <lebel class='font-bold'>Description</lebel>
                            <input type="text" name="desc" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
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
                                <input type="number" name="age" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Website</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="date" name="date" id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birth Date</label>
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update</button>
                    </form>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;