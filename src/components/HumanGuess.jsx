import React, { useEffect } from 'react';
import Button from './Button';
import './humanGuess.css';

export default function HumanGuess() {



    return (
        <><div className='human-guess-container'>
            <div >
                <h3>You</h3>
                <p>Score: 0</p>
            </div>
            <div className='guess'>
                <div className='human-guess'>
                    0
                </div>
                <div className='guess-btn'>
                    <button className='decrement'>-</button>
                    <button className='increment'>+</button>
                </div>
            </div>
            <Button btn="Make a Guess" />
        </div>
        </>
    )
}
