import React from 'react'
import './Button.css';

export default function Button({ btn }) {
    return (
        <div>
            <button className='btn'>{btn}</button>
        </div>
    )
}
