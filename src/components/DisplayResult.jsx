import DisplayPlayerChoice from "./helpers/DisplayPlayerChoice"
import Button from "./helpers/Button"
import SubHeader from "./helpers/SubHeader"

function DisplayResult({ playerChoice, codeyChoice, result, onResetGame}) {
  return (
    <>
      {playerChoice && codeyChoice && (
        <div>
          <DisplayPlayerChoice  emoji={playerChoice.emoji} text={`You chose ${playerChoice.name}`} />
          <DisplayPlayerChoice  emoji={codeyChoice.emoji} text={`The computer chose ${codeyChoice.name}`} />
          <SubHeader text={result} />
          <Button text='Play again' onResetGame={onResetGame}/>
        </div>
      )}
    </>
  )
}

export default DisplayResult