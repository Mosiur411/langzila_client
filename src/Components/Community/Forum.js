import React from 'react';
import Question from './Question';



const Forum = () => {
  return (
    <div className='max-w-6xl mx-auto px-10'>
      <div className=' h-full flex justify-between items-center flex-col lg:flex-row md:flex-col'>

        <div className='w-full '><Question></Question></div>

      </div>
    </div>
  );
};

export default Forum;