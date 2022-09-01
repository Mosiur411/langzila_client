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
        <div className='text-center py-24 shadow-md border  mx-12 rounded-lg'>
            <h1 className='text-3xl text-primary font-bold'>Add Review</h1>

            <form onSubmit={handlereview} >
                <div>

                    <div className='flex flex-raw justify-center items-center my-5 '>

                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    className='border-none'
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

                <input type="text" name='comment' placeholder='Add you review' className='border py-2 px-3 rounded md:w-1/2 w-full mt-2' /> <br />
                <button type='submit' className='py-1 px-3 bg-red-500 rounded mt-4  text-white'>Submit</button>
            </form>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default AddReview;