import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import Perquestion from './Perquestion';
import "./quessection.css"
const Quesection = () => {
  const [query, setQuery] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/topic")
      .then(res => res.json())
      .then(res => setQuery(res.data))
  }, [query])

  return (
    <div  className='grid mt-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2   gap-4'>
      {
        query.map((data) => <Perquestion key={data._id} data={data}></Perquestion>)
      }
    </div>
  );
};

export default Quesection;