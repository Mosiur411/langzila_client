import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Tag = () => {
  const [tag, setTag] = useState([])
  useEffect(() => {
    fetch("https://langzila.herokuapp.com/topic/")
      .then(res => res.json())
      .then(data => setTag(data.data))
  }, [])
  return (
    <div className='text-center mt-10'>
      <h1 className='text-lg font-semibold text-primary'>ALL TAGS :</h1>
      <div className='flex items-center mt-1'>
        <div className='badge bg-gray-200 border-gray-200 text-black mr-3'>Html</div>
        <div className='badge bg-gray-200 border-gray-200 text-black mr-3'>CSS</div>
        {
          tag.map(data => <>
            {
              <div className='badge bg-gray-200 border-gray-200 text-black mr-3'>{Object.values(data.tags)}</div>
            }
          </>)
        }
      </div>
    </div>
  );
};

export default Tag;