import { useState } from 'react'
import './App.css'
import ComputerGuess from './components/ComputerGuess';
import HumanGuess from './components/HumanGuess';
import Button from './components/Button';

function App() {

  const [round, setRound] = useState(1);
  const [target, setTarget] = useState(null);


  return (
    <>
      <div id='app'>
        <section className='title'>
          <h1>Number Guesser!</h1>
        </section>

        <section className='round-count'>
          <h2>Round {round}</h2>
          <h3>Target Number: {target}</h3>
        </section>

        <section className='game-container'>
          <div className='left'>
            <ComputerGuess />
          </div>
          <div className='right'>
            <HumanGuess />
          </div>

        </section>

        <section className='next-round-btn'>
          <Button btn="Next round" />
        </section>

        <section className='footer-section'>
          <div className='footer'>
            <div className='footer-column'>
              <h3>Step 1</h3>
              <p>Input a number between 0 and 9</p>
            </div>
            <div className='footer-column'>
              <h3>Step 2</h3>
              <p>Click "Make a Guess" to submit yourguess and see who won the round.</p>
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
