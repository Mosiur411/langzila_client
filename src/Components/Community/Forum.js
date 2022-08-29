import React from 'react';
import Question from './Question';
import Tag from './Tag';

const Forum = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <div className='flex justify-between flex-col lg:flex-row md:flex-col'>
        <div className='w-full lg:w-4/5'><Question></Question></div>
        <div className='sm:w-full lg:w-1/5  pb-5'><Tag></Tag></div>
      </div>
    </div>
  );
};

export default Forum;