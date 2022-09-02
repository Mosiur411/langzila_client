import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import Navbar from '../Home/Navbar/Navbar';
import Perquestion from './Perquestion';
import "./quessection.css"
const Quesection = () => {
  const [query, setQuery] = useState([])
  useEffect(() => {
    fetch("https://langzila.herokuapp.com/topic")
      .then(res => res.json())
      .then(res => setQuery(res.data))
  }, [query])

  return (
    <div>
      <div><Navbar /></div>
      <div className=' max-w-6xl mx-auto mb-8 px-10'>
        <div className='grid mt-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2  my-5  gap-4'>
          {
            query.map((data) => <Perquestion key={data._id} data={data}></Perquestion>)
          }
        </div>
      </div>
    </div>
  );
};

export default Quesection;