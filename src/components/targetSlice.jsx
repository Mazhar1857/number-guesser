const initialState = null;

const randomTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
}

export const targetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'targetReducer/targetNumber':
            return randomTarget();
        case 'targetReducer/resetTarget':
            return null
        default:
            return state

    }
}

export const targetNumber = () => {
    return {
        type: 'targetReducer/targetNumber'
    }
}

export const resetTarget = () => {
    return {
        type: 'targetReducer/resetTarget'
    }
}