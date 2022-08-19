import React from 'react';
import Question from './Question';
import Tag from './Tag';

const Forum = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between '>
        <div className='w-2/3'><Question></Question></div>
        <div className='w-1/3'><Tag></Tag></div>
      </div>
    </div>
  );
};

export default Forum;