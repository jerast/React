import { verifyJWT } from '../jwt/jwt.js'
import { 
  userConnect, 
  userDisconnect,
  getUsers,
  saveMessage,
} from '../controllers/socket.controllers.js'

/**
 * Class representing Socket server instance
 * @class
 */
export class Socket {
  
  /**
   * Create a socket instance.
   * @param {SocketIo} io - Socket.io instance
   */
  constructor (io) {
    this.io = io
    this.socketEvents()
  }

  /**
   * Connecting socket event.
   * @method
   * @private
   */
  verifyConnection = async (socket) => {
    const { ok, payload, error } = verifyJWT(socket.handshake.query['x-token'])
    
    if (!ok) {
      socket.disconnect()
      return
    }
    
    socket.join(payload.uid)
    return payload.uid
  }

  /**
   * Define Socket.io events.
   * @method
   * @private
   */
  socketEvents = () => {
    this.io.on('connection', async (socket) => {
      
      // connecting...
      const uid = await this.verifyConnection(socket)


      // connected
      await userConnect(uid)
      this.io.emit('connect-users-list', await getUsers())


      // disconnected
      socket.on('disconnect', async () => {
        await userDisconnect(uid)
        this.io.emit('connect-users-list', await getUsers())
      })


      // new-message
      socket.on('new-message', async (messagePayload) => {
        const newMessage = await saveMessage(messagePayload)
        this.io.to([newMessage.from, newMessage.to]).emit('new-message', newMessage)
      })
    })
  }

} 