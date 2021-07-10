import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { createDoors, updateDoors } from '@/functions/Door'

import Link from 'next/link'
import Door from '@/components/Door'

function Game() {
  const router = useRouter()
  const [valid, setValid] = useState(false)
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors
    const gifted = +router.query.gifted
    const validDoorsQuantity = doors >= 3 && doors <= 100
    const validDoorGifted = gifted >= 1 && gifted <= doors

    setValid(validDoorsQuantity && validDoorGifted)
  }, [doors, router.query.doors, router.query.gifted])

  useEffect(() => {
    const doors = +router.query.doors
    const gifted = +router.query.gifted

    setDoors(createDoors(doors, gifted))
  }, [router?.query])

  const renderDoors = () => {
    return doors.map(door => {
      return <Door key={door.number} selected={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
    })
  }

  return (
    <main className="page">
      <div className="game">
        {
          valid ? renderDoors() : <h1>Invalid values</h1>
        }
      </div>
      <nav className="navigation">
        <Link href="/">
          <a className="navigation__item">Restart game</a>
        </Link>
      </nav>
    </main>
  )
}

export default Game