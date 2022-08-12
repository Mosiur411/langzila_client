import React, { useEffect, useState } from 'react';
import './HindiAudio.css'

// Audio
import A from '../../../assets/Audio/a.mp3'
import B from '../../../assets/Audio/B.mp3'
import C from '../../../assets/Audio/C.mp3'
import D from '../../../assets/Audio/d.mp3'
import E from '../../../assets/Audio/E.mp3'
import F from '../../../assets/Audio/F.mp3'
import G from '../../../assets/Audio/G.mp3'
import H from '../../../assets/Audio/H.mp3'
import I from '../../../assets/Audio/I.mp3'
import J from '../../../assets/Audio/J.mp3'
import K from '../../../assets/Audio/K.mp3'
import L from '../../../assets/Audio/L.mp3'
import M from '../../../assets/Audio/M.mp3'
import N from '../../../assets/Audio/N.mp3'
import O from '../../../assets/Audio/O.mp3'
import P from '../../../assets/Audio/P.mp3'
import Q from '../../../assets/Audio/Q.mp3'
import R from '../../../assets/Audio/R.mp3'
import S from '../../../assets/Audio/SS.mp3'
import T from '../../../assets/Audio/T.mp3'
import U from '../../../assets/Audio/U.mp3'
import V from '../../../assets/Audio/V.mp3'
import W from '../../../assets/Audio/w.mp3'
import X from '../../../assets/Audio/X.mp3'
import Y from '../../../assets/Audio/Y.mp3'
import Z from '../../../assets/Audio/Z.mp3'


const HindiAudio = () => {
    const [CapitalLetter, setCapitalLetter] = useState([])

    useEffect(() => {
        fetch('/English.json')
            .then(res => res.json())
            .then(data => setCapitalLetter(data))
    }, [])


    const AudioPlay = (latter) => {
        /* ============== switch =================  */
        switch (latter) {
            case "a":
                var audio = new Audio(A);
                audio.play();
                break;
            case "b":
                var audioB = new Audio(B);
                audioB.play();
                break;
            case "c":
                var audioC = new Audio(C);
                audioC.play();
                break;
            case "d":
                var audioD = new Audio(D);
                audioD.play();
                break;
            case "e":
                var audioE = new Audio(E);
                audioE.play();
                break;
            case "f":
                var audioF = new Audio(F);
                audioF.play();
                break;
            case "g":
                var audioG = new Audio(G);
                audioG.play();
                break;
            case "h":
                var audioH = new Audio(H);
                audioH.play();
                break;
            case "i":
                var audioI = new Audio(I);
                audioI.play();
                break;
            case "j":
                var audioJ = new Audio(J);
                audioJ.play();
                break;
            case "k":
                var audioK = new Audio(K);
                audioK.play();
                break;
            case "l":
                var audioL = new Audio(L);
                audioL.play();
                break;
            case "m":
                var audioM = new Audio(M);
                audioM.play();
                break;
            case "n":
                var audioN = new Audio(N);
                audioN.play();
                break;
            case "o":
                var audioO = new Audio(O);
                audioO.play();
                break;
            case "p":
                var audioP = new Audio(P);
                audioP.play();
                break;
            case "q":
                var audioQ = new Audio(Q);
                audioQ.play();
                break;
            case "r":
                var audioR = new Audio(R);
                audioR.play();
                break;
            case "s":
                var audioS = new Audio(S);
                audioS.play();
                break;
            case "t":
                var audioT = new Audio(T);
                audioT.play();
                break;
            case "u":
                var audioU = new Audio(U);
                audioU.play();
                break;
            case "v":
                var audioV = new Audio(V);
                audioV.play();
                break;
            case "w":
                var audioW = new Audio(W);
                audioW.play();
                break;
            case "x":
                var audioX = new Audio(X);
                audioX.play();
                break;
            case "y":
                var audioY = new Audio(Y);
                audioY.play();
                break;
            case "z":
                var audioZ = new Audio(Z);
                audioZ.play();
                break;

            default:
            // code block
        }
    }



    return (
        <div data-aos="fade-left" className='px-2 md:px-10 font-bold  h-[84vh] overflow-y-auto scrollbar rounded-md border border-purple-900 border-r-0 shadow-lg'>
            <h1 data-aos="fade-up" className="text-4xl text-sky-900 text-center pt-7  ">Alphabet</h1>
            <p data-aos="fade-up-right" className='xl:w-2/3 mx-auto font-medium text-md'>You can learn English alphabet by nice voice. You  click the card and hear the voice of the word </p>

            <div className=' max-w-5xl  mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-24 py-10'>
                {
                    CapitalLetter.map(word =>
                        <div
                            onClick={() => AudioPlay(word.Latter)}
                            className='w-full h-[170px] text-8xl flex justify-center items-center bg-sky-900 hover:bg-purple-900
                            shadow-gray-400 shadow-lg cursor-pointer text-white rounded-2xl'
                        >{word.Latter}</div>
                    )
                }
            </div>
        </div>
    );
};

export default HindiAudio;