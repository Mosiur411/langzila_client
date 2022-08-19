import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import Perquestion from './Perquestion';
const Quesection = () => {
  const [query, setQuery] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/topic")
      .then(res => res.json())
      .then(res => setQuery(res.data))
  }, [query])

  return (
    <div>
      {
        query.map((data) => <Perquestion key={data._id} data={data}></Perquestion>)
      }
    </div>
  );
};

export default Quesection;