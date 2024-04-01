import { useContext, useEffect, useState } from 'react'
import './App.css'
import ComputerGuess from './components/computerGuess/ComputerGuess';
import HumanGuess from './components/humanGuess/HumanGuess';
import Button from './components/Button';
import { resetComputerGuess } from './components/computerGuess/computerGuessSlice';
import { useDispatch, useSelector } from 'react-redux';
import { resetHumanGuess } from './components/humanGuess/humanGuessSlice';
import { resetTarget } from './components/targetSlice';
import { resetResult } from './components/result';
import Context from './context/Context';


function App() {
  const dispatch = useDispatch();
  const [humanScore, setHumanScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const result = useSelector(state => state.result);

  const [round, setRound] = useState(1);

  const target = useSelector(state => state.target);

  const nextBtn = useContext(Context);

  const action = () => {
    dispatch(resetComputerGuess());
    dispatch(resetHumanGuess());
    dispatch(resetTarget());
    dispatch(resetResult());
    setRound((pre) => {
      return pre + 1
    })
    nextBtn.setStatus(false);

  }

  useEffect(() => {

    if (result === 'human') {
      setHumanScore((pre) => {
        return pre + 1;
      })
    }

    if (result === 'computer') {
      setCompScore((pre) => {
        return pre + 1;
      })
    }

  }, [result]);


  return (
    <>
      <div id='app'>
        <section className='title'>
          <h1>Number Guesser!</h1>
        </section>

        <section className='round-count'>
          <h2>Round {round}</h2>
          <h3 id='target'>Target Number: {target === null ? "?" : target}</h3>
        </section>

        <section className='game-container'>
          <div className='left'>
            <ComputerGuess score={compScore} />
          </div>
          <div className='right'>
            <HumanGuess score={humanScore} />
          </div>

        </section>

        <section className='next-round-btn'>
          <Button disable={!nextBtn.status} onclick={action} btn="Next round" />
        </section>

        <section className='footer-section'>
          <div className='footer'>
            <div className='footer-column'>
              <h3>Step 1</h3>
              <p>Input a number between 0 and 9</p>
            </div>
            <div className='footer-column'>
              <h3>Step 2</h3>
              <p>Click "Make a Guess" to submit your guess and see who won the round.</p>
            </div>
            <div className='footer-column'>
              <h3>Step 3</h3>
              <p>Click "Next Round" to play again.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
