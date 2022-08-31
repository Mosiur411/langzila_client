import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import "@fontsource/nunito";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdQuiz } from "react-icons/md";
import auth from '../../Firebase/firebase.init';
import './Assignemnt1Quiz.css'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import { toast } from 'react-toastify';

const Assignemnt1Quiz = () => {

    const [user] = useAuthState(auth);
    const userName = user?.displayName;
    const [quies, setQuizs] = useState([])
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(false)



    // Get The Quiz Questions
    useEffect(() => {
        fetch('/Hard1.json')
            .then(res => res.json())
            .then(data => setQuizs(data))
    }, [])





    const handelSubmit = (e) => {
        e.preventDefault()

        const value1 = e?.target.radio1.value;
        const value2 = e?.target.radio2.value;
        const value3 = e?.target.radio3.value;
        const value4 = e?.target.radio4.value;
        const value5 = e?.target.radio5.value;
        const value6 = e?.target.radio6.value;
        const value7 = e?.target.radio7.value;
        const value8 = e?.target.radio8.value;
        const value9 = e?.target.radio9.value;
        const value10 = e?.target.radio10.value;

        const ansArray = [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10];
        const correntAns = ['Aa', 'Aha', 'Ee', 'Ehi', 'Uu', 'Uui', 'A', 'Oi', 'O', 'Oi']


        const intersection = ansArray.filter(element => correntAns.includes(element));

        console.log(intersection);
        const arrayLength = intersection?.length;
        // if (value1 && value2 && value3 && value4 && value5 && value6 && value7 && value8 && value9 && value10) {


        // }

        if (value1 && value2 && value3 && value4 && value5 && value6 && value7 && value8 && value9 && value10) {

            setCount(arrayLength)
            setTimer(true)
        } else {
            toast('Please answare all the Quizs')
        }

    }


    console.log(count)

    return (
        <>
            {
                timer ?
                    <div className='  mt-[25%]'>
                        <h1 className=' text-2xl font-medium text-blue-900'>Result</h1>

                        <FlipClockCountdown className='flip-clock text-center flex justify-center mt-10'
                            to={new Date().getTime() + 5000 + 25000}
                            labels={['SECONDS']}
                            labelStyle={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', margin: -5 }}
                            digitBlockStyle={{ width: 70, height: 90, fontSize: 60 }}
                        >
                            <h1 className=' text-xl font-mono font-medium text-blue-900'>You Result is {count}/10</h1>
                        </FlipClockCountdown>

                    </div> :
                    <div >
                        <h1 style={{ fontFamily: "Nunito" }} className=' text-2xl text-gray-800 font-bold'>Hay! <span className=' text-blue-900'>{userName}</span></h1>
                        <h1 style={{ fontFamily: "Nunito" }} className=' font-medium text-gray-600 '>Let's start the Quick Test.</h1>
                        <div className=' flex items-center justify-between mt-2'>
                            <p className=' flex items-center text-xs font-medium '><BiBookBookmark className=' text-blue-900  mr-2' />Subject : Bangla</p>
                            <p className=' flex items-center text-xs font-medium '><AiOutlineFieldTime className=' text-blue-900  mr-2' />Time: 10:00</p>
                        </div>

                        <form onSubmit={handelSubmit} className=' mt-5 text-left'>




                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'অ'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio1" value="Fa" />
                                        <span className="checkmark text-center font-mono ">Fa</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio1" value="Aa" />
                                        <span className="checkmark text-center font-mono ">Aa</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio1" value="Ba" />
                                        <span className="checkmark text-center font-mono ">Ba</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio1" value="Da" />
                                        <span className="checkmark text-center font-mono ">Da</span>
                                    </label>
                                </div>
                            </div>


                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'আ'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio2" value="Aha" />
                                        <span className="checkmark text-center font-mono ">Aha</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio2" value="Kua" />
                                        <span className="checkmark text-center font-mono ">Kua</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio2" value="Gya" />
                                        <span className="checkmark text-center font-mono ">Gya</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio2" value="Four" />
                                        <span className="checkmark text-center font-mono ">Rha</span>
                                    </label>
                                </div>
                            </div>

                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'ই'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio3" value="Gi" />
                                        <span className="checkmark text-center font-mono ">Gi</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio3" value="Fe" />
                                        <span className="checkmark text-center font-mono ">Fe</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio3" value="Ee" />
                                        <span className="checkmark text-center font-mono ">Ee</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio3" value="Hu" />
                                        <span className="checkmark text-center font-mono ">Hu</span>
                                    </label>
                                </div>
                            </div>

                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'ঈ'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio4" value="Ehi" />
                                        <span className="checkmark text-center font-mono ">Ehi</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio4" value="Gta" />
                                        <span className="checkmark text-center font-mono ">Gta</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio4" value="Hay" />
                                        <span className="checkmark text-center font-mono ">Hay</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio4" value="Kha" />
                                        <span className="checkmark text-center font-mono ">Kha</span>
                                    </label>
                                </div>
                            </div>


                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'উ'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio5" value="Up" />
                                        <span className="checkmark text-center font-mono ">Up</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio5" value="Qi" />
                                        <span className="checkmark text-center font-mono ">Qi</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio5" value="Ty" />
                                        <span className="checkmark text-center font-mono ">Ty</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio5" value="Uu" />
                                        <span className="checkmark text-center font-mono ">Uu</span>
                                    </label>
                                </div>
                            </div>


                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'ঊ'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio6" value="Uui" />
                                        <span className="checkmark text-center font-mono ">Uui</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio6" value="Chi" />
                                        <span className="checkmark text-center font-mono ">Chi</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio6" value="Rfa" />
                                        <span className="checkmark text-center font-mono ">Rfa</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio6" value="Fha" />
                                        <span className="checkmark text-center font-mono ">Fha</span>
                                    </label>
                                </div>
                            </div>

                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'এ'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio7" value="B" />
                                        <span className="checkmark text-center font-mono ">B</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio7" value="A" />
                                        <span className="checkmark text-center font-mono ">A</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio7" value="C" />
                                        <span className="checkmark text-center font-mono ">C</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio7" value="D" />
                                        <span className="checkmark text-center font-mono ">D</span>
                                    </label>
                                </div>
                            </div>

                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'ঐ'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio8" value="Ja" />
                                        <span className="checkmark text-center font-mono ">Ja</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio8" value="Fi" />
                                        <span className="checkmark text-center font-mono ">Fi</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio8" value="Oi" />
                                        <span className="checkmark text-center font-mono ">Oi</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio8" value="Ti" />
                                        <span className="checkmark text-center font-mono ">Ti</span>
                                    </label>
                                </div>
                            </div>

                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'ও'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio9" value="Q" />
                                        <span className="checkmark text-center font-mono ">Q</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio9" value="P" />
                                        <span className="checkmark text-center font-mono ">P</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio9" value="O" />
                                        <span className="checkmark text-center font-mono ">O</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio9" value="R" />
                                        <span className="checkmark text-center font-mono ">R</span>
                                    </label>
                                </div>
                            </div>

                            <div className=' mt-4'>
                                <h1 className=' flex items-center text-gray-700'><MdQuiz className=' mr-2 text-blue-900' />What is the correct spelling of 'ঔ'?</h1>
                                <div className=' grid grid-cols-2 gap-3 mt-3  items-center justify-center pl-12'>
                                    <label className="container1 w-2/3 shadow-md">
                                        <input type="radio" name="radio10" value="Oi" />
                                        <span className="checkmark text-center font-mono ">Oi</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio10" value="Pa" />
                                        <span className="checkmark text-center font-mono ">Pa</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio10" value="Ca" />
                                        <span className="checkmark text-center font-mono ">Ca</span>
                                    </label>

                                    <label className="container1 w-2/3  shadow-md">
                                        <input type="radio" name="radio10" value="Ji" />
                                        <span className="checkmark text-center font-mono ">Ji</span>
                                    </label>
                                </div>
                            </div>


                            <div className=' text-center mt-5'>
                                <input type="submit" value='submit' className=' bg-red-400 py-1 px-3 rounded text-white' />
                            </div>
                        </form >
                    </div >
            }





        </>
    );
};

export default Assignemnt1Quiz;

{/* <option className={`  text-black text-center bg-red-200 py-2 text-sm font-semibold label-text `}>Ab</option>
                    <option className={`  text-black text-center bg-red-200 py-2 text-sm font-semibold label-text `}>b</option>
                    <option className={`  text-black text-center bg-red-200 py-2 text-sm font-semibold label-text `}>c</option>
                    <option className={`  text-black text-center bg-red-200 py-2  text-sm font-semibold label-text `}>d</option> */}