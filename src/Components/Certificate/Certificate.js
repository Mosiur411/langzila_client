import { exportComponentAsPNG, exportComponentAsPDF } from 'react-component-export-image';
import React, { useRef, useState } from 'react';
import './Certificate.css'
import Langzila from './LangZila Certificate.png'


const Certificate = () => {
    const componentRef = useRef();
    const [myName, setName] = useState("");

    const ComponentToPrint = React.forwardRef((props, ref) => (
        <div ref={ref}>Hello World</div>
    ));

    const handaleName = event => {
        setName(event.target.value)
    }


    return (
        <>
            <div className=''>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-accent py-4'>Certification of Completion</h2>
                    <p className='text-2xl text-primary py-2'>You have succesfully complete the course</p>
                    <input onChange={handaleName} type="text" name="myName" placeholder='Please enter your name...' className='w-1/2 py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                </div>
                <div ComponentToPrint ref={componentRef} className='w-1/2 mx-auto'>
                    <img className='relative' src={Langzila} alt="" />

                    <p className='placeName absolute'>{myName}</p>
                </div>
                <div className='text-center py-8'>
                    <button className='SubmitButton p-3' onClick={() => exportComponentAsPDF(componentRef, {
                        pdfOptions: {
                            unit: 'px',
                            pdfFormat: [905, 635]
                        }
                    })}>
                        Export As PDF
                    </button>
                </div>
            </div>
        </>
    );
};

export default Certificate;