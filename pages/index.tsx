import { useState } from "react";

import Door from "../components/Door";
import { createDoors, refreshDoors } from "../functions/doors";
import DoorModel from "../models/door";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(3, 2))

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(refreshDoors(doors, newDoor))}/>
    })
  }

  return (
    <div style={{display: "flex"}}>
      {renderDoors()}
    </div>
  )
}
