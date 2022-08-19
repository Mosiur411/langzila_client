import React from 'react';
import Quesection from './Quesection';
import { Link, useLocation, useNavigate } from "react-router-dom";
const Question = () => {
  
  return (
    <div className=''>
      <div className='flex justify-between items-center w-full gap-6 '>
        <div className=''>
          <h1 className='text-primary font-bold text-5xl'>Topics </h1>
        </div>
        <div className=' '>
          <Link to={'/addquestion'}>
            <button className='btn border-none rounded bg-primary text-white px-4 '>Start New Topic</button></Link>
        </div>
      </div>
      <div >
        <Quesection></Quesection>
      </div>
    </div>
  );
};

export default Question;