import { BandList } from './band-list.js'

export class Sockets {
  
  constructor (io) {
    this.io = io
    this.bandList = new BandList()
    this.socketEvents()
  }

  socketEvents = () => {

    this.io.on('connection', socket => {
      console.log('Client connected!')

      socket.emit('get-all', this.bandList.getAll())
      
      socket.on('add', ({ name }) => {
        this.bandList.add({ name })
        this.io.emit('get-all', this.bandList.getAll())
      })
      
      socket.on('remove', ({ id }) => {
        this.bandList.remove({ id })
        this.io.emit('get-all', this.bandList.getAll())
      })
      
      socket.on('increase-vote', ({ id }) => {
        this.bandList.increaseVotes({ id })
        this.io.emit('get-all', this.bandList.getAll())
      })

      socket.on('decrease-vote', ({ id }) => {
        this.bandList.decreaseVotes({ id })
        this.io.emit('get-all', this.bandList.getAll())
      })

      socket.on('change-name', ({ id, name }) => {
        this.bandList.changeName({ id, name })
        this.io.emit('get-all', this.bandList.getAll())
      })
      
    })
  }

}