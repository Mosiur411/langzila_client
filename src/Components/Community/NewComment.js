import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Spinner from '../Spinner/Spinner';
import 'react-quill/dist/quill.bubble.css'
import { IoHeartCircleSharp } from 'react-icons/io5';
import { FaComment } from 'react-icons/fa';
import ReactTimeAgo from 'react-time-ago';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
const NewComment = ({data,refetch,isLoading}) => {
  const [user]=useAuthState(auth)
  const [react, setReact] = useState(false)
  if (isLoading) {
    return <Spinner></Spinner>
  }
const handleSwap=(id)=>{
  const newvote={
      id,
      reactmail:user?.email,

    }
    fetch('http://localhost:5000/react', {
      method: 'POST',
      body: JSON.stringify(newvote
       ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) =>  {
      //   fetch(`http://localhost:5000/vote/${mainid}`)
      // .then(res=>res.json())
      // .then(voting=>setVote(voting)));
      setReact(true)
      })

}



  return (
    <div>
       <div><div>
  <div className='border rounded-2xl shadow-2xl mt-14 mx-15 pb-4'>

<div className='flex gap-5 container items-center  mx-auto'>
 <div className='flex-none w-48'>
 <div className='mt-3 flex flex-col items-center  justify-center '>
  <h1 className='text-black text-xl font-bold mt-2 text-center '>{data?.name}</h1>
    <img className='w-24 rounded-full  border-orange-500 border-2 ' src={data?.profileimg}
     alt="" />
     <p className='text-xl text-center'>Member</p>
 
  </div>
 </div>
  <div className=' flex  flex-col justify-start items-start w-full '>
    <p className='text-start mt-6'><ReactTimeAgo date={data?.date } locale="en-US" timeStyle="round"/></p>
   
    <div dangerouslySetInnerHTML={{__html: data?.comment}}></div>
    <img src={data?.image} alt="" />
  </div>
 <div className='flex justify-center items-center w-48'>
 <div className='flex  lg:flex-row gap-2 justify-center'>
      <div className='rounded-full flex justify-end items-center px-3 rounded-full border border-2 border-gray-700'><IoHeartCircleSharp className='text-red-700 text-3xl'/><h1>2</h1></div>
    <div>
    <label class="swap">
  <input type="checkbox" />
  <div class="swap-on"><IoHeartCircleSharp className='text-red-700 text-3xl  '/></div>
  <div class="swap-off" onClick={()=>handleSwap(data._id)}><IoHeartCircleSharp className='text-secendary text-3xl'/></div>
</label>
    </div>
    </div>
 </div>
</div>
  </div>
</div></div>
      
    </div>
    
  );
};

export default NewComment;