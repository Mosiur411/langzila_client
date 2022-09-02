import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// image
import ctimg from '../../../../assets/QuizImg/catoon.gif'
import happyimg from '../../../../assets/QuizImg/happy.gif'
import findVoice from '../../../../assets/QuizImg/findVoice.png'
import sadImg from '../../../../assets/QuizImg/sad.png'
import happyImg from '../../../../assets/QuizImg/happy.png'

// icon
import { TbRefreshAlert } from "react-icons/tb";
import { BiCaretLeft } from "react-icons/bi";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { GiCottonFlower } from "react-icons/gi";
import { SiSitepoint } from "react-icons/si";
import { ImHappy, ImSad } from "react-icons/im";
import { GiSkullCrossedBones, GiChessKing, GiSpeaker } from "react-icons/gi";

// Audio
import Audio1 from '../../../../assets/QuizImg/Quiz2Audio/ক.mp3'
import Audio2 from '../../../../assets/QuizImg/Quiz2Audio/খ.mp3'
import Audio3 from '../../../../assets/QuizImg/Quiz2Audio/গ.mp3'
import Audio4 from '../../../../assets/QuizImg/Quiz2Audio/ঘ.mp3'
import Audio5 from '../../../../assets/QuizImg/Quiz2Audio/ঙ.mp3'
import Audio6 from '../../../../assets/QuizImg/Quiz2Audio/চ.mp3'
import Audio7 from '../../../../assets/QuizImg/Quiz2Audio/ছ.mp3'
import Audio8 from '../../../../assets/QuizImg/Quiz2Audio/জ.mp3'
import Audio9 from '../../../../assets/QuizImg/Quiz2Audio/ঝ.mp3'
import Audio10 from '../../../../assets/QuizImg/Quiz2Audio/ঞ.mp3'
import Audio11 from '../../../../assets/QuizImg/Quiz3Audio/ট.mp3'
import Audio12 from '../../../../assets/QuizImg/Quiz3Audio/ঠ.mp3'
import Audio13 from '../../../../assets/QuizImg/Quiz3Audio/ড.mp3'
import Audio14 from '../../../../assets/QuizImg/Quiz3Audio/ঢ.mp3'
import Audio15 from '../../../../assets/QuizImg/Quiz3Audio/ণ.mp3'
import Audio16 from '../../../../assets/QuizImg/Quiz3Audio/ত.mp3'
import Audio17 from '../../../../assets/QuizImg/Quiz3Audio/থ.mp3'
import Audio18 from '../../../../assets/QuizImg/Quiz3Audio/দ.mp3'
import Audio19 from '../../../../assets/QuizImg/Quiz3Audio/ধ.mp3'
import Audio20 from '../../../../assets/QuizImg/Quiz3Audio/ন.mp3'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';


