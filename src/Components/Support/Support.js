import React, { useState } from 'react';
import support from '../assets/support/support.jpg'
import { BiSupport } from "react-icons/bi";

const Support = () => {


    const handalSubmit = (e) => {

        // Prevent Input Default Behaviour
        e.preventDefault()

        // Get the value
        const subject = e.target.subject.value;
        const question = e.target.question.value;

        // Return if the value is Empty
        if (subject == '' || question == '') {
            return
        } else {

            console.log(subject, question);

            // Reset the input field
            e.target.subject.value = '';
            e.target.question.value = '';
        }
    }


    return (
        <div className='lg:flex lg:flex-row-reverse items-center lg:w-11/12 mx-auto'>
            <div>
                <img src={support} alt="" />
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
                        <form onSubmit={handalSubmit}>
                            <input type="text" name="subject" placeholder='Subject' className='w-1/2 py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                            <br />
                            <textarea type="text" name="question" placeholder='Enter your Question' className='w-1/2 py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                            <br />

                            {/* Submit Button */}
                            <button for='my-modal' type='submit'><label for='my-modal' className=' bg-purple-800 py-1 px-3 rounded text-white'>Submit</label></button>
                            {/* Submit Button */}

                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Support;