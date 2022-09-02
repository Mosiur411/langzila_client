import React from 'react';
import Quesection from './Quesection';
import { Link } from "react-router-dom";
import faqimg from '../assets/FAQ.png'
import Tag from './Tag';

const Question = () => {

  return (
    <div className='w-full '>
      <div className='md:flex justify-between items-center w-full gap-6  '>
        <div className='w-[50%]'>
          <img className=' w-96 ' src={faqimg} alt="faqimg" />
        </div>
        <div className='w-[50%]  text-center '>
          <h1 className=' text-4xl font-bold text-red-500 mb-2'>Your Topic</h1>
          <p className=" w-2/3 mb-3 mx-auto">This is our Community help section, here you can post yous question and get ans from pro person.</p>
          <Link to={'/addquestion'}>
            <button className='py-1 px-3 bg-red-500 text-white rounded'>Start Now</button></Link>
            <Link to={'/allquestion'}>
            <button className='py-1 px-3 ml-3 bg-red-500 text-white rounded'>Answer Now</button></Link>
          <div>
            <div className='sm:w-full lg:w-1/5  pb-5'><Tag></Tag></div>
          </div>
        </div>
      </div>
      <div >
        {/* <Quesection></Quesection> */}
      </div>
    </div>
  );
};

export default Question;