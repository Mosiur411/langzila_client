import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Record from './Record';
import Text from './Text';
import Navbar from '../Navbar/Navbar'
const Speech = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <div>
      <Navbar/>
   <div className=''>
   <h1 className='text-3xl text-center font-bold text-primary h-[100vh]mt-5'>Record your Voice and Convert into Text</h1>
      <div className=' flex flex-col md:flex-row  lg:flex-row justify-center items-center container mx-auto gap-4 shadow-lg my-20 lg:my-0 md:my-0 h-[80vh]' >
      <Record/>
      <Text/>
   </div>
    </div>
   
   
    </div>
  );
};

export default Speech;