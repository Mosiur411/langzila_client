import React from 'react';
import support from '../assets/support/support.jpg'
import { BiSupport } from "react-icons/bi";

const Support = () => {
    return (
        <div className='lg:flex lg:flex-row-reverse items-center lg:w-11/12 mx-auto'>
            <div>
                <img src={support} alt="" />
            </div>
            <div>
                <h2 className='text-4xl font-bold text-accent py-4'>Help Desk Support</h2>
                <p className='text-lg py-4'>Welcome to LangZila support center. If you have trouble understanding something. Course related or website related or something else. Then please come to our meet support session by clicking the button below. We love to help you</p>
                {/* <button className='flex items-center SubmitButton py-2'>Live Support  <BiSupport className='ml-2' /> </button> */}

                {/* <!-- The button to open modal --> */}
                <label for="my-modal" class="SubmitButton py-2 my-2 flex lg:w-1/2 items-center justify-center">Live Support <BiSupport className='ml-2' /> </label>

                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-accent text-2xl py-2">Tell us your problem</h3>
                        <input type="text" name="subject" placeholder='Subject' className='w-1/2 py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                        <br />
                        <textarea type="text" name="question" placeholder='Enter your Question' className='w-1/2 py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                        <br />
                        <input type="submit" value="Send" className='SubmitButton py-2' />
                        {/* <div class="modal-action">
                            <label for="my-modal" class="btn">Yay!</label>
                        </div> */}
                    </div>
                </div>




            </div>

        </div >
    );
};

export default Support;