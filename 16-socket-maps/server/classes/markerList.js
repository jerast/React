import { Marker } from './marker.js'

export class MarkerList {

  constructor () {
    this.actives = {}
  }

  addMarker = (newMarker) => {
    this.actives[newMarker.id] = new Marker(newMarker)
    return newMarker
  }

  removeMarker = (markerId) => {
    delete this.actives[markerId]
  }

  updateMarker(updatedMarker) {
    this.actives[updatedMarker.id] = new Marker(updatedMarker)
  }

}