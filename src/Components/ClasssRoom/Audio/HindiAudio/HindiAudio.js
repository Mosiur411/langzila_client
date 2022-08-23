import React, { useEffect, useState } from 'react';
import './HindiAudio.css'

// Audio
import Audio1 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/अ1.mp3'
import Audio2 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/आ2.mp3'
import Audio3 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/इ3.mp3'
import Audio4 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/ई4.mp3'
import Audio5 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/उ5.mp3'
import Audio6 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/ऊ6.mp3'
import Audio7 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/ए7.mp3'
import Audio8 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/ऐ8.mp3'
import Audio9 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/ओ9.mp3'
import Audio10 from '../../../assets/QuizImg/HindiAudio/hindiQuiz1/औ10.mp3'


const HindiAudio = () => {
    const [CapitalLetter, setCapitalLetter] = useState([])

    useEffect(() => {
        fetch('/Hindi1.json')
            .then(res => res.json())
            .then(data => setCapitalLetter(data))
    }, [])

    // Check Case of Voice
    const AudioPlay = (latter) => {

        switch (latter) {
            case "अ":
                var audio = new Audio(Audio1);
                audio.play();
                break;
            case "आ":
                var audioB = new Audio(Audio2);
                audioB.play();
                break;
            case "इ":
                var audioC = new Audio(Audio3);
                audioC.play();
                break;
            case "ई":
                var audioD = new Audio(Audio4);
                audioD.play();
                break;
            case "उ":
                var audioE = new Audio(Audio5);
                audioE.play();
                break;
            case "ऊ":
                var audioF = new Audio(Audio6);
                audioF.play();
                break;
            case "ए":
                var audioG = new Audio(Audio7);
                audioG.play();
                break;
            case "ऐ":
                var audioH = new Audio(Audio8);
                audioH.play();
                break;
            case "ओ":
                var audioI = new Audio(Audio9);
                audioI.play();
                break;
            case "औ":
                var audioJ = new Audio(Audio10);
                audioJ.play();
                break;

            default:
            // code block
        }
    }


    return (
        <div data-aos="fade-left" className='px-2 md:px-10 font-bold  h-[84vh] overflow-y-auto scrollbar rounded-md border border-purple-900 border-r-0 shadow-lg'>
            <h1 data-aos="fade-up" className="text-4xl text-blue-900 text-center pt-7  ">अल्फाबेट</h1>
            <p data-aos="fade-up-right" className='xl:w-2/3 mx-auto font-medium text-md'>You can learn Hindi alphabet by nice voice. You  click the card and hear the voice of the word </p>

            <div className=' max-w-5xl  mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-24 py-10'>
                {
                    CapitalLetter.map(word =>
                        <div
                            onClick={() => AudioPlay(word.Latter)}
                            className='w-full h-[170px] text-8xl flex justify-center items-center bg-blue-900 hover:bg-purple-900
                            shadow-gray-400 shadow-lg cursor-pointer text-white rounded-2xl'
                        >{word.Latter}</div>
                    )
                }
            </div>
        </div>
    );
};

export default HindiAudio;