import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdQuestionAnswer } from 'react-icons/md';

const Answer = () => {
  const [question, setQuestion] = useState([])
  console.log(question);
  useEffect(() => {
    fetch('https://langzila.herokuapp.com/ask')
      .then(res => res.json())
      .then(data => setQuestion(data.data))
  }, [])
  return (
    <div>
      {
        question.map((data) => <>


          <div className="card card-side bg-base-100 shadow-xl">

            <div className="card-body">
              <h2 className="card-title">{data.tittle}</h2>
              <p>{data.question}</p>
              <div className="card-actions justify-start">
                <MdQuestionAnswer className='text-primary' size={20} title="Add Your Answer Here " />
                <BiEdit className='text-primary' size={20} title="Edit your Question " />
              </div>

            </div>
            <figure><img src={data.image} alt="" className='w-40 mx-3' /></figure>
          </div>
        </>)
      }
    </div>
  );
};

export default Answer;