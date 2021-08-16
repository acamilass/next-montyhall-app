import { useEffect, useState } from 'react'
import Door from '../../../components/Door'
import { createDoors, refreshDoors } from '../../../functions/doors'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../../../styles/Game.module.css'

export default function game() {
  const router = useRouter()
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors
    const hasGift = +router.query.hasGift

    setDoors(createDoors(doors, hasGift))

  }, [router?.query])

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
