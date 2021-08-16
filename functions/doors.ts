import DoorModel from "../models/door";

export function createDoors(numberOfDoors: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: numberOfDoors }, (_, i) => {
    const number = i + 1
    const hasGift = number === doorWithGift

    return new DoorModel(number, hasGift)
  })
}

export function refreshDoors(doors: DoorModel[], changed: DoorModel) {
  return doors.map(selected => {
    const areEqual = selected.number === changed.number
    return areEqual ? changed : (changed.opened ? selected : selected.unmarkDoor())
  })
}