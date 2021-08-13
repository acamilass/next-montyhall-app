export default class Door {
  #number
  #hasGift
  #selected
  #opened

  constructor(number, hasGift = false, selected = false, opened = false) {
    this.#number = number
    this.#hasGift = hasGift
    this.#selected = selected
    this.#opened = opened
  }

  get number() {
    return this.#number
  }

  get hasGift() {
    return this.#hasGift
  }

  get selected() {
    return this.#selected
  }

  get opened() {
    return this.#opened
  }

  unmarkDoor() {
    const selected = false
    return new Door(this.number, this.hasGift, selected, this.opened)
  }

  alterSelection() {
    const selected = !this.selected
    return new Door(this.number, this.hasGift, selected, this.opened)
  }

  open() {
    const opened = true
    return new Door(this.number, this.hasGift, this.selected, opened)
  }
}
