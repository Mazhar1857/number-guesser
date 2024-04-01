const initialState = null;

const randomGuess = () => {
    return Math.floor(Math.random() * 9 + 1);
}
export const computerGuessReducer = (computerGuess = initialState, action) => {

    switch (action.type) {
        case 'computerGuess/randomComputerGuess':
            return randomGuess();
        case 'computerGuess/resetComputerGuess':
            return null;
        default:
            return computerGuess;
    }

}

export const randomComputerGuess = () => {
    return {
        type: 'computerGuess/randomComputerGuess'
    }
}


export function resetComputerGuess() {
    return {
        type: 'computerGuess/resetComputerGuess'
    }
}