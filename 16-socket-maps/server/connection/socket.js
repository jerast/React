import { MarkerList } from '../classes/markerList.js'

export class Socket {
  
  constructor (io) {
    this.io = io
    this.markers = new MarkerList()
    this.socketEvents()
  }

  socketEvents = () => {
    this.io.on('connection', socket => {
    
      socket.emit('get-markers', this.markers.actives)

      socket.on('add-marker', (newMarker) => {
        this.markers.addMarker(newMarker)

        socket.broadcast.emit('add-marker', newMarker)
      })

      socket.on('update-marker', (updatedMarker) => {
        this.markers.updateMarker(updatedMarker)

        socket.broadcast.emit('update-marker', updatedMarker)
      })
    })
  }

}