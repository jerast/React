export class Sockets {
  
  constructor (io) {
    this.io = io

    this.socketEvents()
  }

  socketEvents = () => {
    this.io.on('connection', socket => {
  
      /* socket.emit('server-message', {
        message: 'welcome to server',
        date: new Date()
      }) */

      /* socket.on('client-message', data => {
        console.log(data)
      }) */
     
      socket.on('send-to-server', data => {
        this.io.emit('send-from-server', data)
      })

    })
  }

}