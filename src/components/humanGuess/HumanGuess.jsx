import React, { useContext, useEffect, useState } from 'react';
import Button from '../Button';
import './humanGuess.css';
import { useDispatch, useSelector } from 'react-redux';
import { randomComputerGuess } from '../computerGuess/computerGuessSlice';
import { increment, decrement } from './humanGuessSlice';
import { targetNumber } from '../targetSlice';
import { resultCalculate } from '../result';
import Context from '../../context/Context';

export default function HumanGuess({ score }) {
    const humanGuess = useSelector(state => state.humanGuess);
    const computerGuess = useSelector(state => state.computerGuess);
    const target = useSelector(state => state.target);
    const result = useSelector(state => state.result);

    const guessBtn = useContext(Context);

    const [targetDispatch, setTargetDispatch] = useState(false);


    const dispatch = useDispatch();

    useEffect(() => {
        if (targetDispatch) {
            console.log(humanGuess, computerGuess, target);
            dispatch(resultCalculate(humanGuess, computerGuess, target));
            setTargetDispatch(false);
        }
    }, [computerGuess, target]);

    const action = () => {
        dispatch(randomComputerGuess());
        dispatch(targetNumber());
        setTargetDispatch(true);
        guessBtn.setStatus(true)
    }

    return (
        <><div className='human-guess-container'>
            <div >
                <h3>You</h3>
                <p>Score: {score}</p>
            </div>
            <div className='guess'>
                <div className='human-guess'>
                    {humanGuess}
                </div>
                <div className='guess-btn'>
                    <button disabled={humanGuess <= 0 ? true : false} onClick={() => { dispatch(decrement()) }} className='decrement'>-</button>
                    <button disabled={humanGuess >= 9 ? true : false} onClick={() => { dispatch(increment()) }} className='increment'>+</button>
                </div>
            </div>
            <Button disable={guessBtn.status} onclick={action} btn={result === 'human' ? 'you win' : "Make a Guess"} />
        </div>
        </>
    )
}
