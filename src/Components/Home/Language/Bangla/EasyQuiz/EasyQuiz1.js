import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
// image
import ctimg from '../../../../assets/QuizImg/catoon.gif'
import happyimg from '../../../../assets/QuizImg/happy.gif'
import quizBg1 from '../../../../assets/QuizImg/quizBg1.png'
// icon
import { TbRefreshAlert } from "react-icons/tb";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { GiCottonFlower } from "react-icons/gi";


const EasyQuiz1 = () => {

    const [showScore, setShowScore] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [quizs, setQuizs] = useState([]);
    const [count, setCount] = useState(0);
    const [point, setPoint] = useState(0);
    const [quizData, setQuizData] = useState('');
    const [reload, setReload] = useState(false)
    const [allQuizData, setAllQuizData] = useState('')
    const email = 'joypaul@gmail.com'
    const isData = quizData?.email;
    const [quizPoint, setQuizPoint] = useState([])

    useEffect(() => {

        fetch('../Quiz.json')
            .then(res => res.json())
            .then(data => setQuizs(data))

    }, [quizData, reload])



    useEffect(() => {
        fetch(`http://localhost:5000/getQuiz/${email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setQuizData(data?.data)
                const isData = data?.data;
                if (isData) {
                    setShowResult(true)
                }

            })
    }, [allQuizData, reload])


    useEffect(() => {
        fetch(`http://localhost:5000/GetQuiz`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                const Qdata = data?.data;
                if (Qdata) {
                    setAllQuizData(Qdata)
                }

            })
    }, [reload])

    // console.log(quizData);
    const selectAnswer = async (quizAns, idx, quz, Allans, isData) => {

        // All Declaration
        const ans = quizAns.answere
        const Ans = Allans?.AllAns;
        const Quertion = quz.quz
        const Index = idx;
        const CorrectAns = Ans?.filter((ans) => ans?.isCorrect == true)
        const trueAns = CorrectAns[0]?.answere;


        console.log(quizAns.isCorrect);
        if (quizAns.isCorrect == true) {
            console.log('bar bar colce');
            console.log(quizAns.isCorrect);

            setPoint(point + 1)
        }




        if (!isData) {
            console.log('hoy nai ');
            if (Index) {
                const QuizData = {
                    question: Quertion,
                    ans: trueAns,
                    selector: ans,
                    email: email
                }
                if (QuizData) {
                    console.log(QuizData);

                    try {
                        const { data } = await axios.post(`http://localhost:5000/addQuiz`, QuizData, {
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
        }


        // Next page Moving
        const nextQus = count + 1;
        if (nextQus < quizs.length) {
            setCount(nextQus)
        }
        else {
            setShowScore(true)
        }

    }





    const result = () => {
        setReload(true)
    }


    useEffect(() => {

        if (allQuizData?.length > 0) {
            const data = allQuizData?.filter(quiz => quiz.ans == quiz.selector)
            if (data) {
                setQuizPoint(data)
            }

        }
    }, [allQuizData])




    return (
        <div>
            {
                allQuizData.length > 0 ?

                    <div className=' py-10'>
                        <h1 className=' text-3xl font-mono text-lime-700 font-bold uppercase flex items-center justify-center'><GiCottonFlower className='text-amber-500 mr-2' /> Your Quiz Result <GiCottonFlower className=' text-amber-500 ml-2' /></h1>
                        <hr className=' bg-lime-700 h-[2px] mt-3 w-1/2 mx-auto' />

                        <div className=' font-bold text-xl'>Your Score : {quizPoint?.length}</div>

                        {

                            allQuizData?.map((quiz, idx) => <div key={idx}>
                                <div className=' bg-white shadow-md xl:w-1/3 w-1/2 mx-auto mt-10 p-5 relative'>
                                    <div>
                                        <h1 className='text-left text-xl mb-7 flex items-center'><VscActivateBreakpoints className='mr-4 text-amber-400' />{quiz?.question}</h1>
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
                                                    <td className=' bg-amber-200 font-semibold text-center'>{quiz?.ans}</td>
                                                    <td className={`${quiz.ans == quiz.selector ? "bg-green-300" : "bg-red-300"} font-semibold text-center`}>{quiz?.selector}</td>
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
                        <div className='h-screen  w-full bg-sky-50 flex flex-col items-center justify-center'>
                            <h1 className=' text-xl font-semibold text-lime-700'> Your Scored <span className=' text-red-700'>{point}</span> Out of <span className=' text-red-700'>{quizs.length}</span></h1>


                            <button onClick={() => result()} className='mt-10 px-6 py-2 bg-pink-700 hover:bg-black text-white text-semibold  shadow-md rounded text-lg flex items-center'>Check Result<TbRefreshAlert className=' ml-4 text-2xl' /></button>


                            <div>
                                {
                                    reload ?
                                        allQuizData?.map((quiz, idx) => <div key={idx}>
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
                        <div className='h-screen  w-full bg-sky-50 flex flex-col items-center justify-center'>
                            <div className=' w-1/2'>
                                <div className=' w-full xl:h-[200px] h-[150px] overflow-hidden rounded'>
                                    <img className=' w-[800px] mx-auto xl:h-[270px] h-[250px] mt-[-70px]' src={quizBg1} alt="quizBg1" />
                                </div>

                            </div>
                            <hr className=' h-[1px] bg-gray-400  mt-5 mb-7 w-3/4 mx-auto' />
                            <div className='xl:w-1/2 w-2/3'>
                                <div className=' text-left font-bold'>{count + 1}/{quizs.length}</div>
                                <div className=' p-5 bg-red-200 mt-7 text-black shadow-md rounded text-2xl px-10 text-bold font-mono flex items-center'> <WiMoonAltFirstQuarter className=' text-yellow-800 text-3xl mr-2' />
                                    {quizs[count]?.question}
                                </div>
                                <div className=' grid grid-cols-2 gap-6 mt-10'>

                                    {
                                        quizs[count]?.quiz_answers?.map((quizAns, idx) => <button onClick={() => { selectAnswer(quizAns, idx, { quz: quizs[count]?.question }, { AllAns: (quizs[count]?.quiz_answers) }, isData) }} key={idx}
                                            className={` p-4 bg-amber-300 text-black hover:bg-black hover:text-white rounded shadow-md text-lg font-semibold transition duration-200`}>{quizAns?.answere}</button>)
                                    }
                                </div>
                            </div>
                        </div>
            }
        </div>
    );
};

export default EasyQuiz1;