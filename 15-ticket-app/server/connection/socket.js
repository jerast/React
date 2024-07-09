import { TicketList } from '../classes/ticketList.js'

export class Socket {
  
  constructor (io) {
    this.io = io
    this.ticketList = new TicketList()
    this.socketEvents()
  }

  socketEvents = () => {
    this.io.on('connection', socket => {

      socket.on('get-new-ticket', (nullData, callback) => {
        const newTicket = this.ticketList.createTicket()
        callback(newTicket)
      })

      socket.on('asign-next-ticket', (agentUser, callback) => {
        const asignedTicket = this.ticketList.asignTicket(agentUser)
        callback(asignedTicket)
        
        this.io.emit('ticket-list-updated', this.ticketList.lastThirteen)
      })

    })
  }

}