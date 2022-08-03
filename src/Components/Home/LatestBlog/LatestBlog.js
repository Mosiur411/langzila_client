import React from 'react';

const LatestBlog = () => {
    return (
        <div>
            <div data-aos="zoom-out-up" className='text-center mb-16'>
                <p className='text-primary font-bold'>OUR NEWS</p>
                <h1 className='font-bold py-2 text-3xl text-accent'>Check Out Our Latest Blog</h1>
                <p className='mt-2'>We always give extra care to our student's skills improvements and feel excited to</p>
                <p className='mt-2'>share our latest research and leanings!</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className='md:px-2 px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/*  ================= 1 ===========================  */}
                <div className='mx-auto'>
                    <div className='relative'>
                        <img src={require('../../assets/LatestBlog/kindergarten-blog-img1.jpg')} alt="kindergarten" />
                       <img className='absolute -mt-16 w-full' src="https://themes.envytheme.com/ecademy/wp-content/themes/ecademy/assets/img/shape-style1.png" alt="" />
                    </div>
                    <p className='font-medium pt-10 text-primary'>PRESCHOOL</p>
                    <h1 className='text-2xl font-bold text-accent hover:text-primary'>Why Play Is Important in Preschool and Early</h1>
                </div>
                <div className='mx-auto'>
                    <div className='relative'>
                        <img src={require('../../assets/LatestBlog/kindergarten-blog-img2.jpg')} alt="kindergarten" />
                        <img className='absolute -mt-16 w-full' src="https://themes.envytheme.com/ecademy/wp-content/themes/ecademy/assets/img/shape-style1.png" alt="" />
                    </div>
                    <p className='font-medium pt-8 text-primary'>Book</p>
                    <h1 className='text-2xl font-bold text-accent hover:text-primary'>Best Three Billy Goats Gruff Books for Preschool</h1>
                </div>
                <div className='mx-auto'>
                    <div className='relative'>
                        <img src={require('../../assets/LatestBlog/kindergarten-blog-img3.jpg')} alt="kindergarten" />
                        <img className='absolute -mt-16 w-full' src="https://themes.envytheme.com/ecademy/wp-content/themes/ecademy/assets/img/shape-style1.png" alt="" />
                    </div>
                    <p className=' font-medium pt-8 text-primary'>THEME</p>
                    <h1 className='text-2xl font-bold text-accent hover:text-primary'>Flashlight Literacy Activity for Your Camping Theme</h1>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;