import React, { useState } from 'react';
import './Support.css'
import { useNavigate } from 'react-router-dom';
import support from '../../assets/ClassRoom/Support2.png'
import sun from '../../assets/ClassRoom/sun.png'
import { BiSupport, BiCaretLeft } from "react-icons/bi";

const Support = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(true)
    const [sup, setSup] = useState('')
    const [qus, setQus] = useState('')

    const changeButton = async () => await setShow(!show)
    const handalSubmit = (event) => {

        // Prevent Input Default Behaviour
        event.preventDefault()

        // Get the value
        const subject = event.target.subject.value;
        const question = event.target.question.value;

        // Return if the value is Empty
        if (subject == '' || question == '') {
            return
        } else {

            console.log(subject, question);

            // Set Input value in the Sate
            setSup(subject);
            setQus(question)

            // Reset the input field
            event.target.subject.value = '';
            event.target.question.value = '';

            // Call Next Function
            changeButton()
        }
    }

    // Got the Value
    console.log(sup, qus)

    return (
        <>
            <button onClick={() => navigate('/classroom')} className=' absolute left-20 top-8 border border-red-500 flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' /></button>

            <div className='lg:flex lg:flex-row-reverse items-center xl:h-[90vh]  max-w-6xl mx-auto px-10'>
                <div data-aos="fade-down" className=' w-[50%] relative'>
                    <img src={support} alt="img" />
                    <img className='floating h-40 absolute top-[-7%] right-0' src={sun} alt="img" />
                </div>
                <div className=' w-[50%]'>
                    <h2 data-aos="zoom-in" className='text-6xl font-bold text-accent py-4'>Wanna Study <span className=' text-red-600'>Support?</span></h2>
                    <p data-aos="fade-right" className='text-lg py-4 text-justify'>Welcome to LangZila support center. If you have trouble understanding something. Course related or website related or something else. Then please come to our meet support session by clicking the button below. We love to help you.</p>

                    <label data-aos="fade-up-left" for="my-modal" className="bg-red-600 py-2 my-2 flex lg:w-1/3 text-white rounded font-semibold font-mono items-center justify-center hover:bg-purple-900">Live Support <BiSupport className='ml-2' /> </label>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <label for="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-600 border-none text-white">✕</label>
                            <h3 className="font-bold text-accent text-2xl py-2">Tell us your problem</h3>
                            {show ? <form onSubmit={handalSubmit}>
                                <input type="text" name="subject" placeholder='Subject' className='w-full py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                                <br />
                                <textarea type="text" name="question" placeholder='Enter your Question' className='w-full py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                                <br />

                                {/* Submit Button */}
                                <input type='submit' value='Submit' className=' SubmitButton py-2 my-2 rounded text-white' />
                                {/* Submit Button */}

                            </form> : <div>
                                <a onClick={changeButton} href='https://meet.google.com/ypa-bdyu-doc' target="_blank" className="SubmitButton py-2 my-2 flex lg:w-1/2 items-center justify-center">Join Now <BiSupport className='ml-2' /></a>
                            </div>}


                        </div>
                    </div>
                </div>
            </div >

        </>

    );
};

export default Support;