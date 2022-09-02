import React from 'react';
import { useNavigate } from 'react-router-dom';
const Subscribe = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className='bg-secondary py-16 relative'>
                <div className='md:flex justify-around items-center px-5 md:px-20'>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='w-100 md:flex-1'>
                        <img src={require('../../assets/Subscribe/subscribe-img3.png')} alt="" className='w-80 mx-auto md:mx-0' />
                    </div>
                    <div data-aos="fade-left" className='flex-1 text-center md:text-left'>
                        <h1 className='text-3xl font-bold py-2 text-accent'>Subscribe to Our Newsletter</h1>
                        <p className='py-2'>This is our Subscribe sectrion , here you can subscribe and get extra feature of this website. You can learn by meany way.</p>
                        <form className='flex'>
                            <input type="text" className='w-full rounded-l-lg px-2 text-gray-800 border-gray-200 bg-white' placeholder="your@mail.com" />
                            <button onClick={() => navigate('/courses')} className="px-2 md:px-8 rounded-r-lg SubmitButton  text-white  p-4 uppercase  border-t border-b border-r">Subscribe</button>
                        </form>

                    </div>
                </div>
                <img src={require('../../assets/Subscribe/k-shape19.png')} alt="" className='absolute top-0 w-40 hidden md:block' />
                <img src={require('../../assets/Subscribe/k-shape20.png')} alt="" className='absolute top-0 right-0  w-52 hidden md:block' />
            </div>
        </section>
    );
};

export default Subscribe;