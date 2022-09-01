import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { BsRecord2, BsStopCircle } from "react-icons/bs"
import { AiFillPauseCircle } from "react-icons/ai"
const Record = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <div className='h-screen'>
      <span>Browser doesn't support speech recognition.</span>
    </div>;
  }
  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true })

  }
  const handleStop = () => {
    SpeechRecognition.stopListening()
  }
  return (
    <div>
      <div className='w-[100%]  border-2 border-primary rounded mx-auto px-10 shadow-lg h-[50vh] flex items-center'>
        {
          listening ? <div className='flex flex-col  justify-center items-center'><img className='w-48' src="audio.gif" alt="" /><BsStopCircle className='text-center text-red-600 text-4xl  ' style={{ cursor: "pointer" }} onClick={handleStop} /></div> : <BsRecord2 onClick={handleStart} className='text-7xl shadow-lg text-red-600  ' />
        }
      </div>
    </div>
  );
};

export default Record;