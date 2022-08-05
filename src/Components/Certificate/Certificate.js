// import React, { useRef, useState } from 'react';
// import { saveAsPng, saveAsJpeg } from 'save-html-as-image';
// import './Certificate.css'

// const Certificate = () => {

//     const [myname, setName] = useState("");
//     const ref = useRef()
//     const handaleName = event => {
//         setName(event.target.value)
//     }

//     const downloadCertificate = (event) => {
//         saveAsPng(ref)
//     }


//     return (
//         <div>
//             <h2>LangZila Certificate</h2>

//             <div className='relative' ref={ref}>
//                 <input onChange={handaleName} type="text" name="myname" placeholder='Please enter your name...' />
//                 <img src="https://i.postimg.cc/9fvPFKqS/Lang-Zila-Certificate.png" alt="" />
//                 <button onClick={downloadCertificate}>Download</button>
//             </div>
//             <p className='absolute placeName'>{myname}</p>
//         </div>
//     );
// };

// export default Certificate;


import { exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef, useState } from 'react';
import './Certificate.css'

const ComponentToPrint = React.forwardRef((props, ref) => (
    <div ref={ref}>Hello World</div>
));

const Certificate = () => {
    const componentRef = useRef();
    const [myName, setName] = useState("");


    const handaleName = event => {
        setName(event.target.value)
    }

    return (
        <>
            <div>
                <input onChange={handaleName} type="text" name="myName" placeholder='Please enter your name...' />
                <div ComponentToPrint ref={componentRef} className='relative'>
                    <img src="https://i.postimg.cc/9fvPFKqS/Lang-Zila-Certificate.png" alt="" />
                    <p className='placeName absolute'>{myName}</p>
                </div>
                <button onClick={() => exportComponentAsPNG(componentRef)}>
                    Export As PNG
                </button>
            </div>
        </>
    );
};

export default Certificate;