import { useSelector } from "react-redux";

const calculateResult = (humanGuess, computerGuess, target) => {

    if (Math.abs(humanGuess - target) <= (Math.abs(computerGuess - target))) {
        return 'human'
    } else {
        return 'computer'
    }


}

const initialState = null;
export const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'result/resultCalculate':
            const { humanGuess, computerGuess, target } = action.payload;
            return calculateResult(humanGuess, computerGuess, target);
        case 'result/resetResult':
            return null;
        default:
            return state;
    }
}

export const resultCalculate = (humanGuess, computerGuess, target) => {
    return {
        type: 'result/resultCalculate',
        payload: { humanGuess, computerGuess, target }
    }
}


export const resetResult = () => {
    return {
        type: 'result/resetResult'
    }
}

