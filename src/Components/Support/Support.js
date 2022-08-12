import React, { useState } from 'react';
// import support from '../assets/support/support.jpg'
import { BiSupport } from "react-icons/bi";

const Support = () => {
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
        <div className='lg:flex lg:flex-row-reverse items-center lg:w-11/12 mx-auto'>
            <div>
                {/* <img src={support} alt="" /> */}
            </div>
            <div>
                <h2 className='text-4xl font-bold text-accent py-4'>Help Desk Support</h2>
                <p className='text-lg py-4'>Welcome to LangZila support center. If you have trouble understanding something. Course related or website related or something else. Then please come to our meet support session by clicking the button below. We love to help you</p>

                <label for="my-modal" class="SubmitButton py-2 my-2 flex lg:w-1/2 items-center justify-center">Live Support <BiSupport className='ml-2' /> </label>
                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2 bg-[#FE4A55] border-none text-white">✕</label>
                        <h3 class="font-bold text-accent text-2xl py-2">Tell us your problem</h3>
                        {show ? <form onSubmit={handalSubmit}>
                            <input type="text" name="subject" placeholder='Subject' className='w-1/2 py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                            <br />
                            <textarea type="text" name="question" placeholder='Enter your Question' className='w-1/2 py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                            <br />

                            {/* Submit Button */}
                            <input type='submit' value='Submit' className=' SubmitButton py-2 my-2 rounded text-white' />
                            {/* Submit Button */}

                        </form> : <div>
                            <a onClick={changeButton} href='https://meet.google.com/ypa-bdyu-doc' target="_blank" class="SubmitButton py-2 my-2 flex lg:w-1/2 items-center justify-center">Join Now <BiSupport className='ml-2' /></a>
                        </div>}


                    </div>
                </div>
            </div>
        </div >
    );
};

export default Support;