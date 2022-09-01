import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
const PlayGames = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar></Navbar>
<<<<<<< HEAD
            <h1 className='text-4xl font-bold text-accent text-center py-8'>Enjoy The Games</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 lg:px-20 gap-3 mb-20'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
=======
            <h1 className='text-4xl font-bold mb-8 text-center py-8 text-red-500'>Enjoy The Games</h1>
            <div className='md:flex items-center justify-evenly px-5 lg:px-20 gap-8 mb-20'>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
>>>>>>> 85072f2957fa98c417d2a4f1d18e4a53ffb680bb
                    <figure><img src="https://www.youcubed.org/wp-content/uploads/2017/03/Tic-Tac-Toe-Product.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Tic Tac Toe!</h2>
                        <p className='text-white'>Have a fun, Just Play The Game!</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => navigate("/playGames/ticTacToe")} className="px-4 py-2 bg-primary text-white rounded-lg font-bold">Play Now</button>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img  src="https://st.depositphotos.com/1009864/4132/v/600/depositphotos_41322663-stock-illustration-chess-board-and-pieces-on.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">ChessBoard!</h2>
=======
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://st.depositphotos.com/1009864/4132/v/600/depositphotos_41322663-stock-illustration-chess-board-and-pieces-on.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">ChessBoard!</h2>
>>>>>>> 85072f2957fa98c417d2a4f1d18e4a53ffb680bb
                        <p className='text-white'>Have a fun, Just Play The Game!</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => navigate("/playGames/chessboardUI")} className="px-4 py-2 bg-primary text-white rounded-lg font-bold">Play Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayGames;