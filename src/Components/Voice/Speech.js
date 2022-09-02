import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Navbar from '../Home/Navbar/Navbar';
import Record from './Record';
import Text from './Text';

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
      <Navbar />
      <div className=''>
        <h1 className='text-3xl text-center font-bold text-primary mt-8'>Voice To Text</h1>
        <p className=' text-center w-1/2 lg:w-1/3 mx-auto mb-2 mt-1'>Here you can convert you voice to text. It will help to make easy to learning.</p>
        <div className=' flex flex-col md:flex-row  lg:flex-row justify-center items-center container mx-auto gap-4  mb-24 mt-5 ' >
          <Record />
          <Text />
        </div>
      </div>


    </div>
  );
};

export default Speech;