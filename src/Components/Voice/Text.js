import React from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import {BiReset} from "react-icons/bi"

const Text = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  return (
  <div className='relative'>  <div className='w-96 border border-2 border-primary rounded mx-auto px-10 shadow-lg h-[50vh] flex items-center relative'>
  <p className='text-primary text-xl'>{transcript}</p>
  <div>

  </div>
  
    </div>
   {
    listening &&  <div onClick={resetTranscript} className=' flex justify-end items-end absolute bottom-0 right-0 '> <BiReset className='text-3xl text-primary hover:text-primary'/></div>
   }
    </div>
    
  );
};

export default Text;