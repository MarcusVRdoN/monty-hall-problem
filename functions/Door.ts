import DoorModel from '@/model/Door'

export function createDoors(quantity: number, gifted: number): DoorModel[] {
  return Array.from({ length: quantity }, (element, index) => {
    const hasGift = ++index === gifted

    return new DoorModel(index, hasGift)
  })
}

export function updateDoors(doors: DoorModel[], modified: DoorModel): DoorModel[] {
  return doors.map(door => {
    const isModified = door.number === modified.number

    return isModified ? modified : (modified.open ? door : door.unselect())
  })
}