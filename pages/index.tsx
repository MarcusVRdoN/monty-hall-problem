import Link from 'next/link'
import { useState } from 'react'

import Card from '@/components/Card'
import InputNumber from '@/components/Inputs/Number'

function Home() {
  const [doorsQuantity, setDoorsQuantity] = useState(3)
  const [doorGifted, setDoorGifted] = useState(1)

  return (
    <main className="page">
      <div className="form">
        <div className="form__row">
          <Card bgColor="#c0392c">
            <h1>Monty Hall</h1>
          </Card>
          <Card>
            <InputNumber text="Doors quantity" value={doorsQuantity} onChange={quantity => setDoorsQuantity(quantity)} />
          </Card>
        </div>
        <div className="form__row">
          <Card>
            <InputNumber text="Door gifted" value={doorGifted} onChange={gifted => setDoorGifted(gifted)} />
          </Card>
          <Card bgColor="#28a085">
            <Link href={`/game/${doorsQuantity}/${doorGifted}`}>
              <a className="form__link">Start</a>
            </Link>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default Home
