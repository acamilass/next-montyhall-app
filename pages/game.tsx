import { useState } from "react"
import Door from "../components/Door"
import { createDoors, refreshDoors } from "../functions/doors"
import Link from 'next/link'

import styles from '../styles/Game.module.css'

export default function game() {
  const [doors, setDoors] = useState(createDoors(3, 2))

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(refreshDoors(doors, newDoor))} />
    })
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
      </div>
      <div className={styles.btn}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}
