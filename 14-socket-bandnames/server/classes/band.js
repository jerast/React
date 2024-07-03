import crypto from 'node:crypto'

export class Band {

  constructor (name) {
    this.id = crypto.randomUUID()
    this.name = name
    this.votes = 0
  }

}