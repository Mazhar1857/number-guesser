import { createStore, combineReducers } from 'redux';

import { computerGuessReducer } from "../components/computerGuess/computerGuessSlice";
import { humanGuessReducer } from '../components/humanGuess/humanGuessSlice';
import { targetReducer } from '../components/targetSlice';
import { resultReducer } from '../components/result';

export const store = createStore(combineReducers({
    computerGuess: computerGuessReducer,
    humanGuess: humanGuessReducer,
    target: targetReducer,
    result: resultReducer
}))