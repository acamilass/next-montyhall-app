import Card from '../components/Card';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className="">
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>
      <div className="">
        <Card></Card>
        <Card bgColor="#28a085">
          <Link href={`/game/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
