import React from 'react';
import { useNavigate } from "react-router-dom";
import { SiGoogleclassroom } from 'react-icons/si';

const CertificateBanner = () => {
    const navigate = useNavigate();
    return (
        <div className='lg:px-20 px-5 py-24 pb-36 text-center bg-secondary'>
            <span className="font-semibold text-md uppercase text-primary mb-3 block">
                ONLINE CERTIFICATION
            </span>
            <h2 className=" font-bold text-xl lg:text-4xl text-gray-900 mb-2 " >
                Get Your Quality Skills Certificate Through Online Quizes
            </h2>
            <h2 className="font-bold text-xl lg:text-4xl text-gray-900 mb-4" >Through Online Exam
            </h2>
            <p>Students friendly pricing for the certificate programs helps individuals to get their skill certificate easier than ever!</p>

            <button onClick={() => navigate('/classroom')} className='flex items-center px-5 py-2 bg-primary font-bold text-white text-lg rounded-md mx-auto mt-6'><SiGoogleclassroom className='mr-3' />Attend on Quizes</button>
           <img className='-mt-44 ml-12 lg:block hidden' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape7.png" alt="" />
            <img className='float-right -mt-44 mr-20 lg:block hidden' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape4.png" alt="" />
            <img className='float-right -mt-10 mr-28 lg:block hidden' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape3.png" alt="" />
        </div>
    );
};

export default CertificateBanner;