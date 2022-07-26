import React from 'react';
import A from '../assets/Audio/funnysound.wav'
const CapitalGames = () => {
    const AudioPlay = (latter) => {


        /* ============== swithc =================  */
        switch (latter) {
            case 'a':
                var audio = new Audio(A);
                audio.play();
                break;
            default:
            // code block
        }
    }
    return (
        <div className='px-2 md:px-10 font-bold uppercase'>
            <h1 className="text-3xl text-center py-10">CapitalGames</h1>
            <div className=''>
                <div
                    onMouseEnter={() => AudioPlay('a')}
                    className='w-[150px] h-[150px] text-2xl flex justify-center items-center bg-gray-800 text-white rounded'
                >A</div>
            </div>
        </div>
    );
};

export default CapitalGames;