import { useState } from "react";
import Header from "./helpers/Header";
import DisplayButtons from "./DisplayButtons";
import DisplayResult from "./DisplayResult";
import choices from "../data/choices";


function Game() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [codeyChoice, setCodeyChoice] = useState(null)
  const [result, setResult] = useState(null)

  const handlePlayerChoice = choice => {
    const codeyChoice = choices[Math.floor(Math.random() * choices.length)]

    setPlayerChoice(choice)
    setCodeyChoice(codeyChoice)

    if (choice.name === codeyChoice.name) {
      setResult('Tie!')
    } else if (
      (choice.name === 'rock' && codeyChoice.name === 'scissors') ||
      (choice.name === 'paper' && codeyChoice.name === 'rock') ||
      (choice.name === 'scissors' && codeyChoice.name === 'paper')
    ) {
      setResult('You win!')
    } else {
      setResult('You lose!')
    }
  }

  const resetGame = () => {
    setPlayerChoice(null)
    setCodeyChoice(null)
    setResult(null)
  }

  return(
    <div>
      <Header title={'Rock, Scissors, Paper'}/>
      <DisplayButtons choices={choices} handlePlayerChoice={handlePlayerChoice} />
      <DisplayResult playerChoice={playerChoice} codeyChoice={codeyChoice} result={result} onResetGame={resetGame} />
    </div>
  )
}

export default Game