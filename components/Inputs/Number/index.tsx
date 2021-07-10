interface InputNumber {
  text: string
  value: number
  onChange: (value: number) => any
}

function InputNumber({ text, value, onChange }: InputNumber) {
  const decrement = () => onChange(--value)
  const increment = () => onChange(++value)

  return (
    <div className="input-number">
      <span className="input-number__text">{text}</span>
      <span className="input-number__value">{value}</span>
      <div className="input-number__buttons">
        <button className="input-number__button" onClick={decrement}>-</button>
        <button className="input-number__button" onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default InputNumber