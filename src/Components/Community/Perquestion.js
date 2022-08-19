import React from 'react';

import { BsFillCircleFill } from 'react-icons/bs'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import LastSeen from './LastSeen';


const Perquestion = ({ data }) => {

  const navigate = useNavigate()
  const handleQuestionPage = (id) => {
    console.log(id);

    navigate(`/question/${id}`)
  }


  return (
    <div >
      <div class="card w-full  shadow-xl">
        <div className='flex justify-center items-center '>
          <div className='p-2 m-4'>
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src={require("../assets/user1.jpg")} />
              </div>

            </div>
          </div>
          <div class="card-body mt-5">
            <h2 onClick={() => handleQuestionPage(data._id)} class="card-title text-black"><BsFillCircleFill className='text-xs text-primary' /> {
              data.tittle.slice(0, 50)
            }</h2>
            <div className='flex justify-center items-center gap-3'>

              <p className='text-xs'>By {data.name},
                {data.month} {data?.date} in Langzila Questions</p>
              {/* <small>
                
                <ReactTimeAgo date={new Date()} locale="en-US" timeStyle="round" ></ReactTimeAgo>
              </small> */}
            </div>

            <div class="card-actions justify-between">
              <div>
                <h1>{data.time.toLocaleString('en-us', { month: 'long' })}</h1>
                <div class="">{
                  Object.values(data.tags).map(data => <div className='badge badge-primary mr-3 '>{data}</div>)
                }</div>
              </div>
              <button class=""><RiQuestionAnswerLine className='text-5xl text-primary' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perquestion;