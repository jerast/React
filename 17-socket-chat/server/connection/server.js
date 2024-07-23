// Dependencies
import http from 'node:http'
import express from 'express'
import { Server as SocketIo } from 'socket.io'

// Modules
import { Socket } from './socket.js'
import { db_connection } from '../database/db_connection.js'
import { cors } from '../middlewares/cors.js'
import { PORT, SOCKET_CHAT_CORS } from '../server/config.js'

import authRoutes from '../routes/auth.routes.js'
import usersRoutes from '../routes/users.routes.js'
import messagesRoutes from '../routes/messages.routes.js'

export class Server {

  constructor () {
    
    // HTTP Server
    this.app = express()
    this.port = PORT
    this.server = http.createServer(this.app)

    // Socket
    this.io = new SocketIo(this.server, {
      cors: { 
        origin: SOCKET_CHAT_CORS.split(',')
      }
    })
    this.socket = new Socket(this.io)

    // DB
    db_connection()
  }

  disableTags = () => {
    this.app.disable('x-powered-by')
    this.app.disable('etag')
  }

  middlewares = () => {
    this.app.use( cors() )
    this.app.use( express.json() );
    this.app.use( express.static(process.cwd() + '/web') )
  }

  routes = () => {
    this.app.use('/api/auth', authRoutes)
    this.app.use('/api/users', usersRoutes)
    this.app.use('/api/messages', messagesRoutes)
  }

  run = () => {
    this.disableTags()
    this.middlewares()
    this.routes()
    
    this.server.listen(this.port, () => 
      console.log(`Server run on http://localhost:${this.port}`)
    )
  }

}