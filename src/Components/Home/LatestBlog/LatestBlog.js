import React from 'react';

const LatestBlog = () => {
    return (
        <div>
            <div data-aos="zoom-out-up" className='text-center mb-16'>
                <p className='text-red-500 font-medium'>OUR NEWS</p>
                <h1 className='font-bold py-2 text-3xl '>Check Out Our Latest Blog</h1>
                <p className='mt-2 text-slate-400'>We always give extra care to our student's skills improvements and feel excited to</p>
                <p className='mt-2 text-slate-400'>share our latest research and leanings!</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className='md:px-2 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {/*  ================= 1 ===========================  */}
                <div className='w-[300px] h-[250px] mx-auto'>
                    <div className='relative'>
                        <img className='w-full h-full' src={require('../../assets/LatestBlog/kindergarten-blog-img1.jpg')} alt="kindergarten" />
                        <svg className='absolute top-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1" d="M0,192L21.8,208C43.6,224,87,256,131,240C174.5,224,218,160,262,117.3C305.5,75,349,53,393,58.7C436.4,64,480,96,524,138.7C567.3,181,611,235,655,234.7C698.2,235,742,181,785,149.3C829.1,117,873,107,916,101.3C960,96,1004,96,1047,117.3C1090.9,139,1135,181,1178,192C1221.8,203,1265,181,1309,165.3C1352.7,149,1396,139,1418,133.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
                        </svg>
                    </div>
                    <p className='font-medium pt-3 text-slate-400'>PRESCHOOL</p>
                    <h1 className='text-2xl font-bold hover:text-red-500'>Why Play Is Important in Preschool and Early</h1>
                </div>
                <div className='w-[300px] h-[250px] mx-auto'>
                    <div className='relative'>
                        <img className='w-full h-full' src={require('../../assets/LatestBlog/kindergarten-blog-img2.jpg')} alt="kindergarten" />
                        <svg className='absolute top-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1" d="M0,192L21.8,208C43.6,224,87,256,131,240C174.5,224,218,160,262,117.3C305.5,75,349,53,393,58.7C436.4,64,480,96,524,138.7C567.3,181,611,235,655,234.7C698.2,235,742,181,785,149.3C829.1,117,873,107,916,101.3C960,96,1004,96,1047,117.3C1090.9,139,1135,181,1178,192C1221.8,203,1265,181,1309,165.3C1352.7,149,1396,139,1418,133.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
                        </svg>
                    </div>
                    <p className='font-medium pt-3 text-slate-400'>Book</p>
                    <h1 className='text-2xl font-bold hover:text-red-500'>Best Three Billy Goats Gruff Books for Preschool</h1>
                </div>
                <div className='w-[300px] h-[250px] mx-auto'>
                    <div className='relative'>
                        <img className='w-full h-full' src={require('../../assets/LatestBlog/kindergarten-blog-img3.jpg')} alt="kindergarten" />
                        <svg className='absolute top-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1" d="M0,192L21.8,208C43.6,224,87,256,131,240C174.5,224,218,160,262,117.3C305.5,75,349,53,393,58.7C436.4,64,480,96,524,138.7C567.3,181,611,235,655,234.7C698.2,235,742,181,785,149.3C829.1,117,873,107,916,101.3C960,96,1004,96,1047,117.3C1090.9,139,1135,181,1178,192C1221.8,203,1265,181,1309,165.3C1352.7,149,1396,139,1418,133.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
                        </svg>
                    </div>
                    <p className=' font-medium pt-3 text-slate-400'>THEME</p>
                    <h1 className='text-2xl font-bold hover:text-red-500'>Flashlight Literacy Activity for Your Camping Theme</h1>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;