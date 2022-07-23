import React from 'react';

const Subscribe = () => {
    return (
        <section>
            <div className='bg-[#eee8df] py-16 relative'>
                <div  className='md:flex justify-around items-center px-5 md:px-20'>
                    <div className='w-100 md:flex-1'>
                        <img src={require('../../assets/Subscribe/subscribe-img3.png')} alt="" className='w-80 mx-auto md:mx-0' />
                    </div>
                    <div className='flex-1 text-center md:text-left'>
                        <h1 className='text-3xl font-bold py-2'>Subscribe to Our Newsletter</h1>
                        <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <form className='flex'>
                            <input type="text" className='w-full rounded-l-lg px-2 text-gray-800 border-gray-200 bg-white' placeholder="your@mail.com"/>
                            <button className="px-2 md:px-8 rounded-r-lg bg-green-400  text-white font-bold p-4 uppercase border-green-500 border-t border-b border-r">Subscribe</button>
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