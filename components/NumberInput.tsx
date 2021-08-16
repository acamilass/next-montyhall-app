import styles from '../styles/NumberInput.module.css'

interface NumberInputProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function NumberInput(props: NumberInputProps) {

  const subtract = () => {
    props.onChange(props.value - 1)
  }

  const add = () => {
    props.onChange(props.value + 1)
  }

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.btnBox}>
        <button className={styles.btn} onClick={subtract}>-</button>
        <button className={styles.btn} onClick={add}>+</button>
      </div>
    </div>
  )
}
