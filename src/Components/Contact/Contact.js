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
        <>
            <div className='w-5/6 mx-auto mb-12'>
                <h2 className='text-4xl font-bold text-accent text-center py-8'>Contact Us</h2>
                <p className='text-center lg:w-[800px] mb-5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                <div className='md:flex lg:flex justify-center items-center'>
                    <div className='md:w-3/5 lg:w-3/5'>
                        <p className='text-primary uppercase py-2'>Contact Detail</p>
                        <h2 className='text-4xl font-bold text-accent py-2'>Get in Touch</h2>
                        <div className='flex items-center py-4 shadow-lg border-l-4 border-l-primary px-4 rounded-lg lg:mr-72 mt-5'>
                            <FaMapMarkerAlt className='text-primary text-4xl mr-2' />
                            <div shadow-lg border-l-4 border-l-primary px-4 py-6 rounded-lg>
                                <p className='text-2xl font-bold text-accent'>Our Address</p>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex items-center py-4 shadow-lg border-l-4 border-l-primary px-4 rounded-lg lg:mr-72 mt-5'>
                            <SiMinutemailer className='text-primary text-4xl mr-2' />
                            <div>
                                <p className='text-2xl font-bold text-accent'>Email</p>
                                <p>khanmohammadimran.i31@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center py-4 shadow-lg border-l-4 border-l-primary px-4 rounded-lg lg:mr-72 mt-5'>
                            <BsTelephoneForwardFill className='text-primary text-4xl mr-2' />
                            <div>
                                <p className='text-2xl font-bold text-accent'>Contact</p>
                                <p>+8801644399363</p>
                            </div>
                        </div>
                        <div className='flex items-center py-4 shadow-lg border-l-4 border-l-primary px-4 rounded-lg lg:mr-72 my-5'>
                            <BiTimeFive className='text-primary text-4xl mr-2' />
                            <div>
                                <p className='text-2xl font-bold text-accent'>Hours of Operation</p>
                                <p>24/7 Available</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/5 lg:w-2/5 rounded-md shadow-lg border-l-4 border-l-primary p-8">
                        <h2 className='text-3xl py-2 font-bold text-accent'>Ready to Get Started?</h2>
                        <p className='mb-5'>Your email address will not be published. Required fields are marked</p>
                        <form onSubmit={sendEmail}>
                            <input type="text" placeholder="Your Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                            <br />
                            <input type="email" name="user_email" placeholder="Your Email Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                            <br />
                            <input type="text" placeholder="Your Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                            <br />
                            <textarea name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Write Your Message"></textarea>
                            <br />
                            <input type="submit" value="Send Message" className='border border-gray-300 bg-primary text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5' />
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;