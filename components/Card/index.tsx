interface Card {
  bgColor?: string
  children?: any
}

function Card({ bgColor, children }: Card) {
  return (
    <div className="card" style={{ backgroundColor: bgColor || '#fff' }}>
      {children}
    </div>
  )
}

export default Card