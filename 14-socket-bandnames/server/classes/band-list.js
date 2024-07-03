import { Band } from './band.js'

export class BandList {

  constructor () {
    this.bands = [
      new Band('Guns n Roses'),
      new Band('Metalica'),
      new Band('Snarky Puppy'),
    ]
  }

  getAll = () => {
    return this.bands
  }

  add = ({ name }) => {
    this.bands.push( new Band(name) )
  }

  remove = ({ id }) => {
    this.bands = this.bands.filter(band => band.id !== id)
  }

  increaseVotes = ({ id }) => {
    const bandIndex = this.bands.findIndex(band => band.id === id)
    this.bands[bandIndex].votes++
  }

  decreaseVotes = ({ id }) => {
    const bandIndex = this.bands.findIndex(band => band.id === id)
    this.bands[bandIndex].votes--
  }

  changeName = ({ id, name }) => {
    const bandIndex = this.bands.findIndex(band => band.id === id)
    this.bands[bandIndex].name = name
  }
}