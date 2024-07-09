import crypto from 'node:crypto'

export class Ticket {

  constructor (number) {
    this.id = crypto.randomUUID()
    this.number = number
    this.desktop = null
    this.agent = null
  }

}