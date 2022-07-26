import React, { useEffect, useState } from 'react';
import A from '../assets/Audio/funnysound.wav'
const CapitalGames = () => {
    const [CapitalLetter, setCapitalLetter] = useState([[]])
    useEffect(() => {
        fetch('English.json')
            .then(res => res.json())
            .then(data => {
                setCapitalLetter(data)
            })
    })





    const AudioPlay = (latter) => {
        /* ============== swithc =================  */
        switch (latter) {
            case latter:
                var audio = new Audio(A);
                audio.play();
                break;
            default:
            // code block
        }
    }
    return (
        <div className='px-2 md:px-10 font-bold uppercase'>
            <h1 className="text-4xl text-center py-10">CapitalGames</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10'>
                {
                    CapitalLetter.map(word =>
                        <div
                            onMouseEnter={() => AudioPlay(word.Latter)}
                            className='w-[150px] h-[150px] mx-auto text-2xl flex justify-center items-center bg-[#FE4A55]
                            hover:shadow-amber-500 hover:shadow-2xl text-white rounded'
                        >{word.Latter}</div>
                    )
                }

            </div>
        </div>
    );
};

export default CapitalGames;