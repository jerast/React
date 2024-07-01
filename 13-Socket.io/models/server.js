import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server as SocketIo } from 'socket.io'
import { Sockets } from './sockets.js'

export class Server {

  constructor () {
    this.app = express()
    this.port = process.env.PORT ?? 8080
    this.server = createServer(this.app)
    this.io = new SocketIo(this.server, { /* configuraciones */ })
  }

  middlewares = () => {
    this.app.use( cors() )
    this.app.use( express.static(process.cwd() + '/web') )
  }

  sockets = () => {
    new Sockets(this.io)
  }

  run = () => {
    this.middlewares()
    this.sockets()
    this.server.listen(this.port, () => {
      console.log(`Server run on http://192.168.0.13:${this.port}`)
    })
  }

}