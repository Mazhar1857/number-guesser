const initialState = 0;

export const humanGuessReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'humanGuess/increment':
            return state + 1;
        case 'humanGuess/decrement':
            return state - 1;
        case 'humanGuess/reset':
            return 0;
        default:
            return state;
    }
}

export const increment = () => {
    return {
        type: 'humanGuess/increment'
    }
}

export const decrement = () => {
    return {
        type: 'humanGuess/decrement'
    }
}

export const resetHumanGuess = () => {
    return {
        type: 'humanGuess/reset'
    }
}