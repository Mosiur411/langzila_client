import React from 'react';

const Contact = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <h2 className='text-4xl font-bold text-[#221638] text-center py-16'>Contact</h2>
            <div className='md:flex lg:flex justify-center items-center'>
                <div className='md:w-3/5 lg:w-3/5'>
                    <h3 className='text-2xl text-[#FE4A55]'>Contact Detail</h3>
                    <h2 className='text-4xl font-bold text-[#221638]'>Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                    <ul>
                        <li>Our Address</li>
                        <li>Email</li>
                        <li>Contact</li>
                        <li>Hours of Operation</li>
                    </ul>
                </div>
                <div className="md:w-2/5 lg:w-2/5 rounded-md bg-[url('https://i.ibb.co/yy1cGZC/contact-background-image.jpg')] p-8 text-white">
                    <h2>Ready to Get Started?</h2>
                    <p>Your email address will not be published. Required fields are marked</p>
                    <form>
                        <input type="text" placeholder="Your Name" className="bg-[#C22B34] my-4 input input-ghost w-full 
                        max-w-xs" />
                        <br />
                        <input type="email" placeholder="Your Email Address" className="bg-[#C22B34] my-4 input input-ghost w-full 
                        max-w-xs" />
                        <br />
                        <input type="text" placeholder="Your Subject" className="bg-[#C22B34] my-4 input input-ghost w-full 
                        max-w-xs" />
                        <br />
                        <textarea className="bg-[#C22B34] w-full my-4 textarea textarea-ghost" placeholder="Write Your Message"></textarea>
                        <br />
                        <input type="submit" value="Send Message" className='bg-[#221638] py-4 px-8 rounded-md' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;