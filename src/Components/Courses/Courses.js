import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Home/Navbar/Navbar';
import Course from './Course';

const Courses = () => {
    const shop = useSelector((state) => state.courses.courses);

    return (
        <>
            <Navbar />
            <div class="text-gray-600 body-font">
                <h2 className='text-4xl font-bold text-accent text-center pt-5 pb-2'>All Courses</h2>
                <p className='text-center lg:w-[800px] mb-10 mx-auto'>Explore Our Different Types Of Language Courses. We are Provided best quality of learning.</p>
                <div class="lg:px-24 px-5 pb-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {shop.map((course) => (
                            <Course key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;