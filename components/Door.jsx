import styles from '../styles/Door.module.css';

export default function Door(props) {
  const isSelected = props.isSelected ? styles.selected : '';

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${isSelected}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.knob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}