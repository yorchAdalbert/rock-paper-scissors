function Button({ text = 'Button', onResetGame }) {
  return <button onClick={onResetGame}>{text}</button>
}

export default Button