import React, { useEffect, useState } from 'react'
import './computerGuess.css'

export default function ComputerGuess() {
    const [compScore, setCompScore] = useState(null);
    const [computerGuess, setComputerGuess] = useState(7);

    useEffect(() => { let computerGuess = Math.floor(Math.random() * 9 + 1); });
    return (
        <>
            <div className='computer-guess-container'>
                <div className='computer-score'>
                    <h3>Computer</h3>
                    <p>Score: {compScore}</p>
                </div>
                <div className='computer-guess'>
                    <p>{computerGuess}</p>
                </div>
                <div>
                    <p className='computer-win'>win</p>
                </div>
            </div>
        </>
    )
}
