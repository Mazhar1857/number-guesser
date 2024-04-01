import React, { useState } from 'react';
import Context from './Context';

function BtnState(props) {
    const [status, setStatus] = useState(false);
    return (
        <div>
            <Context.Provider value={{ status, setStatus }}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export default BtnState
