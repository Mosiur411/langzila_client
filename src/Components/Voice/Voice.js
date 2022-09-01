import React from 'react';
import { useState } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { useSpeechSynthesis } from "react-speech-kit";
import Navbar from '../Home/Navbar/Navbar';


import './voice.css'
const Voice = () => {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <Navbar></Navbar>
      <div className="speech h-[100vh]">
        <div className="group">
          <h2 className='text-3xl font-bold text-primary mt-28 '>Text To Speech </h2>
        </div>
        <div className="group">
          <textarea className='text-area '
            rows="10"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        </div>
        <div onClick={() => speak({ text: value })} className='flex justify-center items-center '>
          <div className="group btn btn-primary w-[30%] ">
            <button className='' >Speech</button>&nbsp; <AiFillSound className='text-white text-2xl' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Voice;