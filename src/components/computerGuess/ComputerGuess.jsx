import React, { useEffect, useState } from 'react'
import './computerGuess.css';
import { useDispatch, useSelector } from 'react-redux';
import { randomComputerGuess } from './computerGuessSlice';

export default function ComputerGuess({ score }) {

    const computerGuess = useSelector(state => state.computerGuess);
    const results = useSelector(state => state.result);
    const dispatch = useDispatch();


    return (
        <>
            <div className='computer-guess-container'>
                <div className='computer-score'>
                    <h3>Computer</h3>
                    <p className='compScore'>Score: {score}</p>
                </div>
                <div className='computer-guess'>
                    <p>{computerGuess === null ? '?' : computerGuess}</p>
                </div>
                <div>
                    <p className='computer-win'>{results === 'computer' ? 'computer win' : " "}</p>
                </div>
            </div>
        </>
    )
}
