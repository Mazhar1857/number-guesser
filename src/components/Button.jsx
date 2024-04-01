import React from 'react'
import './Button.css';
import { useDispatch } from 'react-redux';

export default function Button({ btn, onclick, disable }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        onclick();
    }



    return (
        <div>
            <button disabled={disable} onClick={handleClick} className='btn'>{btn}</button>
        </div>
    )
}
