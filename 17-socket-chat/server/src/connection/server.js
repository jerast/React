// Dependencies
import http from 'node:http'
import express from 'express'
import { Server as SocketIo } from 'socket.io'
// Modules
import { Socket } from './socket.js'
import { db_connection } from './database/mongodb.js'
import { cors } from '../middlewares/cors.js'
import { PORT, SOCKET_CHAT_CORS, SOCKET_CHAT_DB_OFF } from '../config/env.js'
// Routes
import authRoutes from '../routes/auth.routes.js'
import usersRoutes from '../routes/users.routes.js'
import messagesRoutes from '../routes/messages.routes.js'

/**
 * Class representing the main server.
 * @class
 */
export class Server {

  /**
   * Create a Server Instance.
   * @constructor
   */
  constructor () {
    this.app = express()
    this.port = PORT
    this.server = http.createServer(this.app)
    this.io = new SocketIo(this.server, {
      cors: { origin: SOCKET_CHAT_CORS.split(',') }
    })
    this.socket = new Socket(this.io)
    db_connection(SOCKET_CHAT_DB_OFF)
  }

  /**
   * Disable Express.js HTTP headers.
   * @method
   * @private
   */
  disableTags = () => {
    this.app.disable('x-powered-by')
    this.app.disable('etag')
  }

  /**
   * Set up middlewares.
   * @method
   * @private
   */
  middlewares = () => {
    this.app.use( cors() )
    this.app.use( express.json() );
    this.app.use( express.static(process.cwd() + '/public') )
  }

  /**
   * Set up routes.
   * @method
   * @private
   */
  routes = () => {
    this.app.use('/api/auth', authRoutes)
    this.app.use('/api/users', usersRoutes)
    this.app.use('/api/messages', messagesRoutes)
  }

  /**
   * Run the server.
   * @method
   * @public
   */
  run = () => {
    this.disableTags()
    this.middlewares()
    this.routes()
    
    this.server.listen(this.port, () => 
      console.log(`Server run on http://localhost:${this.port}`)
    )
  }

}