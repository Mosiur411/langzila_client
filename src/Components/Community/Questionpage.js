import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {RiArrowUpSLine} from "react-icons/ri"
import {FaComment} from "react-icons/fa"
import {IoHeartCircleSharp} from "react-icons/io5"
import Navbar from '../Home/Navbar/Navbar';
import ReactQuill from 'react-quill';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { data } from 'autoprefixer';
import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query/lib/reactjs';
const Questionpage = () => {
  const lid = useParams()
  const mainid = lid.id;
  // const { data, isLoading, refetch } = useQuery("comment", () => fetch(`http://localhost:5000/comment/${mainid}`).then(res => res.json()));



  const [user]=useAuthState(auth)
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  console.log(user);
  const [valuequil, setValuequil] = useState('')
  const [pQuestion, setPQuestion] = useState([])
  const [comment, setComment] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/topic/${mainid}`)
      .then(res => res.json())
      .then(data =>{
        setPQuestion(data.data)
        fetch(`http://localhost:5000/comment/${mainid}`)
        .then(res=>res.json())
        .then(data=>setComment(data.data))
      })
  }, [])
  const imageStorageKey = '3a1e59ad1d3a8caba2efe37f45b560e9';
 const details={...pQuestion}[0];
  console.log(details);
  


  const onSubmit = async data => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(result =>{
    const comment=valuequil;
    const id=mainid;
    const maincomment={
      id,
      comment,
      email:details.email,   
      name:details.name,  
      profileimg:user.photoURL, 
    }
    fetch('http://localhost:5000/comment', {
  method: 'POST',
  body: JSON.stringify(maincomment
   ),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

    reset()
  }
)
  }
  return (
    <div >
      <Navbar></Navbar>
      {/* card question  */}
     <div className='mt-5'>
     {
        pQuestion.map((data) =>{
          return <div className=' '>
            <div class="card w-full bg-base-100 shadow-xl border border-t-2 bottom-3 border-t-primary ">
  <div class="card-body ">
  <div className='flex  items-center'>
  <div className='vote w-1/6 border border-2 flex flex-col items-center justify-center border-r-primary'><RiArrowUpSLine className='text-7xl text-center text-black'></RiArrowUpSLine >
  <div className='text-secendary text-4xl text-center font-bold mb-5'style={{"margin-top":"-25px"}}><h1>0</h1></div>
  </div>
  <div className='ml-5'>
     <h1 className='text-3xl font-bold text-black'>{data.tittle}</h1>
     {
                  Object.values(data.tags).map(data => <div className='badge badge-primary mr-3 '>{data}</div>
        )}
        <hr className='mt-1' />
      <div className='flex items-center mt-1 gap-3'>
      <img className='w-10 rounded-full  border-orange-500 border-2 ' src={require("../assets/user1.jpg")} alt="" />
       <div> <h6 className='text-secendary text-xs font-bold mt-2'>Asked by {data.name}</h6>
        <small className='m-0 p-0'> 2 hours ago</small></div>
      </div>
  </div>
  </div>
   
  </div>
</div>

   
 
<div className='flex justify-end items-center gap-5 container mx-auto mx-7 my-5'> 
      {/* answer question  */}
<div><Link to={'/addquestion'}>Ask The Question</Link></div>
    <button className='btn btn-primary'>Answer this question</button>
</div>
<div><div>
  <div className='border rounded-2xl '>
  <div className='bg-primary text-white py-2'>
     <h1 className='text-2xl ml-5 font-bold'>Question</h1>
</div>
<div className='flex gap-5 container items-center  mx-auto'>
 <div className='flex-none w-48'>
 <div className='mt-3 flex flex-col items-center  justify-center '>
  <h1 className='text-black text-3xl font-bold mt-2 text-center '>{data.name}</h1>
    <img className='w-36 rounded-full  border-orange-500 border-2 ' src={user?.photoURL}
     alt="" />
     <p className='text-xl text-center'>Member</p>
    <div className='flex items-center justify-center gap-1'>
    <FaComment className='text-secendary text-xl text-center'></FaComment>
  <p>5</p>
    </div>
  </div>
 </div>
  <div className=' flex  flex-col justify-start items-start w-full'>
    <p className='text-start mt-6'>Posted 3 hours ago</p>
    <h5 className='py-3'>{data?.disc}</h5>
    <img src={data?.image} alt="" />
  </div>
 <div className='flex justify-center items-center w-48'>
 <div className='flex  lg:flex-row gap-2 justify-center'>
      <div className='rounded-full flex justify-end items-center px-3 rounded-full border border-2 border-gray-700'><IoHeartCircleSharp className='text-red-700 text-3xl'/><h1>2</h1></div>
    <div>
    <label class="swap">
  <input type="checkbox" />
  <div class="swap-on"><IoHeartCircleSharp className='text-red-700 text-3xl  '/></div>
  <div class="swap-off"><IoHeartCircleSharp className='text-secendary text-3xl'/></div>
</label>
    </div>
    </div>
 </div>
</div>
  </div>
</div></div>
{/* main comment  */}
<div className='my-6'>
{comment.map(comment=>{
return <>
<div>

</div>


</>
})}
</div>
<div className='mt-10 shadow-lg flex justify-center gap-5  '>
<div className='w-1/12 flex  justify-end items-start'><img className='w-10 rounded-full  border-orange-500 border-2 ' src={user.photoURL} alt="" /></div>

{/* answer field  */}
<div className='w-11/12 '>

  <form onSubmit={handleSubmit(onSubmit)}>
  <ReactQuill
                id='editor' style={{
                  border: "1px solid #fe4854", color: "black", width:"100%"
                  
                }}
                placeholder="Write here your Discription"
                theme="snow"

                value={valuequil}
                onChange={setValuequil} />
                  <input type="file"
              placeholder="Choose File Here"
              className="mt-5 items-center max-w-xs"
              {...register("image")} />
                <input 
                type="submit" className='btn btn-primary  mt-5 text-white w-full mt-5 ' value={"Submit Question"} />

  </form>
                </div>
                
</div>

</div> })  }
   </div >
    </div>
  );
};

export default Questionpage;