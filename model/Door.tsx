export default class DoorModel {
  #number: number
  #gift: boolean
  #selected: boolean
  #open: boolean

  constructor(number: number, gift: boolean = false, selected: boolean = false, open: boolean = false) {
    this.#number = number
    this.#gift = gift
    this.#selected = selected
    this.#open = open
  }

  get number() {
    return this.#number
  }

  get gift() {
    return this.#gift
  }

  get selected() {
    return this.#selected
  }

  get open() {
    return this.#open
  }

  toggleSelect(value = null): DoorModel {
    const selected = !this.selected

    return new DoorModel(this.number, this.gift, selected, this.open)
  }

  unselect(): DoorModel {
    const selected = false

    return new DoorModel(this.number, this.gift, selected, this.open)
  }

  toggleOpen(): DoorModel {
    const open = !this.open

    return new DoorModel(this.number, this.gift, this.selected, open)
  }
}