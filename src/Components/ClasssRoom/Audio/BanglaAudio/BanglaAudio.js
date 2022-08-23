import React, { useEffect, useState } from 'react';
import './BanglaAudio.css'

// Audio
import Audio1 from '../../../assets/QuizImg/Quiz1Audio/audio1.mp3'
import Audio2 from '../../../assets/QuizImg/Quiz1Audio/audio2.mp3'
import Audio3 from '../../../assets/QuizImg/Quiz1Audio/audio3.mp3'
import Audio4 from '../../../assets/QuizImg/Quiz1Audio/audio4.mp3'
import Audio5 from '../../../assets/QuizImg/Quiz1Audio/audio5.mp3'
import Audio6 from '../../../assets/QuizImg/Quiz1Audio/audio6.mp3'
import Audio7 from '../../../assets/QuizImg/Quiz1Audio/audio7.mp3'
import Audio8 from '../../../assets/QuizImg/Quiz1Audio/audio8.mp3'
import Audio9 from '../../../assets/QuizImg/Quiz1Audio/audio9.mp3'
import Audio10 from '../../../assets/QuizImg/Quiz1Audio/audio10.mp3'



const BanglaAudio = () => {
    const [CapitalLetter, setCapitalLetter] = useState([])

    useEffect(() => {
        fetch('/Bangla1.json')
            .then(res => res.json())
            .then(data => setCapitalLetter(data))
    }, [])


    // Check Case of Voice
    const AudioPlay = (latter) => {

        switch (latter) {
            case "অ":
                var audio = new Audio(Audio1);
                audio.play();
                break;
            case "আ":
                var audioB = new Audio(Audio2);
                audioB.play();
                break;
            case "ই":
                var audioC = new Audio(Audio3);
                audioC.play();
                break;
            case "ঈ":
                var audioD = new Audio(Audio4);
                audioD.play();
                break;
            case "উ":
                var audioE = new Audio(Audio5);
                audioE.play();
                break;
            case "ঊ":
                var audioF = new Audio(Audio6);
                audioF.play();
                break;
            case "এ":
                var audioG = new Audio(Audio7);
                audioG.play();
                break;
            case "ঐ":
                var audioH = new Audio(Audio8);
                audioH.play();
                break;
            case "ও":
                var audioI = new Audio(Audio9);
                audioI.play();
                break;
            case "ঔ":
                var audioJ = new Audio(Audio10);
                audioJ.play();
                break;

            default:
            // code block
        }
    }



    return (
        <div data-aos="fade-left" className='px-2 md:px-10 font-bold  h-[84vh] overflow-y-auto scrollbar rounded-md border border-purple-900 border-r-0 shadow-lg'>
            <h1 data-aos="fade-up" className="text-4xl text-pink-900 text-center pt-7  ">বর্ণমালা</h1>
            <p data-aos="fade-up-right" className='xl:w-2/3 mx-auto font-medium text-md'>You can learn Bangla bornomala by nice voice. You  click the card and hear the voice of the word </p>

            <div className=' max-w-5xl  mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-24 py-10'>
                {
                    CapitalLetter.map(word =>
                        <div
                            onMouseEnter={() => AudioPlay(word.Latter)}
                            className='w-full h-[170px] text-8xl flex justify-center items-center bg-pink-900 hover:bg-purple-900
                            shadow-gray-400 shadow-lg cursor-pointer text-white rounded-2xl'
                        >{word.Latter}</div>
                    )
                }
            </div>
        </div>
    );
};

export default BanglaAudio;