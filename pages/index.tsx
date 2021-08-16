import Card from '../components/Card';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NumberInput from '../components/NumberInput';
import { useState } from 'react';

export default function Home() {
  const [doorsNumber, setDoors] = useState(3)
  const [doorWithGift, setDoorWithGift] = useState(1)

  return (
    <div className={styles.home}>
      <div className="">
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Quantidade de portas?" value={doorsNumber} onChange={newDoors => setDoors(newDoors)} />
        </Card>
      </div>
      <div className="">
        <Card>
          <NumberInput text="Porta com prêmio?"
            value={doorWithGift}
            onChange={newDoorWithGift => setDoorWithGift(newDoorWithGift)} />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${doorsNumber}/${doorWithGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
