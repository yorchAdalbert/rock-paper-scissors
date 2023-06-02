function DisplayButtons({ choices, handlePlayerChoice}) {
  return (
    <div>
      {choices.map(choice => 
        <button key={choice.name} onClick={() => handlePlayerChoice(choice)} aria-label={choice.name}>
          {choice.emoji}
        </button>
      )}
    </div>
  )
}

export default DisplayButtons