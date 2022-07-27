import React from 'react';
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt } from "react-icons/fa"
import { SiMinutemailer } from "react-icons/si"
import { BsTelephoneForwardFill } from "react-icons/bs"
import { BiTimeFive } from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

    const sendEmail = event => {
        event.preventDefault()
        emailjs.sendForm('service_1z09stg', 'template_836mtsq', event.target, 'Fy8aOCqsiSskbK1yY').then(res => {
            console.log(res)
        }).catch(err => console.log(err));
        toast.success("Your submission has been received. I'll get back to you very soon.", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        event.target.reset();
    }


    return (
        <div className='w-5/6 mx-auto'>
            <h2 className='text-4xl font-bold text-[#221638] text-center py-16'>Contact</h2>
            <div className='md:flex lg:flex justify-center items-center'>
                <div className='md:w-3/5 lg:w-3/5'>
                    <p className='text-[#FE4A55] uppercase '>Contact Detail</p>
                    <h2 className='text-4xl font-bold text-[#221638]'>Get in Touch</h2>
                    <p className='pr-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                    <div className='flex items-center py-4'>
                        <FaMapMarkerAlt className='text-[#FE4A55] text-2xl mr-2' />
                        <div>
                            <p className='text-2xl font-bold text-[#221638]'>Our Address</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='flex items-center py-4'>
                        <SiMinutemailer className='text-[#FE4A55] text-2xl mr-2' />
                        <div>
                            <p className='text-2xl font-bold text-[#221638]'>Email</p>
                            <p>khanmohammadimran.i31@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center py-4'>
                        <BsTelephoneForwardFill className='text-[#FE4A55] text-2xl mr-2' />
                        <div>
                            <p className='text-2xl font-bold text-[#221638]'>Contact</p>
                            <p>+8801644399363</p>
                        </div>
                    </div>
                    <div className='flex items-center py-4'>
                        <BiTimeFive className='text-[#FE4A55] text-2xl mr-2' />
                        <div>
                            <p className='text-2xl font-bold text-[#221638]'>Hours of Operation</p>
                            <p>24/7 Available</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 lg:w-2/5 rounded-md bg-[url('https://i.ibb.co/yy1cGZC/contact-background-image.jpg')] p-8 text-white">
                    <h2>Ready to Get Started?</h2>
                    <p>Your email address will not be published. Required fields are marked</p>
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="Your Name" className="bg-[#C22B34] my-4 input input-ghost w-full 
                        max-w-xs" />
                        <br />
                        <input type="email" name="user_email" placeholder="Your Email Address" className="bg-[#C22B34] my-4 input input-ghost w-full 
                        max-w-xs" />
                        <br />
                        <input type="text" placeholder="Your Subject" className="bg-[#C22B34] my-4 input input-ghost w-full 
                        max-w-xs" />
                        <br />
                        <textarea name="message" className="bg-[#C22B34] w-full my-4 textarea textarea-ghost" placeholder="Write Your Message"></textarea>
                        <br />
                        <input type="submit" value="Send Message" className='bg-[#221638] py-4 px-8 rounded-md' />
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;