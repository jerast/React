import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server as SocketIo } from 'socket.io'
import { Socket } from './socket.js'

export class Server {

  constructor () {
    this.app = express()
    this.port = process.env.PORT ?? 8080
    this.server = createServer(this.app)
    this.io = new SocketIo(this.server, {
      cors: {
        origin: [
          'http://192.168.0.13:5173', 
          'http://192.168.0.13:3000',
          'http://localhost:5173', 
          'http://localhost:3000',
        ]
      }
    })
    this.socket = new Socket(this.io)
  }

  middlewares = () => {
    this.app.use( cors() )
    this.app.use( express.static(process.cwd() + '/web') )
  }

  routes = () => {
    this.app.get('/currents', (req, res) => {
      res.json({ 
        ok: true,
        tickets: this.socket.ticketList.lastThirteen
      })
    })
  }

  run = () => {
    this.middlewares()
    this.routes()
    this.server.listen(this.port, () => {
      console.log(`Server run on http://192.168.0.13:${this.port}`)
    })
  }

}