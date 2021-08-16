import { useState } from "react";
import Door from "../components/Door";
import DoorModel from "../models/door";

export default function Home() {
  const [door, setDoor] = useState(new DoorModel(1))

  return (
    <div>
      <Door value={door} onChange={newDoor => setDoor(newDoor)}/>
    </div>
  )
}
