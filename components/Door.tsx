import styles from '../styles/Door.module.css';
import DoorModel from '../models/door'

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
  const door = props.value
  const isSelected = door.selected && !door.opened ? styles.selected : ''

  const alterSelection = e => props.onChange(door.alterSelection())
  const open = e => {
    e.stopPropagation()
    props.onChange(door.open())
  }

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.knob} onClick={open}></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alterSelection}>
      <div className={`${styles.frame} ${isSelected}`}>
        {door.opened ? false : renderDoor()}
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}