const MediumQuiz5 = () => {


    // All state
    const [user] = useAuthState(auth);
    const [showScore, setShowScore] = useState(false)
    const [quizs, setQuizs] = useState([]);
    const [count, setCount] = useState(0);
    const [point, setPoint] = useState(0);
    const [quizData, setQuizData] = useState('');
    const [reload, setReload] = useState(false)
    const [quizPoint, setQuizPoint] = useState([])
    const [progressValue, setProgressValue] = useState(10);
    const [finalValue, setFinalValue] = useState(0);

    // Diclaration
    const email = user?.email;
    const isData = quizData?.email;
    const navigate = useNavigate()


    // Get The Quiz Questions
    useEffect(() => {

        fetch('/MediumQuiz5.json')
            .then(res => res.json())
            .then(data => setQuizs(data))
    }, [reload])

    console.log(quizs);
    // Get Quiz Ans Data
    useEffect(() => {
        fetch(`https://langzila.herokuapp.com/getMdQuizAns5/${email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setQuizData(data?.data)
            })
    }, [reload])


    // Ans OnClick Function
    const selectAnswer = async (quizAns, quz, Allans, isData) => {
        // All Declaration
        const ans = quizAns.answere
        const Ans = Allans?.AllAns;
        const Quertion = quz?.quz
        const CorrectAns = Ans?.filter((ans) => ans?.isCorrect == true)
        const trueAns = CorrectAns[0]?.answere;


        //  Add Point 
        if (quizAns.isCorrect == true) {
            setPoint(point + 1)
            setFinalValue(finalValue + 10)
        }

        // Check Post Data
        if (!isData) {

            // Process Post Data
            const QuizData = {
                question: Quertion,
                ans: trueAns,
                selector: ans,
                email: email
            }


            if (QuizData) {
                try {
                    const { data } = await axios.post(`https://langzila.herokuapp.com/BngMdQuiz5`, QuizData, {
                        method: 'POST'
                    });

                    if (!data.success) {
                        return toast.error(data.error)
                    }
                    console.log(data);
                    toast.success(data.message);

                } catch (error) {
                    toast.error(error.message)
                }
            }

        }

        // Next page Moving
        const nextQus = count + 1;
        if (nextQus < quizs.length) {
            setProgressValue(progressValue + 10)
            setCount(nextQus)
        }
        else {
            setShowScore(true)
        }
    }

    // Check Result Button Click: 
    const result = () => {
        setReload(true)
    }

    // Check Ans
    useEffect(() => {
        if (quizData?.length > 0) {
            const data = quizData?.filter(quiz => quiz.ans == quiz.selector)
            if (data) {
                setQuizPoint(data)
            }
        }
    }, [quizData])


    const AudioPlay = (latter) => {

        switch (latter) {
            case "ক":
                var audio = new Audio(Audio1);
                audio.play();
                break;
            case "খ":
                var audioB = new Audio(Audio2);
                audioB.play();
                break;
            case "গ":
                var audioC = new Audio(Audio3);
                audioC.play();
                break;
            case "ঘ":
                var audioD = new Audio(Audio4);
                audioD.play();
                break;
            case "ঙ":
                var audioE = new Audio(Audio5);
                audioE.play();
                break;
            case "চ":
                var audioF = new Audio(Audio6);
                audioF.play();
                break;
            case "ছ":
                var audioG = new Audio(Audio7);
                audioG.play();
                break;
            case "জ":
                var audioH = new Audio(Audio8);
                audioH.play();
                break;
            case "ঝ":
                var audioI = new Audio(Audio9);
                audioI.play();
                break;
            case "ঞ":
                var audioJ = new Audio(Audio10);
                audioJ.play();
            case "ট":
                var audio = new Audio(Audio11);
                audio.play();
                break;
            case "ঠ":
                var audioB = new Audio(Audio12);
                audioB.play();
                break;
            case "ড":
                var audioC = new Audio(Audio13);
                audioC.play();
                break;
            case "ঢ":
                var audioD = new Audio(Audio14);
                audioD.play();
                break;
            case "ণ":
                var audioE = new Audio(Audio15);
                audioE.play();
                break;
            case "ত":
                var audioF = new Audio(Audio16);
                audioF.play();
                break;
            case "থ":
                var audioG = new Audio(Audio17);
                audioG.play();
                break;
            case "দ":
                var audioH = new Audio(Audio18);
                audioH.play();
                break;
            case "ধ":
                var audioI = new Audio(Audio19);
                audioI.play();
                break;
            case "ন":
                var audioJ = new Audio(Audio20);
                audioJ.play();
                break;

            default:
            // code block
        }
    }
    console.log(quizData)

    return (
        <div>
            {
                quizData.length > 0 ?

                    <div className=' py-10'>
                        <h1 className=' text-3xl font-mono text-lime-700 font-bold uppercase flex items-center justify-center'><GiCottonFlower className='text-amber-500 mr-2' /> Your Quiz Result <GiCottonFlower className=' text-amber-500 ml-2' /></h1>
                        <hr className=' bg-lime-700 h-[2px] mt-3 w-1/2 mx-auto' />

                        <div className='w-1/2 mx-auto flex items-center justify-between  mt-5'>
                            <button onClick={() => navigate(-1)} className='border border-red-500 flex items-center justify-center py-1 px-2 pr-3 rounded text-red-500 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' />Go Back</button>

                            <div className='  font-semibold text-gray-700 text-xl flex items-center'><SiSitepoint className=' text-2xl text-red-500 mr-3' />Your Score : <span className={`ml-2 text-2xl ${quizPoint?.length > 7 ? 'text-lime-500' : 'text-red-500'}`}>{quizPoint?.length}</span></div>
                        </div>

                        {
                            quizData?.map((quiz, idx) => <div key={idx}>
                                <div className=' bg-white shadow-md xl:w-1/3 w-1/2 mx-auto mt-10 p-5 relative'>
                                    <div>
                                        <h1 className='text-left text-lg mb-7 flex items-center'>{quiz.ans == quiz.selector ? <GiChessKing className=' text-2xl text-green-600 mr-3' /> : <GiSkullCrossedBones className=' text-2xl text-red-500 mr-3' />} {quiz?.question}</h1>
                                        <img className=' absolute w-[75px] right-0 top-0 z-20 ' src={`${quiz.ans == quiz.selector ? happyimg : ctimg}`} alt="image" />
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="table w-full">
                                            <thead>
                                                <tr>
                                                    <th className=' text-[15px] font-semibold text-center'>Correct Ans</th>
                                                    <th className=' text-[15px] font-semibold text-center'>Your Ans</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr >
                                                    <td className=' bg-amber-200 font-semibold text-center text-black'>{quiz?.ans}</td>
                                                    <td className={`${quiz.ans == quiz.selector ? "bg-green-400 text-black" : "bg-red-400 text-black"} font-semibold text-center`}>{quiz?.selector}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </div>

                            </div>)
                        }
                    </div>

                    :
                    showScore ?
                        <div className='h-screen  w-full bg-white flex flex-col items-center justify-center'>

                            <div className=' overflow-hidden h-64 w-64 rounded-lg flex justify-center items-center'>
                                <img src={`${point > 7 ? happyImg : sadImg}`} alt="sadImg" />
                            </div>


                            <div className='bg-green-100 shadow-md xl:w-1/3
                             w-2/3 flex items-center justify-around rounded-md py-7'>
                                <div>
                                    <h1 className=' text-lg font-semibold text-gray-700 '>Total Score : <span className=' text-red-600'>{quizs.length}</span></h1>
                                    <h1 className=' text-lg font-semibold text-gray-700 mb-4'>Your Score : <span className=' text-red-600'>{point}</span></h1>
                                    {
                                        point > 7 ? <h1 className=' text-sky-600 font-semibold flex items-center'>'<ImHappy className=' text-xl mr-2' />Congress! You pass the test.</h1> : <h1 className=' text-red-600 font-semibold flex items-center'><ImSad className=' text-xl mr-2' />Opps! Better luck next time.</h1>
                                    }
                                </div>
                                <div>
                                    <div className="radial-progress bg-yellow-300 text-blue-900 border-4 border-yellow-400" style={{ '--value': `${finalValue}` }}>{finalValue}%</div>
                                </div>
                            </div>

                            <button onClick={() => result()} className='mt-10 px-6 py-2 bg-pink-700 hover:bg-black text-white text-semibold  shadow-md font-medium rounded text-md flex items-center'>Check Result<TbRefreshAlert className=' ml-4 text-xl' /></button>


                            <div>
                                {
                                    reload ?
                                        quizData?.map((quiz, idx) => <div key={idx}>
                                            <div className=' bg-white shadow-md xl:w-1/3 w-1/2 mx-auto mt-10 p-5 relative'>
                                                <div>
                                                    <h1 className='text-left text-xl mb-7 flex items-center'><VscActivateBreakpoints className='mr-4 text-amber-600' />{quiz?.question}</h1>
                                                    <img className=' absolute w-[75px] right-0 top-0 z-20 ' src={`${quiz.ans == quiz.selector ? happyimg : ctimg}`} alt="image" />
                                                </div>

                                                <div className="overflow-x-auto">
                                                    <table className="table w-full">
                                                        <thead>
                                                            <tr>
                                                                <th className=' text-[15px] font-semibold text-center'>Correct Ans</th>
                                                                <th className=' text-[15px] font-semibold text-center'>Your Ans</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr >
                                                                <td className=' bg-amber-400 font-semibold text-center'>{quiz?.ans}</td>
                                                                <td className={`${quiz.ans == quiz.selector ? "bg-green-400" : "bg-red-400"} font-semibold text-center`}>{quiz?.selector}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>


                                            </div>

                                        </div>) : ''
                                }
                            </div>
                        </div>
                        :
                        <div className='h-screen  w-full bg-white flex flex-col items-center justify-center'>
                            <div className=' w-1/2'>
                                <div className=' w-full xl:h-[200px] h-[150px] overflow-hidden rounded'>
                                    <img className=' h-full w-full' src={findVoice} alt="quizBg1" />
                                </div>

                            </div>
                            <hr className=' h-[1px] bg-gray-400  mt-5 mb-7 w-3/4 mx-auto' />
                            <div className='xl:w-1/2 w-2/3'>
                                <div className=' text-left text-blue-800 text-xl font-bold'>{count + 1} / {quizs.length}</div>
                                <div className=' mx-auto p-5 bg-white border border-gray-300 mt-7 text-gray-700 shadow-md shadow-purple-200 rounded  text-bold font-mono flex items-center justify-center z-20'>
                                    {quizs[count]?.question}
                                    {/* <GiSpeaker onClick={() => AudioPlay(quizs[count]?.Latter)} className='text-3xl absolute right-1 bottom-2' /> */}

                                </div>
                                <div className=' grid grid-cols-2 gap-6 mt-10'>

                                    {
                                        quizs[count]?.quiz_answers?.map((quizAns, idx) => <>
                                            <button
                                                onMouseEnter={() => AudioPlay(quizAns?.answere)}
                                                onClick={() => { selectAnswer(quizAns, { quz: quizs[count]?.question }, { AllAns: (quizs[count]?.quiz_answers) }, isData) }} key={idx}
                                                className={` p-4 bg-purple-500 text-white relative hover:bg-black hover:text-white rounded shadow-md  font-semibold transition duration-200`}>
                                                <h1 className=' text-2xl'>{quizAns?.answere}</h1>
                                                <h1 className=' absolute text-xs opacity-70 top-1 left-2 uppercase font-normal text-gray-300 '>A u d i o</h1>
                                                <GiSpeaker className='text-xl absolute right-1 bottom-2' />

                                            </button>

                                        </>)
                                    }
                                </div>
                            </div>
                            <div className=' mt-5'>
                                <progress className="progress progress-primary xl:w-[870px] w-[550px] " value={progressValue} max="100"></progress>
                            </div>
                        </div>
            }
        </div >
    );
};

export default MediumQuiz5;