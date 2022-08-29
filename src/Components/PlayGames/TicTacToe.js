import React from 'react'
import { useState } from "react"
import "./TicTacToe.css"
import { BiCaretLeft } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const TicTacToe = () => {
    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()

    const navigate = useNavigate();

    const CheckWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    squares[pattern[0]] === "" ||
                    squares[pattern[1]] === "" ||
                    squares[pattern[2]] === ""
                ) {

                }
                else if (squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]) {
                    setWinner(squares[pattern[0]])
                }
            })
        }
    }


    const handleClick = (num) => {
        if (cells[num] !== "") {
            return
        }
        let squares = [...cells]
        if (turn === "X") {
            squares[num] = "X"
            setTurn("O")
        }
        else {
            squares[num] = "O"
            setTurn("X")
        }
        CheckWinner(squares)
        setCells(squares)
    };



    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    };

    const handleRestart = () => {
        setWinner(null)
        setCells(Array(9).fill(''))
    }



    return (
        <div className='py-20'>
             <button onClick={()=>navigate('/playGames')} className=' absolute left-10 top-5 border border-red-500 flex items-center justify-center  px-2 pr-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' /></button>
            <h3 className='font-bold text-2xl mb-4 text-primary text-center'>Tic Tac Toe</h3>
            <div className='flex justify-center items-center mx-auto w-[500px]'>
                <table className='tic-table'>
                    <tbody >
                        <tr>
                            <Cell num={0} />
                            <Cell num={1} />
                            <Cell num={2} />
                        </tr>
                        <tr>
                            <Cell num={3} />
                            <Cell num={4} />
                            <Cell num={5} />
                        </tr>
                        <tr>
                            <Cell num={6} />
                            <Cell num={7} />
                            <Cell num={8} />
                        </tr>
                    </tbody>
                </table>
            </div>
            {winner && (  <h3 className='font-bold text-2xl my-4 text-primary text-center'>{winner} is the winner!</h3>
                 
            )}
             <button className='px-4 py-2 bg-primary text-white rounded-lg font-bold text-center lg:mx-[700px] my-4' onClick={() => handleRestart()}>Start Again</button>
        </div>
    )
}

export default TicTacToe