import { verifyJWT } from '../jwt/jwt.js'
import { userConnect, userDisconnect } from '../controllers/socket.controllers.js'

export class Socket {
  
  constructor (io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents = () => {
    this.io.on('connection', async (socket) => {
      
      // connecting...
      const { ok, payload } = verifyJWT(socket.handshake.query['x-token'])
      if (!ok) return socket.disconnect() 
        
      // connected
      await userConnect(payload.uid)

      // disconnected
      socket.on('disconnect', async () => {
        await userDisconnect(payload.uid)
      })
      
    })
  }

} 