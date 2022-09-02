import React from 'react';
import commingImg from '../assets/comming.png'

const Achievements = () => {
    return (
        <div className=' text-center'>
            <img className=' w-96 mx-auto mt-5' src={commingImg} alt="commingImg" />
            <p className=' text-3xl font-bold text-red-500'><span className='text-blue-500'>Please!</span> Complete Quizs.</p>
        </div>
    );
};

export default Achievements;