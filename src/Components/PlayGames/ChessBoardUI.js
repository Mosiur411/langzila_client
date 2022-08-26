import React from 'react';
import { Chessboard } from "react-chessboard";
import { BiCaretLeft } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const ChessBoardUI = () => {
    const navigate = useNavigate()
    return (
        <div className='lg:px-[478.7px] py-20'>
              <button onClick={()=>navigate("/playGames")} className=' absolute left-10 top-5 border border-primary flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' /></button>
            <h3 className='font-bold text-2xl mb-4 text-primary text-center'>ChessBoard</h3>
            <div className='shadow-lg border border-primary'>
            <Chessboard id="BasicBoard" />
           </div>
        </div>
    );
};

export default ChessBoardUI;