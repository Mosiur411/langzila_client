import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Tag = () => {
const [tag,setTag]=useState([])
  useEffect(()=>{
  fetch("http://localhost:5000/topic/")
  .then(res=>res.json())
  .then(data=>setTag(data.data))
  },[])
  return (
    <div className='text-center mt-10'>
      <h1 className='text-2xl font-bold text-primary'>ALL TAGS</h1>
     {
      tag.map(data=><>
      {
         <div className='badge badge-primary mr-3'>{Object.values(data.tags)}</div>
      }
      </>)
     }
    </div>
  );
};

export default Tag;