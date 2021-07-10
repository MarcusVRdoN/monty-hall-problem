import DoorModel from "@/model/Door"
import Gift from "../Gift"

interface Door {
  selected: DoorModel
  onChange: (newDoor: DoorModel) => void
}

function Door(props: Door) {
  const door = props.selected

  const toggleSelect = event => props.onChange(door.toggleSelect())
  const toggleOpen = event => {
    event.stopPropagation()
    props.onChange(door.toggleOpen())
  }

  return (
    <div className={`door ${door.selected && !door.open ? 'is-active' : ''} ${door.open ? 'is-open' : ''}`} onClick={toggleSelect}>
      <div className="door__frame">
        <div className="door__number">{door.number}</div>
        <div className="door__knob" onClick={toggleOpen}></div>

        {door.gift && door.open && <Gift />}
        
      </div>
      <div className="door__base"></div>
    </div>
  )
}

export default Door