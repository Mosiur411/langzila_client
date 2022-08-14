import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { FaStar } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';

const AddReview = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [user] = useAuthState(auth)
    const handlereview = (e) => {
        e.preventDefault()
        const review = currentValue;
        const comment = e.target.comment.value;
        const name = user.displayName;
        const email = user.email;
        const makereview = {
            review,
            comment,
            name,
            email
        }
        console.log(makereview);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            body: JSON.stringify(makereview),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((response) => response.json())
            .then((json) => {
                toast("Your Review Added")
                e.reset()
            });

    }

    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)


    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)


    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };
    return (
        <div className='container text-center'>
            <h1 className='text-3xl text-primary'>Add Review</h1>

            <form onSubmit={handlereview} action="">
                {/* <select name='review' class="select  max-w-xs m-10 border-2 border-gray-100 ">
                    <option disabled selected className='text-primary'>Rate Your Experience</option>
                    <option className='text-primary' >1</option>
                    <option className='text-primary'>2</option>
                    <option className='text-primary'>3</option>
                    <option className='text-primary'>4</option>
                    <option className='text-primary'>5</option>
                </select><br /> */}
                <div>
                    <h3 className='text-xl text-center text-accent mt-4'>Give Your Honest Review </h3>
                    <div className='flex flex-raw justify-center items-center my-5 shadow-sm'>

                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                    }}

                                />
                            )
                        })}
                    </div>
                </div>
                <input type="text" placeholder="Type Your Experience and give us valuable suggestion " name='comment' class="input input-bordered input-lg w-full max-w-xs mb-5" /><br />
                <button type='submit' className='btn btn-primary  text-white'>Submit</button>
            </form>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default AddReview;